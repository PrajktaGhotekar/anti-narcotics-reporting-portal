import { useEffect, useState } from "react";
import axios from "axios";
import CampaignCard from "./CampaignCard";
import AdminNavbar from "./AdminNavbar";
import Footer from "./Footer";

function AdminCampaigns() {
  const [campaigns, setCampaigns] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
    time: "",
    meridian: "AM"
  });

  useEffect(() => {
    loadCampaigns();
  }, []);

  const loadCampaigns = async () => {
    const res = await axios.get("http://localhost:8080/api/campaigns/all");
    setCampaigns(res.data);
  };

  const handleSubmit = async () => {
    if (!form.title || !form.category || !form.date || !form.time) {
      alert("Please fill required fields");
      return;
    }

    const payload = {
      ...form,
      time: `${form.time} ${form.meridian}`
    };

    if (editingId) {
      await axios.put(
        `http://localhost:8080/api/campaigns/${editingId}`,
        payload
      );
    } else {
      await axios.post("http://localhost:8080/api/campaigns", payload);
    }

    setForm({
      title: "",
      category: "",
      description: "",
      city: "",
      venue: "",
      date: "",
      time: "",
      meridian: "AM"
    });

    setEditingId(null);
    loadCampaigns();
  };

  const deleteCampaign = async (id) => {
    if (!window.confirm("Are you sure you want to delete this campaign?")) return;
    await axios.delete(`http://localhost:8080/api/campaigns/${id}`);
    alert("Campaign deleted");
    loadCampaigns();
  };

  const handleEdit = (c) => {
    const [time, meridian = "AM"] = c.time?.split(" ") || [];

    setEditingId(c.id);
    setForm({
      title: c.title,
      category: c.category,
      description: c.description,
      city: c.city,
      venue: c.venue,
      date: c.date,
      time: time || "",
      meridian
    });
  };

  return (
    <>
      <AdminNavbar />

      <div className="container mt-4">
        <h3 className="fw-bold mb-3">
          {editingId ? "Edit Campaign" : "Add Campaign"}
        </h3>

        {/* FORM */}
        <div className="card p-4 mb-4">
          <input
            className="form-control mb-2"
            placeholder="TITLE"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <select
            className="form-control mb-2"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          >
            <option value="">Select Category</option>
            <option value="Awareness">Drug Awareness Campaign</option>
            <option value="Rehabilitation">Rehabilitation & Recovery Support</option>
            <option value="Youth">Youth & Student Outreach</option>
            <option value="Media">Digital & Social Media Campaign</option>
          </select>

          <textarea
            className="form-control mb-2"
            placeholder="DESCRIPTION"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />

          <input
            className="form-control mb-2"
            placeholder="CITY"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
          />

          <input
            className="form-control mb-2"
            placeholder="VENUE"
            value={form.venue}
            onChange={(e) => setForm({ ...form, venue: e.target.value })}
          />

          <input
            type="date"
            className="form-control mb-2"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />

          <div className="d-flex gap-2 mb-3">
            <input
              type="time"
              className="form-control"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
            />

            <select
              className="form-control"
              value={form.meridian}
              onChange={(e) =>
                setForm({ ...form, meridian: e.target.value })
              }
            >
              <option>AM</option>
              <option>PM</option>
            </select>
          </div>

          <button className="btn btn-primary w-100" onClick={handleSubmit}>
            {editingId ? "Update Campaign" : "Add Campaign"}
          </button>
        </div>

        {/* CARDS */}
        <div className="row g-4">
          {campaigns.map((c) => (
            <CampaignCard
              key={c.id}
              campaign={c}
              isAdmin={true}
              onDelete={deleteCampaign}
              onEdit={handleEdit}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AdminCampaigns;
