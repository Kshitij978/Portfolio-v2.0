import dayjs from "dayjs";
import type { ProfilePage as PageSchema, WithContext } from "schema-dts";

import { Separator } from "@/components/separator";
import ProfileBody from "@/features/profile/components/profile-body";
import { ProfileHeader } from "@/features/profile/components/profile-header";
import { USER } from "@/features/profile/data/user";

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto sm:max-w-[540px] 2xl:max-w-[650px]">
        <ProfileHeader />
        <Separator />
        <ProfileBody />
      </div>
    </>
  );
};

export default Page;

function getPageJsonLd(): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: dayjs(USER.dateCreated).toISOString(),
    dateModified: dayjs().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: USER.avatar,
    },
  };
}
