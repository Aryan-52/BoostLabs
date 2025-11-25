import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const [solid, setSolid] = useState(false);
  const location = useLocation();

  const { cartItems } = useContext(CartContext); // ✅ FIXED

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${solid ? "nav-solid" : "nav-transparent"}`}>
      <div className="container nav-inner">

        {/* CLICKABLE LOGO */}
        <Link to="/" className="logo-area">
          <img src="/src/assets/logo.png" alt="BoostLabs" className="logo-img" />
          <span className="logo-text">BoostLabs</span>
        </Link>

        {/* NAV LINKS */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Parts</Link>
          <Link to="/models">Models</Link>
        </div>

        {/* CART + LOGIN */}
        <div className="nav-links">
          <Link to="/cart">
            Cart <span className="cart-badge">{cartItems.length}</span>  {/* ✅ FIXED */}
          </Link>
          <Link to="/login">Login</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
