package com.retirementplanner.persistence.repository;

import com.retirementplanner.persistence.entity.IncomeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IncomeRepository extends JpaRepository<IncomeEntity, Long> {
}

