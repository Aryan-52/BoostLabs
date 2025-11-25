import React, { useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import products from "../productsData";
import FallbackImage from "../ui/FallbackImage.jsx";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const modelFilter = searchParams.get("model") || "All";

  const [showModelError, setShowModelError] = useState(false);

  const filterButtons = ["All", "GT3", "Turbo S", "911", "GT4"];

  // ❌ Handle Porsche Targa manually
  if (modelFilter.toLowerCase() === "targa") {
    return (
      <section className="section container">
        <div className="modal">
          <div className="modal-card">
            <h3>Model Not Available</h3>
            <p>Porsche Targa parts are not available yet.</p>
            <Link to="/products" className="btn-primary">Go Back</Link>
          </div>
        </div>
      </section>
    );
  }

  // Normal filtering logic
  const filtered =
    modelFilter === "All"
      ? products
      : products.filter((p) => p.model === modelFilter);

  return (
    <section className="section container">
      <h2>Porsche Parts</h2>
      <p className="muted">Choose the best upgrade for your model</p>

      {/* Filter Buttons */}
      <div className="filter-row">
        {filterButtons.map((f) => (
          <button
            key={f}
            className={`btn-secondary ${modelFilter === f ? "active" : ""}`}
            onClick={() => {
              if (f === "GT4") {
                setShowModelError(true);
                return;
              }
              setSearchParams({ model: f });
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filtered.map((p) => (
          <div className="product-card" key={p.id}>
            <FallbackImage src={p.image} alt={p.name} />

            <h3>{p.name}</h3>
            <p className="model muted">{p.model}</p>

            <p className="short-desc">{p.short}</p>

            <p className="price">₹{p.price}</p>

            <button
              className="btn-primary full"
              onClick={() => navigate(`/products/${p.id}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* GT4 Error Modal */}
      {showModelError && (
        <div className="modal">
          <div className="modal-card">
            <h3>Model Not Available</h3>
            <p>The GT4 model currently has no products listed.</p>

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

export default Products;
