package com.retirementplanner.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.retirementplanner")
public class RetirementPlannerWebApplication {
    public static void main(String[] args) {
        SpringApplication.run(RetirementPlannerWebApplication.class, args);
    }
}

