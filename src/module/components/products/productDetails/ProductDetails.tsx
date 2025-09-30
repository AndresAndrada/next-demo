"use client";

import Image from "next/image";
import { Product } from "@/lib/types";
import styles from "./ProductDetail.module.css";
import { useCartStore } from "@/store";
import Link from "next/link";
import { useEffect } from "react";
import { scrollToTop } from "@/utils/scrollToTop";
import toast from "react-hot-toast";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { addItem } = useCartStore();

  useEffect(() => {
    scrollToTop({ smooth: true });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.titleContainer}>
          <h5 className={styles.titleName}>{product.titulo}</h5>
          <p className={styles.description}>$ {product.precio}</p>
        </div>
        <div className={styles.imagewrappert}>
          <Image
            src={product.imagen}
            alt={product.titulo}
            width={400}
            height={400}
            className={styles.image}
          />
        </div>
        <div className={styles.descriptionContainer}>
          <h5 className={styles.titleDescription}>Descripción</h5>
          <p className={styles.description}>{product.descripcion}</p>
        </div>
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.details}>
          <h1 className={styles.title}>{product.titulo}</h1>
          <div className={styles.rating}>
            {"★".repeat(Math.floor(product.rating))}
            {"☆".repeat(5 - Math.floor(product.rating))}{" "}
            <span className={styles.ratingNumber}>{product.rating}</span>
          </div>
          <p className={styles.price}>
            Clacificación {product.rating} de 5 estrellas
          </p>
          <p className={styles.price}>${product.precio}</p>
          <div>
            <p className={styles.detailsItems}>Ver los medios de pago</p>
            <p className={styles.detailsItems}>Llega gratis hoy</p>
          </div>
          <div>
            <p className={styles.detailsItems}>Mas formas de entrega</p>
            <p className={styles.detailsItems}>Devolucion gratis</p>
          </div>
          <div>
            <p className={styles.detailsItems}>
              Tenes 30 días desde que lo recibis.
            </p>
          </div>
          <div>
            <Link href={"/"} className={styles.detailsLink}>
              Conocer más
            </Link>
          </div>
        </div>
        <div className={styles.actions}>
          <button
            className={styles.addToCart}
            onClick={() => {
              addItem(product);
              toast.success("Producto agregado correctamente", {
                duration: 2000,
                position: "top-center",
              });
            }}
            aria-label={`Agregar ${product.titulo} al carrito`}
          >
            Comprar
          </button>
          {/* <FavoritesButton productId={product.id} /> */}
        </div>
      </div>
    </div>
  );
}
