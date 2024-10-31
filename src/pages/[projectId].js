import { useRouter } from "next/router";
import projects from "./projectsContent";

export default function ProjectPage() {
  const router = useRouter();
  const { projectId } = router.query;
  const project = projects[projectId];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title} />
    </div>
  );
}
