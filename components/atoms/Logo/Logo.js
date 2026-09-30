import Link from "next/link";
import styles from "./Logo.module.css";

/* Lockup horizontal: símbolo S + wordmark "Escola Soma".
   Os PNGs foram recortados do logo oficial com fundo removido. */
export default function Logo({ className = "" }) {
  return (
    <Link href="/" className={`${styles.logo} ${className}`} aria-label="Escola SOMA — início">
      <img src="/brand/simbolo-s.png" alt="" className={styles.symbol} width="144" height="121" />
      <img src="/brand/wordmark.png" alt="" className={styles.wordmark} width="336" height="89" />
    </Link>
  );
}
