"use client";

import { useEffect, useRef, useState } from "react";
import Shape from "@/components/atoms/Shape/Shape";
import styles from "./Timeline.module.css";

/* Linha do tempo: o traço vermelho "anda" conforme a rolagem
   e cada marco acende quando o traço chega nele. */
export default function Timeline({ items }) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;

    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // começa quando o topo passa 85% da tela, termina quando o fim chega a 55%
      const start = vh * 0.85;
      const end = vh * 0.55;
      const p = (start - r.top) / (start - end + r.height);
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const last = items.length - 1;

  return (
    <ol ref={ref} className={styles.timeline} style={{ "--p": progress, "--n": items.length }}>
      <span className={styles.track} aria-hidden="true">
        <span className={styles.fill} />
      </span>

      {items.map((item, i) => {
        // o marco acende um pouco antes do traço chegar
        const active = progress >= (i / last) * 0.92;
        return (
          <li
            key={item.year}
            className={`${styles.item} ${active ? styles.active : ""}`}
            style={{ "--accent": item.color, "--tilt": `${i % 2 ? 1.5 : -1.5}deg` }}
          >
            <span className={styles.node} aria-hidden="true">
              <Shape type={item.shape} color={item.shapeColor || "#fff"} className={styles.nodeShape} />
            </span>
            <div className={styles.card}>
              <p className={styles.year}>{item.year}</p>
              <p className={styles.place}>{item.place}</p>
              <p className={styles.text}>{item.text}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
