import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function OrderConfirmation() {
  const { state } = useLocation();
  if (!state) return <h2>No order found</h2>;

  const { orderId, date, total, user, payment, items } = state;

  // Helper to render thumbnail safely (image path from productsData is usually string)
  const Thumb = ({ src, name }) => (
    <div className="thumb">
      <img src={src} alt={name} />
    </div>
  );

  return (
    <section className="container section confirm">
      <h1>Order Confirmed 🎉</h1>

      <p>Order ID: <strong>{orderId}</strong></p>
      <p>Date: {date}</p>

      <h2 style={{ marginTop: 12 }}>Total Paid: ₹{total}</h2>

      <div className="confirm-grid">
        {/* Left: items */}
        <div className="confirm-items">
          <h3>Items</h3>
          {items && items.length ? (
            items.map((it) => (
              <div className="confirm-item" key={it.id}>
                <Thumb src={it.image} name={it.name} />
                <div>
                  <div style={{ fontWeight: 700 }}>{it.name}</div>
                  <div className="muted">₹{it.price} × {it.quantity}</div>
                </div>
                <div style={{ marginLeft: "auto", fontWeight: 700 }}>₹{it.price * it.quantity}</div>
              </div>
            ))
          ) : (
            <p className="muted">No items listed.</p>
          )}
        </div>

        {/* Right: shipping & payment */}
        <div className="confirm-right">
          <h3>Shipping Information</h3>
          <p><strong>Name:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>Address:</strong> {user?.address}</p>

          <h3 style={{ marginTop: 16 }}>Payment</h3>
          <p><strong>Method:</strong> {payment?.method}</p>
          {payment?.details && (
            <pre className="muted" style={{ whiteSpace: "pre-wrap", marginTop: 8 }}>
              {JSON.stringify(payment.details, null, 2)}
            </pre>
          )}

          <Link to="/products" className="btn-primary" style={{ marginTop: 16, display: "inline-block" }}>
            Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
}
