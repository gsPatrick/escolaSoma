import Button from "@/components/atoms/Button/Button";
import Eyebrow from "@/components/atoms/Eyebrow/Eyebrow";
import Reveal from "@/components/atoms/Reveal/Reveal";
import Shape from "@/components/atoms/Shape/Shape";
import { CONTACT } from "@/components/organisms/Header/navigation";
import styles from "./VisitCTA.module.css";

const UNITS = [
  {
    name: "Soma Vila",
    detail: "Grupo 2 ao Ensino Médio",
    address: "Rua João Araújo, s/n — próx. à lotérica de Vila de Abrantes",
    maps: "https://www.google.com/maps/search/?api=1&query=Escola+Soma+Rua+Jo%C3%A3o+Ara%C3%BAjo+Vila+de+Abrantes+Cama%C3%A7ari",
    color: "var(--unit-vila)",
  },
  {
    name: "Soma Garden",
    detail: "Grupo 2 ao 5º ano · integral",
    address: "Rua da Liberdade, nº 6 — Estrada do Coco (sentido Lauro de Freitas)",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+da+Liberdade+6+Estrada+do+Coco+Abrantes+Cama%C3%A7ari",
    color: "var(--unit-garden)",
  },
];

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* Ingresso de visita — um "passe" lúdico com picote */
function Ticket() {
  return (
    <div className={styles.ticket}>
      <div className={styles.ticketHead}>
        <span className={styles.ticketBrand}>
          <img src="/brand/simbolo-s.png" alt="" width="144" height="121" />
          Passe de visita
        </span>
        <span className={styles.ticketNo}>Nº 1997</span>
      </div>

      <dl className={styles.ticketFields}>
        <div>
          <dt>Visitante</dt>
          <dd>Sua família</dd>
        </div>
        <div>
          <dt>Bagagem</dt>
          <dd>Muita curiosidade</dd>
        </div>
      </dl>

      <p className={styles.ticketLabel}>Escolha o destino</p>
      <ul className={styles.units}>
        {UNITS.map((u) => (
          <li key={u.name} style={{ "--unit": u.color }}>
            <a href={u.maps} target="_blank" rel="noopener noreferrer" className={styles.unit}>
              <span className={styles.unitDot} aria-hidden="true" />
              <span className={styles.unitText}>
                <strong>{u.name}</strong>
                <small>{u.detail}</small>
                <small className={styles.unitAddress}>{u.address}</small>
              </span>
              <span className={styles.unitGo}>Como chegar →</span>
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.perforation} aria-hidden="true" />
      <div className={styles.stub}>
        <span>Válido todos os dias letivos</span>
        <span className={styles.barcode} aria-hidden="true" />
      </div>
    </div>
  );
}

export default function VisitCTA() {
  return (
    <section id="visita" className={styles.section} aria-labelledby="visit-title">
      <div className="container">
        <Reveal className={styles.card}>
          <Shape type="star" color="var(--soma-red)" className={`${styles.deco} ${styles.star}`} />

          <div className={styles.copy}>
            <Eyebrow shape="magnifier">Agende sua visita</Eyebrow>
            <h2 id="visit-title" className={styles.title}>
              Venha conhecer o Soma <span className={styles.accent}>de perto!</span>
            </h2>
            <p className={styles.lead}>
              Nada melhor do que sentir o clima da escola ao vivo. Marque um horário, traga as crianças e
              descubra por que o Soma é lugar de gente feliz.
            </p>

            <div className={styles.actions}>
              <Button href={CONTACT.phoneHref} size="lg" icon={<PhoneIcon />}>
                Ligar {CONTACT.phone}
              </Button>
              <Button href={CONTACT.instagram} size="lg" variant="secondary" target="_blank" rel="noopener noreferrer">
                Chamar no Instagram
              </Button>
            </div>
          </div>

          <Ticket />
        </Reveal>
      </div>
    </section>
  );
}
