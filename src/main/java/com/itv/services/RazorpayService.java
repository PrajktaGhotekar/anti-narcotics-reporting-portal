package com.itv.services;

import com.itv.entity.Donation;
import com.itv.repository.DonationRepository;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;

import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RazorpayService {

    // razorpay Test Keys
    private static final String KEY = "rzp_test_SELXtwogSjw0Q4";
    private static final String SECRET ="fVSyGJlLW8tkrhbaLRLibYaP";

    @Autowired
    private DonationRepository donationRepository;

    // CREATE RAZORPAY ORDER
    public String createOrder(Double amount) throws Exception {

        RazorpayClient client = new RazorpayClient(KEY, SECRET);

        JSONObject options = new JSONObject();
        options.put("amount", amount * 100); // convert to paise
        options.put("currency", "INR");
        options.put("receipt", "donation_rcpt_" + System.currentTimeMillis());

        Order order = client.orders.create(options);

        return order.get("id");
    }

    // SAVE DONATION AFTER PAYMENT SUCCESS
    public Donation saveDonation(Donation donation) {
        return donationRepository.save(donation);
    }
    

    public List<Donation> getAllDonations() {
        return donationRepository.findAllByOrderByDonatedAtDesc();
    }

}
