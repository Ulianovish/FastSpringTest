package com.fastpizza.service.topping;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.*;

import com.fastpizza.domain.DTO.ToppingDTO;
import com.fastpizza.domain.model.Topping;
import com.fastpizza.domain.repository.ToppingRepository;
import org.junit.jupiter.api.BeforeEach;
import org.modelmapper.ModelMapper;

import java.util.Arrays;
import java.util.List;
import java.util.Set;

public class ToppingServiceImplTest {

   private ToppingRepository toppingRepository;
   private ModelMapper modelMapper;
   private ToppingServiceImpl toppingService;

   @BeforeEach
   void setUp() {
       toppingRepository = mock(ToppingRepository.class);
       modelMapper = mock(ModelMapper.class);
       toppingService = new ToppingServiceImpl(toppingRepository, modelMapper);
   }

   @Test
   void testGetAllTopping() {
       // Arrange
       Topping topping1 = new Topping();
       topping1.setId(1L);
       topping1.setName("Topping 1");

       Topping topping2 = new Topping();
       topping2.setId(2L);
       topping2.setName("Topping 2");

       List<Topping> toppings = Arrays.asList(topping1, topping2);
       when(toppingRepository.findAll()).thenReturn(toppings);

       ToppingDTO toppingDTO1 = new ToppingDTO();
       toppingDTO1.setId(1L);
       toppingDTO1.setName("Topping 1");

       ToppingDTO toppingDTO2 = new ToppingDTO();
       toppingDTO2.setId(2L);
       toppingDTO2.setName("Topping 2");

       when(modelMapper.map(topping1, ToppingDTO.class)).thenReturn(toppingDTO1);
       when(modelMapper.map(topping2, ToppingDTO.class)).thenReturn(toppingDTO2);

       // Act
       Set<ToppingDTO> result = toppingService.getAllTopping();

       // Assert
       assertEquals(2, result.size());
       assertTrue(result.contains(toppingDTO1));
       assertTrue(result.contains(toppingDTO2));
   }
}