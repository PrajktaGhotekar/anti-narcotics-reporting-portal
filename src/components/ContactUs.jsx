import Footer from "../components/Footer";
import AdminNavbar from "../components/AdminNavbar";

function ContactUs() {
  return (
    <>
      <AdminNavbar />
      <div className="container my-5">
        <h2 className="fw-bold mb-3">Contact Us</h2>

        <p><strong>Email:</strong> info@ncb.gov.in</p>
        <p><strong>Toll-Free Number:</strong> 1933</p>
        <p><strong>Helpline:</strong> 24×7 Drug Reporting Helpline</p>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
