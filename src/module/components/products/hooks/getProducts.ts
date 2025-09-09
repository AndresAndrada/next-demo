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
        resolve(product);
      }, 100);
    });
  } catch (error) {
    console.error("Error fetching products: ", error);
    
  }
}

export async function getProductName(name: string): Promise<Product[] | null | undefined> {
  try {
    return new Promise((resolve) => {
      setTimeout(() => {
        const products = mockProducts.filter((product) =>
          product.titulo.toLowerCase().includes(name.toLowerCase())
        );
        resolve(products);
      }, 100);
    });
  } catch (error) {
    console.error("Error fetching products by name: ", error);
    return null;
  }
}

export async function updateProductFav(id: number, status: boolean): Promise<Product | null> {
  try {
    return new Promise((resolve) => {
      setTimeout(() => {
        const productIndex = mockProducts.findIndex((p) => p.id === id);
        if (productIndex === -1) {
          resolve(null);
        } else {
          const updatedProduct = { ...mockProducts[productIndex], fav: status };
          mockProducts[productIndex] = updatedProduct;
          resolve(updatedProduct);
        }
      }, 100);
    });
  } catch (error) {
    console.error("Error updating product fav: ", error);
    return null;
  }
}