"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/atoms/Logo/Logo";
import Button from "@/components/atoms/Button/Button";
import Shape from "@/components/atoms/Shape/Shape";
import { NAV, CONTACT } from "./navigation";
import styles from "./Header.module.css";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="17.3" cy="6.7" r="1.3" fill="currentColor" />
    </svg>
  );
}

function Chevron() {
  return (
    <svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true" className={styles.chevron}>
      <path d="M2 4.5L6 8L10 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${open ? styles.menuOpen : ""}`}>
      {/* Barra utilitária */}
      <div className={styles.topbar}>
        <div className={`container ${styles.topbarInner}`}>
          <span className={styles.topbarItem}>
            <Shape type="star" color="var(--soma-yellow)" className={styles.topbarStar} />
            Do Grupo 2 ao Ensino Médio · desde 1997
          </span>
          <span className={styles.topbarRight}>
            <span className={styles.topbarItem}>{CONTACT.place}</span>
            <a href={CONTACT.phoneHref} className={styles.topbarItem}>
              {CONTACT.phone}
            </a>
          </span>
        </div>
      </div>

      <div className={styles.barWrap}>
        <div className={`container ${styles.barContainer}`}>
          <div className={styles.bar}>
            <Logo />

            <nav className={styles.nav} aria-label="Principal">
              <ul className={styles.navList}>
                {NAV.map((item) => (
                  <li key={item.label} className={styles.navItem} style={{ "--dot": item.color }}>
                    {item.items ? (
                      <>
                        <button type="button" className={styles.navLink} aria-haspopup="true">
                          {item.label}
                          <Chevron />
                        </button>
                        <div className={styles.dropdown}>
                          <ul className={styles.dropdownList}>
                            {item.items.map((sub) => (
                              <li key={sub.label}>
                                <Link href={sub.href} className={styles.dropdownLink}>
                                  <span className={styles.dropdownDot} style={{ background: sub.dot || item.color }} />
                                  <span>
                                    <strong>{sub.label}</strong>
                                    <small>{sub.hint}</small>
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    ) : (
                      <Link href={item.href} className={styles.navLink}>
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.actions}>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
                aria-label="Instagram da Escola SOMA"
              >
                <InstagramIcon />
              </a>
              <Button href="/#visita" size="sm" className={styles.cta}>
                Agende uma visita
              </Button>
              <button
                type="button"
                className={styles.burger}
                aria-expanded={open}
                aria-controls="menu-mobile"
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                onClick={() => setOpen((v) => !v)}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div id="menu-mobile" className={styles.mobile} hidden={!open}>
        <Shape type="star" color="var(--soma-yellow)" className={`${styles.mShape} ${styles.mStar}`} />
        <Shape type="quarter" color="var(--soma-red)" className={`${styles.mShape} ${styles.mQuarter}`} />
        <Shape type="smile" color="var(--soma-sky)" className={`${styles.mShape} ${styles.mSmile}`} />
        <nav aria-label="Menu mobile" className={styles.mobileNav}>
          {NAV.map((item) => (
            <div key={item.label} className={styles.mobileGroup}>
              {item.items ? (
                <>
                  <p className={styles.mobileHeading}>{item.label}</p>
                  <ul>
                    {item.items.map((sub) => (
                      <li key={sub.label}>
                        <Link href={sub.href} onClick={() => setOpen(false)}>
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link href={item.href} className={styles.mobileHeadingLink} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className={styles.mobileFoot}>
          <Button href="/#visita" size="lg" onClick={() => setOpen(false)}>
            Agende uma visita
          </Button>
          <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
        </div>
      </div>
    </header>
  );
}
