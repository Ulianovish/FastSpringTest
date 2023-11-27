package com.fastpizza.service.topping;

import com.fastpizza.domain.DTO.ToppingDTO;

import java.util.Set;

public interface ToppingService {
    Set<ToppingDTO> getAllTopping();
}