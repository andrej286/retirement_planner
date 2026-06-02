package com.retirementplanner.core.service;

import com.retirementplanner.core.model.UserModel;

import java.util.List;

public interface UserService {
    UserModel saveUser(UserModel user);
    UserModel getUserById(Long id);
    List<UserModel> getAllUsers();
}

