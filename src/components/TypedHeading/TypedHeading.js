"use client";
import { TypeAnimation } from "react-type-animation";

const TypedHeading = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "UX designer",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Frontend developer",
        1000,
        "Creative technlogist",
        1000,
        "All-rounder",
        1000,
      ]}
      wrapper="strong"
      speed={1}
      deletionSpeed={1}
      cursor={false}
      style={{ display: "inline-block" }}
      repeat={Infinity}
    />
  );
};
export default TypedHeading;
