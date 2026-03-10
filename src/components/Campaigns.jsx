import { useEffect, useState } from "react";
import axios from "axios";
import UserNavbar from "./UserNavbar";
import Footer from "./Footer";
import CampaignCard from "./CampaignCard";

function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/campaigns/active")
      .then((res) => setCampaigns(res.data));
  }, []);

  return (
    <>
      <UserNavbar />

      <div className="container mt-5">
        <h3 className="fw-bold mb-4"> ✅Ongoing Campaigns : 🤝Join the movement to create a brighter, drug-free future🎗️</h3>

        <div className="row g-4">
          {campaigns.map((c) => (
            <CampaignCard key={c.id} campaign={c} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Campaigns;
