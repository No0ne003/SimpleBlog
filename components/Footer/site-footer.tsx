import { siteConfig } from "@/config/site";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Icons } from "../icons";

export function Footer() {
  const socialLinks = [
    {
      href: `mailto:${siteConfig.links.mail}`,
      label: "Mail",
      icon: <EnvelopeClosedIcon className="size-6" />,
    },
    {
      href: siteConfig.links.twitter,
      label: "Twitter",
      icon: <Icons.twitter className="size-6" />,
    },
    {
      href: siteConfig.links.github,
      label: "Github",
      icon: <Icons.gitHub className="size-6" />,
    },
    {
      href: siteConfig.links.instagram,
      label: "Instagram",
      icon: <Icons.instagram className="size-6" />,
    },
  ];

  return (
    <footer>
      <div className="mb-6 mt-14 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          {socialLinks.map(({ href, label, icon }) => (
            <a
              key={label}
              target="_blank"
              rel="noreferrer"
              href={href}
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
          <p>{siteConfig.author}</p>
        </div>
      </div>
    </footer>
  );
}
