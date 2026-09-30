import Link from "next/link";
import styles from "./Button.module.css";

/* variant: "primary" (vermelho) | "secondary" (branco com contorno) | "ghost" */
export default function Button({ href, children, variant = "primary", size = "md", icon, className = "", ...rest }) {
  const cls = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls} {...rest}>
        {content}
      </Link>
    );
  }
  return (
    <button type="button" className={cls} {...rest}>
      {content}
    </button>
  );
}
