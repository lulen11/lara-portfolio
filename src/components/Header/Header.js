import React from "react";

import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <h1 className={styles.headerName}>
          Lara Salameh
          <strong>Designer & Developer</strong>
        </h1>
        <a href="mailto:hello@larasalameh.com" className={styles.headerContact}>
          hello@larasalameh.com
        </a>
      </div>
    </header>
  );
}
