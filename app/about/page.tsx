import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";

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
        <div className="min-w-48 max-w-48">
          <Avatar className="size-48">
            <AvatarImage src="/pfp.jpg" alt={siteConfig.author} />
            <AvatarFallback>N0</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
