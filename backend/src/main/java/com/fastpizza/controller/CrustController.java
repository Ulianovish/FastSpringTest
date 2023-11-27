package com.fastpizza.controller;

import com.fastpizza.service.crust.CrustService;
import com.fastpizza.domain.DTO.CrustDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequestMapping("/api/crusts")
public class CrustController {

    private final CrustService crustService;

    @Autowired
    public CrustController(CrustService crustService) {
        this.crustService = crustService;
    }

    @GetMapping
    public ResponseEntity<Set<CrustDTO>> getAllCrusts() {
        Set<CrustDTO> crusts = crustService.getAllCrust();
        return new ResponseEntity<>(crusts, HttpStatus.OK);
    }
}