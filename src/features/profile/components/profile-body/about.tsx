import { Markdown } from "@/components/markdown";
import { Prose } from "@/components/ui/typography";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "../panel";
import { USER } from "../../data/user";

export function About() {
  return (
    <Panel id="about">
      <PanelHeader>
        <PanelTitle>About</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <Prose>
          <Markdown>{USER.about}</Markdown>
        </Prose>
      </PanelContent>
    </Panel>
  );
}
