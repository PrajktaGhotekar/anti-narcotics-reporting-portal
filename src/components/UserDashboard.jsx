import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";


function UserDashboard() {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 40, 90, 0.7), rgba(0, 40, 90, 0.7)), url('https://img.freepik.com/free-photo/medication-dark-environment_23-2151438511.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        paddingTop: "60px",  
      }}
    >
      {/* main content */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">

            {/* slogan */}
            <h1
              style={{
                color: "#ffffff",
                fontSize: "3rem",
                fontWeight: "900",
                textAlign: "center",
                fontFamily: "'Playfair Display', Georgia, serif",
                letterSpacing: "1.5px",
                textShadow: "0 4px 15px rgba(0,0,0,0.9)",
                marginBottom: "2rem",
              }}
            >
              “Say yes to life, no to drugs.”
            </h1>

            {/* dashboard card */}
            <div
              className="card shadow-lg border-0 rounded-4 p-5 text-center"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.75)), url('https://i.pinimg.com/1200x/06/ed/33/06ed33fc18dffc0439c512399259c1fa.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginBottom: "3.5rem",
              }}
            >
              <h1 className="fw-bold text-primary mb-3">
                Anti-Narcotics Portal
              </h1>

              <p className="lead text-muted mb-4">
                Together against drug abuse. <br />
                <strong>
                  Report anonymously • Support rehabilitation • Save lives
                </strong>
              </p>

              <div className="row g-3 justify-content-center">
                <div className="col-md-3">
                  <Link to="/report" className="btn btn-primary btn-lg w-100 rounded-pill">
                    🚨 Report Case
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link to="/my-cases" className="btn btn-warning btn-lg w-100 rounded-pill text-dark">
                    📂 My Cases
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link to="/campaigns" className="btn btn-success btn-lg w-100 rounded-pill">
                    📢 Campaigns
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link to="/donate" className="btn btn-secondary btn-lg w-100 rounded-pill">
                    💰 Donations
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link to="/helpline" className="btn btn-danger btn-lg w-100 rounded-pill">
                    📞 Helpline
                  </Link>
                </div>
              </div>

              <div className="d-flex justify-content-center gap-4 mt-4 text-muted small fw-medium">
                <span>🔒 Anonymous Reporting</span>
                <span>📍 Geo-Tagged Evidence</span>
                <span>👮 Verified Authorities</span>
              </div>

              <p className="mt-4 fst-italic text-muted">
                “One report can save a life.”
              </p>

              <p className="small text-muted">
                Your identity is protected. All reports are confidential.
              </p>
            </div>

            {/* description box*/}
            <div className="card shadow-sm border-0 rounded-4 p-4 mb-5 bg-white">
              <h5 className="fw-bold mb-3">
                About the Anti-Narcotics Portal
              </h5>

              <p className="text-muted small">
                The <strong>Anti-Narcotics Portal</strong> is a citizen-centric
                initiative designed to combat drug abuse and illegal narcotics
                activities. Citizens can securely and anonymously report
                drug-related incidents.
              </p>

              <p className="text-muted small">
                Reports may include drug trafficking, illegal sale, possession,
                storage, or substance abuse. All submissions are reviewed only
                by authorized authorities.
              </p>

              <p className="text-muted small">
                The identity of the informer is strictly protected and remains
                confidential throughout the process.
              </p>

              <p className="text-muted small">
                <strong>Emergency Notice:</strong> In case of immediate danger,
                contact local authorities or dial <strong>112</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
     
    </div>
  );
}

export default UserDashboard;
