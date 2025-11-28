import { RssIcon } from "lucide-react";

import { SITE_INFO, SOURCE_CODE_GITHUB_URL } from "@/config/site";
import { cn } from "@/lib/utils";

import { Icons } from "./icons";
import * as motion from "motion/react-m";

export function SiteFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", delay: 1 }}
      className="max-w-screen border-t"
    >
      <div className=" mx-auto  pt-4 md:max-w-3xl">
        <p className="mb-1 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Inspired by{" "}
          <a
            className="link"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener"
          >
            tailwindcss.com
          </a>
          ,{" "}
          <a
            className="link"
            href="https://ui.shadcn.com/"
            target="_blank"
            rel="noopener"
          >
            ui.shadcn.com
          </a>{" "}
          &{" "}
          <a
            className="link"
            href="https://x.com/iamncdai"
            target="_blank"
            rel="noopener"
          >
            ncdai
          </a>
        </p>

        <p className="mb-4 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Built with 💗 by Kshitij.
          {/* . The source code is available on{" "}
          <a
            className="link"
            href={SOURCE_CODE_GITHUB_URL}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          . */}
        </p>

        <div className={cn("  flex w-full before:z-1 after:z-1")}>
          <div className="mx-auto flex items-center justify-center gap-3  bg-background px-4">
            <a
              className="flex font-mono text-xs font-medium text-muted-foreground"
              href={`${SITE_INFO.url}/llms.txt`}
              target="_blank"
              rel="noopener noreferrer"
            >
              llms.txt
            </a>

            <Separator />

            <a
              className="flex items-center text-muted-foreground transition-colors hover:text-foreground"
              href={`${SITE_INFO.url}/rss`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RssIcon className="size-4" />
              <span className="sr-only">RSS</span>
            </a>

            <Separator />

            <a
              className="flex text-muted-foreground transition-colors hover:text-foreground"
              href={
                process.env.NEXT_PUBLIC_DMCA_URL ||
                "https://www.dmca.com/ProtectionPro.aspx"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.dmca className="h-5 w-auto" />
              <span className="sr-only">DMCA.com Protection Status</span>
            </a>
          </div>
        </div>
      </div>
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-2" />
      </div>
    </motion.footer>
  );
}

function Separator() {
  return <div className="flex h-11 w-px bg-edge" />;
}
