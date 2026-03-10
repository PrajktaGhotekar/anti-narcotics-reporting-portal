import UserNavbar from "./UserNavbar";
import Footer from "./Footer";
import { useState } from "react";
import axios from "axios";

function UserDonation() {
  const [form, setForm] = useState({
    purpose: "",
    receiver: "",
    amount: ""
  });

  const handleDonate = async () => {
    if (!form.purpose || !form.amount) {
      alert("Please fill required fields");
      return;
    }

    try {
      // Create Razorpay Order
      const orderRes = await axios.post(
        "http://localhost:8080/api/razorpay/create-order",
        null,
        { params: { amount: form.amount } }
      );

      const orderId = orderRes.data;

      //  Open Razorpay Popup
      const options = {
        key: "rzp_test_SELXtwogSjw0Q4", // 🔑 your test key
        amount: form.amount * 100,
        currency: "INR",
        name: "Anti-Narcotics Portal",
        description: "Donation",
        order_id: orderId,

        handler: async function (response) {
          //  Save donation after success
          await axios.post("http://localhost:8080/api/razorpay/save-donation", {
  donorName: form.receiver || "Anonymous",
  purpose: form.purpose,
  amount: Number(form.amount)
});
          alert("✅ Donation successful");
          setForm({ purpose: "", receiver: "", amount: "" });
        },
        theme: {
          color: "#0d6efd"
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

    } catch (err) {
      console.error(err);
      alert("❌ Payment failed");
    }
  };

  return (
    <>
      <UserNavbar />
      <div className="container my-5">
        <h2 className="fw-bold mb-2">Support Anti-Narcotics Initiatives</h2>
        <p className="text-muted mb-4">
          Your contribution helps rehab centers, medical aid and awareness campaigns.
        </p>

        <div className="row g-4">
          {/* left info box*/}
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h6 className="fw-bold mb-3">🔐 Secure Donation</h6>
                <ul className="small text-muted ps-3">
                  <li>Transparent fund usage</li>
                  <li>Government backed initiative</li>
                  <li>Razorpay secured payments</li>
                </ul>

                <div className="alert alert-info small mt-3 mb-0">
                  Payments processed securely via <b>Razorpay</b>
                </div>
              </div>
            </div>
          </div>

          {/* right donation form*/}
          <div className="col-md-8">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="fw-bold mb-3">Make a Donation</h5>

                <select
                  className="form-select mb-3"
                  value={form.purpose}
                  onChange={(e) => setForm({ ...form, purpose: e.target.value })}
                >
                  <option value="">Select Purpose</option>
                  <option>Rehabilitation</option>
                  <option>Medicines</option>
                  <option>Awareness Campaign</option>
                </select>

                <input
                  className="form-control mb-3"
                  placeholder="Donator's Name"
                  value={form.receiver}
                  onChange={(e) => setForm({ ...form, receiver: e.target.value })}
                />

                <input
                  type="number"
                  className="form-control mb-3"
                  placeholder="Donation Amount (₹)"
                  value={form.amount}
                  onChange={(e) => setForm({ ...form, amount: e.target.value })}
                />

                <button className="btn btn-primary w-100" onClick={handleDonate}>
                  Donate Securely
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default UserDonation;
