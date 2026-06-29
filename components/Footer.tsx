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
    <footer className="ambient-gradient relative overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,#050606_0%,#0b1010_52%,#111717_100%)] py-12 text-[#f4f1ea]">
      <div className="absolute left-1/2 top-0 h-px w-[min(80rem,calc(100%-2.5rem))] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(244,241,234,0.28),rgba(145,168,191,0.18),transparent)]" />
      <div className="absolute right-[-10rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#d8d2c4]/[0.16] blur-3xl" />
      <div className="absolute bottom-[-12rem] left-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#7f95ad]/22 blur-3xl" />
      <div className="page-shell relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div className="flex max-w-xl flex-col gap-5">
          <div className="flex h-12 w-fit items-center gap-3 rounded-full border border-white/10 bg-black/70 py-1.5 pl-1.5 pr-4 shadow-[0_14px_40px_rgba(0,0,0,0.28)] sm:h-14 sm:gap-3.5 sm:pr-5">
            <span className="relative h-9 w-9 overflow-hidden rounded-full sm:h-11 sm:w-11">
              <Image
                src="/images/favicon.png"
                alt=""
                fill
                sizes="44px"
                className="object-cover"
              />
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f4f1ea] sm:text-base">
              Altus Luna
            </span>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#c9c6bd]">
            {content.footer.description}
          </p>
        </div>

        <nav
          aria-label={content.nav.footerAriaLabel}
          className="flex flex-wrap gap-2 text-sm font-medium text-[#c9c6bd]"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-white/12 bg-white/[0.045] px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/[0.08] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
