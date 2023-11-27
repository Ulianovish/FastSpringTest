package com.fastpizza.service.address;

import com.fastpizza.domain.DTO.AddressDTO;
import com.fastpizza.domain.DTO.UserDTO;
import com.fastpizza.domain.model.Address;
import com.fastpizza.domain.model.User;
import com.fastpizza.domain.repository.AddressRepository;
import com.fastpizza.service.user.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AddressServiceImpl implements AddressService {

    private final AddressRepository addressRepository;
    private final UserService userService;  // Assuming you have a UserService to retrieve the user
    private final ModelMapper modelMapper;

    @Autowired
    public AddressServiceImpl(AddressRepository addressRepository, UserService userService, ModelMapper modelMapper) {
        this.addressRepository = addressRepository;
        this.userService = userService;
        this.modelMapper = modelMapper;
    }

    @Override
    @Transactional
    public AddressDTO saveAddress(String email, AddressDTO addressDTO) {
        // Retrieve the user
        UserDTO userDTO = userService.getByEmail(email);
//                .orElseThrow(() -> new NotFoundException("User not found with ID: " + userId));

        // Map the DTO to an entity
        Address address = modelMapper.map(addressDTO, Address.class);
        address.setUser(modelMapper.map(userDTO, User.class));

        // Save the address
        Address savedAddress = addressRepository.save(address);

        // Map the saved entity back to DTO
        return modelMapper.map(savedAddress, AddressDTO.class);
    }

    @Override
    @Transactional(readOnly = true)
    public List<AddressDTO> getAllAddressesByUser(String email) {
        // Retrieve the user
        UserDTO userDTO = userService.getByEmail(email);
//                .orElseThrow(() -> new NotFoundException("User not found with ID: " + userId));

        // Retrieve addresses for the user
        List<Address> userAddresses = addressRepository.findByUser(modelMapper.map(userDTO, User.class));

        // Map entities to DTOs
        return userAddresses.stream()
                .map(address -> modelMapper.map(address, AddressDTO.class))
                .collect(Collectors.toList());
    }
}