import { useProductStore } from "@/store";
import SubTitleComponent from "../../SubTitleComponent";
import styles from "./SearchComponent.module.css";

interface SearchInputProps {
  setSearchTerm: (term: string) => void;
}

export default function SearchInpunt({ setSearchTerm }: SearchInputProps) {
  const { Products } = useProductStore((store) => store);

  return (
    <div className={styles.searchContainer}>
      <SubTitleComponent>Buscar</SubTitleComponent>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Ingrese un nombre"
          className={styles.searchInput}
          aria-label="Buscar productos por nombre"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <p className={styles.quantityProducto}>{Products?.length} productos</p>
        {/* <button className={styles.searchButton} aria-label="Buscar">
          Buscar
        </button> */}
      </div>
    </div>
  );
}
