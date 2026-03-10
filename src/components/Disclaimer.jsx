import Footer from "../components/Footer";
import AdminNavbar from "../components/AdminNavbar";

function Disclaimer() {
  return (
    <>
      <AdminNavbar />
      <div className="container my-5">
        <h2 className="fw-bold mb-3">Disclaimer</h2>
        <p>
          This portal is intended for informational and reporting purposes only.
        </p>
        <p>
          The Government of India does not guarantee the accuracy or completeness
          of information submitted by users.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Disclaimer;
