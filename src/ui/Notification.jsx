// src/ui/Notification.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Notification() {
  const { toast, setToast } = useContext(CartContext);
  if (!toast) return null;

  return (
    <div className="toast">
      <span>{toast.msg}</span>

      <button
        className="toast-close-btn"
        onClick={() => setToast(null)}
      >
        ✕
      </button>
    </div>
  );
}
