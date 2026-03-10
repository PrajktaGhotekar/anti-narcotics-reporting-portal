package com.itv.controller;

import com.itv.entity.Case;
import com.itv.services.CaseService;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/cases")
@CrossOrigin(origins = "http://localhost:5173")
public class CaseController {

    private final CaseService caseService;

    public CaseController(CaseService caseService) {
        this.caseService = caseService;
    }

    // USER: submit report 
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Case reportCase(
            @RequestParam String description,
            @RequestParam(required = false) Double latitude,
            @RequestParam(required = false) Double longitude,
            @RequestParam(required = false) String manualLocation,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String email,
            @RequestParam(required = false) String phone,
            @RequestParam(required = false) MultipartFile photo
    ) {
        return caseService.saveCase(
                description,
                latitude,
                longitude,
                manualLocation,
                name,
                email,
                phone,
                photo
        );
    }
    
    @GetMapping("/my")
    public List<Case> getMyCases() {
        return caseService.getAllCases();
    }


}
