package com.retirementplanner.web.controller;

import com.retirementplanner.core.model.IncomeModel;
import com.retirementplanner.core.service.IncomeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/incomes")
public class IncomeController {

    private final IncomeService incomeService;

    public IncomeController(IncomeService incomeService) {
        this.incomeService = incomeService;
    }

    @PostMapping
    public ResponseEntity<IncomeModel> createIncome(@RequestBody IncomeModel income) {
        IncomeModel saved = incomeService.saveIncome(income);
        return ResponseEntity.ok(saved);
    }

    @GetMapping("/{id}")
    public ResponseEntity<IncomeModel> getIncome(@PathVariable Long id) {
        IncomeModel income = incomeService.getIncomeById(id);
        if (income == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(income);
    }

    @GetMapping
    public ResponseEntity<List<IncomeModel>> getAllIncomes() {
        return ResponseEntity.ok(incomeService.getAllIncomes());
    }
}

