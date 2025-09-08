"use client";

import { useRef, useEffect } from "react";
import styles from "./WelcomeComponente.module.css";

interface WelcomeComponenteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WelcomeComponente({
  isOpen,
  onClose,
}: WelcomeComponenteProps) {
  const popupRef = useRef<HTMLDivElement>(null);

  // Close popup on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div
        className={styles.popup}
        role="dialog"
        aria-label="Welcome"
        ref={popupRef}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>¡Bienvenido a esta Tieda! 🚀</h2>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Cerrar ventana de bienvenida"
          >
            ✕
          </button>
        </div>
        <div className={styles.content}>
          <p>
            Explora la aplicación seleccionando productos, marcando aquellos que
            consideras favoritos, explorando cada detalle de cada producto y
            agregandolos al carrito.
          </p>
          <button
            className={styles.startShoppingButton}
            onClick={onClose}
            aria-label="Empezar a comprar"
          >
            Empezar ...
          </button>
        </div>
      </div>
    </div>
  );
}
