import { getProductById } from "@/module/components/products/hooks/getProducts";
import ProductDetail from "@/module/components/products/productDetails/ProductDetails";

interface ProductPageProps {
  params: { id: number };
}

export default async function DetailProductByIdPage({
  params,
}: ProductPageProps) {
  const product = await getProductById(Number(params.id));
  console.log("🚀 ~ DetailProductByIdPage ~ product:", product);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return <ProductDetail product={product} />;
}
