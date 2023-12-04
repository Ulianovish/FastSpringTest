package com.fastpizza.service.pizza;

import com.fastpizza.domain.DTO.PizzaDTO;
import com.fastpizza.domain.model.Pizza;
import com.fastpizza.domain.repository.PizzaRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

class PizzaServiceImplTest {

    @Mock
    private PizzaRepository pizzaRepository;

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private PizzaServiceImpl pizzaService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllPizza() {
        // Mock data
        Pizza pizza1 = new Pizza();
        pizza1.setId(1L);
        pizza1.setName("Margherita");
        Pizza pizza2 = new Pizza();
        pizza2.setId(2L);
        pizza2.setName("Pepperoni");

        when(pizzaRepository.findAllByOrderById()).thenReturn(new HashSet<>(Arrays.asList(pizza1, pizza2)));

        PizzaDTO pizzaDTO1 = new PizzaDTO();
        pizzaDTO1.setId(1L);
        pizzaDTO1.setName("Margherita");
        PizzaDTO pizzaDTO2 = new PizzaDTO();
        pizzaDTO2.setId(2L);
        pizzaDTO2.setName("Pepperoni");

        when(modelMapper.map(pizza1, PizzaDTO.class)).thenReturn(pizzaDTO1);
        when(modelMapper.map(pizza2, PizzaDTO.class)).thenReturn(pizzaDTO2);

        // Perform the test
        Set<PizzaDTO> result = pizzaService.getAllPizza();

        // Verify and assert
        Set<PizzaDTO> expected = new HashSet<>(Arrays.asList(pizzaDTO1, pizzaDTO2));
        assertEquals(expected, result);
    }
}
