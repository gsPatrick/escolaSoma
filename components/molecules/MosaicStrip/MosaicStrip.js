import Shape from "@/components/atoms/Shape/Shape";
import styles from "./MosaicStrip.module.css";

/* Faixa de azulejos — a mesma linguagem das bordas dos posts do Instagram.
   Cada azulejo: cor de fundo + forma + posição da forma. */
const TILES = [
  { bg: "var(--soma-sky)", shape: "star", color: "var(--soma-yellow)", fit: "center" },
  { bg: "var(--soma-cream)", shape: "quarter", color: "var(--soma-red)", fit: "corner" },
  { bg: "var(--soma-blue)", shape: "smile", color: "var(--soma-sky)", fit: "center" },
  { bg: "var(--soma-red)", shape: "magnifier", color: "#fff", fit: "center" },
  { bg: "var(--soma-blue)", shape: "cap", color: "var(--soma-yellow)", fit: "center" },
  { bg: "var(--soma-sky)", shape: "half", color: "var(--soma-yellow)", fit: "bottom" },
  { bg: "var(--soma-cream)", shape: "sparkles", color: "var(--soma-red)", fit: "center" },
  { bg: "var(--soma-yellow)", shape: "circle", color: "var(--soma-blue)", fit: "small" },
  { bg: "var(--soma-blue)", shape: "star", color: "var(--soma-cream)", fit: "center" },
  { bg: "var(--soma-sky)", shape: "quarter", color: "var(--soma-blue)", fit: "corner" },
];

function Tile({ tile }) {
  return (
    <li className={styles.tile} style={{ background: tile.bg }}>
      <Shape type={tile.shape} color={tile.color} className={`${styles.shape} ${styles[tile.fit]}`} />
    </li>
  );
}

export default function MosaicStrip({ className = "" }) {
  return (
    <div className={`${styles.strip} ${className}`} aria-hidden="true">
      <ul className={styles.track}>
        {[...TILES, ...TILES, ...TILES, ...TILES].map((t, i) => (
          <Tile key={i} tile={t} />
        ))}
      </ul>
    </div>
  );
}
