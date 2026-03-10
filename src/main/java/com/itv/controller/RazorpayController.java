package com.itv.controller;

import com.itv.entity.Donation;
import com.itv.services.RazorpayService;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/razorpay")
@CrossOrigin(origins = "http://localhost:5173")
public class RazorpayController {

    @Autowired
    private RazorpayService razorpayService;

    // STEP 1: Create Razorpay Order
    @PostMapping("/create-order")
    public String createOrder(@RequestParam Double amount) throws Exception {
        return razorpayService.createOrder(amount);
    }

    // STEP 2: Save donation after successful payment
    @PostMapping("/save-donation")
    public Donation saveDonation(@RequestBody Donation donation) {
        donation.setDonationId("DON-" + System.currentTimeMillis());
        donation.setDonatedAt(LocalDateTime.now());
        return razorpayService.saveDonation(donation);
    }

 // STEP 3: admin – Get all donations
    @GetMapping("/donations")
    public List<Donation> getAllDonations() {
        return razorpayService.getAllDonations();
    }

}