import Link from "next/link";
import styles from "./ProductCard.module.css";
import { Product } from "@/lib/types";
import Image from "next/image";
import { useUiStore } from "@/store";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { updateProductFav } from "../hooks/getProducts";
import FavoritesButton from "@/module/ui/button/FavoritesButton";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { ToggleFavorite, isFavorite } = useUiStore();

  const handleFavorite = async () => {
    const newStatus = !product.fav;
    const updatedProduct = await updateProductFav(product.id, newStatus);
    console.log("🚀 ~ handleFavorite ~ updatedProduct:", updatedProduct);
    if (updatedProduct) {
      ToggleFavorite(product.id, product);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.imagePlaceholder}>
        {product?.imagen ? (
          <Image
            src={product.imagen}
            alt={product.titulo}
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 1200px) 33vw, 25vw"
            style={{ objectFit: "contain" }}
          />
        ) : (
          <span>No hay imagen</span>
        )}
      </div>
      <div className={styles.headLineContainer}>
        <Link href={`/products/${product.id}`} className={styles.headline}>
          {product.titulo}
        </Link>
        <FavoritesButton
          productId={product.id}
          productRating={product.rating}
        />
      </div>
      <p className={styles.category}>{product.categoria}</p>
      <p className={styles.description}>{product.descripcion}</p>
      <p className={styles.price}>${product.precio}</p>
      <button
        className={styles.favoriteButton}
        onClick={handleFavorite}
        aria-label={
          product.fav ? "Quitar de favoritos" : "Marcar como favorito"
        }
      >
        {isFavorite(product.id) ? (
          <FaHeart className={styles.favoriteIcon} />
        ) : (
          <FaRegHeart className={styles.favoriteIcon} />
        )}{" "}
      </button>
    </div>
  );
}
