// src/pages/Models.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FallbackImage from "../ui/FallbackImage.jsx";

function Models() {
  const navigate = useNavigate();
  const [showModelError, setShowModelError] = useState(false);
  const [errorModelName, setErrorModelName] = useState("");

  const models = [
    { name: "Porsche 911 GT3 RS", short: "GT3", image: "/assets/model_911_gt3rs.png" },
    { name: "Porsche 918 Spyder", short: "Turbo S", image: "/assets/model_918spyder.png" },
    { name: "Porsche Cayman", short: "911", image: "/assets/model_cayman.png" },
    { name: "Porsche Targa", short: "GT4", image: "/assets/model_targa.png" },
  ];

  const handleModelClick = (m) => {
    if (m.short === "GT4") {
      setErrorModelName(m.name);
      setShowModelError(true);
      return;
    }

    navigate(`/products?model=${m.short}`);
  };

  return (
    <section className="section container">
      <h2>Porsche Models</h2>
      <p className="muted">Choose your model to see compatible upgrade parts.</p>

      <div className="model-grid">
        {models.map((m, i) => (
          <div
            key={i}
            className="model-card"
            onClick={() => handleModelClick(m)}
          >
            <FallbackImage src={m.image} alt={m.name} className="model-img" />
            <h3>{m.name}</h3>
            <p className="muted">{m.short}</p>
          </div>
        ))}
      </div>

      {/* ERROR MODAL */}
      {showModelError && (
        <div className="modal">
          <div className="modal-card">
            <h3>Model Not Available</h3>
            <p>{errorModelName} currently has no parts listed.</p>

            <button
              className="btn-primary"
              onClick={() => setShowModelError(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Models;
