package com.retirementplanner.core.dto;

public class IncomeDto {
    private Long incomeID;
    private String type;
    private Double amount;
    private Frequency frequency;
    private Long userID;

    public Long getIncomeID() {
        return incomeID;
    }

    public void setIncomeID(Long incomeID) {
        this.incomeID = incomeID;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public Frequency getFrequency() {
        return frequency;
    }

    public void setFrequency(Frequency frequency) {
        this.frequency = frequency;
    }

    public Long getUserID() {
        return userID;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }
}

