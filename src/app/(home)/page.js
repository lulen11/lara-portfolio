import React from "react";
import Image from "next/image";
import ProjectList from "../../components/ProjectList/ProjectList";
import projects from "../../content/projectsContent";
import styles from "./Home.module.scss";

export const metadata = {
  title: "Lara Salameh's available for work",
  description:
    "Lara Salameh is a senior UX designer & frontend developer. She loves working on projects that are good for people & planet. She loves creating immersive experiences that leave a positive impact on a person. Based in Melbourne, Australia, here's a selection of her recent work.",
  icons: {
    icon: "/images/favicon@2x.ico",
  },
};

const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.intro}>
        Hello! I&apos;m Lara, an experience &amp; frontend designer.
        <a
          href="https://bradfrost.com/blog/post/frontend-design/"
          target="_blank"
          className={styles.link}
        >
          *
        </a>{" "}
        I love creating engaging impactful experiences & I&apos;ve been doing it
        for 12+ years. Here&apos;s some recent work:
      </h1>
      <div className={styles.projectList}>
        <ProjectList projects={projects} />
      </div>
    </div>
  );
};

export default Home;
