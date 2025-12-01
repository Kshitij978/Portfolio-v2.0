import Image from "next/image";
import Link from "next/link";

import { Separator } from "@/components/separator";
import { Separator as Hr } from "@/components/ui/separator";
import { ABOUT_USER } from "@/features/about/data/about";

export default function Page() {
  return (
    <div className="mx-auto md:max-w-xl">
      <Separator />
      <div className=" px-4">
        <h1 className="text-3xl font-semibold">This is Me</h1>
        <Separator className="h-8" />
        <Image
          src="/images/about-image.jpeg"
          alt="profile"
          width={1200}
          height={1200}
          quality={100}
          className="flex size-6 shrink-0 w-1/3 h-1/2 aspect-square object-cover"
          priority
        />
        <Separator />
        <div className="space-y-4">
          <h2 className="text-2xl">{ABOUT_USER.whoami.title}</h2>
          <p className="text-muted-foreground">{ABOUT_USER.whoami.firstPara}</p>
          <p className="text-muted-foreground">
            {ABOUT_USER.whoami.secondPara}
          </p>
        </div>
        {/* <Separator /> */}
        {/* <div className="space-y-4">
          <h2 className="text-xl italic font-bold">Tools I Love</h2>
          <div className="space-y-4">
            {ABOUT_USER.tools.map((tool) => (
              <div key={tool.category}>
                <p className="text-muted-foreground text-lg font-semibold mb-2 border-b">
                  {tool.category}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {tool.list.map((tool) => (
                    <Link
                      href={tool.link}
                      key={tool.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="text-muted-foreground text-sm">
                        {tool.subcategory &&
                          tool.subcategory.map((category, index) =>
                            index === tool.subcategory.length - 1
                              ? `#${category}`
                              : `#${category}, `
                          )}
                      </p>
                      <span>{tool.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div> */}
        <Separator />
        <Hr />
        <Separator />
        <div className="space-y-4">
          <h2 className="text-xl italic font-bold">People I Follow</h2>
          <div className="grid grid-cols-2 gap-8">
            {ABOUT_USER.followedPeople.map((person) => (
              <Link
                href={person.link}
                key={person.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-muted-foreground text-sm">
                  {person.category.map((category, index) =>
                    index === person.category.length - 1
                      ? `#${category}`
                      : `#${category}, `
                  )}
                </p>
                <span>{person.name}</span>
              </Link>
            ))}
          </div>
        </div>
        <Separator />
        <Hr />
        <Separator />
        <div className="space-y-4">
          <h2 className="text-xl italic font-bold">Favorite List</h2>
          <div>
            {ABOUT_USER.favoriteList.map((fav) => (
              <div
                key={fav.category}
                className="grid grid-cols-2 border-b last-of-type:border-0 py-4"
              >
                <p className="text-muted-foreground text-lg font-semibold mb-2 ">
                  {fav.category}
                </p>
                <div className="space-y-2">
                  {fav.list.map((tool) => (
                    <p key={tool}>{tool}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Separator className="h-12" />
    </div>
  );
}
