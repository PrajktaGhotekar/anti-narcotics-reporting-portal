import { Link } from "react-router-dom";

function UserNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Anti-Narcotics Portal
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/report">
                Report Case
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/my-cases">
                My Cases
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/campaigns">
                Campaigns
              </Link>
            </li>

            <Link className="nav-link" to="/donate">
              Donate
            </Link>



            <li className="nav-item">
              <Link className="nav-link" to="/helpline">
                Helpline
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default UserNavbar;
