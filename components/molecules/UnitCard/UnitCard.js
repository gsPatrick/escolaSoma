import Button from "@/components/atoms/Button/Button";
import Shape from "@/components/atoms/Shape/Shape";
import styles from "./UnitCard.module.css";

function Pin() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
        fill="currentColor"
      />
      <circle cx="12" cy="10" r="2.6" fill="var(--pin-hole, #fff)" />
    </svg>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
      <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* theme: "light" (papel quadriculado) | "dark" (azul quadriculado) */
export default function UnitCard({ unit }) {
  const { theme = "light" } = unit;

  return (
    <article className={`${styles.card} ${styles[theme]}`} style={{ "--unit": unit.color }}>
      <div className={styles.photos}>
        {unit.photos.map((p, i) => (
          <figure key={p.src} className={`${styles.photo} ${i === 0 ? styles.photoMain : ""}`}>
            <img src={p.src} alt={p.alt} loading="lazy" />
          </figure>
        ))}
        <span className={styles.badge}>
          <Shape type={unit.shape} color="var(--soma-blue-deep)" className={styles.badgeShape} />
        </span>
      </div>

      <div className={styles.body}>
        <p className={styles.kicker}>Unidade</p>
        <h3 className={styles.name}>{unit.name}</h3>
        <p className={styles.question}>{unit.question}</p>
        <p className={styles.text}>{unit.text}</p>

        <dl className={styles.facts}>
          {unit.facts.map((f) => (
            <div key={f.label} className={styles.fact}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>

        <p className={styles.listTitle}>Estrutura</p>
        <ul className={styles.list}>
          {unit.structure.map((s) => (
            <li key={s}>
              <span className={styles.check}>
                <Check />
              </span>
              {s}
            </li>
          ))}
        </ul>

        <div className={styles.footer}>
          <a href={unit.mapsHref} target="_blank" rel="noopener noreferrer" className={styles.address}>
            <span className={styles.pin}>
              <Pin />
            </span>
            <span>
              {unit.address}
              <small>Ver no mapa</small>
            </span>
          </a>
          <Button href="/#visita" size="md" variant={theme === "dark" ? "secondary" : "primary"}>
            Agendar visita
          </Button>
        </div>
      </div>
    </article>
  );
}
