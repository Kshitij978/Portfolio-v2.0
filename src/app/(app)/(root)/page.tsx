import { Separator } from "@/components/separator";
import { USER } from "@/data/user";
import ProfileBody from "@/features/profile/components/profile-body";
import { ProfileHeader } from "@/features/profile/components/profile-header";
import dayjs from "dayjs";
import { ProfilePage as PageSchema, WithContext } from "schema-dts";

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto md:max-w-[540px]">
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
