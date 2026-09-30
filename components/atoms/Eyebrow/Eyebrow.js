import Shape from "@/components/atoms/Shape/Shape";
import styles from "./Eyebrow.module.css";

/* Etiqueta de seção — "carimbo" pequeno com uma forma da marca */
export default function Eyebrow({ children, shape = "star", color = "var(--soma-red)", className = "" }) {
  return (
    <p className={`${styles.eyebrow} ${className}`}>
      <Shape type={shape} color={color} className={styles.icon} />
      {children}
    </p>
  );
}
