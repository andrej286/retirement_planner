package com.retirementplanner.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = "com.retirementplanner")
@EnableJpaRepositories(basePackages = "com.retirementplanner.persistence.repository")
@EntityScan(basePackages = "com.retirementplanner.persistence.entity")
public class RetirementPlannerWebApplication {
    public static void main(String[] args) {
        SpringApplication.run(RetirementPlannerWebApplication.class, args);
    }
}

