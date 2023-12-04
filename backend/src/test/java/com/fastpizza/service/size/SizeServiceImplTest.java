package com.fastpizza.service.size;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.*;

import com.fastpizza.domain.DTO.SizeDTO;
import com.fastpizza.domain.model.Size;
import com.fastpizza.domain.repository.SizeRepository;
import org.junit.jupiter.api.BeforeEach;
import org.modelmapper.ModelMapper;

import java.util.Arrays;
import java.util.List;
import java.util.Set;

public class SizeServiceImplTest {

   private SizeRepository sizeRepository;
   private ModelMapper modelMapper;
   private SizeServiceImpl sizeService;

   @BeforeEach
   void setUp() {
       sizeRepository = mock(SizeRepository.class);
       modelMapper = mock(ModelMapper.class);
       sizeService = new SizeServiceImpl(sizeRepository, modelMapper);
   }

   @Test
   void testGetAllSize() {
       // Arrange
       Size size1 = new Size();
       size1.setId(1L);
       size1.setName("Size 1");

       Size size2 = new Size();
       size2.setId(2L);
       size2.setName("Size 2");

       List<Size> sizes = Arrays.asList(size1, size2);
       when(sizeRepository.findAll()).thenReturn(sizes);

       SizeDTO sizeDTO1 = new SizeDTO();
       sizeDTO1.setId(1L);
       sizeDTO1.setName("Size 1");

       SizeDTO sizeDTO2 = new SizeDTO();
       sizeDTO2.setId(2L);
       sizeDTO2.setName("Size 2");

       when(modelMapper.map(size1, SizeDTO.class)).thenReturn(sizeDTO1);
       when(modelMapper.map(size2, SizeDTO.class)).thenReturn(sizeDTO2);

       // Act
       Set<SizeDTO> result = sizeService.getAllSize();

       // Assert
       assertEquals(2, result.size());
       assertTrue(result.contains(sizeDTO1));
       assertTrue(result.contains(sizeDTO2));
   }
}