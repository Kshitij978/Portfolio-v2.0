"use client";

import { Button } from "@/components/ui/button";
import { USER } from "@/data/user";
import { Copy, Mail } from "lucide-react";
import React from "react";

const EmailItem = () => {
  return (
    <>
      <Button
        variant="default"
        className="font-medium !py-5 rounded-lg !px-10 bg-zinc-50 text-zinc-800"
        onClick={() => window.open(`mailto:${USER.email}`, "_blank")}
      >
        Contact me <Mail className="size-4" />
      </Button>
      <span className="text-zinc-500">or</span>
      <Button
        variant="outline"
        className="font-medium !py-5 rounded-lg !px-10"
        onClick={() => navigator.clipboard.writeText(USER.email)}
      >
        Copy email <Copy className="size-4" />
      </Button>
    </>
  );
};

export default EmailItem;
