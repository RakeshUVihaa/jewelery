import CartDrawer from "../components/CartDrawer";
import Header from "../components/layout/Header";
import { CartProvider } from "../context/CartDrawerContext";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
          defer
        />
      </head>
      <body>
        <CartProvider>
          <Header />
          {/* GLOBAL CART DRAWER (always available) */}
          {children}
          {/* {<CartDrawer/>} */}
          <footer>Footer</footer>
        </CartProvider>
      </body>
    </html>
  );
}