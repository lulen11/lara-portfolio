import Image from "next/image";
import projects from "../../../content/projectsContent";
import styles from "./ProjectPage.module.scss";

export async function generateMetadata({ params }) {
  const { projectId } = params;
  const project = projects[projectId];

  return {
    title: `Lara Salameh's work with ${
      project?.title || "... oop no work here"
    }`,
    description: "Lara Salameh is a frontend designer and developer",
  };
}

export default function ProjectPage({ params }) {
  const { projectId } = params;
  const project = projects[projectId];

  return (
    <div className={styles.projectPage}>
      {project ? (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          {/* alt={project.title} */}
          <Image
            src={project.image}
            alt="Project Thumb"
            width={300}
            height={300}
          />
        </>
      ) : (
        <h1>Project not found</h1>
      )}
    </div>
  );
}
