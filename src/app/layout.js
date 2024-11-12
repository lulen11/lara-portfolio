import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./Layout.module.scss";
// import PageTransition from "@/components/PageTransition/PageTransition";

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
            <Footer />
          </main>
          {/* <PageTransition /> */}
        </body>
      </html>
    </>
  );
}
