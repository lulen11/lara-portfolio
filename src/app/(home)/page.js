import React from "react";
import Image from "next/image";
import ProjectList from "../../components/ProjectList/ProjectList";
import projects from "../../content/projectsContent";
import styles from "./Home.module.scss";

export const metadata = {
  title: "Lara Salameh's Great and Good Portfolio",
  description: "My portfolio",
  icons: {
    icon: "/images/favicon@2x.ico",
  },
};

const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.intro}>
        Hi, saans is a sands-serif typeface designed by Martin Vácha and
        published through Displaay Type Foundry in 2023. It was created as a
        “neutral” addition to their type library.
      </h1>
      <ProjectList projects={projects} />
    </div>
  );
};

export default Home;
