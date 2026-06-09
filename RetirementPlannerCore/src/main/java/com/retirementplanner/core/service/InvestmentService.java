package com.retirementplanner.core.service;

import com.retirementplanner.core.model.InvestmentDto;

import java.util.List;

public interface InvestmentService {
    InvestmentDto saveInvestment(InvestmentDto investment);
    InvestmentDto getInvestmentById(Long id);
    List<InvestmentDto> getAllInvestments();
    InvestmentDto updateInvestment(Long id, InvestmentDto investment);
    void deleteInvestment(Long id);
}
