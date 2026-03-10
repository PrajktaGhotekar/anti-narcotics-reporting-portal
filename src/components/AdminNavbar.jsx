import { Link, Links } from "react-router-dom";

function AdminNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <span className="navbar-brand fw-bold">
        🚔 Anti-Narcotics Admin
      </span>

      <div className="ms-auto">
        <Link className="nav-link d-inline text-white me-3" to="/admin/dashboard">
          Dashboard
        </Link>

        <Link className="nav-link d-inline text-white me-3" to="/admin/cases">
          View Cases
        </Link>

        <Link
  className="nav-link d-inline text-white me-3"
  to="/admin/campaigns"
>
  Campaigns
</Link>

<Link className="nav-link d-inline text-white me-3" to="/admin/donations">
  Donations
</Link>

        <Link className="nav-link d-inline text-white" to="/admin/login">
  Logout
</Link>
      </div>
    </nav>
  );
}

export default AdminNavbar;
