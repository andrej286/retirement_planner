package com.retirementplanner.core.service.impl;

import com.retirementplanner.core.mapper.UserMapper;
import com.retirementplanner.core.model.UserDto;
import com.retirementplanner.core.model.LoginRequest;
import com.retirementplanner.core.model.RegisterRequest;
import com.retirementplanner.core.service.UserService;
import com.retirementplanner.persistence.entity.UserEntity;
import com.retirementplanner.persistence.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository, UserMapper userMapper, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserDto saveUser(UserDto user) {
        UserEntity entity = userMapper.toEntity(user);
        UserEntity saved = userRepository.save(entity);
        return userMapper.toModel(saved);
    }

    @Override
    public UserDto getUserById(Long id) {
        return userRepository.findById(id).map(userMapper::toModel).orElse(null);
    }

    @Override
    public List<UserDto> getAllUsers() {
        return userRepository.findAll().stream().map(userMapper::toModel).collect(Collectors.toList());
    }

    @Override
    public UserDto getUserByUsername(String username) {
        return userRepository.findByUsername(username).map(userMapper::toModel).orElse(null);
    }

    @Override
    public UserDto registerUser(RegisterRequest request) {
        if (userRepository.findByUsername(request.getUsername()).isPresent()) {
            throw new RuntimeException("Username already exists");
        }

        UserEntity user = new UserEntity();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        UserEntity saved = userRepository.save(user);
        return userMapper.toModel(saved);
    }
}


