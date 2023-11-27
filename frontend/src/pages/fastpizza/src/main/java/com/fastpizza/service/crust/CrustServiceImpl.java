package com.fastpizza.service.crust;

import com.fastpizza.domain.DTO.CrustDTO;
import com.fastpizza.domain.model.Crust;
import com.fastpizza.domain.repository.CrustRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class CrustServiceImpl implements CrustService {

    private final CrustRepository crustRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public CrustServiceImpl(CrustRepository crustRepository, ModelMapper modelMapper) {
        this.crustRepository = crustRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public Set<CrustDTO> getAllCrust() {
        Iterable<Crust> crusts = crustRepository.findAll();
        Set<CrustDTO> crustDTOs = new HashSet<>();

        for (Crust crust : crusts) {
            CrustDTO crustDTO = modelMapper.map(crust, CrustDTO.class);
            crustDTOs.add(crustDTO);
        }

        return crustDTOs;
    }
}