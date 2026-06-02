package com.retirementplanner.web.controller;

import com.retirementplanner.core.model.InvestmentModel;
import com.retirementplanner.core.service.InvestmentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/investments")
public class InvestmentController {

    private final InvestmentService investmentService;

    public InvestmentController(InvestmentService investmentService) {
        this.investmentService = investmentService;
    }

    @PostMapping
    public ResponseEntity<InvestmentModel> createInvestment(@RequestBody InvestmentModel investment) {
        InvestmentModel saved = investmentService.saveInvestment(investment);
        return ResponseEntity.ok(saved);
    }

    @GetMapping("/{id}")
    public ResponseEntity<InvestmentModel> getInvestment(@PathVariable Long id) {
        InvestmentModel inv = investmentService.getInvestmentById(id);
        if (inv == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(inv);
    }

    @GetMapping
    public ResponseEntity<List<InvestmentModel>> getAllInvestments() {
        return ResponseEntity.ok(investmentService.getAllInvestments());
    }
}

