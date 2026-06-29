package com.retirementplanner.web.controller;

import com.retirementplanner.core.model.InvestmentDto;
import com.retirementplanner.core.service.InvestmentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
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
    public ResponseEntity<List<InvestmentDto>> getAllInvestments(@RequestParam Long userId) {
        return ResponseEntity.ok(investmentService.getInvestmentsByUserId(userId));
    }

    @PutMapping("/{id}")
    public ResponseEntity<InvestmentDto> updateInvestment(@PathVariable Long id, @RequestBody InvestmentDto investment) {
        InvestmentDto updated = investmentService.updateInvestment(id, investment);
        if (updated == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteInvestment(@PathVariable Long id) {
        investmentService.deleteInvestment(id);
        return ResponseEntity.noContent().build();
    }
}
