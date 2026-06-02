package com.retirementplanner.core.model;

public class InvestmentDto {
    private Long investmentID;
    private Double initialAmount;
    private Double interestRate;
    private Integer duration;
    private Long userID;

    public Long getInvestmentID() {
        return investmentID;
    }

    public void setInvestmentID(Long investmentID) {
        this.investmentID = investmentID;
    }

    public Double getInitialAmount() {
        return initialAmount;
    }

    public void setInitialAmount(Double initialAmount) {
        this.initialAmount = initialAmount;
    }

    public Double getInterestRate() {
        return interestRate;
    }

    public void setInterestRate(Double interestRate) {
        this.interestRate = interestRate;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public Long getUserID() {
        return userID;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }
}

