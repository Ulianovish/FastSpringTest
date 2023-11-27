package com.fastpizza.service.pizza;

import com.fastpizza.domain.DTO.PizzaDTO;
import com.fastpizza.domain.model.Pizza;
import com.fastpizza.domain.repository.PizzaRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class PizzaServiceImpl implements PizzaService {

    private final PizzaRepository pizzaRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public PizzaServiceImpl(PizzaRepository pizzaRepository, ModelMapper modelMapper) {
        this.pizzaRepository = pizzaRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public Set<PizzaDTO> getAllPizza() {
        Iterable<Pizza> pizzas = pizzaRepository.findAll();
        Set<PizzaDTO> pizzaDTOs = new HashSet<>();

        for (Pizza pizza : pizzas) {
            PizzaDTO pizzaDTO = modelMapper.map(pizza, PizzaDTO.class);
            pizzaDTOs.add(pizzaDTO);
        }

        return pizzaDTOs;
    }
}