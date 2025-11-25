import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-card-link">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-image"
        />
      </Link>

      <div className="product-card-info">
        <h3>{product.name}</h3>
        <p className="price">₹{product.price}</p>

        <Link to={`/products/${product.id}`} className="view-details-btn">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
