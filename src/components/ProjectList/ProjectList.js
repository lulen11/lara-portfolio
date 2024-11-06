import Link from "next/link";
import Image from "next/image";
import styles from "./ProjectList.module.scss";

export default function ProjectList({ projects }) {
  return (
    <ul>
      {Object.keys(projects).map((key) => (
        <li key={key}>
          <Link href={`/${key}`}>{projects[key].title}</Link>
          {/* <p>{projects[key].description}</p> */}
          <Image
            src={projects[key].image}
            alt="Project Thumb"
            width={100}
            height={100}
            className={styles.boop}
          />
        </li>
      ))}
    </ul>
  );
}
