package com.fastpizza.domain.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "users")
public class User extends BaseModel{
    private String name;
    private String email;
    private String phone;
    private String password;

//    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL,fetch = FetchType.LAZY)
//    private Set<Order> orders;
//
//    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL,fetch = FetchType.LAZY)
//    private Set<Address> addresses;

    @Enumerated(EnumType.STRING)
    private Role role;

    @Transient
    private String token;
}