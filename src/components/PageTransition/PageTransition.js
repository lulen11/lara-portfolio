"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./PageTransition.module.scss";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(false);
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <div style={{ position: "relative", overflow: "hidden" }}>
        {showContent && (
          <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
        )}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            initial={{ x: "100%" }}
            animate={{ x: ["100%", "0%", "-100%"] }}
            transition={{
              duration: 1.2,
              times: [0, 0.4, 1],
              ease: "easeInOut",
            }}
            className={styles.transitionBlock}
            exit={{ x: "-100%" }}
          />
        </AnimatePresence>
      </div>
    </>
  );
}
