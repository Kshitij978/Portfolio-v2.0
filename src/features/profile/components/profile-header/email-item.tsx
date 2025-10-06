"use client";

import { Button } from "@/components/ui/button";
import { Copy, Mail } from "lucide-react";
import React from "react";
import * as motion from "motion/react-m";
import { USER } from "../../data/user";

const EmailItem = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, ease: "easeOut" }}
      >
        <Button
          variant="default"
          className="font-medium !py-5 rounded-lg !px-10 bg-zinc-50 text-zinc-800 hover:bg-zinc-50 cursor-pointer"
          onClick={() => window.open(`mailto:${USER.email}`, "_blank")}
        >
          Contact me <Mail className="size-4" />
        </Button>
      </motion.div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, ease: "easeOut" }}
        className="text-zinc-500"
      >
        or
      </motion.span>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, ease: "easeOut" }}
      >
        <Button
          variant="outline"
          className="font-medium !py-5 rounded-lg !px-10 cursor-pointer"
          onClick={() => navigator.clipboard.writeText(USER.email)}
        >
          Copy email <Copy className="size-4" />
        </Button>
      </motion.div>
    </>
  );
};

export default EmailItem;
