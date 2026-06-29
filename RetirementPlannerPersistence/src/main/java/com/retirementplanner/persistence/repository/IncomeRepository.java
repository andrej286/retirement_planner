package com.retirementplanner.persistence.repository;

import com.retirementplanner.persistence.entity.ExpenseEntity;
import com.retirementplanner.persistence.entity.IncomeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IncomeRepository extends JpaRepository<IncomeEntity, Long> {

  @Query("SELECT e FROM IncomeEntity e WHERE e.user.userID = :userId")
  List<IncomeEntity> findIncomesByUserId(@Param("userId") Long userId);
}

