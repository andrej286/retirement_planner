package com.retirementplanner.core.service;

import com.retirementplanner.core.model.UserDto;

import java.util.List;

public interface UserService {
    UserDto saveUser(UserDto user);
    UserDto getUserById(Long id);
    List<UserDto> getAllUsers();
}
