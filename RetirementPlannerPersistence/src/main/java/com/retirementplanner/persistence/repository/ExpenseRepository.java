package com.retirementplanner.persistence.repository;

import com.retirementplanner.persistence.entity.ExpenseEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExpenseRepository extends JpaRepository<ExpenseEntity, Long> {

  @Query("SELECT e FROM ExpenseEntity e WHERE e.user.userID = :userId")
  List<ExpenseEntity> findExpensesByUserId(@Param("userId") Long userId);
}

