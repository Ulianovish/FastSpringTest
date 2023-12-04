package com.fastpizza.service.sauce;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.*;

import com.fastpizza.domain.DTO.SauceDTO;
import com.fastpizza.domain.model.Sauce;
import com.fastpizza.domain.repository.SauceRepository;
import org.junit.jupiter.api.BeforeEach;
import org.modelmapper.ModelMapper;

import java.util.Arrays;
import java.util.List;
import java.util.Set;

public class SauceServiceImplTest {

   private SauceRepository sauceRepository;
   private ModelMapper modelMapper;
   private SauceServiceImpl sauceService;

   @BeforeEach
   void setUp() {
       sauceRepository = mock(SauceRepository.class);
       modelMapper = mock(ModelMapper.class);
       sauceService = new SauceServiceImpl(sauceRepository, modelMapper);
   }

   @Test
   void testGetAllSauce() {
       // Arrange
       Sauce sauce1 = new Sauce();
       sauce1.setId(1L);
       sauce1.setName("Sauce 1");

       Sauce sauce2 = new Sauce();
       sauce2.setId(2L);
       sauce2.setName("Sauce 2");

       List<Sauce> sauces = Arrays.asList(sauce1, sauce2);
       when(sauceRepository.findAll()).thenReturn(sauces);

       SauceDTO sauceDTO1 = new SauceDTO();
       sauceDTO1.setId(1L);
       sauceDTO1.setName("Sauce 1");

       SauceDTO sauceDTO2 = new SauceDTO();
       sauceDTO2.setId(2L);
       sauceDTO2.setName("Sauce 2");

       when(modelMapper.map(sauce1, SauceDTO.class)).thenReturn(sauceDTO1);
       when(modelMapper.map(sauce2, SauceDTO.class)).thenReturn(sauceDTO2);

       // Act
       Set<SauceDTO> result = sauceService.getAllSauce();

       // Assert
       assertEquals(2, result.size());
       assertTrue(result.contains(sauceDTO1));
       assertTrue(result.contains(sauceDTO2));
   }
}