import Image from "next/image";
import Link from "next/link";

import { getProjectHref, type SiteContent } from "@/lib/content";

type HeroProps = {
  content: SiteContent;
};

export function Hero({ content }: HeroProps) {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-[#070909] text-[#f4f1ea]"
    >
      <Image
        src="/images/altus-luna-hero-bg.png"
        alt={content.hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-30 object-cover object-center opacity-[0.76]"
      />
      <div className="ambient-gradient absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_78%_18%,rgba(222,232,242,0.3),transparent_30%),radial-gradient(ellipse_at_66%_78%,rgba(108,131,156,0.3),transparent_46%),radial-gradient(ellipse_at_42%_18%,rgba(83,96,118,0.2),transparent_42%),linear-gradient(100deg,rgba(7,9,9,0.98)_0%,rgba(7,9,9,0.82)_38%,rgba(7,9,9,0.16)_100%)]" />
      <div className="absolute right-0 top-0 -z-10 h-full w-2/3 bg-[linear-gradient(115deg,transparent_0%,rgba(115,137,160,0.12)_42%,rgba(244,241,234,0.18)_100%)] blur-xl" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-[linear-gradient(0deg,#070909_0%,rgba(7,9,9,0)_100%)]" />
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30 [mask-image:linear-gradient(180deg,black,transparent_74%)]" />

      <div className="page-shell grid min-h-[calc(100svh-4.75rem)] items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_0.94fr] lg:gap-10 lg:py-24 xl:gap-12">
        <div className="max-w-3xl">
          <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d8d2c4] shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e6dfcf] shadow-[0_0_18px_rgba(230,223,207,0.72)]" />
            <span className="truncate">{content.hero.eyebrow}</span>
          </div>
          <h1
            id="hero-heading"
            className="mt-7 max-w-3xl text-4xl font-semibold leading-[1.03] text-white sm:text-5xl lg:text-6xl"
          >
            {content.hero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#d8d2c4] sm:text-xl sm:leading-9">
            {content.hero.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-[#f4f1ea] px-6 py-4 text-sm font-semibold text-[#111312] shadow-[0_18px_48px_rgba(244,241,234,0.18)] transition-all hover:-translate-y-0.5 hover:bg-white"
            >
              <span>{content.hero.primaryCta}</span>
              <span className="ml-3 text-lg leading-none">+</span>
            </a>
            <Link
              href={getProjectHref(content.language)}
              className="inline-flex items-center justify-center rounded-full border border-white/16 bg-white/[0.06] px-6 py-4 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/[0.1]"
            >
              {content.hero.secondaryCta}
            </Link>
          </div>

          <dl className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {content.hero.stats.map(([term, detail]) => (
              <div
                key={term}
                className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur"
              >
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c8c2b4]">
                  {term}
                </dt>
                <dd className="mt-2 text-sm leading-6 text-[#d8d2c4]">
                  {detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative w-full max-w-[36rem] justify-self-end lg:mt-40 xl:mt-44">
          <div className="absolute -inset-7 rounded-[2rem] bg-[radial-gradient(ellipse_at_76%_34%,rgba(172,193,216,0.24),rgba(216,210,196,0.09)_42%,transparent_74%)] blur-2xl" />
          <div className="soft-scan relative w-full overflow-hidden rounded-[1.35rem] border border-transparent bg-[linear-gradient(145deg,rgba(255,255,255,0.16),rgba(255,255,255,0.045))_padding-box,linear-gradient(135deg,rgba(244,241,234,0.5),rgba(126,147,169,0.36),rgba(102,89,145,0.18),rgba(244,241,234,0.1))_border-box] p-2.5 shadow-[0_32px_110px_rgba(0,0,0,0.36)] ring-1 ring-white/5 backdrop-blur-[3px] after:pointer-events-none after:absolute after:inset-y-[-26%] after:left-0 after:w-[42%] after:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] after:content-['']">
            <div className="relative min-h-[12rem] overflow-hidden rounded-[1rem] border border-white/12 bg-[radial-gradient(ellipse_at_82%_8%,rgba(244,241,234,0.24),transparent_32%),radial-gradient(ellipse_at_0%_100%,rgba(105,128,152,0.22),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.09),rgba(255,255,255,0.025))] p-4 sm:min-h-[15rem] sm:p-6">
              <div className="absolute left-0 top-0 h-12 w-20 border-l border-t border-white/28" />
              <div className="absolute right-0 top-0 h-12 w-20 border-r border-t border-white/28" />
              <div className="absolute bottom-0 left-0 h-12 w-20 border-b border-l border-white/18" />
              <div className="absolute bottom-0 right-0 h-12 w-20 border-b border-r border-white/18" />
              <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.11),transparent)]" />
              <div className="relative flex flex-wrap items-center justify-between gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/[0.76]">
                <span className="rounded-full border border-white/12 bg-black/[0.3] px-3 py-2 backdrop-blur">
                  Altus Luna field unit
                </span>
                <span className="rounded-full border border-white/12 bg-black/[0.3] px-3 py-2 backdrop-blur">
                  4K ready
                </span>
              </div>
              <div className="relative mt-7 grid grid-cols-[0.78fr_1.22fr] items-end gap-4 sm:mt-10 sm:grid-cols-[0.82fr_1.18fr] sm:gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c8c2b4]">
                    Capture to launch
                  </p>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-2/3 rounded-full bg-[linear-gradient(90deg,#f4f1ea,#91a8bf)]" />
                  </div>
                </div>
                <p className="text-sm font-semibold leading-6 text-white sm:text-lg sm:leading-7">
                  Aerial footage, short edits, websites, and social-ready assets shaped as one visual system.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mt-3 rounded-2xl border border-white/12 bg-white/[0.07] px-5 py-3 text-sm font-medium text-[#d8d2c4] shadow-[0_22px_60px_rgba(0,0,0,0.22)] backdrop-blur lg:ml-auto lg:w-fit">
            Cyprus media for property, places, and service brands
          </div>
        </div>
      </div>
    </section>
  );
}
