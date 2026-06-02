package com.retirementplanner.core.service;

import com.retirementplanner.core.model.InvestmentModel;

import java.util.List;

public interface InvestmentService {
    InvestmentModel saveInvestment(InvestmentModel investment);
    InvestmentModel getInvestmentById(Long id);
    List<InvestmentModel> getAllInvestments();
}

