import styles from "./Layout.module.scss";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "Lara Salameh's Great and Good Portfolio",
  description: "My portfolio",
  icons: {
    icon: "/images/favicon@2x.ico",
  },
};
export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={`${styles.layout}`}>
          <div>
            <Header />
            <main className={styles.main}>
              <div>{children}</div>
            </main>
            <footer className={styles.footer}>
              <p>© 2024 My Portfolio</p>
            </footer>
          </div>
        </body>
      </html>
    </>
  );
}

// export default Layout;
