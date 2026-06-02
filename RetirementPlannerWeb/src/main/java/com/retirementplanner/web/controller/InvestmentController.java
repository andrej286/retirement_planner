package com.retirementplanner.web.controller;

import com.retirementplanner.core.model.InvestmentDto;
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
    public ResponseEntity<InvestmentDto> createInvestment(@RequestBody InvestmentDto investment) {
        InvestmentDto saved = investmentService.saveInvestment(investment);
        return ResponseEntity.ok(saved);
    }

    @GetMapping("/{id}")
    public ResponseEntity<InvestmentDto> getInvestment(@PathVariable Long id) {
        InvestmentDto inv = investmentService.getInvestmentById(id);
        if (inv == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(inv);
    }

    @GetMapping
    public ResponseEntity<List<InvestmentDto>> getAllInvestments() {
        return ResponseEntity.ok(investmentService.getAllInvestments());
    }
}
