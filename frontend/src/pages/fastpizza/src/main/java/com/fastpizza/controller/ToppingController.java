package com.fastpizza.controller;

import com.fastpizza.service.topping.ToppingService;
import com.fastpizza.domain.DTO.ToppingDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequestMapping("/api/toppings")
public class ToppingController {

    private final ToppingService toppingService;

    @Autowired
    public ToppingController(ToppingService toppingService) {
        this.toppingService = toppingService;
    }

    @GetMapping
    public ResponseEntity<Set<ToppingDTO>> getAllToppings() {
        Set<ToppingDTO> toppings = toppingService.getAllTopping();
        return new ResponseEntity<>(toppings, HttpStatus.OK);
    }
}
