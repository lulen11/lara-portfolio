import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./Layout.module.scss";
import PageTransition from "@/components/PageTransition/PageTransition";

export const metadata = {
  title: "Lara Salameh | Creative Technologist & Experience Designer",
  description:
    "Lara Salameh is a senior XD designer, UX designer and frontend developer. In all her work, she considers the design of the entire experience across different stakeholders and touch points. She loves working on projects that are good for people & planet. She loves creating immersive experiences that leave a positive impact on a person. Based in Melbourne, Australia, here's a selection of her recent work.",
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
          <PageTransition>
            <Header projectId={projectId} />
            <main className={styles.main}>
              <div>{children}</div>
              <Footer />
            </main>
          </PageTransition>
        </body>
      </html>
    </>
  );
}
