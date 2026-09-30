"use client";

import { useRef } from "react";
import Link from "next/link";
import Button from "@/components/atoms/Button/Button";
import Shape from "@/components/atoms/Shape/Shape";
import MosaicStrip from "@/components/molecules/MosaicStrip/MosaicStrip";
import styles from "./Hero.module.css";

const UNITS = [
  { label: "Soma Vila", href: "#unidades", bg: "var(--unit-vila)" },
  { label: "Soma Garden", href: "#unidades", bg: "var(--unit-garden)" },
];

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Selo giratório com texto em círculo */
function Sticker() {
  return (
    <div className={styles.sticker} aria-hidden="true">
      <svg viewBox="0 0 120 120" className={styles.stickerRing}>
        <defs>
          <path id="ring" d="M60 60m-44 0a44 44 0 1 1 88 0a44 44 0 1 1-88 0" />
        </defs>
        <text>
          <textPath href="#ring" startOffset="0" textLength="274" lengthAdjust="spacing">
            DESDE 1997 ✦ ABRANTES · CAMAÇARI ✦
          </textPath>
        </text>
      </svg>
      <span className={styles.stickerCore}>
        <Shape type="smile" color="var(--soma-sky)" />
      </span>
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);

  /* Parallax leve: o ponteiro move as formas em profundidades diferentes */
  const onPointerMove = (e) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    ref.current.style.setProperty("--my", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  };

  return (
    <section ref={ref} className={styles.hero} onPointerMove={onPointerMove} aria-labelledby="hero-title">
      <div className={styles.paper} aria-hidden="true" />

      <div className={`container ${styles.grid}`}>
        {/* ---------- Texto ---------- */}
        <div className={styles.copy}>
          <p className={`${styles.tag} ${styles.pop}`} style={{ "--d": "0.05s" }}>
            <Shape type="magnifier" color="var(--soma-red)" className={styles.tagIcon} />
            <span>
              Você sabia? SOMA vem de <strong>SO</strong>rriso <strong>MA</strong>gico
            </span>
          </p>

          <h1 id="hero-title" className={styles.title}>
            <span className={`${styles.line} ${styles.pop}`} style={{ "--d": "0.12s" }}>
              Aqui, aprender é
            </span>{" "}
            <span className={`${styles.line} ${styles.pop}`} style={{ "--d": "0.2s" }}>
              uma <mark className={styles.mark}>aventura</mark>
            </span>{" "}
            <span className={`${styles.line} ${styles.pop}`} style={{ "--d": "0.28s" }}>
              <span className={styles.happy}>
                alegre
                <svg viewBox="0 0 200 40" className={styles.underline} aria-hidden="true" preserveAspectRatio="none">
                  <path d="M6 12C50 40 150 40 194 12" />
                </svg>
              </span>{" "}
              e cheia
            </span>{" "}
            <span className={`${styles.line} ${styles.pop}`} style={{ "--d": "0.36s" }}>
              de sentido.
            </span>
          </h1>

          <p className={`${styles.lead} ${styles.pop}`} style={{ "--d": "0.46s" }}>
            Desde 1997, a Escola SOMA acolhe cada criança com carinho, curiosidade e um jeito didático de
            descobrir o mundo — do Grupo 2 ao Ensino Médio, em duas unidades em Abrantes.
          </p>

          <div className={`${styles.ctas} ${styles.pop}`} style={{ "--d": "0.54s" }}>
            <Button href="/#visita" size="lg" icon={<Arrow />}>
              Agende uma visita
            </Button>
            <Button href="/a-escola" size="lg" variant="secondary">
              Conheça a escola
            </Button>
          </div>

          <div className={`${styles.segments} ${styles.pop}`} style={{ "--d": "0.62s" }}>
            <span className={styles.segmentsLabel}>Nossas unidades</span>
            <ul>
              {UNITS.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className={styles.chip} style={{ "--chip": s.bg }}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ---------- Colagem ---------- */}
        <div className={styles.stage} aria-hidden="true">
          <Shape type="star" color="var(--soma-yellow)" className={`${styles.deco} ${styles.decoStar}`} />
          <Shape type="quarter" color="var(--soma-red)" className={`${styles.deco} ${styles.decoQuarter}`} />
          <Shape type="sparkles" color="var(--soma-red)" className={`${styles.deco} ${styles.decoSparkles}`} />
          <Shape type="squiggle" color="var(--soma-blue)" className={`${styles.deco} ${styles.decoSquiggle}`} />
          <Shape type="circle" color="var(--soma-yellow)" className={`${styles.deco} ${styles.decoDot}`} />

          <figure className={`${styles.photo} ${styles.photoArch}`}>
            <img src="/photos/garden-roda.jpg" alt="" />
          </figure>
          <figure className={`${styles.photo} ${styles.photoCircle}`}>
            <img src="/photos/vila-cientistas.jpg" alt="" />
          </figure>
          <figure className={`${styles.photo} ${styles.photoSquare}`}>
            <img src="/photos/garden-brinquedo.jpg" alt="" />
          </figure>

          <Sticker />

          <div className={styles.note}>
            <span className={styles.noteTape} />
            <strong>O Soma é lugar de gente feliz!</strong>
            <span>Vila e Garden · Abrantes</span>
          </div>
        </div>
      </div>

      <MosaicStrip className={styles.strip} />
    </section>
  );
}
