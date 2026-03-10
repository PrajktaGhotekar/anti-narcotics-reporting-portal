import UserNavbar from "./UserNavbar";
import Footer from "./Footer";
import BackButton from "./BackButton";

function Helpline() {
  return (
    <>
      <UserNavbar />

      <div className="container my-5">
        {/* Page heading */}
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">Helpline & Support</h2>
          <p className="text-muted">
            Confidential • 24×7 • Trusted Assistance
          </p>
        </div>

        {/* Emergency alert */}
        <div className="alert alert-warning text-center fw-semibold">
          ⚠️ If there is an immediate threat to life or public safety, please dial
          <strong> 112 </strong> immediately.
        </div>

        {/* Cards grid */}
        <div className="row g-4 mt-2">

          {/* Helpline Numbers */}
          <div className="col-md-6">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="fw-bold text-primary mb-3">
                  📞 Helpline Numbers
                </h5>
                <ul className="text-muted small">
                  <li>
                    <strong>1933</strong> – National Anti-Drug Helpline (24×7)
                  </li>
                  <li>
                    <strong>112</strong> – Emergency Police Assistance
                  </li>
                  <li>Available in multiple Indian languages</li>
                  <li>Anonymous & confidential support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* NGOs */}
          <div className="col-md-6">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="fw-bold text-success mb-3">
                  🤝 NGOs & Support
                </h5>
                <ul className="text-muted small">
                  <li>Drug abuse counselling services</li>
                  <li>Family & youth support programs</li>
                  <li>Community awareness initiatives</li>
                  <li>Women & child protection NGOs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Rehab Centers */}
          <div className="col-md-6">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="fw-bold text-info mb-3">
                  🏥 Rehabilitation Centers
                </h5>
                <ul className="text-muted small">
                  <li>De-addiction & detox programs</li>
                  <li>Medical & psychological treatment</li>
                  <li>Short-term & long-term rehabilitation</li>
                  <li>Recovery & follow-up care</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Acts & Laws */}
          <div className="col-md-6">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="fw-bold text-danger mb-3">
                  ⚖️ Acts & Laws
                </h5>
                <ul className="text-muted small">
                  <li>NDPS Act, 1985</li>
                  <li>Strict punishment for trafficking</li>
                  <li>Heavy fines & imprisonment</li>
                  <li>Legal protection for informers</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Closing note */}
        <p className="text-center text-muted mt-4 small">
          🔒 Your identity is protected. Seeking help is a sign of strength.
        </p>
      </div>

    
      <Footer />
    </>
  );
}

export default Helpline;
