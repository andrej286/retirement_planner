package com.retirementplanner.persistence.repository;

import com.retirementplanner.persistence.entity.ExpenseEntity;
import com.retirementplanner.persistence.entity.InvestmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InvestmentRepository extends JpaRepository<InvestmentEntity, Long> {
  @Query("SELECT e FROM InvestmentEntity e WHERE e.user.userID = :userId")
  List<InvestmentEntity> findInvestmentsByUserId(@Param("userId") Long userId);
}

