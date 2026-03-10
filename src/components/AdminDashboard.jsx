import AdminNavbar from "./AdminNavbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import api from "../api/axiosConfig";
import "./admin.css";
import { useNavigate } from "react-router-dom";


function AdminDashboard() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    api.get("/admin/cases")
      .then(res => setCases(res.data))
      .catch(err => console.error(err));
  }, []);

  const solvedCount = cases.filter(c => c.status === "SOLVED").length;
  const unsolvedCount = cases.filter(c => c.status !== "SOLVED").length;

  return (
    <>
      <AdminNavbar />

      <main className="admin-dashboard flex-grow-1">
        <div className="container py-5" >

          {/* TITLE */}
          <h2 className="fw-bold mb-4 text-center">
           🛡️ Admin Dashboard 🛡️
          </h2>

          {/* SUMMARY BOXES */}
          <div className="row g-4 mb-5 justify-content-center">

            <div className="col-md-4">
              <div className="card shadow text-center p-4 border-success">
                <h6 className="text-muted">Solved Cases ✅</h6>
                <h2 className="fw-bold text-success">{solvedCount}</h2>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow text-center p-4 border-warning">
                <h6 className="text-muted">Unsolved / Pending Cases ❌</h6>
                <h2 className="fw-bold text-warning">{unsolvedCount}</h2>
              </div>
            </div>

          </div>

          {/* ADMIN RESPONSIBILITIES */}
          <div className="card shadow-lg admin-responsibility-card">
            <div className="card-body">

              <h4 className="fw-bold mb-3">
                🔐 Admin Responsibilities & Authority
              </h4>

              <ul className="fs-5">
                <li>Review and investigate all reported drug-related cases</li>
                <li>Verify uploaded evidence and geo-location data</li>
                <li>Mark cases as <b>SOLVED</b> or <b>UNSOLVED</b></li>
                <li>Coordinate with law-enforcement & rehabilitation authorities</li>
                <li>Monitor donation usage and campaign effectiveness</li>
                <li>Ensure anonymity and safety of informers</li>
              </ul>

              <div className="alert alert-danger mt-4 fs-6">
                ⚠️ <b>Warning:</b>  
                Admins are strictly prohibited from sharing case evidence, user data, 
                or internal reports with unauthorized persons.  
                Any misuse may lead to legal action under IT & NDPS Acts.
              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default AdminDashboard;
