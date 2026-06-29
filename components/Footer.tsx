import Image from "next/image";
import Link from "next/link";

import { getHomeHref, getProjectHref, type SiteContent } from "@/lib/content";

type FooterProps = {
  content: SiteContent;
};

export function Footer({ content }: FooterProps) {
  const homeHref = getHomeHref(content.language);
  const footerLinks = [
    { label: content.nav.services, href: `${homeHref}#services` },
    { label: content.nav.work, href: `${homeHref}#work` },
    { label: content.nav.about, href: `${homeHref}#about` },
    { label: content.nav.contact, href: getProjectHref(content.language) },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#101211] px-5 py-12 text-[#f4f1ea] sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div className="flex max-w-xl flex-col gap-5">
          <div className="relative h-14 w-44 overflow-hidden rounded-full border border-white/10 bg-black sm:w-52">
            <Image
              src="/images/logo-horizontal.svg"
              alt="Altus Luna"
              fill
              sizes="(min-width: 640px) 208px, 176px"
              className="-translate-x-3 scale-[2.6] object-contain px-4 py-2.5"
            />
          </div>
          <p className="max-w-md text-sm leading-6 text-[#c9c6bd]">
            {content.footer.description}
          </p>
        </div>

        <nav
          aria-label={content.nav.footerAriaLabel}
          className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-[#c9c6bd]"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
