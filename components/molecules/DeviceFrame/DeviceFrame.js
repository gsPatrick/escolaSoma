"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./DeviceFrame.module.css";

/* Mostra uma página do site "ao vivo" dentro de um navegador ou celular.
   O iframe é renderizado no tamanho real (ex.: 1440px) e reduzido por escala. */
export default function DeviceFrame({ src = "/", type = "browser", title = "Prévia do site" }) {
  const isPhone = type === "phone";
  const baseW = isPhone ? 390 : 1440;
  const baseH = isPhone ? 844 : 900;

  const wrapRef = useRef(null);
  const [scale, setScale] = useState(isPhone ? 0.72 : 0.5);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / baseW);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [baseW]);

  return (
    <div className={`${styles.device} ${isPhone ? styles.phone : styles.browser}`}>
      {!isPhone && (
        <div className={styles.chrome} aria-hidden="true">
          <span className={styles.dots}>
            <i />
            <i />
            <i />
          </span>
          <span className={styles.url}>escolasoma.com.br</span>
        </div>
      )}
      {isPhone && <span className={styles.notch} aria-hidden="true" />}

      <div ref={wrapRef} className={styles.viewport} style={{ aspectRatio: `${baseW} / ${baseH}` }}>
        <iframe
          src={src}
          title={title}
          loading="lazy"
          className={styles.frame}
          style={{ width: baseW, height: baseH, transform: `scale(${scale})` }}
        />
      </div>
    </div>
  );
}
