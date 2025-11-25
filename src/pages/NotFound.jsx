// src/pages/NotFound.jsx
// Modal-style 404 popup overlay

import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="modal">
      <div className="modal-card">
        <h1>404</h1>
        <p className="muted">The page you are trying to access does not exist.</p>

        <Link to="/" className="btn-primary" style={{ marginTop: "20px" }}>
          Go Home
        </Link>
      </div>
    </div>
  );
}
