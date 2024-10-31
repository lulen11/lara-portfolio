import { useRouter } from "next/router";
import projects from "./projectsContent"; // Adjust the path as necessary

// const projects = {
//   "code-like-a-girl": {
//     title: "Project 1",
//     description: "Detailed description of Projects 1",
//     image: "/images/project1.jpg",
//   },
//   project2: {
//     title: "Project 2",
//     description: "Detailed description of Projects 2",
//     image: "/images/project2.jpg",
//   },
// };

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
