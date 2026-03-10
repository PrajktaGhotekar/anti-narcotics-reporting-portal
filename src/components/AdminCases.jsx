import { useEffect, useState } from "react";
import "./admin.css";
import AdminNavbar from "./AdminNavbar";
import BackButton from "./BackButton";
import Footer from "./Footer";
import api from "../api/axiosConfig";

function AdminCases() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    api.get("/admin/cases")
      .then(res => setCases(res.data))
      .catch(err => console.error(err));
  }, []);

  const updateStatus = (id, status) => {
  api.put(`/admin/cases/${id}/${status}`)
    .then(() => {
      setCases(prev =>
        prev.map(c =>
          c.id === id ? { ...c, status: status.toUpperCase() } : c
        )
      );
    })
    .catch(err => console.error(err));
};


  return (
    <>
      <AdminNavbar />

      <div className="admin-page">
        <div className="container mt-4 mb-5">
          <BackButton to="/admin/dashboard" />

          <h3 className="mb-3 fw-bold">Reported Cases</h3>

          <div className="card shadow-sm border-0">
            <div className="card-body">
              <table className="table table-bordered align-middle admin-table">
                <thead className="table-light">
                  <tr>
                    <th>ID</th>
                    <th>Description</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Location</th>
                    <th>Evidence</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {cases.length === 0 ? (
                    <tr>
                      <td colSpan="10" className="text-center">
                        No cases found
                      </td>
                    </tr>
                  ) : (
                    cases.map(c => (
                      <tr key={c.id}>
                        <td>{c.id}</td>
                        <td>{c.description}</td>
                        <td>{c.latitude}</td>
                        <td>{c.longitude}</td>
                        <td>{c.manualLocation}</td>
                        <td>
                          {c.photoPath ? (
                            <img
                              src={`http://localhost:8080/uploads/${c.photoPath}`}
                              alt="evidence"
                              height="60"
                            />
                          ) : "No Photo"}
                        </td>
                        <td>{c.name || "-"}</td>
                        <td>{c.email || "-"}</td>
                        <td>{c.phone || "-"}</td>
                        <td>
  <div className="d-flex gap-2 align-items-center">
    <span className={`badge ${c.status === "SOLVED" ? "bg-success" : "bg-warning text-dark"}`}>
      {c.status}
    </span>

    <button
      className="btn btn-sm btn-outline-success"
      onClick={() => updateStatus(c.id, "solve")}
    >
      Solved
    </button>

    <button
      className="btn btn-sm btn-outline-danger"
      onClick={() => updateStatus(c.id, "unsolve")}
    >
      Unsolved
    </button>
  </div>
</td>

                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default AdminCases;
