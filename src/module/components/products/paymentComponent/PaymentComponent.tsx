import { Product } from "@/lib/types";
import styles from "./PaymentComponent.module.css";
import ProductCard from "../productCard/ProductCard";

interface PaymentProps {
  product: Product;
}

export default function PaymentComponent({ product }: PaymentProps) {
  return (
    <div className={styles.containerFavorite}>
      <div className={styles.container}>
        <div className={styles.productCard}></div>
        <ProductCard product={product} />
      </div>
    </div>
  );
}
