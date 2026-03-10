package com.itv.controller;

import com.itv.entity.Campaign;
import com.itv.services.CampaignService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/campaigns")
@CrossOrigin(origins = "http://localhost:5173")
public class CampaignController {

    private final CampaignService service;

    public CampaignController(CampaignService service) {
        this.service = service;
    }

    // ADMIN: add campaign
    @PostMapping
    public Campaign add(@RequestBody Campaign c) {
        return service.addCampaign(c);
    }

    // ADMIN: view all
    @GetMapping("/all")
    public List<Campaign> getAll() {
        return service.getAllCampaigns();
    }

    // USER: view active
    @GetMapping("/active")
    public List<Campaign> getActive() {
        return service.getActiveCampaigns();
    }

    // ADMIN: update
    @PutMapping("/{id}")
    public Campaign update(@PathVariable Long id, @RequestBody Campaign c) {
        c.setId(id);
        return service.addCampaign(c);   // save = update
    }


    
 // FILE: CampaignController.java
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        service.deleteCampaign(id);
        return ResponseEntity.ok().build();
    }

}
