package com.itv.repository;

import com.itv.entity.Case;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CaseRepository extends JpaRepository<Case, Long> {
	 List<Case> findByEmail(String email);
	    List<Case> findByPhone(String phone);
	    @Transactional
	    @Modifying
	    @Query("UPDATE Case c SET c.status = :status WHERE c.id = :id")
	    void updateStatus(Long id, String status);
}