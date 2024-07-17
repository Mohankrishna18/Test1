package com.example.Assginment.model;



import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
public class DataPlan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double amount;
    private int validityInHours; 
    private int dataLimitInHours; 
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private String validityMessage; 
    private boolean isActive; 

    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public int getValidityInHours() {
        return validityInHours;
    }

    public void setValidityInHours(int validityInHours) {
        this.validityInHours = validityInHours;
    }

    public int getDataLimitInHours() {
        return dataLimitInHours;
    }

    public void setDataLimitInHours(int dataLimitInHours) {
        this.dataLimitInHours = dataLimitInHours;
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setIsActive(boolean isActive) {
        this.isActive = isActive;
    }

    public String getValidityMessage() {
        return validityMessage;
    }

    public void setValidityMessage(String validityMessage) {
        this.validityMessage = validityMessage;
    }
}

