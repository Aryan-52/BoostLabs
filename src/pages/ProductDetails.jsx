import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import products from "../productsData";
import { CartContext } from "../context/CartContext";
import FallbackImage from "../ui/FallbackImage.jsx";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === String(id));
  const { addToCart } = useContext(CartContext);
  const [qty, setQty] = useState(1);

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <section className="section container">

      {/* This class EXACTLY matches your CSS layout */}
      <div className="product-details">

        {/* LEFT SIDE IMAGE */}
        <div className="pd-left">
          <FallbackImage
            src={product.image}
            alt={product.name}
            className="pd-img"
          />
        </div>

        {/* RIGHT SIDE DETAILS */}
        <div className="pd-right">
          <h2>{product.name}</h2>

          <p className="pd-short">{product.short}</p>

          <p className="pd-price">₹{product.price}</p>

          {/* Quantity Selector */}
          <div className="qty-box">
            <button onClick={() => qty > 1 && setQty(qty - 1)}>-</button>
            <span>{qty}</span>
            <button onClick={() => setQty(qty + 1)}>+</button>
          </div>

          <button
            className="btn-add"
            onClick={() => addToCart(product, qty)}
          >
            Add to Cart
          </button>

          {/* Specifications */}
          <h3>Specifications</h3>
          <ul className="pd-specs">
            {product.specs?.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>

          {/* Features */}
          <h3>Features</h3>
          <ul className="pd-features">
            {product.features?.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>

          {/* Compatibility */}
          <h3>Compatibility</h3>
          <p className="pd-compat">{product.compatibility}</p>
        </div>

      </div>
    </section>
  );
}

export default ProductDetails;
