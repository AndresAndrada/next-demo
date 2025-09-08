import { Product } from "@/lib/types";
import mockProducts from "@/lib/articles.json";

export async function getProducts(): Promise<Product[] | undefined> {
  try {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProducts);
      }, 1000); 
    });
  } catch (error) {
    console.error("Error fetching products: ", error);
  }
}

export async function getProductById(id: number): Promise<Product | undefined | null> {
  try {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = mockProducts.find((p) => p.id === id) || null;
        console.log("🚀 ~ getProductById ~ product:", product)
        resolve(product);
      }, 500);
    });
  } catch (error) {
    console.error("Error fetching products: ", error);
    
  }
}

export async function getProductName(name: string): Promise<Product | undefined | null> {
  try {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = mockProducts.find((p) => p.titulo === name) || null;
        console.log("🚀 ~ getProductById ~ product:", product)
        resolve(product);
      }, 500);
    });
  } catch (error) {
    console.error("Error fetching products: ", error);
    
  }
}