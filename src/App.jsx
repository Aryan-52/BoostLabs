import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import Notification from "./ui/Notification";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Models from "./pages/Models";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import OrderConfirmation from "./pages/OrderConfirmation";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="main-content">
        <Routes>

          {/* HOME PAGE */}
          <Route path="/" element={<Home />} />

          {/* PRODUCT LISTING PAGE */}
          <Route path="/products" element={<Products />} />

          {/* PRODUCT DETAILS PAGE – FIXED */}
          <Route path="/products/:id" element={<ProductDetails />} />

          {/* MODELS PAGE */}
          <Route path="/models" element={<Models />} />

          {/* CART PAGE */}
          <Route path="/cart" element={<Cart />} />

          {/* CHECKOUT PAGE */}
          <Route path="/checkout" element={<Checkout />} />

          {/* LOGIN PAGE */}
          <Route path="/login" element={<Login />} />

          {/* ORDER CONFIRMATION */}
          <Route path="/order-confirmation" element={<OrderConfirmation />} />

          {/* FALLBACK 404 PAGE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <Footer />

      {/* NOTIFICATION TOAST */}
      <Notification />
    </>
  );
}

export default App;
