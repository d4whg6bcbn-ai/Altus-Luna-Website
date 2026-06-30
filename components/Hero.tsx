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
      <div className="ambient-gradient absolute inset-0 -z-30 bg-[radial-gradient(ellipse_at_78%_18%,rgba(222,232,242,0.14),transparent_30%),radial-gradient(ellipse_at_68%_76%,rgba(108,131,156,0.2),transparent_46%),radial-gradient(ellipse_at_30%_18%,rgba(83,96,118,0.16),transparent_42%),linear-gradient(100deg,rgba(7,9,9,1)_0%,rgba(7,9,9,0.92)_42%,rgba(7,9,9,0.48)_100%)]" />
      <div className="absolute inset-y-0 right-[-14vw] -z-20 w-[124vw] overflow-hidden sm:right-[-10vw] lg:right-[-8vw] lg:w-[82vw]">
        <video
          className="h-full w-full object-cover object-center opacity-[0.7] brightness-[1.24] contrast-[1.06] saturate-[1.05] motion-reduce:hidden sm:opacity-[0.74] lg:opacity-[0.82]"
          style={{
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0%, black 20%, black 82%, transparent 100%)",
            maskImage:
              "linear-gradient(90deg, transparent 0%, black 20%, black 82%, transparent 100%)",
          }}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/altus-luna-hero-bg.png"
          aria-label="Altus Luna cinematic background showreel"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
        <div
          aria-hidden="true"
          className="hidden h-full w-full bg-[url('/images/altus-luna-hero-bg.png')] bg-cover bg-center opacity-[0.76] motion-reduce:block"
          style={{
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0%, black 20%, black 82%, transparent 100%)",
            maskImage:
              "linear-gradient(90deg, transparent 0%, black 20%, black 82%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_66%_18%,rgba(244,241,234,0.18),transparent_30%),radial-gradient(ellipse_at_78%_72%,rgba(126,147,169,0.18),transparent_44%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#070909_0%,rgba(7,9,9,0.88)_24%,rgba(7,9,9,0.46)_50%,rgba(7,9,9,0.08)_74%,rgba(7,9,9,0.42)_100%),linear-gradient(180deg,rgba(7,9,9,0.66)_0%,rgba(7,9,9,0.02)_42%,#070909_100%)]" />
      </div>
      <div className="absolute right-0 top-0 -z-10 h-full w-2/3 bg-[linear-gradient(115deg,transparent_0%,rgba(115,137,160,0.12)_42%,rgba(244,241,234,0.1)_100%)] blur-xl" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-[linear-gradient(0deg,#070909_0%,rgba(7,9,9,0)_100%)]" />
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30 [mask-image:linear-gradient(180deg,black,transparent_74%)]" />

      <div className="page-shell grid min-h-[calc(100svh-4.75rem)] items-center gap-10 py-16 sm:py-20 lg:grid-cols-[0.96fr_0.64fr] lg:gap-8 lg:py-24 xl:gap-10">
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

          <div className="relative mt-10 max-w-2xl">
            <div className="absolute -inset-5 rounded-[2rem] bg-[radial-gradient(ellipse_at_22%_40%,rgba(172,193,216,0.18),rgba(216,210,196,0.08)_42%,transparent_74%)] blur-2xl" />
            <div className="soft-scan relative w-full overflow-hidden rounded-[1.35rem] border border-transparent bg-[linear-gradient(145deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))_padding-box,linear-gradient(135deg,rgba(244,241,234,0.46),rgba(126,147,169,0.32),rgba(102,89,145,0.16),rgba(244,241,234,0.1))_border-box] p-2.5 shadow-[0_28px_90px_rgba(0,0,0,0.34)] ring-1 ring-white/5 backdrop-blur-[3px] after:pointer-events-none after:absolute after:inset-y-[-26%] after:left-0 after:w-[42%] after:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] after:content-['']">
              <div className="relative overflow-hidden rounded-[1rem] border border-white/12 bg-[radial-gradient(ellipse_at_82%_8%,rgba(244,241,234,0.2),transparent_32%),radial-gradient(ellipse_at_0%_100%,rgba(105,128,152,0.2),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.085),rgba(255,255,255,0.025))] p-4 sm:p-5">
                <div className="absolute left-0 top-0 h-10 w-16 border-l border-t border-white/24" />
                <div className="absolute right-0 top-0 h-10 w-16 border-r border-t border-white/24" />
                <div className="absolute bottom-0 left-0 h-10 w-16 border-b border-l border-white/16" />
                <div className="absolute bottom-0 right-0 h-10 w-16 border-b border-r border-white/16" />
                <div className="relative grid gap-5 sm:grid-cols-[0.82fr_1.18fr] sm:items-end">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c8c2b4]">
                      Capture to launch
                    </p>
                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-2/3 rounded-full bg-[linear-gradient(90deg,#f4f1ea,#91a8bf)]" />
                    </div>
                  </div>
                  <p className="text-sm font-semibold leading-6 text-white sm:text-base sm:leading-7">
                    Aerial footage, short edits, websites, and social-ready assets shaped as one visual system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div aria-hidden="true" className="hidden min-h-[30rem] lg:block" />
      </div>
    </section>
  );
}
