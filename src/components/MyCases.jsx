import { useEffect, useState } from "react";
import UserNavbar from "./UserNavbar";
import Footer from "./Footer";
import api from "../api/axiosConfig";

function MyCases() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    api.get("/cases/my", {
      params: {
        email: "diksha@gmail.com",   
        phone: "8827076239"
      }
    })

      .then(res => setCases(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <UserNavbar />

      <div className="container mt-5 mb-5">
        <h2 className="fw-bold text-primary mb-4">My Cases</h2>

        <div className="card shadow-sm">
          <div className="card-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Description</th>
                  <th>Latitude</th>
                  <th>Longitude</th>
                  <th>Location</th>
                  <th>Evidence</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {cases.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center">
                      No cases reported yet.
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
                            alt="Evidence"
                            style={{ maxHeight: "120px" }}
                          />

                        ) : "No Photo"}
                      </td>
                      <td>
                        <span className="badge bg-info">{c.status}</span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MyCases;
