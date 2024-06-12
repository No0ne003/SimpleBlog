import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Icons } from "./icons";
import MainNav from "./Main-nav";
import { MobileNav } from "./Mobile.nav";

interface SocialLinkProps {
  href: string;
  label: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const socialLinks: SocialLinkProps[] = [
  { href: siteConfig.links.github, label: "GitHub", Icon: Icons.gitHub },
  { href: siteConfig.links.twitter, label: "Twitter", Icon: Icons.twitter },
  {
    href: siteConfig.links.instagram,
    label: "Instagram",
    Icon: Icons.instagram,
  },
];

const SocialLink: React.FC<SocialLinkProps> = ({ href, label, Icon }) => (
  <Link href={href} target="_blank" rel="noreferrer">
    <div className={cn(buttonVariants({ variant: "ghost" }), "w-10 px-0 hidden sm:inline-flex")}>
      <Icon className="h-4 w-4" />
      <span className="sr-only">{label}</span>
    </div>
  </Link>
);

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            {socialLinks.map((link) => (
              <SocialLink key={link.href} {...link} />
            ))}
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
