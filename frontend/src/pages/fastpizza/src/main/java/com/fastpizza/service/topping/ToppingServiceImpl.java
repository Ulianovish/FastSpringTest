package com.fastpizza.service.topping;

import com.fastpizza.domain.DTO.ToppingDTO;
import com.fastpizza.domain.model.Topping;
import com.fastpizza.domain.repository.ToppingRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class ToppingServiceImpl implements ToppingService {

    private final ToppingRepository toppingRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public ToppingServiceImpl(ToppingRepository toppingRepository, ModelMapper modelMapper) {
        this.toppingRepository = toppingRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public Set<ToppingDTO> getAllTopping() {
        Iterable<Topping> toppings = toppingRepository.findAll();
        Set<ToppingDTO> toppingDTOs = new HashSet<>();

        for (Topping topping : toppings) {
            ToppingDTO toppingDTO = modelMapper.map(topping, ToppingDTO.class);
            toppingDTOs.add(toppingDTO);
        }

        return toppingDTOs;
    }
}