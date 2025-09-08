import { Product } from '@/lib/types';
import { create } from 'zustand';


// Definimos la interfaz para el estado de la tienda
interface ProductStore {
  DataPerfilProduct:  Product | null; // Cambiado de Product a Product[] para consistencia
  Products: Product[];
  DetailsProduct: Product | null; // Reemplaza con una interfaz específica si la tienes
  TotalProductsPages: number;
  CurrentProductsPage: number;
  SelectedTab: string;
  ProductById: Record<string, Product>; // Reemplaza con una interfaz específica si la tienes
  ConsumerProducts: string;
  Carrito: Record<string, string | number | Product>[]; // Cambiado a un objeto para detalles del carrito

  // Métodos para actualizar el estado
  setProducts: (values: Product[]) => void;
  setDataPerfilProduct: (values: Product) => void;
  setDetailsProduct: (values: Product) => void;
  setProductById: (values: Record<string, Product>) => void;
  setTotalProductsPages: (totalPages: number) => void;
  setCurrentProductsPage: (page: number) => void;
  setSelectedTab: (tab: string) => void;
  setConsumerProducts: (consumer: string) => void;
  setCarrito: (consumer: Record<string, string | number | Product>[]) => void;
}

// Creamos la tienda con Zustand y tipamos el estado
export const useProductStore = create<ProductStore>((set) => ({
  DataPerfilProduct: null,
  Products: [],
  DetailsProduct: null,
  TotalProductsPages: 0,
  CurrentProductsPage: 1,
  SelectedTab: '',
  ProductById: {},
  ConsumerProducts: 'Minorista',
  Carrito: [],

  setProducts: (values: Product[]) => set({ Products: values }),
  setDataPerfilProduct: (values: Product) => set({ DataPerfilProduct: values }),
  setDetailsProduct: (values) => set({ DetailsProduct: values }),
  setProductById: (values) => set({ ProductById: values }),
  setTotalProductsPages: (totalPages) =>
    set((prevState: ProductStore) => ({ ...prevState, TotalProductsPages: totalPages })),
  setCurrentProductsPage: (page) =>
    set((prevState: ProductStore) => ({ ...prevState, CurrentProductsPage: page })),
  setSelectedTab: (tab) =>
    set((prevState: ProductStore) => ({ ...prevState, SelectedTab: tab })),
  setConsumerProducts: (consumer) =>
    set((prevState: ProductStore) => ({ ...prevState, ConsumerProducts: consumer })),
  setCarrito: (values) => set({ Carrito: values }),
}));