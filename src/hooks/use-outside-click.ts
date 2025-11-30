import type { RefObject} from "react";
import { useEffect } from "react";

export function useOutsideClick(
  ref: RefObject<HTMLElement | null>,
  callback: () => void
) {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, callback]);
}
