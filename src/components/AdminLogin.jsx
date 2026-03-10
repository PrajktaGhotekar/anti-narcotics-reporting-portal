import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css";

function AdminLogin() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // admin credentials
    if (username === "admin" && password === "admin123") {
      navigate("/admin/dashboard");
    } else {
      alert("❌ Invalid admin credentials");
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="text-center mb-4">
          <div className="admin-login-icon">🚔</div>
          <h4 className="fw-bold mt-2">Admin Login</h4>
          <p className="text-muted small">
            Authorized personnel only
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter admin username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="form-label fw-semibold">
              Password
            </label>

            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i
                  className={
                    showPassword
                      ? "fa-solid fa-eye-slash"
                      : "fa-solid fa-eye"
                  }
                ></i>
              </span>
            </div>
          </div>

          <button className="btn btn-primary w-100 fw-semibold">
            Login
          </button>
        </form>

        <p className="text-center text-muted small mt-3 mb-0">
          Anti-Narcotics Portal © Govt. of India
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;
