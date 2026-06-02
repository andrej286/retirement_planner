package com.retirementplanner.core.service;

import com.retirementplanner.core.model.InvestmentDto;

import java.util.List;

public interface InvestmentService {
    InvestmentDto saveInvestment(InvestmentDto investment);
    InvestmentDto getInvestmentById(Long id);
    List<InvestmentDto> getAllInvestments();
}
