import { Product } from '@/lib/types';
import { create } from 'zustand';

// Definimos la interfaz para el estado de la tienda
interface UiStore {
  Favorites: Product[];
  ToggleFavorite: (productId: number) => void;
  setFavorites: (values: Product[]) => void;

}

// Creamos la tienda con Zustand y tipamos el estado
export const useUiStore = create<UiStore>((set) => ({
  Favorites: [],
  ToggleFavorite: (productId: number) => {
    set((state) => ({
      Favorites: state.Favorites.map(product =>
        product.id === productId ? { ...product, fav: !product.fav } : product
      )
    }));
  },
  setFavorites: (values: Product[]) => set({ Favorites: values }),
})); 