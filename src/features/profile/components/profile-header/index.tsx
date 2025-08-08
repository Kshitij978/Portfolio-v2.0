import { USER } from "@/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/components/ui/flip-sentences";
import { PronounceMyName } from "../pronounce-my-name";
import DecryptedText from "@/components/ui/decrypted-text";
import * as motion from "motion/react-m";
import { fontDmMono } from "@/lib/fonts";
import SocialLinks from "./social-links";
import EmailItem from "./email-item";

export function ProfileHeader() {
  return (
    <div className=" w-full items-center justify-center flex  flex-col">
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{
          opacity: 0,
          y: 8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          ease: "easeOut",
        }}
      >
        <div className=" min-h-20 flex items-center justify-center">
          <DecryptedText
            className={cn(
              "text-sm text-zinc-400 font-semibold",
              fontDmMono.className
            )}
            speed={80}
            maxIterations={10}
            sequential
            encryptedClassName="text-sm"
            text="10:01 PM"
            animateOn="view"
            revealDirection="start"
          />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="size-32 rounded-full object-cover ring-offset-background select-none sm:size-20"
          alt={`${USER.displayName}'s avatar`}
          src={USER.avatar}
          fetchPriority="high"
        />
      </motion.div>

      <div className=" flex w-full items-end justify-center h-14">
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
      </div>
      <div className="h-12  w-full  py-1 sm:h-auto flex justify-center">
        <FlipSentences
          sentences={USER.flipSentences}
          className="text-zinc-400"
        />
      </div>
      <div className=" w-full flex justify-center items-center h-20 gap-6">
        <SocialLinks />
      </div>

      {/* Contact Buttons */}
      <div className=" w-full flex justify-center items-center gap-4">
        <EmailItem />
      </div>
      <div className=" w-full min-h-16 flex items-center justify-center">
        <DecryptedText
          className={cn(
            "text-xs text-zinc-600 font-bold",
            fontDmMono.className
          )}
          speed={50}
          sequential
          parentClassName="text-xs text-zinc-600"
          encryptedClassName="text-xs text-zinc-600"
          text="Lucknow, India · 40.6892° N, 74.0445° W"
          animateOn="view"
          revealDirection="start"
        />
      </div>
    </div>
  );
}
