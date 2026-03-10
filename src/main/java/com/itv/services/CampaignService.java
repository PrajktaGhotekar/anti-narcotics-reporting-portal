package com.itv.services;

import com.itv.entity.Campaign;
import com.itv.repository.CampaignRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CampaignService {

    private final CampaignRepository repo;

    public CampaignService(CampaignRepository repo) {
        this.repo = repo;
    }

    public Campaign addCampaign(Campaign c) {
        c.setStatus("ACTIVE");
        return repo.save(c);
    }

    public List<Campaign> getActiveCampaigns() {
        return repo.findByStatus("ACTIVE");
    }

    public List<Campaign> getAllCampaigns() {
        return repo.findAll();
    }

 // file : CampaignService.java
    public void deleteCampaign(Long id) {
        Campaign campaign = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Campaign not found"));

        campaign.setStatus("DELETED");   // soft delete
        repo.save(campaign);
    }

}
