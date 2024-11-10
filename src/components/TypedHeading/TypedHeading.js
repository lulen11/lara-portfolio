"use client";
import { TypeAnimation } from "react-type-animation";

const TypedHeading = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "a frontend designer",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "a frontend developer",
        1000,
        "a creative technlogist",
        1000,
        "all-rounder",
        1000,
      ]}
      wrapper="span"
      speed={1}
      deletionSpeed={1}
      cursor={false}
      style={{ display: "inline-block" }}
      repeat={1}
    />
  );
};
export default TypedHeading;
