import Button from "@/components/atoms/Button/Button";
import Eyebrow from "@/components/atoms/Eyebrow/Eyebrow";
import Reveal from "@/components/atoms/Reveal/Reveal";
import Shape from "@/components/atoms/Shape/Shape";
import FeatureCard from "@/components/molecules/FeatureCard/FeatureCard";
import styles from "./Differentials.module.css";

/* Fonte: posts "O que seu filho vive por aqui?" e "O que torna essa unidade
   especial?" (Instagram @escolasoma) + página "Diferencial" do site antigo. */
const FEATURES = [
  {
    key: "socio",
    icon: "people",
    tone: "yellow",
    size: "lg",
    title: "Metodologia sócio-interacionista",
    text: "A criança aprende na troca — com os colegas, com o professor e com o mundo à sua volta. É a base de toda a nossa proposta, do Grupo 2 ao Ensino Médio.",
  },
  {
    key: "bilingue",
    icon: "globe",
    tone: "white",
    title: "Projeto bilíngue no dia a dia",
    text: "O inglês faz parte da rotina. Na Soma Garden, o CCAA já vem incluso no turno regular.",
  },
  {
    key: "pleno",
    icon: "heart",
    tone: "pink",
    title: "Educação socioemocional com o Programa Pleno",
    text: "Emoções também se aprendem: autoconhecimento, empatia e convivência trabalhados em sala.",
  },
  {
    key: "acompanhamento",
    icon: "magnifier",
    tone: "mint",
    title: "Acompanhamento pedagógico segmentado",
    text: "Coordenação dedicada a cada etapa, olhando de perto o desenvolvimento de cada aluno.",
  },
  {
    key: "apoio",
    icon: "bubble",
    tone: "cream",
    title: "Orientadora educacional e assistente social",
    text: "Escuta, apoio ao desenvolvimento pessoal e aconselhamento para alunos e famílias.",
  },
  {
    key: "equipe",
    icon: "star",
    tone: "sky",
    title: "Equipe qualificada, presente e acolhedora",
    text: "Professores graduados — a maioria com pós-graduação — perto dos alunos todos os dias.",
  },
  {
    key: "isaac",
    icon: "phone",
    tone: "white",
    size: "wide",
    title: "Parceria com o sistema isaac",
    text: "Mensalidades e rotina financeira mais práticas: tudo no celular, sem complicação para as famílias.",
  },
];

const PHOTOS = {
  lupa: { src: "/photos/garden-lupa.jpg", alt: "Professora e alunas brincando de detetive com lupas", caption: "Curiosidade é o nosso material escolar" },
  coral: { src: "/photos/garden-coral.jpg", alt: "Alunos do coral posando com camisetas do Children's Choir", caption: "Cada voz conta" },
};

function Photo({ photo, tilt }) {
  return (
    <figure className={styles.photo} style={{ "--tilt": tilt }}>
      <img src={photo.src} alt={photo.alt} loading="lazy" />
      <figcaption>{photo.caption}</figcaption>
    </figure>
  );
}

export default function Differentials() {
  const [socio, bilingue, pleno, acompanhamento, apoio, equipe, isaac] = FEATURES;
  let i = 0;
  const card = (f) => {
    i += 1;
    return <FeatureCard index={i} icon={f.icon} tone={f.tone} size={f.size} title={f.title} text={f.text} />;
  };

  return (
    <section id="diferenciais" className={styles.section} aria-labelledby="diff-title">
      <Shape type="rocket" color="rgba(255,255,255,0.55)" className={`${styles.deco} ${styles.rocket}`} />
      <Shape type="star" color="var(--soma-yellow)" className={`${styles.deco} ${styles.star}`} />

      <div className="container">
        <header className={styles.head}>
          <Reveal>
            <Eyebrow shape="sparkles">Nossos diferenciais</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="diff-title" className={styles.title}>
              O que seu filho <span className={styles.accent}>vive</span> por aqui?
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className={styles.lead}>
              Uma proposta que cuida do aprender e do sentir — em cada fase, nas duas unidades.
            </p>
          </Reveal>
        </header>

        <div className={styles.grid}>
          <Reveal className={`${styles.cell} ${styles.span2}`}>{card(socio)}</Reveal>
          <Reveal delay={0.08} className={styles.cell}>
            <Photo photo={PHOTOS.lupa} tilt="2deg" />
          </Reveal>
          <Reveal className={styles.cell}>{card(bilingue)}</Reveal>
          <Reveal delay={0.08} className={styles.cell}>{card(pleno)}</Reveal>
          <Reveal delay={0.16} className={styles.cell}>{card(acompanhamento)}</Reveal>
          <Reveal className={styles.cell}>
            <Photo photo={PHOTOS.coral} tilt="-2deg" />
          </Reveal>
          <Reveal delay={0.08} className={styles.cell}>{card(apoio)}</Reveal>
          <Reveal delay={0.16} className={styles.cell}>{card(equipe)}</Reveal>
          <Reveal className={`${styles.cell} ${styles.spanAll}`}>{card(isaac)}</Reveal>
        </div>

        <Reveal className={styles.cta}>
          <p>Quer conhecer tudo isso de perto?</p>
          <Button href="/#visita" size="lg" variant="secondary">
            Agende uma visita
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
