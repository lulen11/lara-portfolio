import Link from "next/link";

export default function ProjectList({ projects }) {
  return (
    <ul>
      {Object.keys(projects).map((key) => (
        <li key={key}>
          <Link href={`/${key}`}>{projects[key].title}</Link>
          <p>{projects[key].description}</p>
        </li>
      ))}
    </ul>
  );
}
