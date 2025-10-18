"use client";

import DecryptedText from "@/components/ui/decrypted-text";
import { useCurrentTime } from "@/hooks/use-current-time";
import { fontDmMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function CurrentTime() {
  const time = useCurrentTime();

  return (
    <DecryptedText
      className={cn(
        "text-sm text-zinc-400 font-semibold",
        fontDmMono.className
      )}
      animateOnce
      speed={80}
      maxIterations={10}
      sequential
      encryptedClassName="text-sm"
      text={time}
      animateOn="view"
      revealDirection="start"
    />
  );
}
