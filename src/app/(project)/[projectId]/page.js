import Link from "next/link";
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

  const projectKeys = Object.keys(projects);
  const projectIndex = projectKeys.indexOf(projectId);

  const nextProjectIndex = (projectIndex + 1) % projectKeys.length;
  const nextProjectId = projectKeys[nextProjectIndex];

  return (
    // projectId={projectId}
    <div>
      <div
        className={`${styles.projectPage} ${
          projectId ? styles[`project-${projectId}`] : ""
        }`}
      >
        {project ? (
          <>
            <div className={styles.projectContent}>
              <h1>{project.title}</h1>
              <p dangerouslySetInnerHTML={{ __html: project.description }} />
              <div className={styles.nextProjectLink}>
                <Link href={`/${nextProjectId}`}>
                  View another project <span>&#10549;</span>
                </Link>
              </div>
              {project.links && (
                <ul className={styles.projectLinks}>
                  {project.links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.url}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className={styles.projectImages}>
              {project.images && project.images.length > 0 ? (
                project.images.map((image, index) => (
                  <div key={index} className={styles.imageWrapper}>
                    <img
                      src={`/images/projects/${projectId}/${image}`} // Construct the path dynamically
                      alt={`${project.title} Image ${index + 1}`}
                    />
                  </div>
                ))
              ) : (
                <p>No images available for this project.</p>
              )}
            </div>
            <div className={`${styles.nextProjectLink} ${styles.bottomLink}`}>
              <Link href={`/${nextProjectId}`}>
                See something else I&apos;ve worked on <span>&#x27F6;</span>
              </Link>
            </div>
          </>
        ) : (
          <h1>Project not found</h1>
        )}
      </div>
    </div>
  );
}
