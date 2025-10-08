import FavoriteComponent from "@/module/components/products/favorite/FavoriteComponent";
import products from "@/lib/articles.json";
import { Product } from "@/lib/types";
import styles from "./page.module.css";

export default function FavoritePage() {
  const favorites = (products as Product[]).filter((p) => p.fav === true);

  if (favorites.length === 0) {
    return <div>No hay productos favoritos.</div>;
  }

  return (
    <div className={styles.containerFavorite}>
      <div className={styles.headerFavorite}>
        <h1>Favoritos</h1>
      </div>
      <div className={styles.favorites}>
        {favorites.map((p) => (
          <FavoriteComponent key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
