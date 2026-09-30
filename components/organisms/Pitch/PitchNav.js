"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Pitch.module.css";

/* Barra fixa da apresentação: marca, contador de slides, progresso
   e navegação pelas setas do teclado. */
export default function PitchNav({ total }) {
  const [current, setCurrent] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const slides = Array.from(document.querySelectorAll("[data-slide]"));

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
      const mid = window.innerHeight * 0.45;
      let idx = 0;
      slides.forEach((s, i) => {
        if (s.getBoundingClientRect().top <= mid) idx = i;
      });
      setCurrent(idx + 1);
    };

    const onKey = (e) => {
      if (!["ArrowDown", "ArrowRight", "PageDown", "ArrowUp", "ArrowLeft", "PageUp"].includes(e.key)) return;
      e.preventDefault();
      const dir = ["ArrowDown", "ArrowRight", "PageDown"].includes(e.key) ? 1 : -1;
      const mid = window.innerHeight * 0.45;
      let idx = 0;
      slides.forEach((s, i) => {
        if (s.getBoundingClientRect().top <= mid) idx = i;
      });
      const next = slides[Math.min(slides.length - 1, Math.max(0, idx + dir))];
      next?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className={styles.nav}>
      <div className={styles.navInner}>
        <span className={styles.navBrand}>
          <img src="/brand/simbolo-s.png" alt="" width="144" height="121" />
          Proposta · Escola SOMA
        </span>
        <span className={styles.counter} aria-live="polite">
          {String(current).padStart(2, "0")} <i>/</i> {String(total).padStart(2, "0")}
        </span>
        <Link href="/" className={styles.navLink} target="_blank">
          Ver o site →
        </Link>
      </div>
      <span className={styles.progress} style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
    </header>
  );
}
