package com.fastpizza.controller;

import com.fastpizza.domain.DTO.AddressDTO;
import com.fastpizza.service.address.AddressService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@SecurityRequirement(name = "basicAuth")
@RequestMapping("/api/addresses")
public class AddressController {

    private final AddressService addressService;

    @Autowired
    public AddressController(AddressService addressService) {
        this.addressService = addressService;
    }

    @PostMapping("/{email}")
    public ResponseEntity<AddressDTO> saveAddress(@PathVariable String email, @RequestBody AddressDTO addressDTO) {
        AddressDTO savedAddress = addressService.saveAddress(email, addressDTO);
        return new ResponseEntity<>(savedAddress, HttpStatus.CREATED);
    }

    @PutMapping("/edit/{addressId}")
    public ResponseEntity<AddressDTO> editAddress(@PathVariable Long addressId, @RequestBody AddressDTO updatedAddressDTO) {
        AddressDTO editedAddress = addressService.editAddress(addressId, updatedAddressDTO);
        return new ResponseEntity<>(editedAddress, HttpStatus.OK);
    }

    @DeleteMapping("/remove/{addressId}")
    public ResponseEntity<String> removeAddress( @PathVariable Long addressId) {
        addressService.removeAddress(addressId);
        return new ResponseEntity<>("Address removed successfully", HttpStatus.OK);
    }

    @GetMapping("/all/{email}")
    public ResponseEntity<List<AddressDTO>> getAllAddressesByUser(@PathVariable String email) {
        List<AddressDTO> addresses = addressService.getAllAddressesByUser(email);
        return new ResponseEntity<>(addresses, HttpStatus.OK);
    }
}