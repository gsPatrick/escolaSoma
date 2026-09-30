"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

/* Aparece quando entra na tela (uma vez). `delay` em segundos. */
export default function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${shown ? styles.shown : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}s` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
