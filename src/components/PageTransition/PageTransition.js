"use client";
import { useEffect, useState } from "react";
import styles from "./PageTransition.module.scss";
import { usePathname } from "next/navigation";

function PageTransition({ children }) {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(true);

  const getColorForPage = (path) => {
    switch (path) {
      case "/code-like-a-girl":
        return "#f08fc2";
      case "/verve-super":
        return "#07378f";
      case "/airtime":
        return "#feb834";
      default:
        return "#919638";
    }
  };

  useEffect(() => {
    const color = getColorForPage(pathname);
    document.documentElement.style.setProperty("--page-color", color);
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 1100);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {isAnimating && (
        <div className={styles.backgroundTransition}> {children}</div>
      )}
    </>
  );
}

export default PageTransition;
