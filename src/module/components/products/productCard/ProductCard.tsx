import Link from "next/link";
import styles from "./ProductCard.module.css";
import { Product } from "@/lib/types";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imagePlaceholder}>
        <Image
          src={product.imagen}
          alt={product.titulo}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1200px) 33vw, 25vw"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className={styles.headLineContainer}>
        <Link href={`/products/${product.id}`} className={styles.headline}>
          {product.titulo}
        </Link>
        <div className={styles.rating}>
          {"★"} {product.rating}
          {/* {"☆".repeat(5 - Math.floor(product.rating))} */}
        </div>
      </div>
      <p className={styles.category}>{product.categoria}</p>
      {/* <p className={styles.subhead}>{product.subhead}</p> */}
      <p className={styles.description}>{product.descripcion}</p>
      <p className={styles.price}>${product.precio}</p>
      {/* <FavoritesButton productId={product.id} /> */}
    </div>
  );
}
