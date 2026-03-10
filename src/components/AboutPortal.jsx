import Footer from "../components/Footer";
import AdminNavbar from "../components/AdminNavbar";

function AboutPortal() {
  return (
    <>
      <AdminNavbar />
      <div className="container my-5">
        <h2 className="fw-bold mb-3">About Anti-Narcotics Portal</h2>
        <p>
          The Anti-Narcotics Portal is a government initiative to combat
          drug abuse, trafficking, and illegal narcotics activities across India.
        </p>
        <p>
          Citizens can anonymously report drug-related incidents, while
          authorities can efficiently verify, investigate, and take action.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default AboutPortal;
