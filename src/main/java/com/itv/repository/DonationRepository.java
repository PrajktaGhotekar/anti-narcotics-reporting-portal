package com.itv.repository;

import com.itv.entity.Donation;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DonationRepository extends JpaRepository<Donation, Long> {
	
	List<Donation> findAllByOrderByDonatedAtDesc();
}
