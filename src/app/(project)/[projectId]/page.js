import React from "react";
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
    description:
      "Lara Salameh is a senior UX designer, frontend developer, an all-round creative technologist. She loves working on projects that are good for people & planet. She loves creating digital experiences that leave a positive impact on a person. Based in Melbourne, Australia, here's a selection of her recent work",
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
              {/* <div className={styles.linkHome}>
                <Link href={`/`}>
                  <span>&#x27F5;</span> Go back home
                </Link>
              </div> */}
              <h1>{project.title}</h1>
              <p dangerouslySetInnerHTML={{ __html: project.description }} />

              {project.links && (
                <ul className={styles.projectLinks}>
                  {project.links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.url} target="_blank">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className={styles.nextProjectLink}>
              <Link href={`/${nextProjectId}`}>
                View another project <span>&#10549;</span>
              </Link>
            </div>

            <div className={styles.projectImages}>
              {project.images && project.images.length > 0 ? (
                project.images.map((image, index) => (
                  <React.Fragment key={index}>
                    <div key={index} className={styles.imageWrapper}>
                      <img
                        src={`/images/projects/${projectId}/${image}`}
                        alt={`${project.title} Image ${index + 1}`}
                      />
                    </div>
                    {/* sometimes inserting a video example */}
                    {project.videoUrl && index === 1 && (
                      <div
                        className={styles.vidWrapper}
                        style={{
                          position: "relative",
                          paddingBottom: "62.7906976744186%",
                          height: 0,
                          width: "100%",
                        }}
                      >
                        <iframe
                          src={project.videoUrl}
                          allowFullScreen
                          style={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%",
                          }}
                        ></iframe>
                      </div>
                    )}
                  </React.Fragment>
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
