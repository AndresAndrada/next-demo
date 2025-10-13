"use client";

import { useCartStore } from "@/store";
import styles from "./page.module.css";
import PaymentComponent from "@/module/components/products/paymentComponent/PaymentComponent";
import GoBack from "@/module/ui/button/goBack/GoBack";
import ProductNotFound from "@/module/components/products/productNotFound/ProductNotFound";

export default function FavoritePage() {
  const { items } = useCartStore();

  if (items.length === 0) {
    return (
      <div className={styles.notFound}>
        <div className={styles.goBack}>
          <GoBack />
        </div>
        <ProductNotFound />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.goBack}>
        <GoBack />
      </div>
      <div className={styles.headerFavorite}>
        <h1>Carrito de compras</h1>
      </div>
      <div className={styles.containerPayment}>
        {items.map((p) => (
          <PaymentComponent key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
