"use client";
import { TypeAnimation } from "react-type-animation";

const TypedHeading = () => {
  return (
    <TypeAnimation
      sequence={[
        "She's an experience designer",
        1000,
        "She's a UX designer",
        1000,
        "She's a frontend developer",
        1000,
        "She's a creative technlogist",
        1000,
        "She's a project lead & manager",
        1000,
        "She's a maker of things",
        1000,
        "She's an all-rounder",
        1000,
      ]}
      wrapper="strong"
      speed={200}
      deletionSpeed={1}
      cursor={false}
      style={{ display: "inline-block" }}
      repeat={Infinity}
    />
  );
};
export default TypedHeading;
