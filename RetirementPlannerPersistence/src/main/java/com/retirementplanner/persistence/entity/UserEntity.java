package com.retirementplanner.persistence.entity;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userID;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    private LocalDate dateOfBirth;

    private Integer retirementYear;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<IncomeEntity> incomes = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ExpenseEntity> expenses = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<InvestmentEntity> investments = new ArrayList<>();

    public Long getUserID() {
        return userID;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public Integer getRetirementYear() {
        return retirementYear;
    }

    public void setRetirementYear(Integer retirementYear) {
        this.retirementYear = retirementYear;
    }

    public List<IncomeEntity> getIncomes() {
        return incomes;
    }

    public void setIncomes(List<IncomeEntity> incomes) {
        this.incomes = incomes;
    }

    public List<ExpenseEntity> getExpenses() {
        return expenses;
    }

    public void setExpenses(List<ExpenseEntity> expenses) {
        this.expenses = expenses;
    }

    public List<InvestmentEntity> getInvestments() {
        return investments;
    }

    public void setInvestments(List<InvestmentEntity> investments) {
        this.investments = investments;
    }

    // convenience helpers
    public void addIncome(IncomeEntity income) {
        incomes.add(income);
        income.setUser(this);
    }

    public void addExpense(ExpenseEntity expense) {
        expenses.add(expense);
        expense.setUser(this);
    }

    public void addInvestment(InvestmentEntity investment) {
        investments.add(investment);
        investment.setUser(this);
    }
}

