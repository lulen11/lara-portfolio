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
        Hello! My name&apos;s Lara. I&apos;m a frontend designer. I&apos;ve
        spent the last 10 years working in a special middle-ground between
        design & development. I design user experiences and bring those designs
        to life through frontend code. My specialities lay within UX design and
        frontend development, with lots of experience in web, app & product
        design, as well as start-up consulting. I work remotely, based in
        Melbourne, Australia.
        <span>
          I&apos;m mid-build on this portfolio so I&apos;ve adapted it a little
          to share with you here while I finish it off elsewhere. Please forgive
          the imperfections!
        </span>
        {/* For the past 10 years between marketing agencies, freelance, and a
        not-for-profit, I’ve worked in what I think is a pretty special
        middle-ground between design & development. As a frontend designer, I
        spend my days collaborating with great teams to design user experiences
        and then bring those designs to life through frontend code. My
        specialities lay within UX design and frontend development, with lots of
        experience in web, app & product design, branding, seo and start-up
        consulting. I work remotely, based in Melbourne, Australia. Call +61 424
        578 459, or write to me at hello@larasalameh.com anytime. */}
      </h1>
      <div className={styles.projectList}>
        <ProjectList projects={projects} />
      </div>
    </div>
  );
};

export default Home;
