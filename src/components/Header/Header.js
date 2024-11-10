"use client";
import { useState, useEffect } from "react";
import React from "react";

import styles from "./Header.module.scss";

export default function Header({ projectId }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 200;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${
        styles.layout
      } ${projectId ? styles[`project-${projectId}`] : ""}`}
    >
      <div className={styles.headerWrapper}>
        <h1 className={styles.headerName}>
          <strong>Lara Salameh</strong>
          <span>&nbsp;</span>
          <strong>Designer & Developer</strong>
        </h1>
        <a href="mailto:hello@larasalameh.com" className={styles.headerContact}>
          hello@larasalameh.com
        </a>
      </div>
    </header>
  );
}
