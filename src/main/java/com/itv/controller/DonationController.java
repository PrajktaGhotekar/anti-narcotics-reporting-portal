package com.itv.controller;

import com.itv.entity.Donation;
import com.itv.services.DonationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/donations")
@CrossOrigin(origins = "http://localhost:5173")
public class DonationController {

    private final DonationService donationService;

    public DonationController(DonationService donationService) {
        this.donationService = donationService;
    }

    // USER -save donation
    @PostMapping
    public Donation createDonation(
    	
            @RequestParam String donorName,
            @RequestParam String purpose,
            @RequestParam Double amount
    ) {
        return donationService.saveDonation(donorName, purpose, amount);
    }

    // ADMIN - view donations
    @GetMapping("/admin")
    public List<Donation> getAllDonations() {
        return donationService.getAllDonations();
    }
}
