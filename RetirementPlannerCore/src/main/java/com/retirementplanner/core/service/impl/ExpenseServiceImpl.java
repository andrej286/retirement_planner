package com.retirementplanner.core.service.impl;

import com.retirementplanner.core.mapper.ExpenseMapper;
import com.retirementplanner.core.model.ExpenseDto;
import com.retirementplanner.core.service.ExpenseService;
import com.retirementplanner.persistence.entity.ExpenseEntity;
import com.retirementplanner.persistence.entity.UserEntity;
import com.retirementplanner.persistence.repository.ExpenseRepository;
import com.retirementplanner.persistence.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ExpenseServiceImpl implements ExpenseService {

    private final ExpenseRepository expenseRepository;
    private final UserRepository userRepository;
    private final ExpenseMapper expenseMapper;

    public ExpenseServiceImpl(ExpenseRepository expenseRepository, UserRepository userRepository, ExpenseMapper expenseMapper) {
        this.expenseRepository = expenseRepository;
        this.userRepository = userRepository;
        this.expenseMapper = expenseMapper;
    }

    @Override
    public ExpenseDto saveExpense(ExpenseDto expense) {
        ExpenseEntity entity = expenseMapper.toEntity(expense);
        if (expense.getUserID() != null) {
            UserEntity user = userRepository.findById(expense.getUserID()).orElse(null);
            entity.setUser(user);
        }
        ExpenseEntity saved = expenseRepository.save(entity);
        return expenseMapper.toModel(saved);
    }

    @Override
    public ExpenseDto getExpenseById(Long id) {
        return expenseRepository.findById(id).map(expenseMapper::toModel).orElse(null);
    }

    @Override
    public List<ExpenseDto> getAllExpenses() {
        return expenseRepository.findAll().stream().map(expenseMapper::toModel).collect(Collectors.toList());
    }
}
