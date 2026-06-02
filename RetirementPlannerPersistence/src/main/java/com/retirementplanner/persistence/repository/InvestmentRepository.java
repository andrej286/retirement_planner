package com.retirementplanner.persistence.repository;

import com.retirementplanner.persistence.entity.InvestmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InvestmentRepository extends JpaRepository<InvestmentEntity, Long> {
}

