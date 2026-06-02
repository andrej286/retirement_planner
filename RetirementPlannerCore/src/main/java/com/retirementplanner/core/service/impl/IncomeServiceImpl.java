package com.retirementplanner.core.service.impl;

import com.retirementplanner.core.mapper.IncomeMapper;
import com.retirementplanner.core.model.IncomeDto;
import com.retirementplanner.core.service.IncomeService;
import com.retirementplanner.persistence.entity.IncomeEntity;
import com.retirementplanner.persistence.entity.UserEntity;
import com.retirementplanner.persistence.repository.IncomeRepository;
import com.retirementplanner.persistence.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class IncomeServiceImpl implements IncomeService {

    private final IncomeRepository incomeRepository;
    private final UserRepository userRepository;
    private final IncomeMapper incomeMapper;

    public IncomeServiceImpl(IncomeRepository incomeRepository, UserRepository userRepository, IncomeMapper incomeMapper) {
        this.incomeRepository = incomeRepository;
        this.userRepository = userRepository;
        this.incomeMapper = incomeMapper;
    }

    @Override
    public IncomeDto saveIncome(IncomeDto income) {
        IncomeEntity entity = incomeMapper.toEntity(income);
        if (income.getUserID() != null) {
            UserEntity user = userRepository.findById(income.getUserID()).orElse(null);
            entity.setUser(user);
        }
        IncomeEntity saved = incomeRepository.save(entity);
        return incomeMapper.toModel(saved);
    }

    @Override
    public IncomeDto getIncomeById(Long id) {
        return incomeRepository.findById(id).map(incomeMapper::toModel).orElse(null);
    }

    @Override
    public List<IncomeDto> getAllIncomes() {
        return incomeRepository.findAll().stream().map(incomeMapper::toModel).collect(Collectors.toList());
    }
}
