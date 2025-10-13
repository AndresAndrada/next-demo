"use client";

import Link from "next/link";
import styles from "./NavBar.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useCartStore, useUiStore } from "@/store";
import ShoppingCartPopup from "../shoppingCart/ShoppingCartPopup";
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa";

export default function NavBar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const distinctCartItems = useCartStore((state) => state.getDistinctCount());
  const [isMounted, setIsMounted] = useState(false);
  const { theme, toggleTheme } = useUiStore();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          Mi Tienda
        </Link>
        <div className={styles.cartContainer}>
          <Link href={"/favorite"} className={styles.itemNavbar}>
            Favorite
          </Link>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`Cambiar a modo ${
              theme === "light" ? "oscuro" : "claro"
            }`}
          >
            {theme === "light" ? (
              <MdDarkMode size={"22px"} />
            ) : (
              <FaSun size={"22px"} />
            )}
          </button>
          <div
            className={styles.cartIcon}
            onClick={() => setIsCartOpen(true)}
            aria-label={
              isMounted
                ? `Abrir carrito con ${distinctCartItems} productos distintos`
                : `Abrir carrito`
            }
          >
            <FaShoppingCart size={"22px"} />
            {isMounted && distinctCartItems > 0 && (
              <span className={styles.cartCount}>{distinctCartItems}</span>
            )}
          </div>
          <ShoppingCartPopup
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
          />
        </div>
      </nav>
    </header>
  );
}
