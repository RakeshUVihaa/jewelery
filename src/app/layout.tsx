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
      <body>
        <CartProvider>
          {/* <Header /> */}
          {/* GLOBAL CART DRAWER (always available) */}
          {children}
          {/* {<CartDrawer/>} */}
          <footer>Footer</footer>
        </CartProvider>
      </body>
    </html>
  );
}