package com.retirementplanner.core.service;

import com.retirementplanner.core.model.IncomeDto;

import java.util.List;

public interface IncomeService {
    IncomeDto saveIncome(IncomeDto income);
    IncomeDto getIncomeById(Long id);
    List<IncomeDto> getAllIncomes();
}
