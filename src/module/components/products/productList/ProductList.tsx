"use client";

import { useState, useEffect } from "react";
import styles from "./ProductList.module.css";
import { Product } from "@/lib/types";
import ProductCard from "../productCard/ProductCard";
import ProductNotFound from "../productNotFound/ProductNotFound";
import SearchInpunt from "@/module/ui/input/searchBar/SearchInpunt";
import { useProductStore } from "@/store";

interface ProductListProps {
  initialProducts: Product[] | undefined;
}

export default function ProductList({ initialProducts }: ProductListProps) {
  // const [products, setProducts] = useState<Product[]>(initialProducts || []);
  const { setProducts, Products } = useProductStore((store) => store);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  setProducts(initialProducts);
  console.log("🚀 ~ ProductList ~ Products:", Products);

  // useEffect(() => {
  //   setLoading(true);
  //   const timeout = setTimeout(() => {
  //     if (!initialProducts) {
  //       setProducts([]);
  //       setLoading(false);
  //       return;
  //     }
  //     const filtered = initialProducts.filter((product) =>
  //       product.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //     setProducts(filtered);
  //     setLoading(false);
  //   }, 500);

  //   return () => clearTimeout(timeout);
  // }, [searchTerm, setProducts, initialProducts]);

  return (
    <div className={styles.productListContainer}>
      {/* Grid de productos */}
      {loading ? (
        <div className={styles.loading}>Cargando...</div>
      ) : Products?.length === 0 ? (
        <>
          <div>
            <SearchInpunt setSearchTerm={setSearchTerm} />
          </div>
          <div className={styles.productNotFound}>
            <ProductNotFound />
          </div>
        </>
      ) : (
        <>
          <SearchInpunt setSearchTerm={setSearchTerm} />
          <div className={styles.productGrid}>
            {initialProducts?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
