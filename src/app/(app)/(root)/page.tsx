import { USER } from "@/data/user";
import ProfileBody from "@/features/profile/components/profile-body";
import { ProfileHeader } from "@/features/profile/components/profile-header";
import { cn } from "@/lib/utils";
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

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-6 w-full",
        // "before:absolute before:-left-[100vw] before:-z-1 before:h-6 before:w-[200vw]",
        // "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  );
}
