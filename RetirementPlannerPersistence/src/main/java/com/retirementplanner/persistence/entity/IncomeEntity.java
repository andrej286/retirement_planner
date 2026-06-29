package com.retirementplanner.persistence.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "incomes")
public class IncomeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long incomeID;

    private String name;

    private String description;

    private Double annualMonthlyValue;

    private Double interestRate;

    private String startDate;

    private String terminationDate;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private UserEntity user;

    public Long getIncomeID() {
        return incomeID;
    }

    public void setIncomeID(Long incomeID) {
        this.incomeID = incomeID;
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

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }
}

