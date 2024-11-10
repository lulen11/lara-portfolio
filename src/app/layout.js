import styles from "./Layout.module.scss";
import Header from "@/components/Header/Header";
import PageTransition from "@/components/PageTransition/PageTransition";

export const metadata = {
  title: "Lara Salameh's Great and Good Portfolio",
  description: "My portfolio",
  icons: {
    icon: "/images/favicon@2x.ico",
  },
};
export default function RootLayout({ children, projectId }) {
  return (
    <>
      <html lang="en">
        <body
          className={`${styles.layout} ${
            projectId ? styles[`project-${projectId}`] : ""
          }`}
        >
          <Header projectId={projectId} />
          <main className={styles.main}>
            <div>{children}</div>
          </main>
          <footer className={styles.footer}>
            <p>© 2024 My Portfolio</p>
          </footer>
          <PageTransition />
        </body>
      </html>
    </>
  );
}

// export default Layout;
