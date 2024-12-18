"use client";
import TypedHeading from "../../components/TypedHeading/TypedHeading";
import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
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
          <Link href="/">
            <span>Lara Salameh</span>
            {/* <span>&nbsp;</span> */}

            <TypedHeading />
          </Link>
        </h1>
        <a
          href="mailto:hello@larasalameh.com?subject=Hi,%20I%20like%20what%20I%20see"
          className={styles.headerContact}
        >
          hello@larasalameh.com
        </a>
      </div>
    </header>
  );
}
