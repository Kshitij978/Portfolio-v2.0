import { useEffect, useState } from "react";

const tailwindBreakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

type TailwindBreakpoint = keyof typeof tailwindBreakpoints;

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

export function useTailwindMedia(
  breakpoint: TailwindBreakpoint,
  direction: "up" | "down" = "up"
) {
  const px = tailwindBreakpoints[breakpoint];
  const query =
    direction === "up" ? `(min-width: ${px}px)` : `(max-width: ${px - 0.02}px)`; // -0.02 to avoid overlap
  return useMediaQuery(query);
}
