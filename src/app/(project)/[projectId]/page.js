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
          <div className={styles.projectContent}>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
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
        </>
      ) : (
        <h1>Project not found</h1>
      )}
    </div>
  );
}
