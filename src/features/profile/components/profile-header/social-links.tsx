import dynamic from "next/dynamic";
import Link from "next/link";
import type { ComponentType } from "react";

import { SimpleTooltip } from "@/components/ui/tooltip";

import { USER } from "../../data/user";

const SocialLinks = () => {
  return (
    <>
      {USER.social.map((item) => (
        <SimpleTooltip key={item.name} content={item.name}>
          <Link href={item.link} target="_blank" rel="noopener noreferer">
            <DynamicLucideIcon
              className="text-zinc-500 hover:text-zinc-300"
              iconName={item.icon}
            />
          </Link>
        </SimpleTooltip>
      ))}
    </>
  );
};

export default SocialLinks;

const DynamicLucideIcon = ({
  iconName,
  className,
}: {
  iconName: string;
  className?: string;
}) => {
  const Icon = dynamic(
    async () => {
      const icons = await import("lucide-react");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return icons[iconName as keyof typeof icons] as ComponentType<any>;
    },
    {
      loading: () => <div className="w-5 h-5" />,
    }
  );

  return <Icon strokeWidth={1.5} className={className} />;
};
