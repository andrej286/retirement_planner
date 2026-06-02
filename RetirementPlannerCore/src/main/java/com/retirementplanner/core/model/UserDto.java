package com.retirementplanner.core.model;

import java.time.LocalDate;
import java.util.List;

public class UserDto {
    private Long userID;
    private String username;
    private String email;
    private String password;
    private LocalDate dateOfBirth;
    private Integer retirementYear;

    private List<IncomeDto> incomes;
    private List<ExpenseDto> expenses;
    private List<InvestmentDto> investments;

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

    public List<IncomeDto> getIncomes() {
        return incomes;
    }

    public void setIncomes(List<IncomeDto> incomes) {
        this.incomes = incomes;
    }

    public List<ExpenseDto> getExpenses() {
        return expenses;
    }

    public void setExpenses(List<ExpenseDto> expenses) {
        this.expenses = expenses;
    }

    public List<InvestmentDto> getInvestments() {
        return investments;
    }

    public void setInvestments(List<InvestmentDto> investments) {
        this.investments = investments;
    }
}

