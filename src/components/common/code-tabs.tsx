"use client";

import { Tabs } from "@/components/ui/tabs";
import type { InstallationType } from "@/hooks/use-config";
import { useConfig } from "@/hooks/use-config";

export function CodeTabs(props: React.ComponentProps<typeof Tabs>) {
  const [config, setConfig] = useConfig();

  const installationType = config.installationType || "cli";

  return (
    <Tabs
      value={installationType}
      onValueChange={(value) => {
        setConfig((prev) => ({
          ...prev,
          installationType: value as InstallationType,
        }));
      }}
      {...props}
    />
  );
}
