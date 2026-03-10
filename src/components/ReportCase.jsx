import { useEffect, useState } from "react";
import UserNavbar from "./UserNavbar";
import Footer from "./Footer";
import api from "../api/axiosConfig";
import axios from "axios";
 


function ReportCase() {
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [loadingLocation, setLoadingLocation] = useState(true);

  const [description, setDescription] = useState("");
  const [manualLocation, setManualLocation] = useState("");
  const [photo, setPhoto] = useState(null);

  const [revealIdentity, setRevealIdentity] = useState(false);
  const [identity, setIdentity] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // 📍 Auto GPS
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocation({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          });
          setLoadingLocation(false);
        },
        () => setLoadingLocation(false)
      );
    }
  }, []);

  // 🚀 SUBMIT
  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      formData.append("description", description);
      formData.append("latitude", location.latitude);
      formData.append("longitude", location.longitude);
      formData.append("manualLocation", manualLocation);

      if (photo) {
        formData.append("photo", photo);
      }

      if (revealIdentity) {
        formData.append("name", identity.name);
        formData.append("email", identity.email);
        formData.append("phone", identity.phone);
      }

      await api.post("/cases", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("✅ Case reported successfully!");

      // reset
      setDescription("");
      setManualLocation("");
      setPhoto(null);
      setRevealIdentity(false);
      setIdentity({ name: "", email: "", phone: "" });

    } catch (err) {
      console.error(err);
      alert("❌ Failed to submit case");
    }
  };

  return (
    <>
      <UserNavbar />

      <div className="container mt-5 mb-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">Report a Case</h2>
          <p className="text-muted">
            Confidential • Secure • Anonymous Reporting
          </p>
        </div>

        <div className="card shadow-lg border-0 rounded-4 p-5">
          <h5 className="fw-bold text-danger mb-2">🚨 Emergency Report</h5>

          {/* Description */}
          <div className="mb-4">
            <label className="fw-semibold">Incident Description</label>
            <textarea
              className="form-control"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* GPS */}
          <div className="row mb-4">
            <div className="col-md-6">
              <label className="fw-semibold">Latitude</label>
              <input className="form-control" value={location.latitude} readOnly />
            </div>
            <div className="col-md-6">
              <label className="fw-semibold">Longitude</label>
              <input className="form-control" value={location.longitude} readOnly />
            </div>
          </div>

          {/* Manual Location */}
          <div className="mb-4">
            <label className="fw-semibold">Location Details (Optional)</label>
            <input
              className="form-control"
              value={manualLocation}
              onChange={(e) => setManualLocation(e.target.value)}
            />
          </div>

          {/* Photo Upload */}
          <div className="mb-4">
            <label className="fw-semibold">Upload Evidence (Photo)</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
            />
          </div>

          {/* Identity */}
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              checked={revealIdentity}
              onChange={() => setRevealIdentity(!revealIdentity)}
            />
            <label className="fw-semibold">
              I want to reveal my identity (optional)
            </label>
          </div>

          {revealIdentity && (
            <div className="bg-light p-4 rounded mb-4">
              <input
                className="form-control mb-2"
                placeholder="Name"
                value={identity.name}
                onChange={(e) =>
                  setIdentity({ ...identity, name: e.target.value })
                }
              />
              <input
                className="form-control mb-2"
                placeholder="Email"
                value={identity.email}
                onChange={(e) =>
                  setIdentity({ ...identity, email: e.target.value })
                }
              />
              <input
                className="form-control"
                placeholder="Phone"
                value={identity.phone}
                onChange={(e) =>
                  setIdentity({ ...identity, phone: e.target.value })
                }
              />
            </div>
          )}

          <div className="alert alert-info small">
            🔒 Your data is visible only to authorized admin
          </div>

          <div className="text-center">
            <button
              className="btn btn-danger btn-lg rounded-pill px-5"
              onClick={handleSubmit}
            >
              🚨 Submit Report
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ReportCase;
