"use client";

import styles from "./GoBack.module.css";
import { useRouter } from "next/navigation";
import { IoChevronBack } from "react-icons/io5";

export default function GoBack() {
  const router = useRouter();
  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };
  return (
    <div className={styles.actions}>
      <div
        className={styles.backButton}
        onClick={handleBack}
        aria-label="Volver a la página anterior"
      >
        <IoChevronBack size={"22px"} className={styles.backIcon} /> Volver
      </div>
    </div>
  );
}
