import styles from "./page.module.css";
import ProductList from "@/module/components/products/productList/ProductList";
import { getProducts } from "@/module/components/products/hooks/getProducts";
import TitleComponent from "@/module/ui/TitleComponent";

export default async function Home() {
  const products = await getProducts();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.description}>
          <TitleComponent>SHOPPING CART</TitleComponent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            possimus. Ex, at. Voluptatem magnam inventore aliquid nostrum
            provident nisi veniam labore tenetur reprehenderit beatae molestiae,
            deleniti consectetur magni sequi quod!
          </p>
        </div>
        <div className={styles.container}>
          <ProductList initialProducts={products} />
        </div>
      </main>
    </div>
  );
}
