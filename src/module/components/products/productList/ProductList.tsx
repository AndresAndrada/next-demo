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

interface ProductListProps {
  initialProducts: Product[] | undefined;
}

export default function ProductList({ initialProducts }: ProductListProps) {
  const { Products, setProducts } = useProductStore();
  const { HasVisited, setHasVisited } = useUiStore();
  const { setFavoritesId } = useUiStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [isWelcomeOpen, setIsWelcomeOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log("🚀 ~ ProductList ~ hasVisited:", HasVisited);
    if (!HasVisited) {
      setIsWelcomeOpen(true);
      setHasVisited(true);
    }
  }, [HasVisited, setHasVisited]);

  useEffect(() => {
    try {
      if (initialProducts) {
        setProducts(initialProducts);
        const initialFavorites = initialProducts
          .filter((p) => p.fav)
          .map((p) => p.id);
        setFavoritesId(initialFavorites);
      }
    } catch (error) {
      console.error("Error filtering products:", error);
    } finally {
      setLoading(false);
    }
  }, [initialProducts, setProducts, setFavoritesId]);

  useEffect(() => {
    setLoading(true);
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
        onClose={() => setIsWelcomeOpen(false)}
      />
    </div>
  );
}
