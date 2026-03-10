import AdminNavbar from "./AdminNavbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function AdminDonations() {

  //  hooks inside component
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/razorpay/donations")
      .then((res) => setDonations(res.data))
      .catch((err) => console.error(err));
  }, []);

  // calculation
  const totalAmount = donations.reduce(
    (sum, d) => sum + (d.amount || 0),
    0
  );

  const rehabTotal = donations
    .filter(d => d.purpose === "Rehabilitation")
    .reduce((s, d) => s + d.amount, 0);

  const medicineTotal = donations
    .filter(d => d.purpose === "Medicines")
    .reduce((s, d) => s + d.amount, 0);

  const awarenessTotal = donations
    .filter(d => d.purpose === "Awareness Campaign")
    .reduce((s, d) => s + d.amount, 0);

  return (
    <div className="admin-page">
      <AdminNavbar />

      <main className="admin-content">
        <div className="container mt-4">

          <h3 className="fw-bold mb-4">
            Donations & Fund Management
          </h3>

          {/* summary card*/}
          <div className="row g-4 mb-4">

            <div className="col-md-3">
              <div className="card shadow-sm text-center p-3">
                <p className="text-muted mb-1">Total Donations Collected</p>
                <h4 className="fw-bold text-success">₹{totalAmount}</h4>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card shadow-sm text-center p-3">
                <p className="text-muted mb-1">Rehabilitation</p>
                <h4 className="fw-bold text-primary">₹{rehabTotal}</h4>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card shadow-sm text-center p-3">
                <p className="text-muted mb-1">Medicines</p>
                <h4 className="fw-bold text-warning">₹{medicineTotal}</h4>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card shadow-sm text-center p-3">
                <p className="text-muted mb-1">Awareness Campaign</p>
                <h4 className="fw-bold text-danger">₹{awarenessTotal}</h4>
              </div>
            </div>

          </div>

          {/* donation */}
          <div className="card shadow-sm mb-5">
            <div className="card-body">

              <h5 className="fw-bold mb-3">Donation Details</h5>

              <div className="table-responsive">
                <table className="table table-bordered align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Donation ID</th>
                      <th>Donor Name</th>
                      <th>Purpose</th>
                      <th>Amount</th>
                      <th>Date</th>
                    </tr>
                  </thead>

                  <tbody>
                    {donations.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="text-center text-muted">
                          No donations found
                        </td>
                      </tr>
                    ) : (
                      donations.map((d) => (
                        <tr key={d.id}>
                          <td>{d.donationId}</td>
                          <td>{d.donorName}</td>
                          <td>{d.purpose}</td>
                          <td>₹{d.amount}</td>
                          <td>
                            {new Date(d.donatedAt).toLocaleDateString("en-IN")}
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
      </main>

      <Footer />
    </div>
  );
}

export default AdminDonations;
