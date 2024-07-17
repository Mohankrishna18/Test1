package com.example.Assginment.service;


import com.example.Assginment.exception.ResourceNotFoundException;
import com.example.Assginment.model.DataPlan;
import com.example.Assginment.repository.DataPlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class DataPlanService {
    @Autowired
    private DataPlanRepository repository;

    public DataPlan createDataPlan(DataPlan dataPlan) {
        dataPlan.setIsActive(false);
        return repository.save(dataPlan);
    }

    public DataPlan startPlan(Long id) {
        DataPlan plan = repository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Plan not found"));
        plan.setStartTime(LocalDateTime.now());
        plan.setIsActive(true);
        return repository.save(plan);
    }

    public DataPlan endPlan(Long id) {
        DataPlan plan = repository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Plan not found"));

        plan.setEndTime(LocalDateTime.now());

        // Calculate the total time used
        if (plan.getStartTime() != null) {
            long hoursUsed = Duration.between(plan.getStartTime(), plan.getEndTime()).toHours();

            // Check if hours used matches validity
            if (hoursUsed >= plan.getValidityInHours()) {
                plan.setIsActive(false); // Deactivate if validity is reached
            } else {
                long remainingHours = plan.getValidityInHours() - hoursUsed;
                System.out.println("Remaining hours: " + remainingHours);
            }
        }

        return repository.save(plan);
    }

    public String checkValidity(Long id) {
        DataPlan plan = repository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Plan not found"));

        if (plan.getStartTime() != null) {
            long hoursUsed = Duration.between(plan.getStartTime(), LocalDateTime.now()).toHours();
            
            if (hoursUsed >= plan.getValidityInHours()) {
                plan.setIsActive(false);
                return "Your plan has expired.";
            } else {
                long remainingHours = plan.getValidityInHours() - hoursUsed;
                return "  " + remainingHours;
            }
        }
        return "Your plan has not been started yet.";
    }
    
    public List<DataPlan> getAllDataPlans() {
        List<DataPlan> plans = repository.findAll();
        
        for (DataPlan plan : plans) {
            if (plan.getStartTime() != null) {
                long hoursUsed = Duration.between(plan.getStartTime(), LocalDateTime.now()).toHours();

                if (hoursUsed >= plan.getValidityInHours()) {
                    plan.setIsActive(false);
                    plan.setValidityMessage("Your plan has expired.");
                } else {
                    long remainingHours = plan.getValidityInHours() - hoursUsed;
                    plan.setValidityMessage(" " + remainingHours);
                }
            } else {
                plan.setValidityMessage("Your plan has not been started yet.");
            }
        }
        
        return plans;
    }

}
