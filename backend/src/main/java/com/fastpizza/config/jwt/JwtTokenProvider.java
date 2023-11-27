package com.fastpizza.config.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import jakarta.servlet.http.HttpServletRequest;

import javax.crypto.SecretKey;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class JwtTokenProvider {

    @Value("${app.jwt.secret}")
    private String jwtSecret;

    @Value("${app.jwt.token.prefix}")
    private String jwtTokenPrefix;

    @Value("${app.jwt.header.string}")
    private String jwtHeaderString;

    @Value("${app.jwt.expiration-in-ms}")
    private Long jwtExpirationInMs;

    public String generateToken(Authentication authentication){
        String authorities = authentication.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.joining());
//        SecretKey key = Keys.secretKeyFor(SignatureAlgorithm.HS512);
        SecretKey key = Keys.hmacShaKeyFor(jwtSecret.getBytes());
        return Jwts.builder().setSubject(authentication.getName())
                .claim("roles", authorities)
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpirationInMs))
                .signWith(key).compact();
    }

    public Authentication getAuthentication(HttpServletRequest request){
        String token = resolveToken(request);
        if(token == null){
            return null;
        }
//        Claims claims = Jwts.parser().setSigningKey(jwtSecret).build().parseClaimsJws(token).getBody();
//        SecretKey secret = Keys.hmacShaKeyFor(Decoders.BASE64.decode(jwtSecret));
//        SecretKey key = Keys.secretKeyFor(SignatureAlgorithm.HS512);
//        SecretKey key = Keys.secretKeyFor(SignatureAlgorithm.HS512);
        SecretKey key = Keys.hmacShaKeyFor(jwtSecret.getBytes());
//        Claims claims = Jwts.parser().verifyWith(key).build().parseSignedClaims(token).getPayload();

        Claims claims = Jwts.parser().setSigningKey(key).build().parseClaimsJws(token).getBody();
        String username = claims.getSubject();
        List<GrantedAuthority> authorities = Arrays.stream(claims.get("roles").toString().split(","))
                .map(role -> role.startsWith("ROLE_")? role:"ROLE_"+role)
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
        return username!=null ? new UsernamePasswordAuthenticationToken(username, null, authorities):null;
    }

    public boolean validateToken(HttpServletRequest request){
        String token = resolveToken(request);
        if(token == null){
            return false;
        }
//        Claims claims = Jwts.parser().setSigningKey(jwtSecret).build().parseClaimsJws(token).getBody();
        SecretKey key = Keys.hmacShaKeyFor(jwtSecret.getBytes());
        Claims claims = Jwts.parser().verifyWith(key).build().parseSignedClaims(token).getPayload();
        if(claims.getExpiration().before(new Date())){
            return false;
        }
        return true;
    }

    private String resolveToken(HttpServletRequest request){
        String bearerToken = request.getHeader(jwtHeaderString);
        if(bearerToken!=null && bearerToken.startsWith(jwtTokenPrefix)){
            return bearerToken.substring(7, bearerToken.length());
        }
        return null;
    }
}