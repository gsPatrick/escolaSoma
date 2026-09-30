import Link from "next/link";
import Eyebrow from "@/components/atoms/Eyebrow/Eyebrow";
import Reveal from "@/components/atoms/Reveal/Reveal";
import Shape from "@/components/atoms/Shape/Shape";
import SumEquation from "@/components/molecules/SumEquation/SumEquation";
import Timeline from "@/components/molecules/Timeline/Timeline";
import styles from "./About.module.css";

/* Fontes: escolasoma.com.br/historia.php · Manual da Família 2018 ·
   Portal Abrantes (nov/2019 e set/2021) · Instagram @escolasoma */
const MILESTONES = [
  {
    year: "1997",
    place: "Baixa de Quintas · Salvador",
    text: "Nasce o Sorriso Mágico, sonho da professora Débora Melo — só com Educação Infantil.",
    shape: "star",
    color: "var(--soma-yellow)",
    shapeColor: "var(--soma-blue-deep)",
  },
  {
    year: "2000",
    place: "Barbalho · Salvador",
    text: "Mudamos de casa e as turmas crescem: chega o Ensino Fundamental.",
    shape: "quarter",
    color: "var(--soma-red)",
  },
  {
    year: "2004",
    place: "Vila de Abrantes",
    text: "A escola chega a Abrantes, em Camaçari — e cria raízes por aqui.",
    shape: "smile",
    color: "var(--soma-blue)",
  },
  {
    year: "2021",
    place: "Ensino Médio",
    text: "Nasce o Novo Ensino Médio SOMA, com foco no projeto de vida de cada jovem.",
    shape: "cap",
    color: "var(--seg-medio)",
    shapeColor: "var(--soma-blue-deep)",
  },
  {
    year: "Hoje",
    place: "Soma Vila + Soma Garden",
    text: "Duas unidades em Abrantes, do Grupo 2 ao Ensino Médio.",
    shape: "sparkles",
    color: "var(--unit-garden)",
    shapeColor: "var(--soma-blue-deep)",
  },
];

export default function About() {
  return (
    <section id="historia" className={styles.about} aria-labelledby="about-title">
      <Shape type="sparkles" color="var(--soma-yellow)" className={`${styles.deco} ${styles.decoSparkles}`} />
      <Shape type="half" color="var(--seg-infantil)" className={`${styles.deco} ${styles.decoHalf}`} />

      <div className="container">
        <div className={styles.intro}>
          <div className={styles.copy}>
            <Reveal>
              <Eyebrow>Nossa história</Eyebrow>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 id="about-title" className={styles.title}>
                Um <span className={styles.accent}>sorriso mágico</span> que cresce com Abrantes desde 1997.
              </h2>
            </Reveal>

            <Reveal delay={0.16} className={styles.body}>
              <p>
                Tudo começou com o sonho de uma professora apaixonada pelo que faz, <strong>Débora Melo</strong>:
                uma escolinha de Educação Infantil na Baixa de Quintas, em Salvador, com um nome que já dizia
                tudo — <strong>Sorriso Mágico</strong>. As turmas cresceram, a escola cresceu junto, e o sorriso
                encontrou casa em Abrantes, onde hoje somos duas unidades.
              </p>
              <p>
                Nossa proposta pedagógica nasceu de muita conversa com a comunidade escolar: olhar para as
                dificuldades, celebrar os acertos e construir, juntos, caminhos democráticos para uma educação de
                qualidade.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <Link href="/a-escola#proposta" className={styles.link}>
                Conheça nossa proposta pedagógica
                <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
                  <path
                    d="M4 10h11M11 5l5 5-5 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.2} className={styles.equation}>
            <SumEquation />
          </Reveal>
        </div>

        <Reveal className={styles.timelineWrap}>
          <h3 className={styles.timelineTitle}>
            Nosso caminho até aqui
            <Shape type="squiggle" color="var(--soma-yellow)" className={styles.timelineSquiggle} />
          </h3>
          <Timeline items={MILESTONES} />
        </Reveal>
      </div>
    </section>
  );
}
