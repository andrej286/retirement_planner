package com.retirementplanner.core.service.impl;

import com.retirementplanner.core.mapper.InvestmentMapper;
import com.retirementplanner.core.model.InvestmentDto;
import com.retirementplanner.core.service.InvestmentService;
import com.retirementplanner.persistence.entity.InvestmentEntity;
import com.retirementplanner.persistence.entity.UserEntity;
import com.retirementplanner.persistence.repository.InvestmentRepository;
import com.retirementplanner.persistence.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class InvestmentServiceImpl implements InvestmentService {

    private final InvestmentRepository investmentRepository;
    private final UserRepository userRepository;
    private final InvestmentMapper investmentMapper;

    public InvestmentServiceImpl(InvestmentRepository investmentRepository, UserRepository userRepository, InvestmentMapper investmentMapper) {
        this.investmentRepository = investmentRepository;
        this.userRepository = userRepository;
        this.investmentMapper = investmentMapper;
    }

    @Override
    public InvestmentDto saveInvestment(InvestmentDto investment) {
        InvestmentEntity entity = investmentMapper.toEntity(investment);
        if (investment.getUserID() != null) {
            UserEntity user = userRepository.findById(investment.getUserID()).orElse(null);
            entity.setUser(user);
        }
        InvestmentEntity saved = investmentRepository.save(entity);
        return investmentMapper.toModel(saved);
    }

    @Override
    public InvestmentDto getInvestmentById(Long id) {
        return investmentRepository.findById(id).map(investmentMapper::toModel).orElse(null);
    }

    @Override
    public List<InvestmentDto> getInvestmentsByUserId(Long userId) {
        return investmentRepository.findInvestmentsByUserId(userId).stream().map(investmentMapper::toModel).collect(Collectors.toList());
    }

    @Override
    public InvestmentDto updateInvestment(Long id, InvestmentDto investment) {
        return investmentRepository.findById(id).map(entity -> {
            entity.setName(investment.getName());
            entity.setInitialAmount(investment.getInitialAmount());
            entity.setInterestRate(investment.getInterestRate());
            entity.setDuration(investment.getDuration());
            if (investment.getUserID() != null) {
                UserEntity user = userRepository.findById(investment.getUserID()).orElse(null);
                entity.setUser(user);
            }
            InvestmentEntity updated = investmentRepository.save(entity);
            return investmentMapper.toModel(updated);
        }).orElse(null);
    }

    @Override
    public void deleteInvestment(Long id) {
        investmentRepository.deleteById(id);
    }
}
