package com.fastpizza.service.crust;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.*;

import com.fastpizza.domain.DTO.CrustDTO;
import com.fastpizza.domain.model.Crust;
import com.fastpizza.domain.repository.CrustRepository;
import org.junit.jupiter.api.BeforeEach;
import org.modelmapper.ModelMapper;

import java.util.Arrays;
import java.util.List;
import java.util.Set;

public class CrustServiceImplTest {

   private CrustRepository crustRepository;
   private ModelMapper modelMapper;
   private CrustServiceImpl crustService;

   @BeforeEach
   void setUp() {
       crustRepository = mock(CrustRepository.class);
       modelMapper = mock(ModelMapper.class);
       crustService = new CrustServiceImpl(crustRepository, modelMapper);
   }

   @Test
   void testGetAllCrust() {
       // Arrange
       Crust crust1 = new Crust();
       crust1.setId(1L);
       crust1.setName("Crust 1");

       Crust crust2 = new Crust();
       crust2.setId(2L);
       crust2.setName("Crust 2");

       List<Crust> crusts = Arrays.asList(crust1, crust2);
       when(crustRepository.findAll()).thenReturn(crusts);

       CrustDTO crustDTO1 = new CrustDTO();
       crustDTO1.setId(1L);
       crustDTO1.setName("Crust 1");

       CrustDTO crustDTO2 = new CrustDTO();
       crustDTO2.setId(2L);
       crustDTO2.setName("Crust 2");

       when(modelMapper.map(crust1, CrustDTO.class)).thenReturn(crustDTO1);
       when(modelMapper.map(crust2, CrustDTO.class)).thenReturn(crustDTO2);

       // Act
       Set<CrustDTO> result = crustService.getAllCrust();

       // Assert
       assertEquals(2, result.size());
       assertTrue(result.contains(crustDTO1));
       assertTrue(result.contains(crustDTO2));
   }
}