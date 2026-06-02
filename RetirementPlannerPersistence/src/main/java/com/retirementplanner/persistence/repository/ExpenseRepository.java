package com.retirementplanner.persistence.repository;

import com.retirementplanner.persistence.entity.ExpenseEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExpenseRepository extends JpaRepository<ExpenseEntity, Long> {
}

