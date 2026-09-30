import Shape from "@/components/atoms/Shape/Shape";
import styles from "./SloganBand.module.css";

/* Bordão da escola numa faixa reta, com azulejos da marca nas pontas
   (mesma linguagem das bordas dos posts do Instagram). */
const LEFT = [
  { bg: "var(--soma-blue)", shape: "smile", color: "var(--soma-sky)", fit: "center" },
  { bg: "var(--soma-cream)", shape: "quarter", color: "var(--soma-red)", fit: "corner" },
];
const RIGHT = [
  { bg: "var(--soma-red)", shape: "star", color: "var(--soma-yellow)", fit: "center" },
  { bg: "var(--soma-blue)", shape: "sparkles", color: "var(--soma-cream)", fit: "center" },
];

function Tiles({ tiles }) {
  return (
    <div className={styles.tiles} aria-hidden="true">
      {tiles.map((t, i) => (
        <span key={i} className={styles.tile} style={{ background: t.bg }}>
          <Shape type={t.shape} color={t.color} className={`${styles.tileShape} ${styles[t.fit]}`} />
        </span>
      ))}
    </div>
  );
}

export default function SloganBand() {
  return (
    <section id="gente-feliz" className={styles.band} aria-labelledby="slogan">
      <div className={styles.strip}>
        <Tiles tiles={LEFT} />

        <p id="slogan" className={styles.slogan}>
          <span className={styles.small}>O Soma é lugar de</span>
          <span className={styles.big}>
            gente feliz
            <span className={styles.bang}>!</span>
            <svg viewBox="0 0 200 30" className={styles.smileLine} aria-hidden="true" preserveAspectRatio="none">
              <path d="M6 6C50 30 150 30 194 6" />
            </svg>
          </span>
        </p>

        <Tiles tiles={RIGHT} />
      </div>
    </section>
  );
}
