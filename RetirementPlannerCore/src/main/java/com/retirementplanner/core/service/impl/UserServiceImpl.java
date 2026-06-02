package com.retirementplanner.core.service.impl;

import com.retirementplanner.core.mapper.UserMapper;
import com.retirementplanner.core.model.UserModel;
import com.retirementplanner.core.service.UserService;
import com.retirementplanner.persistence.entity.UserEntity;
import com.retirementplanner.persistence.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public UserServiceImpl(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    @Override
    public UserModel saveUser(UserModel user) {
        UserEntity entity = userMapper.toEntity(user);
        UserEntity saved = userRepository.save(entity);
        return userMapper.toModel(saved);
    }

    @Override
    public UserModel getUserById(Long id) {
        return userRepository.findById(id).map(userMapper::toModel).orElse(null);
    }

    @Override
    public List<UserModel> getAllUsers() {
        return userRepository.findAll().stream().map(userMapper::toModel).collect(Collectors.toList());
    }
}

