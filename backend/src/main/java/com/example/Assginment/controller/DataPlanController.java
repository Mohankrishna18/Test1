package com.example.Assginment.controller;


import com.example.Assginment.model.DataPlan;
import com.example.Assginment.service.DataPlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/dataplans")
public class DataPlanController {
    @Autowired
    private DataPlanService service;

    @PostMapping
    public ResponseEntity<DataPlan> createDataPlan(@RequestBody DataPlan dataPlan) {
        return ResponseEntity.ok(service.createDataPlan(dataPlan));
    }

    @PostMapping("/{id}/start")
    public ResponseEntity<DataPlan> startPlan(@PathVariable Long id) {
        return ResponseEntity.ok(service.startPlan(id));
    }

    @PostMapping("/{id}/end")
    public ResponseEntity<DataPlan> endPlan(@PathVariable Long id) {
        return ResponseEntity.ok(service.endPlan(id));
    }

    @GetMapping("/{id}/check-validity")
    public ResponseEntity<String> checkValidity(@PathVariable Long id) {
        return ResponseEntity.ok(service.checkValidity(id));
    }
    
    @GetMapping
    public ResponseEntity<List<DataPlan>> getAllDataPlans() {
        List<DataPlan> plans = service.getAllDataPlans();
        return ResponseEntity.ok(plans);
    }

}

