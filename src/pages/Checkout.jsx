// src/pages/Checkout.jsx
// Updated with ICONS for payments + formatting

import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cartItems, getTotal, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Form + payment state
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    payment: "COD",
    upiId: "",
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCvv: "",
    bankName: "",
    netbankRef: "",
  });

  const [errors, setErrors] = useState({});
  const [selectedPayment, setSelectedPayment] = useState("COD");

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = "Enter your full name";
    if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(form.email)) er.email = "Enter a valid email";
    if (!form.address.trim()) er.address = "Enter your address";

    if (selectedPayment === "UPI" && !form.upiId.trim())
      er.upiId = "Enter your UPI ID";

    if (selectedPayment === "Card") {
      if (!/^\d{12,19}$/.test(form.cardNumber.replace(/\s+/g, "")))
        er.cardNumber = "Invalid card number";
      if (!form.cardName.trim()) er.cardName = "Enter name on card";
      if (!/^\d{2}\/\d{2}$/.test(form.cardExpiry)) er.cardExpiry = "MM/YY";
      if (!/^\d{3,4}$/.test(form.cardCvv)) er.cardCvv = "CVV";
    }

    if (selectedPayment === "NetBanking" && !form.bankName.trim())
      er.bankName = "Select a bank";

    return er;
  };

  const submit = (e) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);

    if (!Object.keys(er).length) {
      const order = {
        items: cartItems,
        total: getTotal(),
        orderId: "ORD" + Date.now(),
        date: new Date().toLocaleString(),
        user: {
          name: form.name,
          email: form.email,
          address: form.address,
        },
        payment: {
          method: selectedPayment,
          details:
            selectedPayment === "COD"
              ? { note: "Cash on Delivery" }
              : selectedPayment === "UPI"
              ? { upiId: form.upiId }
              : selectedPayment === "Card"
              ? { last4: form.cardNumber.slice(-4), name: form.cardName }
              : { bankName: form.bankName },
        },
      };

      clearCart();
      navigate("/order-confirmation", { state: order });
    }
  };

  const selectPayment = (method) => {
    setSelectedPayment(method);
    setForm({ ...form, payment: method });
    setErrors({});
  };

  return (
    <section className="container section checkout-grid">
      <form className="checkout-form" onSubmit={submit}>
        <h2>Checkout</h2>

        {/* Name */}
        <label>Full Name</label>
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="John Doe"
        />
        {errors.name && <p className="error">{errors.name}</p>}

        {/* Email */}
        <label>Email</label>
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="you@example.com"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        {/* Address */}
        <label>Address</label>
        <textarea
          rows={3}
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          placeholder="Street, City, Pincode, Country"
        />
        {errors.address && <p className="error">{errors.address}</p>}

        {/* Payment Method */}
        <label style={{ marginTop: 20 }}>Payment Method</label>
        <div className="payment-cards">

          {/* COD */}
          <button
            type="button"
            className={`payment-card ${selectedPayment === "COD" ? "active" : ""}`}
            onClick={() => selectPayment("COD")}
          >
            <span className="pc-icon">💵</span>
            <span>Cash on Delivery</span>
          </button>

          {/* UPI */}
          <button
            type="button"
            className={`payment-card ${selectedPayment === "UPI" ? "active" : ""}`}
            onClick={() => selectPayment("UPI")}
          >
            <span className="pc-icon">📲</span>
            <span>UPI (GPay / PhonePe / Paytm)</span>
          </button>

          {/* Card */}
          <button
            type="button"
            className={`payment-card ${selectedPayment === "Card" ? "active" : ""}`}
            onClick={() => selectPayment("Card")}
          >
            <span className="pc-icon">💳</span>
            <span>Credit / Debit Card</span>
          </button>

          {/* NetBanking */}
          <button
            type="button"
            className={`payment-card ${selectedPayment === "NetBanking" ? "active" : ""}`}
            onClick={() => selectPayment("NetBanking")}
          >
            <span className="pc-icon">🏦</span>
            <span>NetBanking</span>
          </button>
        </div>

        {/* Conditional Fields */}
        <div className="payment-fields">
          
          {selectedPayment === "UPI" && (
            <>
              <label>UPI ID</label>
              <input
                value={form.upiId}
                onChange={(e) => setForm({ ...form, upiId: e.target.value })}
                placeholder="yourupi@bank"
              />
              {errors.upiId && <p className="error">{errors.upiId}</p>}
            </>
          )}

          {selectedPayment === "Card" && (
            <>
              <label>Card Number</label>
              <input
                value={form.cardNumber}
                onChange={(e) => setForm({ ...form, cardNumber: e.target.value })}
                placeholder="1234 5678 9012 3456"
              />
              {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}

              <label>Name on Card</label>
              <input
                value={form.cardName}
                onChange={(e) => setForm({ ...form, cardName: e.target.value })}
                placeholder="John Doe"
              />
              {errors.cardName && <p className="error">{errors.cardName}</p>}

              <label>Expiry (MM/YY)</label>
              <input
                value={form.cardExpiry}
                onChange={(e) => setForm({ ...form, cardExpiry: e.target.value })}
                placeholder="08/26"
              />
              {errors.cardExpiry && <p className="error">{errors.cardExpiry}</p>}

              <label>CVV</label>
              <input
                value={form.cardCvv}
                onChange={(e) => setForm({ ...form, cardCvv: e.target.value })}
                placeholder="123"
              />
              {errors.cardCvv && <p className="error">{errors.cardCvv}</p>}
            </>
          )}

          {selectedPayment === "NetBanking" && (
            <>
              <label>Select Bank</label>
              <select
                value={form.bankName}
                onChange={(e) => setForm({ ...form, bankName: e.target.value })}
              >
                <option value="">-- choose --</option>
                <option>HDFC Bank</option>
                <option>ICICI Bank</option>
                <option>State Bank of India</option>
                <option>Axis Bank</option>
                <option>Kotak Mahindra</option>
              </select>
              {errors.bankName && <p className="error">{errors.bankName}</p>}
            </>
          )}
        </div>

        <button className="btn-primary full" style={{ marginTop: 20 }}>
          Place Order
        </button>
      </form>

      <aside className="checkout-summary">
        <h3>Order Summary</h3>
        <p>Total Items: {cartItems.length}</p>
        <h2>₹{getTotal()}</h2>
      </aside>
    </section>
  );
}
