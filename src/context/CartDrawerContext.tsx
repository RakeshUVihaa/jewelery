"use client";

import { createContext, useContext, useState } from "react";

type CartContextType = {
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
console.log("CartProvider rendered, isOpen:", isOpen);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
console.log("CartProvider rendered, isOpen:", isOpen);
  return (
    <CartContext.Provider value={{ isOpen, openCart, closeCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}