package com.fastpizza.controller;

import com.fastpizza.service.size.SizeService;
import com.fastpizza.domain.DTO.SizeDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequestMapping("/api/sizes")
public class SizeController {

    private final SizeService sizeService;

    @Autowired
    public SizeController(SizeService sizeService) {
        this.sizeService = sizeService;
    }

    @GetMapping
    public ResponseEntity<Set<SizeDTO>> getAllSizes() {
        Set<SizeDTO> sizes = sizeService.getAllSize();
        return new ResponseEntity<>(sizes, HttpStatus.OK);
    }
}