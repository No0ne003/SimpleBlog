import { siteConfig } from "@/config/site";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Icons } from "../icons";

export function Footer() {
  return (
    <footer>
      <div className="mb-6 mt-14 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <a
            target="_blank"
            rel="noreforrer"
            href="mainlto:hi.yassir.op@gmail.com"
          >
            <span className="sr-only">Mail</span>
            <EnvelopeClosedIcon className="size-6" />
          </a>
          <a target="_blank" rel="noreforrer" href={siteConfig.links.twitter}>
            <span className="sr-only">Twitter</span>
            <Icons.twitter className="size-6" />
          </a>
          <a target="_blank" rel="noreforrer" href={siteConfig.links.github}>
            <span className="sr-only">Github</span>
            <Icons.gitHub className="size-6" />
          </a>
          <a target="_blank" rel="noreforrer" href={siteConfig.links.instagram}>
            <span className="sr-only">Instagram</span>
            <Icons.instagram className="size-6" />
          </a>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
          <p>{siteConfig.author}</p>
        </div>
      </div>
    </footer>
  );
}
