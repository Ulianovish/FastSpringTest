package com.fastpizza.service.sauce;

import com.fastpizza.domain.DTO.SauceDTO;
import com.fastpizza.domain.model.Sauce;
import com.fastpizza.domain.repository.SauceRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class SauceServiceImpl implements SauceService {

    private final SauceRepository sauceRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public SauceServiceImpl(SauceRepository sauceRepository, ModelMapper modelMapper) {
        this.sauceRepository = sauceRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public Set<SauceDTO> getAllSauce() {
        Iterable<Sauce> sauces = sauceRepository.findAll();
        Set<SauceDTO> sauceDTOs = new HashSet<>();

        for (Sauce sauce : sauces) {
            SauceDTO sauceDTO = modelMapper.map(sauce, SauceDTO.class);
            sauceDTOs.add(sauceDTO);
        }

        return sauceDTOs;
    }
}