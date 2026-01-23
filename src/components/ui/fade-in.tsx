"use client";

import * as motion from "motion/react-m";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type MotionDivProps = ComponentProps<typeof motion.div>;

interface FadeInProps extends MotionDivProps {
  index?: number;
  delayOffset?: number;
  baseDelay?: number;
  yOffset?: number;
}

export function FadeIn({
  children,
  className,
  index = 0,
  delayOffset = 0,
  baseDelay = 0.2, // Default step
  yOffset = 8,
  initial,
  animate,
  transition,
  ...props
}: FadeInProps) {
  // Calculate delay based on index
  const delay = index * baseDelay + delayOffset;

  return (
    <motion.div
      initial={initial || { opacity: 0, y: yOffset }}
      animate={animate || { opacity: 1, y: 0 }}
      transition={transition || { ease: "easeOut", delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
