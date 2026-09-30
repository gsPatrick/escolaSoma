import styles from "./SumEquation.module.css";

/* SO(rriso) + MA(gico) = SOMA — o nome da escola como uma continha. */
export default function SumEquation({ className = "" }) {
  return (
    <figure className={`${styles.card} ${className}`}>
      <span className={styles.tape} aria-hidden="true" />
      <figcaption className={styles.label}>De onde vem o nosso nome?</figcaption>

      <div className={styles.row} role="img" aria-label="SO de Sorriso mais MA de Mágico é igual a SOMA">
        <div className={styles.term}>
          <span className={`${styles.block} ${styles.red}`}>SO</span>
          <span className={styles.word}>
            <b>So</b>rriso
          </span>
        </div>

        <span className={styles.op}>+</span>

        <div className={styles.term}>
          <span className={`${styles.block} ${styles.yellow}`}>MA</span>
          <span className={styles.word}>
            <b>Má</b>gico
          </span>
        </div>

        <span className={styles.op}>=</span>

        <div className={`${styles.term} ${styles.result}`}>
          <span className={`${styles.block} ${styles.blue}`}>
            <span className={styles.half}>SO</span>
            <span className={styles.half}>MA</span>
          </span>
          <span className={styles.word}>Escola SOMA</span>
        </div>
      </div>

      <p className={styles.note}>
        E soma, você sabe, é juntar. <strong>Família + escola + curiosidade</strong> — é assim que a gente aprende.
      </p>
    </figure>
  );
}
