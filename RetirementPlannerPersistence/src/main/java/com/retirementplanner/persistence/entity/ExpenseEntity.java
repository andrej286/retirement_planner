package com.retirementplanner.persistence.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "expenses")
public class ExpenseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long expenseID;

    private String type;

    private Double amount;

    @Enumerated(EnumType.STRING)
    private Frequency frequency;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private UserEntity user;

    public Long getExpenseID() {
        return expenseID;
    }

    public void setExpenseID(Long expenseID) {
        this.expenseID = expenseID;
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

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }
}

