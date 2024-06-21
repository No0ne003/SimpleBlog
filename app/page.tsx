import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import Link from "next/link";
import { posts } from "#site/content";
import PostItem from "@/components/Post-item";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 3);
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
        <div className="container flex flex-col gap-6 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
              Hello I&apos;m No0ne
            </h1>
            <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
              Welcome to my blog template. Build using tailwind, shadcn, velite
              and Nextjs 14
            </p>
          </div>

          <div className="flex flex-col gap-4 justify-center sm:flex-row ">
            <Link
              href="/blog"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
            >
              View my blog
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-fit",
              )}
            >
              Github
            </Link>
          </div>
        </div>
      </section>
      <section className="container max-w-4xl py-4 lg:py-10 flex flex-col gap-8 mt-40">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          Latest Posts
        </h2>
        <ul className="flex flex-col gap-10">
          {latestPosts.map((post) => (
            <li key={post.slug} className="first:border-t first:border-border">
              <PostItem
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
