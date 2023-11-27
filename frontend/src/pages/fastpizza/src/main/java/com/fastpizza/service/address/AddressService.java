package com.fastpizza.service.address;

import com.fastpizza.domain.DTO.AddressDTO;

import java.util.List;

public interface AddressService {
    AddressDTO saveAddress(String email, AddressDTO addressDTO);
    List<AddressDTO> getAllAddressesByUser(String Email);
}
