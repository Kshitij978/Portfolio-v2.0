import Link from "next/link";
import { type LucideIcon } from "lucide-react";

import { SimpleTooltip } from "@/components/ui/tooltip";

import { USER } from "@/features/profile/data";

const SocialLinks = () => {
  return (
    <>
      {USER.social.map((item) => {
        const Icon = item.icon as LucideIcon;

        return (
          <SimpleTooltip key={item.title} content={item.title}>
            <Link href={item.href} target="_blank" rel="noopener noreferrer">
              <Icon
                className="text-zinc-500 hover:text-zinc-300"
                strokeWidth={1.5}
              />
            </Link>
          </SimpleTooltip>
        );
      })}
    </>
  );
};

export default SocialLinks;
