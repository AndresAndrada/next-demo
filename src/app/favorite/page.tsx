import FavoriteComponent from "@/module/components/products/favorite/FavoriteComponent";
import products from "@/lib/articles.json";
import { Product } from "@/lib/types";

export default function FavoritePage() {
  const favorites = (products as Product[]).filter((p) => p.fav === true);

  if (favorites.length === 0) {
    return <div>No hay productos favoritos.</div>;
  }

  return (
    <>
      {favorites.map((p) => (
        <FavoriteComponent key={p.id} product={p} />
      ))}
    </>
  );
}
