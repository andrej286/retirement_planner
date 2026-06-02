package com.retirementplanner.core.service;

import com.retirementplanner.core.model.ExpenseModel;

import java.util.List;

public interface ExpenseService {
    ExpenseModel saveExpense(ExpenseModel expense);
    ExpenseModel getExpenseById(Long id);
    List<ExpenseModel> getAllExpenses();
}

