package com.retirementplanner.web.controller;

import com.retirementplanner.core.model.ExpenseModel;
import com.retirementplanner.core.service.ExpenseService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {

    private final ExpenseService expenseService;

    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @PostMapping
    public ResponseEntity<ExpenseModel> createExpense(@RequestBody ExpenseModel expense) {
        ExpenseModel saved = expenseService.saveExpense(expense);
        return ResponseEntity.ok(saved);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ExpenseModel> getExpense(@PathVariable Long id) {
        ExpenseModel expense = expenseService.getExpenseById(id);
        if (expense == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(expense);
    }

    @GetMapping
    public ResponseEntity<List<ExpenseModel>> getAllExpenses() {
        return ResponseEntity.ok(expenseService.getAllExpenses());
    }
}

