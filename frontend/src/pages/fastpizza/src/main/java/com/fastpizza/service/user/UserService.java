package com.fastpizza.service.user;

import com.fastpizza.domain.DTO.UserDTO;

import java.util.Set;

public interface UserService {
    UserDTO saveUser(UserDTO userDTO);
    UserDTO updateUser(UserDTO userDTO);
    UserDTO getByEmail(String email);
}
