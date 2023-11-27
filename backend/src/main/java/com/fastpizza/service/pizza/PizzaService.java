package com.fastpizza.service.pizza;

import com.fastpizza.domain.DTO.PizzaDTO;

import java.util.Set;

public interface PizzaService {
    Set<PizzaDTO> getAllPizza();
}
