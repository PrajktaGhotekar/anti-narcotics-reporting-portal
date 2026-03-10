function Footer() {
  return (
    <footer style={{ marginTop: "3rem" }}>

      {/* footer container */}
      <div className="footer-wrapper">

        {/* yellow slogan bar */}
        <div
          style={{
            background: "#f6de99",
            padding: "8px 0",
            textAlign: "center",
            fontWeight: "600",
            fontSize: "1rem",
          }}
        >
          Say <span style={{ color: "red" }}>“NO”</span> to Drugs &{" "}
          <span style={{ color: "green" }}>“YES”</span> to Life
        </div>

        {/*gov logo*/}
        <div style={{ background: "#ffffff", padding: "15px 0" }}>
          <div className="container">
            <div className="d-flex justify-content-center align-items-center flex-wrap gap-4">
              <img src="https://upload.wikimedia.org/wikipedia/en/f/ff/Narcotics_Control_Bureau.png" alt="NCB" height="70" />
              <img src="https://narcoordindia.gov.in/narcoordindia/imgs/footer-logo.png" alt="NCB" height="70" />
              <img src="https://www.greaterkashmir.com/wp-content/uploads/2023/08/MHA_Pic.jpg" alt="MHA" height="70" />
              <img src="https://png.pngtree.com/png-vector/20230727/ourmid/pngtree-77-happy-independence-day-vector-png-image_8422006.png" alt="Azadi" height="70" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF2NgUXVSPwY6lb8jwhhRKL_8j39IVyWJskA&s" alt="Digital India" height="70" />
              <img src="https://etimg.etb2bimg.com/photo/76728345.cms" alt="MyGov" height="70" />
            </div>
          </div>
        </div>

        {/* footer content */}
        <div style={{ background: "#ffffff", padding: "25px 0" }}>
          <div className="container">
            <div className="row">

              <div className="col-md-3 mb-3">
                <h6 className="fw-bold">Design & Development Partner</h6>
                <p className="small text-muted mb-1">
                  Digital India Corporation
                </p>
                <p className="small text-muted mb-0">
                  Ministry of Electronics & IT
                </p>
              </div>

              <div className="col-md-3 mb-3">
                <h6 className="fw-bold">Quick Links</h6>
                <p className="small mb-1">About Portal</p>
                <p className="small mb-1">About NCB</p>
                <p className="small mb-1">Disclaimer</p>
                <p className="small">Contact Us</p>
              </div>

              <div className="col-md-3 mb-3">
                <h6 className="fw-bold">Contact</h6>
                <p className="small mb-1">Email: info@ncb.gov.in</p>
                <p className="small mb-1">
                  Toll-Free No: <strong>1933</strong>
                </p>
                <p className="small text-muted">
                  24×7 Drug Reporting Helpline
                </p>
              </div>

              <div className="col-md-3 mb-3">
                <h6 className="fw-bold">Portal Statistics</h6>
                <p className="small mb-2">
                  Total Visitors: <strong>4,53,764</strong>
                </p>
                <p className="small mb-1">Follow Us</p>
                <div style={{ fontSize: "1rem" }}>
                  🌐 &nbsp; 📘 &nbsp; 📸 &nbsp; ▶️
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
      {/* footer end */}

      {/* copy right */}
      <div
        style={{
          background: "#2f2f4f",
          color: "#ffffff",
          textAlign: "center",
          padding: "6px 0",
          fontSize: "0.8rem",
        }}
      >
        © 2023–2025 Narcotics Control Bureau, Ministry of Home Affairs, Government of India
        <div>
          Terms & Conditions | Privacy Policy
        </div>
      </div>

    </footer>
  );
}

export default Footer;
