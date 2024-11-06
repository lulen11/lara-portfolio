import Link from "next/link";
import Image from "next/image";
import styles from "./ProjectList.module.scss";

export default function ProjectList({ projects }) {
  return (
    <ul className={styles.projectList}>
      {Object.keys(projects).map((key) => (
        <li key={key} className={styles.project}>
          <Link className={styles.projectName} href={`/${key}`}>
            {projects[key].title}
          </Link>
          {/* <p>{projects[key].description}</p> */}
          <Image
            src={projects[key].image}
            alt="Project Thumb"
            width={500}
            height={500}
            className={styles.projectThumb}
          />
        </li>
      ))}
    </ul>
  );
}
