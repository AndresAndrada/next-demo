import { useUiStore } from "@/store/ui/ui.store";
import styles from "./FavoritesButton.module.css";

interface FavoritesButtonProps {
  productId: number;
}

export default function FavoritesButton({ productId }: FavoritesButtonProps) {
  const favorites = useUiStore((state) => state.Favorites);
  const toggleFavorite = useUiStore((state) => state.ToggleFavorite);
  const isFavorite = favorites.some(
    (product) => product.id === productId && product.fav
  );

  return (
    <button
      className={styles.favoriteButton}
      onClick={() => toggleFavorite(productId)}
      aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
    >
      {isFavorite ? "★" : "☆"}
    </button>
  );
}
