"use client";

import { useState, useEffect } from "react";
import styles from "./ProductList.module.css";
import { Product } from "@/lib/types";
import ProductCard from "../productCard/ProductCard";
import ProductNotFound from "../productNotFound/ProductNotFound";
import SearchInpunt from "@/module/ui/input/searchBar/SearchInpunt";
import { useProductStore, useUiStore } from "@/store";
import { getProductName } from "@/module/components/products/hooks/getProducts";
import WelcomeComponente from "@/module/ui/welcomeComponente/WelcomeComponente";
import { scrollToTop } from "@/utils/scrollToTop";

interface ProductListProps {
  initialProducts: Product[] | undefined;
}

export default function ProductList({ initialProducts }: ProductListProps) {
  const { Products, setProducts } = useProductStore();
  const { setFavoritesId, hasVisited, setHasVisited } = useUiStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(false);

  useEffect(() => {
    scrollToTop({ smooth: true });
    const storedState = localStorage.getItem("ui-storage");
    let isVisited = hasVisited;
    try {
      const parsedState = storedState ? JSON?.parse(storedState) : null;
      isVisited = parsedState?.state?.hasVisited || false;
    } catch (error) {
      console.error("Error parsing ui-storage:", error);
    }
    if (!isVisited) {
      setIsWelcomeOpen(true);
      setHasVisited(true);
    }
  }, [hasVisited, setHasVisited]);

  const hableOpenModalWelcome = () => {
    setIsWelcomeOpen(false);
  };

  useEffect(() => {
    try {
      if (initialProducts) {
        setProducts(initialProducts);
        const initialFavorites =
          initialProducts.filter((p) => p.fav).map((p) => p.id) || [];
        setFavoritesId(initialFavorites);
      }
    } catch (error) {
      console.error("Error initializing products:", error);
    } finally {
      setLoading(false);
    }
  }, [initialProducts, setProducts, setFavoritesId]);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (!searchTerm) {
        setProducts(initialProducts || []);
        setLoading(false);
        return;
      }
      try {
        const filtered = await getProductName(searchTerm);
        setProducts(filtered || []);
      } catch (error) {
        console.error("Error filtering products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchTerm, initialProducts, setProducts]);

  return (
    <div className={styles.productListContainer}>
      <SearchInpunt setSearchTerm={setSearchTerm} />
      {loading ? (
        <div className={styles.loading}>Cargando...</div>
      ) : Products.length === 0 ? (
        <div className={styles.productNotFound}>
          <ProductNotFound />
        </div>
      ) : (
        <div className={styles.productGrid}>
          {Products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      <WelcomeComponente
        isOpen={isWelcomeOpen}
        onClose={hableOpenModalWelcome}
      />
    </div>
  );
}
