import { useUiStore } from "@/store/ui/ui.store";
import styles from "./FavoritesButton.module.css";

interface FavoritesButtonProps {
  productId: number;
  productRating: number;
}

export default function FavoritesButton({
  productId,
  productRating,
}: FavoritesButtonProps) {
  const favorites = useUiStore((state) => state.Favorites);
  const isFavorite = favorites.some(
    (product) => product.id === productId && product.fav
  );

  return (
    <div
      className={styles.favoriteButton}
      aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
    >
      {"★"} {productRating}
    </div>
  );
}
