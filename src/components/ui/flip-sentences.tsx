"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-m";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export function FlipSentences({
  className,
  sentences,
}: {
  className?: string;
  sentences: string[];
}) {
  const [currentSentence, setCurrentSentence] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  function isTabVisible() {
    return document.visibilityState === "visible";
  }

  const startInterval = useCallback(
    function () {
      intervalRef.current = setInterval(
        () => setCurrentSentence((prev) => (prev + 1) % sentences.length),
        2500
      );
    },
    [sentences]
  );

  function clearCurrentInterval() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  useEffect(() => {
    if (isTabVisible()) startInterval();

    function handleVisibilityChange() {
      if (!isTabVisible()) {
        clearCurrentInterval();
      } else if (!intervalRef.current) {
        setCurrentSentence((prev) => (prev + 1) % sentences.length);
        startInterval();
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      clearCurrentInterval();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [sentences, startInterval]);

  function getMotionProps() {
    return {
      initial: { y: 8, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: -8, opacity: 0 },
      transition: { duration: 0.3 },
    };
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.p
        key={currentSentence}
        className={cn(
          "font-mono text-sm text-balance text-muted-foreground select-none",
          className
        )}
        {...getMotionProps()}
      >
        {sentences[currentSentence]}
      </motion.p>
    </AnimatePresence>
  );
}
