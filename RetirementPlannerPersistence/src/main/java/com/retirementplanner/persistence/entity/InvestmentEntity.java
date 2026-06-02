package com.retirementplanner.persistence.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "investments")
public class InvestmentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long investmentID;

    private Double initialAmount;

    private Double interestRate;

    private Integer duration; // in years

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private UserEntity user;

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

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }
}

