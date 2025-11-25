// src/pages/Login.jsx
import React, { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      <div className="login-card">

        <h2 style={{ marginBottom: "12px" }}>Login</h2>

        <label>Email</label>
        <input type="email" placeholder="Enter email" style={{ marginBottom: "12px" }} />

        <label>Password</label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          style={{ marginBottom: "12px" }}
        />

        <div className="checkbox-row" style={{ marginBottom: "18px" }}>
          <input
            type="checkbox"
            onChange={e => setShowPassword(e.target.checked)}
          />
          <span>Show password</span>
        </div>

        <div className="btn-row">
          <button className="btn-primary full">Login</button>
          <button className="btn-secondary full">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
