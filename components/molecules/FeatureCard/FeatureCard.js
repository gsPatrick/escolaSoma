import Shape from "@/components/atoms/Shape/Shape";
import styles from "./FeatureCard.module.css";

/* Ficha didática: número grande, ícone num círculo, título e texto. */
export default function FeatureCard({ index, icon, title, text, tone = "white", size = "md", className = "" }) {
  const number = String(index).padStart(2, "0");
  return (
    <article className={`${styles.card} ${styles[tone]} ${styles[size]} ${className}`}>
      <span className={styles.number} aria-hidden="true">
        {number}
      </span>
      <span className={styles.icon} aria-hidden="true">
        <Shape type={icon} color="var(--soma-blue-deep)" />
      </span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </article>
  );
}
