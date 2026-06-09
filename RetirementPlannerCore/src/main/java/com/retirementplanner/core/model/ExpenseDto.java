package com.retirementplanner.core.model;

public class ExpenseDto {
    private Long expenseID;
    private String name;
    private String description;
    private Double annualMonthlyValue;
    private Double interestRate;
    private String startDate;
    private String terminationDate;
    private Long userID;

    public Long getId() {
        return expenseID;
    }

    public void setId(Long id) {
        this.expenseID = id;
    }

    public Long getExpenseID() {
        return expenseID;
    }

    public void setExpenseID(Long expenseID) {
        this.expenseID = expenseID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getAnnualMonthlyValue() {
        return annualMonthlyValue;
    }

    public void setAnnualMonthlyValue(Double annualMonthlyValue) {
        this.annualMonthlyValue = annualMonthlyValue;
    }

    public Double getInterestRate() {
        return interestRate;
    }

    public void setInterestRate(Double interestRate) {
        this.interestRate = interestRate;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getTerminationDate() {
        return terminationDate;
    }

    public void setTerminationDate(String terminationDate) {
        this.terminationDate = terminationDate;
    }

    public Long getUserID() {
        return userID;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }
}

