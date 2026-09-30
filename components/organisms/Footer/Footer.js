import { Fragment } from "react";
import Link from "next/link";
import Shape from "@/components/atoms/Shape/Shape";
import { CONTACT } from "@/components/organisms/Header/navigation";
import styles from "./Footer.module.css";

const COLUMNS = [
  {
    title: "A Escola",
    links: [
      { label: "Nossa história", href: "/#historia" },
      { label: "Unidades", href: "/#unidades" },
      { label: "Diferenciais", href: "/#diferenciais" },
      { label: "Proposta pedagógica", href: "/a-escola#proposta" },
      { label: "Equipe", href: "/a-escola#equipe" },
      { label: "Galeria", href: "/galeria" },
    ],
  },
  {
    title: "Ensino",
    links: [
      { label: "Educação Infantil", href: "/ensino/educacao-infantil" },
      { label: "Fundamental I", href: "/ensino/fundamental-1" },
      { label: "Fundamental II", href: "/ensino/fundamental-2" },
      { label: "Ensino Médio", href: "/ensino/ensino-medio" },
      { label: "Atividades", href: "/atividades" },
    ],
  },
  {
    title: "Famílias",
    links: [
      { label: "Calendário", href: "/familias#calendario" },
      { label: "Horários", href: "/familias#horarios" },
      { label: "Fardamento", href: "/familias#fardamento" },
      { label: "Sistema isaac", href: "/familias#isaac" },
      { label: "Contato", href: "/contato" },
    ],
  },
];

const UNITS = [
  { name: "Soma Vila", address: "Rua João Araújo, s/n — Vila de Abrantes", color: "var(--unit-vila)" },
  { name: "Soma Garden", address: "Rua da Liberdade, nº 6 — Estrada do Coco", color: "var(--unit-garden)" },
];

/* Letras gigantes do rodapé — pulam em sequência e cada uma tem uma forma "sentada" nela */
const LETTERS = [
  { ch: "s", color: "var(--soma-red)", shape: "star" },
  { ch: "o", color: "var(--soma-yellow)", shape: "smile" },
  { ch: "m", color: "var(--unit-garden)", shape: "sparkles" },
  { ch: "a", color: "var(--seg-infantil)", shape: "cap" },
];

function Instagram() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="17.3" cy="6.7" r="1.3" fill="currentColor" />
    </svg>
  );
}

function Facebook() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        d="M14 8.5V6.8c0-.8.5-1 1-1h2V2.2h-2.8C11.1 2.2 10 4.3 10 6.4v2.1H7.5V12H10v9.8h4V12h2.8l.4-3.5H14Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* toldo de festa, igual ao da fachada */}
      <div className={styles.awning} aria-hidden="true" />

      <div className={`container ${styles.main}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logoBadge} aria-label="Escola SOMA — início">
            <img src="/brand/logo-soma.png" alt="Escola Soma" width="336" height="216" />
          </Link>
          <p className={styles.slogan}>
            O Soma é lugar de <em>gente feliz!</em>
          </p>
          <p className={styles.about}>
            Desde 1997 ensinando com carinho, do Grupo 2 ao Ensino Médio, em Abrantes — Camaçari, Bahia.
          </p>
          <div className={styles.social}>
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram @escolasoma">
              <Instagram />
            </a>
            <a href="https://www.facebook.com/escolasoma/" target="_blank" rel="noopener noreferrer" aria-label="Facebook da Escola SOMA">
              <Facebook />
            </a>
            <span className={styles.handle}>@escolasoma</span>
          </div>
        </div>

        <nav className={styles.columns} aria-label="Rodapé">
          {COLUMNS.map((col) => (
            <div key={col.title} className={styles.col}>
              <p className={styles.colTitle}>{col.title}</p>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className={styles.contact}>
          <p className={styles.colTitle}>Fale com a gente</p>
          <a href={CONTACT.phoneHref} className={styles.phone}>
            {CONTACT.phone}
          </a>
          <ul className={styles.units}>
            {UNITS.map((u) => (
              <li key={u.name}>
                <span className={styles.unitDot} style={{ background: u.color }} aria-hidden="true" />
                <span>
                  <strong>{u.name}</strong>
                  {u.address}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* wordmark gigante */}
      <div className={styles.giant} aria-hidden="true">
        {LETTERS.map((l, i) => (
          <Fragment key={l.ch}>
            {/* quebra de linha entre SO e MA — só ativa no celular */}
            {i === 2 && <span className={styles.lineBreak} />}
            <span className={styles.letter} style={{ "--c": l.color, "--i": i }}>
              {l.ch}
              <Shape type={l.shape} color={l.color} className={styles.perch} />
            </span>
          </Fragment>
        ))}
      </div>

      <p className={styles.giantCaption} aria-hidden="true">
        <b>SO</b> de sorriso · <b>MA</b> de mágico
      </p>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p>
            © {year} Escola SOMA · Sorriso Mágico · CNPJ 12.250.475/0001-15
          </p>
          <a href="#" className={styles.top}>
            Voltar ao topo
            <Shape type="rocket" color="currentColor" className={styles.rocket} />
          </a>
        </div>
      </div>
    </footer>
  );
}
