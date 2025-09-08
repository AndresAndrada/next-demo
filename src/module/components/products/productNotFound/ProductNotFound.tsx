import styles from "./ProductNotFound.module.css";
import { MdOutlineErrorOutline } from "react-icons/md";

export default function ProductNotFound() {
  return (
    <div className={styles.card}>
      <div className={styles.imagePlaceholder}>
        <MdOutlineErrorOutline size="100px" color="orange" />
      </div>
      <div className={styles.headLineContainer}>
        <h3 className={styles.headline}>No se encontraron productos</h3>
      </div>
      <p className={styles.description}>
        No hay productos que coincidan con tu busqueda.
      </p>
      <p className={styles.description}>
        Intenta ajustar tus filtros o verificar que el nombre que estás buscando
        sea correcto
      </p>
      {/* <FavoritesButton productId={product.id} /> */}
    </div>
  );
}
