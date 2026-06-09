package com.retirementplanner.core.service;

import com.retirementplanner.core.model.ExpenseDto;

import java.util.List;

public interface ExpenseService {
    ExpenseDto saveExpense(ExpenseDto expense);
    ExpenseDto getExpenseById(Long id);
    List<ExpenseDto> getAllExpenses();
    ExpenseDto updateExpense(Long id, ExpenseDto expense);
    void deleteExpense(Long id);
}
