"use client";

import { AnimatePresence } from "framer-motion";
import { Check,Copy, Mail } from "lucide-react";
import * as motion from "motion/react-m";
import React from "react";

import ContactMe from "@/components/contact-me";
import { Button } from "@/components/ui/button";

import { USER } from "../../data/user";

const CTA = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(USER.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, ease: "easeOut" }}
      >
        <ContactMe>
          <Button
            variant="default"
            className="font-medium !py-5 rounded-lg !px-10 bg-zinc-50 text-zinc-800 hover:bg-zinc-50 cursor-pointer"
          >
            Contact me <Mail className="size-4" />
          </Button>
        </ContactMe>
      </motion.div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, ease: "easeOut" }}
        className="text-zinc-500"
      >
        |
      </motion.span>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, ease: "easeOut" }}
      >
        <Button
          variant="outline"
          className="relative overflow-hidden font-medium !py-5 rounded-lg !px-10 cursor-pointer w-[165px]"
          onClick={handleCopy}
        >
          <AnimatePresence>
            {copied && (
              <motion.div
                initial={{ clipPath: "polygon(0 0, 0 0, 0 0)" }}
                animate={{ clipPath: "polygon(0 0, 300% 0, 0 300%)" }}
                exit={{ clipPath: "polygon(100% 100%, 100% 100%, 100% 100%)" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 border border-emerald-600/50 rounded-lg z-0"
              />
            )}
          </AnimatePresence>
          <span className="relative z-10 flex items-center gap-2">
            {copied ? (
              <>
                Copied! <Check className="size-4" />
              </>
            ) : (
              <>
                Copy email <Copy className="size-4" />
              </>
            )}
          </span>
        </Button>
      </motion.div>
    </>
  );
};

export default CTA;
