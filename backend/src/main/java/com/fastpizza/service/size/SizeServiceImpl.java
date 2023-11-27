package com.fastpizza.service.size;

import com.fastpizza.domain.DTO.SizeDTO;
import com.fastpizza.domain.model.Size;
import com.fastpizza.domain.repository.SizeRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class SizeServiceImpl implements SizeService {

    private final SizeRepository sizeRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public SizeServiceImpl(SizeRepository sizeRepository, ModelMapper modelMapper) {
        this.sizeRepository = sizeRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public Set<SizeDTO> getAllSize() {
        Iterable<Size> sizes = sizeRepository.findAll();
        Set<SizeDTO> sizeDTOs = new HashSet<>();

        for (Size size : sizes) {
            SizeDTO sizeDTO = modelMapper.map(size, SizeDTO.class);
            sizeDTOs.add(sizeDTO);
        }

        return sizeDTOs;
    }
}