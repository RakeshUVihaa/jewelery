"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/src/context/CartDrawerContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { openCart } = useCart();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/demo", label: "ConfigProductDetail" },
  ];

  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          MyShop
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="hover:text-blue-600">
            Login
          </Link>

          <button
            onClick={openCart}
            className="font-medium hover:text-blue-600"
          >
            Cart
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t px-4 py-3 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/login"
            className="block"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>

          <button
            onClick={() => {
              openCart();
              setIsMenuOpen(false);
            }}
            className="block text-left font-medium"
          >
            Cart
          </button>
        </div>
      )}
    </header>
  );
}