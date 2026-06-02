package com.retirementplanner.core.service;

import com.retirementplanner.core.model.IncomeModel;

import java.util.List;

public interface IncomeService {
    IncomeModel saveIncome(IncomeModel income);
    IncomeModel getIncomeById(Long id);
    List<IncomeModel> getAllIncomes();
}

