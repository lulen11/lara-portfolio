import React, { useEffect } from "react";
import Head from "next/head";
import styles from "./Layout.module.scss";
import Header from "@/components/Header/Header";

const Layout = ({ children, title, className }) => {
  useEffect(() => {
    document.body.classList.add(styles.layout);

    return () => {
      document.body.classList.remove(styles.layout);
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon@2x.ico" />
        {/* TODO: fix this */}
        <title>{title || "Lara Salameh's great and good portfolio"}</title>
        <meta name="description" content="My portfolio" />
      </Head>

      <div className={`${styles.layout} ${className}`}>
        <Header />

        <main className={styles.main}>
          <div>{children}</div>
        </main>

        <footer className={styles.footer}>
          <p>© 2024 My Portfolio</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
