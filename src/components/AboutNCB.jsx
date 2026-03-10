import Footer from "../components/Footer";
import AdminNavbar from "../components/AdminNavbar";

function AboutNCB() {
  return (
    <>
      <AdminNavbar />
      <div className="container my-5">
        <h2 className="fw-bold mb-3">About Narcotics Control Bureau (NCB)</h2>
        <p>
          The Narcotics Control Bureau (NCB) is the nodal drug law enforcement
          agency of India, functioning under the Ministry of Home Affairs.
        </p>
        <p>
          NCB is responsible for coordination of drug law enforcement,
          intelligence sharing, and implementation of NDPS Act.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default AboutNCB;
