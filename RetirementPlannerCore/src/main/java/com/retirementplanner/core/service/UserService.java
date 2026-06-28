package com.retirementplanner.core.service;

import com.retirementplanner.core.model.UserDto;
import com.retirementplanner.core.model.LoginRequest;
import com.retirementplanner.core.model.RegisterRequest;

import java.util.List;

public interface UserService {
    UserDto saveUser(UserDto user);
    UserDto getUserById(Long id);
    List<UserDto> getAllUsers();
    UserDto getUserByUsername(String username);
    UserDto registerUser(RegisterRequest request);
}
