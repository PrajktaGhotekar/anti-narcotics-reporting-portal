package com.itv.services;

import com.itv.entity.Case;
import com.itv.entity.CaseStatus;
import com.itv.repository.CaseRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class CaseService {

    private final CaseRepository caseRepository;

    public CaseService(CaseRepository caseRepository) {
        this.caseRepository = caseRepository;
    }

    public Case saveCase(
            String description,
            Double latitude,
            Double longitude,
            String manualLocation,
            String name,
            String email,
            String phone,
            MultipartFile photo
    ) {
        Case c = new Case();
        c.setDescription(description);
        c.setLatitude(latitude);
        c.setLongitude(longitude);
        c.setManualLocation(manualLocation);
        c.setName(name);
        c.setEmail(email);
        c.setPhone(phone);
        c.setStatus("PENDING");
        c.setCreatedAt(LocalDateTime.now());

        // save photo, name
        if (photo != null && !photo.isEmpty()) {
            String fileName = System.currentTimeMillis() + "_" + photo.getOriginalFilename();
            c.setPhotoPath(fileName);
        }

        return caseRepository.save(c);
    }

    public List<Case> getAllCases() {
        return caseRepository.findAll();
    }
    
    public List<Case> getMyCases() {
        return caseRepository.findAll();
    }
    
    
    public Case updateCaseStatus(Long id, String status) {
        caseRepository.updateStatus(id, status);
        return caseRepository.findById(id).orElseThrow();
    }

    
    public Case changeStatus(Long id, CaseStatus status) {
        Case c = caseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Case not found"));
        c.setStatus(status.name());
        return caseRepository.save(c);
    }
}
