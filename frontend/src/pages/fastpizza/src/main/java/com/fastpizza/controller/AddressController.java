package com.fastpizza.controller;

import com.fastpizza.domain.DTO.AddressDTO;
import com.fastpizza.service.address.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
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

    @GetMapping("/{email}")
    public ResponseEntity<List<AddressDTO>> getAllAddressesByUser(@PathVariable String email) {
        List<AddressDTO> addresses = addressService.getAllAddressesByUser(email);
        return new ResponseEntity<>(addresses, HttpStatus.OK);
    }
}