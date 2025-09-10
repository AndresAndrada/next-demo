import { getProductById } from "@/module/components/products/hooks/getProducts";
import ProductDetail from "@/module/components/products/productDetails/ProductDetails";
import ProductNotFound from "@/module/components/products/productNotFound/ProductNotFound";
import styles from "./page.module.css";
import GoBack from "@/module/ui/button/goBack/GoBack";

interface ProductPageProps {
  params: { id: number };
}

export default async function DetailProductByIdPage({
  params,
}: ProductPageProps) {
  if (!params?.id) return;
  const product = await getProductById(Number(params?.id));

  if (!product) {
    return (
      <div className={styles.notFound}>
        <GoBack />
        <ProductNotFound />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <GoBack />
      <ProductDetail product={product} />
    </div>
  );
}
