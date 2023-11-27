package com.fastpizza.controller;

import com.fastpizza.service.sauce.SauceService;
import com.fastpizza.domain.DTO.SauceDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequestMapping("/api/sauces")
public class SauceController {

    private final SauceService sauceService;

    @Autowired
    public SauceController(SauceService sauceService) {
        this.sauceService = sauceService;
    }

    @GetMapping
    public ResponseEntity<Set<SauceDTO>> getAllSauces() {
        Set<SauceDTO> sauces = sauceService.getAllSauce();
        return new ResponseEntity<>(sauces, HttpStatus.OK);
    }
}