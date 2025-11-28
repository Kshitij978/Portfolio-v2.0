"use client";

import { useCommandState } from "cmdk";
import { HomeIcon, LucideProps } from "lucide-react";
import {
  BriefcaseBusinessIcon,
  CornerDownLeftIcon,
  LetterTextIcon,
  RssIcon,
  SearchIcon,
  TextIcon,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import type { Post } from "@/features/blog/types/post";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";
import { cn } from "@/lib/utils";

import { Icons } from "./icons";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { SimpleTooltip } from "./ui/tooltip";

type CommandLinkItem = {
  title: string;
  href: string;

  icon?: React.ComponentType<LucideProps> | string | React.ReactNode;
  iconImage?: string;
  keywords?: string[];
  openInNewTab?: boolean;
};

const MENU_LINKS: CommandLinkItem[] = [
  {
    title: "Folio",
    href: "/",
    icon: HomeIcon,
  },

  {
    title: "Blog",
    href: "/blog",
    icon: RssIcon,
  },
];

const FOLIO_LINKS: CommandLinkItem[] = [
  {
    title: "About",
    href: "/#about",
    icon: LetterTextIcon,
  },
  {
    title: "Tech Stack",
    href: "/#stack",
    icon: Icons.ts,
  },
  {
    title: "Experience",
    href: "/#experience",
    icon: BriefcaseBusinessIcon,
  },
  {
    title: "Projects",
    href: "/#projects",
    icon: Icons.project,
  },
];

const SOCIAL_LINK_ITEMS: CommandLinkItem[] = SOCIAL_LINKS.map((item) => ({
  title: item.title,
  href: item.href,
  icon: item.icon,
  openInNewTab: true,
}));

export function CommandMenu({ posts }: { posts: Post[] }) {
  const router = useRouter();

  //   const { setTheme, resolvedTheme } = useTheme();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    document.addEventListener(
      "keydown",
      (e: KeyboardEvent) => {
        if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
          if (
            (e.target instanceof HTMLElement && e.target.isContentEditable) ||
            e.target instanceof HTMLInputElement ||
            e.target instanceof HTMLTextAreaElement ||
            e.target instanceof HTMLSelectElement
          ) {
            return;
          }

          e.preventDefault();
          setOpen((open) => !open);
        }
      },
      { signal }
    );

    return () => abortController.abort();
  }, []);

  const handleOpenLink = useCallback(
    (href: string, openInNewTab = false) => {
      setOpen(false);

      if (openInNewTab) {
        window.open(href, "_blank", "noopener");
      } else {
        router.push(href);
      }
    },
    [router]
  );

  //   const createThemeHandler = useCallback(
  //     (theme: "light" | "dark" | "system") => () => {
  //       setOpen(false);
  //       setTheme(theme);

  //       // if (!document.startViewTransition) {
  //       //   setTheme(theme);
  //       //   return;
  //       // }

  //       // document.startViewTransition(() => setTheme(theme));
  //     },
  //     [setTheme]
  //   );

  const { blogLinks, projectsLinks } = useMemo(
    () => ({
      blogLinks: posts
        .filter((post) => post.metadata?.category === "blog")
        .map(postToCommandLinkItem),
      projectsLinks: posts
        .filter((post) => post.metadata?.category === "project")
        .map(postToCommandLinkItem),
    }),
    [posts]
  );

  return (
    <>
      <div onClick={() => setOpen(true)}>
        <SimpleTooltip
          contentProps={{
            side: "left",
            sideOffset: 10,
          }}
          content={"Search"}
        >
          <SearchIcon className="opacity-50 hover:opacity-100 cursor-pointer" />
        </SimpleTooltip>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />

        <CommandList className="min-h-80">
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandLinkGroup
            heading="Menu"
            links={MENU_LINKS}
            onLinkSelect={handleOpenLink}
          />

          <CommandSeparator />

          <CommandLinkGroup
            heading="Folio"
            links={FOLIO_LINKS}
            onLinkSelect={handleOpenLink}
          />

          <CommandSeparator />

          <CommandLinkGroup
            heading="Blog"
            links={blogLinks}
            fallbackIcon={TextIcon}
            onLinkSelect={handleOpenLink}
          />

          <CommandSeparator />

          <CommandLinkGroup
            heading="Projects"
            links={projectsLinks}
            fallbackIcon={TextIcon}
            onLinkSelect={handleOpenLink}
          />
          <CommandSeparator />

          <CommandLinkGroup
            heading="Social Links"
            links={SOCIAL_LINK_ITEMS}
            onLinkSelect={handleOpenLink}
          />

          <CommandSeparator />

          {/* <CommandGroup heading="Theme">
            <CommandItem
              keywords={["theme"]}
              onSelect={createThemeHandler("light")}
            >
              <SunIcon />
              Light
            </CommandItem>
            <CommandItem
              keywords={["theme"]}
              onSelect={createThemeHandler("dark")}
            >
              <MoonStarIcon />
              Dark
            </CommandItem>
            <CommandItem
              keywords={["theme"]}
              onSelect={createThemeHandler("system")}
            >
              <Icons.contrast />
              Auto
            </CommandItem>
          </CommandGroup> */}
        </CommandList>

        <CommandMenuFooter />
      </CommandDialog>
    </>
  );
}

function CommandLinkGroup({
  heading,
  links,
  fallbackIcon,
  onLinkSelect,
}: {
  heading: string;
  links: CommandLinkItem[];
  fallbackIcon?: React.ComponentType<LucideProps>;
  onLinkSelect: (href: string, openInNewTab?: boolean) => void;
}) {
  return (
    <CommandGroup heading={heading}>
      {links.map((link) => {
        const Icon = link?.icon ?? fallbackIcon ?? React.Fragment;

        return (
          <CommandItem
            key={link.href}
            keywords={link.keywords}
            onSelect={() => onLinkSelect(link.href, link.openInNewTab)}
          >
            {link?.iconImage ? (
              <Image
                className="rounded-sm"
                src={link.iconImage}
                alt={link.title}
                width={16}
                height={16}
                unoptimized
              />
            ) : typeof Icon === "function" ? (
              <Icon />
            ) : null}
            {link.title}
          </CommandItem>
        );
      })}
    </CommandGroup>
  );
}

type CommandKind = "command" | "page" | "link";

type CommandMetaMap = Map<
  string,
  {
    commandKind: CommandKind;
  }
>;

function buildCommandMetaMap() {
  const commandMetaMap: CommandMetaMap = new Map();

  commandMetaMap.set("Download vCard", { commandKind: "command" });

  commandMetaMap.set("Light", { commandKind: "command" });
  commandMetaMap.set("Dark", { commandKind: "command" });
  commandMetaMap.set("Auto", { commandKind: "command" });

  commandMetaMap.set("Copy Mark as SVG", {
    commandKind: "command",
  });
  commandMetaMap.set("Copy Logotype as SVG", {
    commandKind: "command",
  });
  commandMetaMap.set("Download Brand Assets", {
    commandKind: "command",
  });

  SOCIAL_LINK_ITEMS.forEach((item) => {
    commandMetaMap.set(item.title, {
      commandKind: "link",
    });
  });

  return commandMetaMap;
}

const COMMAND_META_MAP = buildCommandMetaMap();

const ENTER_ACTION_LABELS: Record<CommandKind, string> = {
  command: "Run Command",
  page: "Go to Page",
  link: "Open Link",
};

function CommandMenuFooter() {
  const selectedCommandKind = useCommandState(
    (state) => COMMAND_META_MAP.get(state.value)?.commandKind ?? "page"
  );

  return (
    <>
      <div className="flex h-10" />

      <div className="absolute inset-x-0 bottom-0 flex h-10 items-center justify-between gap-2 border-t bg-zinc-100/30 px-4 text-xs font-medium dark:bg-zinc-800/30">
        <div className="flex shrink-0 items-center gap-2">
          <span>{ENTER_ACTION_LABELS[selectedCommandKind]}</span>
          <CommandMenuKbd>
            <CornerDownLeftIcon />
          </CommandMenuKbd>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-4"
          />
          <span className="text-muted-foreground">Exit</span>
          <CommandMenuKbd>Esc</CommandMenuKbd>
        </div>
      </div>
    </>
  );
}

function CommandMenuKbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      className={cn(
        "pointer-events-none flex h-5 min-w-6 items-center justify-center gap-1 rounded-sm bg-black/5 px-1 font-sans text-[13px] font-normal text-muted-foreground shadow-[inset_0_-1px_2px] shadow-black/10 select-none dark:bg-white/10 dark:shadow-white/10 dark:text-shadow-xs [&_svg:not([class*='size-'])]:size-3",
        className
      )}
      {...props}
    />
  );
}

function postToCommandLinkItem(post: Post): CommandLinkItem {
  const isComponent = post.metadata?.category === "components";
  const isProject = post.metadata?.category === "project";

  let href;

  if (isProject) href = `/projects/${post.slug}`;
  if (isComponent) href = `/components/${post.slug}`;

  return {
    title: post.metadata.title,
    href: href || `/blog/${post.slug}`,
    keywords: isComponent ? ["component"] : undefined,
  };
}
