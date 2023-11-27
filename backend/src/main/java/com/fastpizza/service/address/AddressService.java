package com.fastpizza.service.address;

import com.fastpizza.domain.DTO.AddressDTO;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface AddressService {
    AddressDTO saveAddress(String email, AddressDTO addressDTO);
    List<AddressDTO> getAllAddressesByUser(String Email);
    AddressDTO editAddress(Long addressId, AddressDTO updatedAddressDTO);
    void removeAddress(Long addressId);
}
