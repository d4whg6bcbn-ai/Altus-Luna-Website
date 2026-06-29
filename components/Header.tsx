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
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[linear-gradient(180deg,rgba(7,9,9,0.9),rgba(7,9,9,0.72))] text-[#f4f1ea] shadow-[0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl">
      <div className="page-shell flex items-center justify-between gap-4 py-3">
        <Link href={homeHref} className="group flex items-center">
          <span className="flex h-12 items-center gap-3 rounded-full border border-transparent bg-[linear-gradient(135deg,rgba(0,0,0,0.82),rgba(15,18,18,0.78))_padding-box,linear-gradient(135deg,rgba(244,241,234,0.2),rgba(126,147,169,0.12),rgba(244,241,234,0.04))_border-box] py-1.5 pl-1.5 pr-4 shadow-[0_14px_40px_rgba(0,0,0,0.32)] transition-all duration-300 group-hover:shadow-[0_16px_44px_rgba(0,0,0,0.42)] sm:h-14 sm:gap-3.5 sm:pr-5">
            <span className="relative h-9 w-9 overflow-hidden rounded-full sm:h-11 sm:w-11">
              <Image
                src="/images/favicon.png"
                alt=""
                fill
                priority
                sizes="44px"
                className="object-cover"
              />
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f4f1ea] sm:text-base">
              Altus Luna
            </span>
          </span>
        </Link>

        <nav
          aria-label={content.nav.ariaLabel}
          className="hidden items-center rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.025))] px-2 py-1.5 text-sm font-medium text-[#c9c6bd] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] md:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <Link
            href={alternateHref}
            aria-label={
              content.language === "gr"
                ? "Αλλαγή στα Αγγλικά"
                : "Switch to Greek"
            }
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-cover bg-center shadow-[0_10px_28px_rgba(0,0,0,0.24)] ring-1 ring-black/30 transition-transform hover:scale-105"
            style={{ backgroundImage: `url(${languageSwitch.flag})` }}
          >
            <span className="flex h-full w-full items-center justify-center bg-black/[0.42] text-[0.68rem] font-bold tracking-[0.08em] text-white shadow-[inset_0_0_18px_rgba(0,0,0,0.28)]">
              {languageSwitch.label}
            </span>
          </Link>
          <Link
            href={projectHref}
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#d8d2c4]/50 bg-[linear-gradient(135deg,#ffffff,#d8d2c4)] px-4 py-2.5 text-sm font-semibold text-[#111312] shadow-[0_12px_34px_rgba(244,241,234,0.14)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(244,241,234,0.2)] sm:px-5 sm:py-3"
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
