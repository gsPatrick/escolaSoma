import Button from "@/components/atoms/Button/Button";
import Shape from "@/components/atoms/Shape/Shape";
import styles from "./UnderReview.module.css";

const STEPS = [
  { label: "Pesquisa e conteúdo", state: "done" },
  { label: "Design e identidade visual", state: "done" },
  { label: "Aprovação da escola", state: "current" },
  { label: "Publicação", state: "todo" },
];

function Check() {
  return (
    <svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true">
      <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Folha de caderno com carimbo de "em validação" */
export default function UnderReview({ name }) {
  return (
    <section className={styles.section} aria-labelledby="review-title">
      <div className={styles.paper} aria-hidden="true" />
      <Shape type="star" color="var(--soma-yellow)" className={`${styles.deco} ${styles.star}`} />
      <Shape type="squiggle" color="var(--soma-red)" className={`${styles.deco} ${styles.squiggle}`} />
      <Shape type="quarter" color="var(--soma-blue)" className={`${styles.deco} ${styles.quarter}`} />

      <div className="container">
        <article className={styles.sheet}>
          <span className={styles.tape} aria-hidden="true" />
          <div className={styles.margin} aria-hidden="true" />

          <p className={styles.pageName}>
            <Shape type="magnifier" color="var(--soma-red)" className={styles.pageIcon} />
            {name}
          </p>

          <h1 id="review-title" className={styles.title}>
            Esta página está <span className={styles.accent}>em aprovação!</span>
          </h1>

          <p className={styles.text}>
            Estamos finalizando e validando este conteúdo junto com a equipe da Escola SOMA. Em breve ele
            estará aqui — com todo o capricho que as nossas famílias merecem.
          </p>

          <div className={styles.homework}>
            <p className={styles.homeworkTitle}>Lição de casa desta página</p>
            <ol className={styles.steps}>
              {STEPS.map((s) => (
                <li key={s.label} className={styles[s.state]}>
                  <span className={styles.box} aria-hidden="true">
                    {s.state === "done" && <Check />}
                  </span>
                  <span>{s.label}</span>
                  {s.state === "current" && <em className={styles.now}>em andamento</em>}
                </li>
              ))}
            </ol>
          </div>

          <div className={styles.actions}>
            <Button href="/" size="lg">
              Voltar para o início
            </Button>
            <Button href="/#unidades" size="lg" variant="secondary">
              Conhecer as unidades
            </Button>
          </div>

          {/* carimbo de professor */}
          <div className={styles.stamp} aria-hidden="true">
            <span>Em validação</span>
            <small>Escola SOMA</small>
          </div>
        </article>
      </div>
    </section>
  );
}
