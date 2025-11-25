import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, getTotal, clearCart } =
    useContext(CartContext);

  if (!cartItems.length)
    return (
      <section className="container section empty-cart">
        <h2>Your Cart is Empty</h2>
        <Link to="/products" className="btn-primary">
          Shop Parts
        </Link>
      </section>
    );

  return (
    <section className="container section cart-page">
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-card" key={item.id}>
            <img src={item.image} className="cart-img" />

            <div className="cart-info">
              <h3>{item.name}</h3>
              <p className="muted">₹{item.price} × {item.quantity}</p>

              <div className="qty-box small">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>

              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>

            <div className="cart-total">₹{item.price * item.quantity}</div>
          </div>
        ))}
      </div>

      <aside className="cart-summary">
        <h3>Order Summary</h3>
        <p>Total Items: {cartItems.length}</p>
        <h2>₹{getTotal()}</h2>

        <Link to="/checkout" className="btn-primary full">Checkout</Link>
        <button className="btn-secondary full" onClick={clearCart}>Clear Cart</button>
      </aside>
    </section>
  );
}
