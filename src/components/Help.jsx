import AdminNavbar from "./AdminNavbar";
import Footer from "./Footer";

function Help() {
  return (
    <>
      <AdminNavbar />

      <div className="container mt-4 mb-5">

        {/* page header */}
        <div className="text-center mb-4">
          <h2 className="fw-bold">Help & Support</h2>
          <p className="text-muted">
            We’re here to assist you 24×7 with reporting & support
          </p>
        </div>

        {/* faq section */}
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h5 className="fw-bold mb-3">Frequently Asked Questions</h5>

            <div className="accordion" id="helpAccordion">

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#q1"
                  >
                    How can I report a drug-related incident?
                  </button>
                </h2>
                <div id="q1" className="accordion-collapse collapse show">
                  <div className="accordion-body">
                    You can report incidents through the “Report Case” section by
                    providing details, location, and optional evidence.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#q2"
                  >
                    Is my identity kept anonymous?
                  </button>
                </h2>
                <div id="q2" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    Yes. Informer identity is strictly confidential and protected
                    under NDPS regulations.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#q3"
                  >
                    What type of evidence can I upload?
                  </button>
                </h2>
                <div id="q3" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    You may upload photos or videos related to the incident.
                    Geo-tagged evidence is preferred.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#q4"
                  >
                    How long does case verification take?
                  </button>
                </h2>
                <div id="q4" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    Verification usually takes 24–72 hours depending on evidence
                    and case priority.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#q5"
                  >
                    Can I track my reported case?
                  </button>
                </h2>
                <div id="q5" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    Yes, you can track the status from the “My Cases” section.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Emergency Help */}
        <div className="alert alert-warning text-center fw-semibold mb-4">
          🚨 Emergency Drug Reporting Helpline: <strong>1933</strong> (24×7)
        </div>

        {/* Support Info */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h6 className="fw-bold">Email Support</h6>
                <p className="mb-1">info@ncb.gov.in</p>
                <p className="text-muted small">
                  Responses within 24 hours
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h6 className="fw-bold">Phone Support</h6>
                <p className="mb-1">Toll-Free: 1933</p>
                <p className="text-muted small">
                  Available 24×7 across India
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Help;
