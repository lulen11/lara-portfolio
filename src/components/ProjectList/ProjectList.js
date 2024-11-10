"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./ProjectList.module.scss";
import { useState } from "react";

export default function ProjectList({ projects }) {
  const [hoverEffect, setHoverEffect] = useState({});

  const handleMouseMove = (e, key) => {
    // Calculate the movement based on the mouse position relative to the element
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // Adjust the range as needed
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;

    // Update the hover effect state for the specific item
    setHoverEffect((prev) => ({
      ...prev,
      [key]: { transform: `translate(${x}px, ${y}px)` },
    }));
  };

  const handleMouseLeave = (key) => {
    // Reset the hover effect when the mouse leaves the element
    setHoverEffect((prev) => ({
      ...prev,
      [key]: { transform: "translate(0px, 0px)" },
    }));
  };

  return (
    <ul className={styles.projectList}>
      {Object.keys(projects).map((key) => (
        <li
          key={key}
          className={styles.project}
          onMouseMove={(e) => handleMouseMove(e, key)}
          onMouseLeave={() => handleMouseLeave(key)}
          style={hoverEffect[key]}
        >
          <Link className={styles.projectName} href={`/${key}`}>
            {projects[key].title}
          </Link>
          {/* <p>{projects[key].description}</p> */}
          <div className={styles.projectThumb}>
            <img
              src={`/images/projects/${projects[key].thumbImage}`} // Construct the path dynamically
            />
            {/* <Image
              src={projects[key].image}
              alt="Project Thumb"
              sizes="300px"
              fill
              style={{
                objectFit: "contain",
              }}
            /> */}
          </div>
        </li>
      ))}
    </ul>
  );
}
