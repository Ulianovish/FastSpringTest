package com.fastpizza.controller;

import com.fastpizza.service.pizza.PizzaService;
import com.fastpizza.domain.DTO.PizzaDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequestMapping("/api/pizzas")
public class PizzaController {

    private final PizzaService pizzaService;

    @Autowired
    public PizzaController(PizzaService pizzaService) {
        this.pizzaService = pizzaService;
    }

    @GetMapping
    public ResponseEntity<Set<PizzaDTO>> getAllPizzas() {
        Set<PizzaDTO> pizzas = pizzaService.getAllPizza();
        return new ResponseEntity<>(pizzas, HttpStatus.OK);
    }
}