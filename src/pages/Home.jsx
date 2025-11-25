import React from "react";
import { Link } from "react-router-dom";
import products from "../productsData";
import ProductCard from "../ui/ProductCard";

export default function Home() {
  const featured = products.slice(0, 5); // first 5 items

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <img src="/assets/hero_car.png" className="hero-bg" />

        <div className="hero-content">
          <h1>BoostLabs — Porsche Performance Parts</h1>
          <p>
            Premium-grade turbo kits, exhausts, brakes and performance upgrades
            engineered for Porsche 911, GT3 and Turbo S.
          </p>

          <div className="hero-btns">
            <Link to="/products" className="btn-primary">
              Shop Parts
            </Link>
            <Link
              to="/products?filter=performance"
              className="btn-secondary"
            >
              Performance Upgrades
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PARTS SECTION */}
      <section className="featured-section section container">
        <h2>Featured Parts</h2>
        <p className="muted">Top picks chosen by GT3 & Turbo S owners</p>

        <div className="product-grid">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
