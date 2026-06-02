package com.retirementplanner.web.controller;

import com.retirementplanner.core.model.IncomeDto;
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
    public ResponseEntity<IncomeDto> createIncome(@RequestBody IncomeDto income) {
        IncomeDto saved = incomeService.saveIncome(income);
        return ResponseEntity.ok(saved);
    }

    @GetMapping("/{id}")
    public ResponseEntity<IncomeDto> getIncome(@PathVariable Long id) {
        IncomeDto income = incomeService.getIncomeById(id);
        if (income == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(income);
    }

    @GetMapping
    public ResponseEntity<List<IncomeDto>> getAllIncomes() {
        return ResponseEntity.ok(incomeService.getAllIncomes());
    }
}
