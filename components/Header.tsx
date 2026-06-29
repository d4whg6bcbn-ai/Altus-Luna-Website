import Image from "next/image";
import Link from "next/link";

import { getHomeHref, getProjectHref, type SiteContent } from "@/lib/content";

type HeaderProps = {
  content: SiteContent;
  alternateHref?: string;
};

export function Header({
  content,
  alternateHref = content.alternateHref,
}: HeaderProps) {
  const homeHref = getHomeHref(content.language);
  const projectHref = getProjectHref(content.language);
  const navItems = [
    { label: content.nav.services, href: `${homeHref}#services` },
    { label: content.nav.work, href: `${homeHref}#work` },
    { label: content.nav.about, href: `${homeHref}#about` },
    { label: content.nav.contact, href: projectHref },
  ];
  const languageSwitch =
    content.language === "gr"
      ? { flag: "/images/flag-uk.svg", label: "EN" }
      : { flag: "/images/flag-gr.svg", label: "GR" };

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#111312]/92 text-[#f4f1ea] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-5 py-3.5 sm:px-8 lg:px-12">
        <Link href={homeHref} className="group flex items-center">
          <span className="relative block h-14 w-40 overflow-hidden rounded-full bg-black shadow-[0_10px_30px_rgba(0,0,0,0.16)] sm:h-16 sm:w-60">
            <Image
              src="/images/logo-horizontal.svg"
              alt="Altus Luna"
              fill
              priority
              sizes="(min-width: 640px) 240px, 160px"
              className="-translate-x-3 scale-[2.8] object-contain px-4 py-2"
            />
          </span>
        </Link>

        <nav
          aria-label={content.nav.ariaLabel}
          className="hidden items-center gap-7 text-sm font-medium text-[#c9c6bd] md:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={alternateHref}
            aria-label={
              content.language === "gr"
                ? "Αλλαγή στα Αγγλικά"
                : "Switch to Greek"
            }
            className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/25 bg-cover bg-center shadow-sm ring-1 ring-black/20 transition-transform hover:scale-105"
            style={{ backgroundImage: `url(${languageSwitch.flag})` }}
          >
            <span className="flex h-full w-full items-center justify-center bg-black/38 text-[0.68rem] font-bold tracking-[0.08em] text-white shadow-[inset_0_0_18px_rgba(0,0,0,0.28)]">
              {languageSwitch.label}
            </span>
          </Link>
          <Link
            href={projectHref}
            className="inline-flex items-center justify-center rounded-full border border-[#d8d2c4]/40 bg-[#f4f1ea] px-4 py-2.5 text-sm font-semibold text-[#111312] shadow-sm transition-colors hover:bg-white sm:px-5 sm:py-3"
          >
            <span className="sm:hidden">
              {content.language === "gr" ? "Έργο" : "Start"}
            </span>
            <span className="hidden sm:inline">{content.nav.startProject}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
