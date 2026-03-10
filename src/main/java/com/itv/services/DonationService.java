package com.itv.services;

import com.itv.entity.Donation;
import com.itv.repository.DonationRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class DonationService {

    private final DonationRepository donationRepository;

    public DonationService(DonationRepository donationRepository) {
        this.donationRepository = donationRepository;
    }

    public Donation saveDonation(String donorName, String purpose, Double amount) {

        Donation donation = new Donation();
        donation.setDonationId("DON-" + System.currentTimeMillis());
        donation.setDonorName(donorName);
        donation.setPurpose(purpose);
        donation.setAmount(amount);
        donation.setDonatedAt(LocalDateTime.now());

        return donationRepository.save(donation);
    }

    public List<Donation> getAllDonations() {
        return donationRepository.findAll();
    }
}
