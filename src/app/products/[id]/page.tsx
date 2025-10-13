import { getProductById } from "@/module/components/products/hooks/getProducts";
import ProductDetail from "@/module/components/products/productDetails/ProductDetails";
import ProductNotFound from "@/module/components/products/productNotFound/ProductNotFound";
import styles from "./page.module.css";
import GoBack from "@/module/ui/button/goBack/GoBack";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function DetailProductByIdPage({
  params,
}: ProductPageProps) {
  const { id } = await params; // Esperar la resolución de params
  if (!id) {
    return (
      <div className={styles.container}>
        <div className={styles.goBack}>
          <GoBack />
        </div>
        <ProductNotFound />
      </div>
    );
  }

  const productId = Number(id);
  if (isNaN(productId)) {
    return (
      <div className={styles.container}>
        <div className={styles.goBack}>
          <GoBack />
        </div>
        <ProductNotFound />
      </div>
    );
  }

  const product = await getProductById(productId);

  if (!product) {
    return (
      <div className={styles.container}>
        <div className={styles.goBack}>
          <GoBack />
        </div>
        <ProductNotFound />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.goBack}>
        <GoBack />
      </div>
      <ProductDetail product={product} />
    </div>
  );
}
