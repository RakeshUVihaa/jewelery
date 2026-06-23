"use client";

import { useCart } from "../context/CartDrawerContext";

export default function CartDrawer() {
  const { isOpen, closeCart } = useCart();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={closeCart}
        />
      )}

      <div
        style={{
          position: "fixed",
          top: 0,
          right: isOpen ? 0 : -400,
          width: "400px",
          height: "100vh",
          background: "#fff",
          zIndex: 99999,
          transition: "right 0.3s ease",
          boxShadow: "-4px 0 10px rgba(0,0,0,0.2)",
        }}
      >
        <div className="flex items-center justify-between border-b p-4">
          <h2>Your Cart</h2>

          <button onClick={closeCart}>×</button>
        </div>

        <div className="p-4">
          Cart Content
        </div>
      </div>
    </>
  );
}