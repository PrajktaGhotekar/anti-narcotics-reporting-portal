package com.itv.controller;

import com.itv.entity.Case;
import com.itv.entity.CaseStatus;
import com.itv.services.CaseService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/cases")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminCaseController {

    private final CaseService caseService;

    public AdminCaseController(CaseService caseService) {
        this.caseService = caseService;
    }

    @GetMapping
    public List<Case> getAllCases() {
        return caseService.getAllCases();
    }
    
    @PutMapping("/{id}/solve")
    public Case markSolved(@PathVariable Long id) {
        return caseService.updateCaseStatus(id, "SOLVED");
    }

    @PutMapping("/{id}/unsolve")
    public Case markUnsolved(@PathVariable Long id) {
        return caseService.updateCaseStatus(id, "UNSOLVED");
    }


}