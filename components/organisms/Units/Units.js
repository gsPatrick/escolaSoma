import Eyebrow from "@/components/atoms/Eyebrow/Eyebrow";
import Reveal from "@/components/atoms/Reveal/Reveal";
import Shape from "@/components/atoms/Shape/Shape";
import UnitCard from "@/components/molecules/UnitCard/UnitCard";
import styles from "./Units.module.css";

/* Fonte: posts "Soma Vila", "Soma Garden" e "Estrutura" do Instagram @escolasoma */
const UNITS = [
  {
    slug: "vila",
    name: "Soma Vila",
    theme: "light",
    color: "var(--unit-vila)",
    shape: "cap",
    question: "Onde seu filho começa a aprender com carinho?",
    text: "Na Unidade Vila, acompanhamos cada fase do crescimento com cuidado e propósito. Aqui, seu filho é acolhido, ouvido e incentivado a aprender com autonomia e alegria.",
    facts: [
      { label: "Turmas", value: "Grupo 2 ao Ensino Médio" },
      { label: "Turnos", value: "Matutino e vespertino" },
    ],
    structure: [
      "Salas climatizadas e tecnológicas",
      "Laboratório de Ciências e de Vida Prática",
      "Cantinho do Alquimista",
      "Sala de movimento",
      "Quadra poliesportiva",
      "Parque infantil",
    ],
    address: "Rua João Araújo, s/n — próx. à lotérica de Vila de Abrantes",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=Escola+Soma+Rua+Jo%C3%A3o+Ara%C3%BAjo+Vila+de+Abrantes+Cama%C3%A7ari",
    photos: [
      { src: "/photos/vila-turma.jpg", alt: "Alunos do Fundamental II e Ensino Médio reunidos em sala" },
      { src: "/photos/vila-lupas.jpg", alt: "Crianças de jaleco observando com lupas no laboratório" },
      { src: "/photos/vila-cozinha.jpg", alt: "Menina brincando na cozinha de Vida Prática" },
    ],
  },
  {
    slug: "garden",
    name: "Soma Garden",
    theme: "dark",
    color: "var(--unit-garden)",
    shape: "sparkles",
    question: "Qual o melhor lugar para começar a aprender?",
    text: "Um espaço acolhedor, que respeita o tempo de cada criança e valoriza o brincar como parte do aprendizado — cercado de verde por todos os lados.",
    facts: [
      { label: "Turmas", value: "Grupo 2 ao 5º ano" },
      { label: "Turnos", value: "Regular, semi-integral e integral" },
      { label: "Inglês", value: "CCAA incluso no turno regular" },
    ],
    structure: [
      "Salas de aula climatizadas",
      "Sala de movimento e ateliê de artes",
      "Hortinha e laboratório de Vida Prática",
      "Cantinho do Alquimista",
      "Piscina e parque infantil",
      "Mais de 3.000 m² de área verde",
    ],
    address: "Rua da Liberdade, nº 6 — Estrada do Coco (sentido Lauro de Freitas)",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=Rua+da+Liberdade+6+Estrada+do+Coco+Abrantes+Cama%C3%A7ari",
    photos: [
      { src: "/photos/garden-jardim.jpg", alt: "Crianças brincando no gramado da Unidade Garden" },
      { src: "/photos/garden-piscina.jpg", alt: "Menina sorrindo na piscina sobre uma boia de jacaré" },
      { src: "/photos/garden-gramado.jpg", alt: "Turma sentada ao ar livre na área verde" },
    ],
  },
];

export default function Units() {
  return (
    <section id="unidades" className={styles.units} aria-labelledby="units-title">
      <Shape type="star" color="var(--soma-yellow)" className={`${styles.deco} ${styles.decoStar}`} />
      <Shape type="squiggle" color="var(--soma-red)" className={`${styles.deco} ${styles.decoSquiggle}`} />

      <div className="container">
        <header className={styles.head}>
          <Reveal>
            <Eyebrow shape="smile" color="var(--soma-blue)">
              Nossas unidades
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="units-title" className={styles.title}>
              Duas casas, <span className={styles.accent}>o mesmo sorriso.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className={styles.lead}>
              Em Abrantes, a SOMA tem dois endereços pensados para cada fase da vida escolar. Conheça cada um e
              escolha o que combina com a rotina da sua família.
            </p>
          </Reveal>
        </header>

        <div className={styles.grid}>
          {UNITS.map((u, i) => (
            <Reveal key={u.slug} delay={0.1 + i * 0.12} className={styles.cell}>
              <UnitCard unit={u} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
