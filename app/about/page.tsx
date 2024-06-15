import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function About() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl">About me</h1>
        </div>
      </div>
      <hr className="my-8 " />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 space-y-2">
          <Avatar className="size-48">
            <AvatarImage src="/pfp.jpg" alt={siteConfig.author} />
            <AvatarFallback>N0</AvatarFallback>
          </Avatar>
          <div className="size-full">
            <h2 className="text-2xl font-bold text-center break-words font-mono">
              {siteConfig.author}
            </h2>
            <p className="text-muted-foreground text-center break-words">
              Front-End Developer
            </p>
          </div>
        </div>
        <div className="text-muted-foreground text-lg py-4 text-balance">
          <p>
            Hello I&apos;m No0ne003 a Front-End developer from morocco, I start
            with html on 08/26/2023 and I&apos;m currently practising Nextjs
            with learn based project (like this one). I Want to start Back-End
            on 2024 summer.
          </p>
          <p>
            You see that the logo of this blog is a{" "}
            <Icons.logo className="size-5 inline-block" /> chess, and I think
            that well be also the logo of my feuter blog, why ? cuz why not.
            I&apos;m not a good chess{" "}
            <Link
              href="https://www.chess.com/stats/overview/no0ne003"
              className={cn(
                buttonVariants({ variant: "link" }),
                "p-0 text-muted-foreground text-lg underline",
              )}
            >
              player
            </Link>{" "}
            but I like chess. So that&apos;s why blog logo is a chess board
          </p>
        </div>
      </div>
    </div>
  );
}
