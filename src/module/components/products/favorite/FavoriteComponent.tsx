"use client";

import { scrollToTop } from "@/utils/scrollToTop";
import { Product } from "@/lib/types";
import { useEffect } from "react";
import styles from "./FavoriteComponent.module.css";
import ProductCard from "../productCard/ProductCard";

interface FavoriteProps {
  product: Product;
}

export default function FavoriteComponent({ product }: FavoriteProps) {
  useEffect(() => {
    scrollToTop({ smooth: true });
  }, []);

  return (
    <div className={styles.containerFavorite}>
      <div className={styles.container}>
        <div className={styles.productCard}></div>
        <ProductCard product={product} />
      </div>
    </div>
  );
}
