import DecryptedText from "@/components/ui/decrypted-text";
import { FadeIn } from "@/components/ui/fade-in";
import { FlipSentences } from "@/components/ui/flip-sentences";
import { fontDmMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import { USER } from "../../data/user";
import { PronounceMyName } from "../pronounce-my-name";
import CTA from "./cta";
import CurrentTime from "./current-time";
import SocialLinks from "./social-links";

export function ProfileHeader() {
  return (
    <div className=" w-full items-center justify-center flex  flex-col">
      <FadeIn className="flex flex-col items-center justify-center" index={0}>
        <div className=" min-h-20 flex items-center justify-center">
          <CurrentTime />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="size-32 rounded-full object-cover ring-offset-background select-none sm:size-20"
          alt={`${USER.displayName}'s avatar`}
          src={USER.avatar}
          fetchPriority="high"
        />
      </FadeIn>

      <FadeIn className=" flex w-full items-end justify-center h-14" index={1}>
        <h1 className="text-3xl font-semibold">
          {USER.displayName}
          &nbsp;
          {USER.namePronunciationUrl && (
            <>
              &nbsp;
              <PronounceMyName
                className="translate-y-px cursor-pointer"
                namePronunciationUrl={USER.namePronunciationUrl}
              />
            </>
          )}
        </h1>
      </FadeIn>
      <FadeIn
        className="h-12 w-full py-1 sm:h-auto flex justify-center"
        index={2}
      >
        <FlipSentences
          sentences={USER.flipSentences}
          className="text-zinc-400"
        />
      </FadeIn>
      <FadeIn
        className=" w-full flex justify-center items-center h-20 gap-6"
        index={3}
      >
        <SocialLinks />
      </FadeIn>

      {/* Contact Buttons */}
      <div className=" w-full flex justify-center items-center gap-4">
        <CTA />
      </div>
      <FadeIn
        className=" w-full min-h-16 flex items-center justify-center"
        index={3}
      >
        <DecryptedText
          className={cn(
            "text-xs text-zinc-600 font-bold",
            fontDmMono.className,
          )}
          speed={50}
          sequential
          parentClassName="text-xs text-zinc-600"
          encryptedClassName="text-xs text-zinc-600"
          text={`${USER.address.city}, ${USER.address.country} · ${USER.address.coordinates}`}
          animateOn="view"
          revealDirection="start"
        />
      </FadeIn>
    </div>
  );
}
