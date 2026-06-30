import Link from "next/link";

import { getProjectHref, type SiteContent } from "@/lib/content";

type CTASectionProps = {
  content: SiteContent;
};

export function CTASection({ content }: CTASectionProps) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="ambient-gradient relative overflow-hidden bg-[linear-gradient(180deg,#080a0a_0%,#101718_38%,#0b0f11_66%,#050606_100%)] py-20 lg:py-28"
    >
      <div className="absolute inset-0 bg-[url('/images/altus-luna-hero-bg.png')] bg-cover bg-center opacity-[0.9]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_22%,rgba(181,199,218,0.16),transparent_32%),linear-gradient(90deg,rgba(7,9,9,0.88)_0%,rgba(7,9,9,0.56)_42%,rgba(7,9,9,0.12)_100%),linear-gradient(180deg,rgba(7,9,9,0.5)_0%,rgba(7,9,9,0.1)_48%,rgba(5,6,6,0.84)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(244,241,234,0.28),rgba(145,168,191,0.18),transparent)]" />
      <div className="absolute bottom-[-12rem] left-1/2 h-[40rem] w-[58rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(216,210,196,0.26),rgba(111,132,154,0.18),transparent_70%)] blur-3xl" />
      <div className="absolute left-[-12rem] top-8 h-[28rem] w-[28rem] rounded-full bg-[#7d8fa8]/24 blur-3xl" />
      <div className="page-shell relative grid gap-10 overflow-hidden rounded-[1.5rem] border border-transparent bg-[linear-gradient(145deg,rgba(28,34,33,0.42),rgba(7,10,10,0.54))_padding-box,linear-gradient(135deg,rgba(244,241,234,0.46),rgba(126,147,169,0.34),rgba(95,81,132,0.18),rgba(244,241,234,0.1))_border-box] p-7 text-[#f4f1ea] shadow-[0_40px_140px_rgba(0,0,0,0.48)] ring-1 ring-white/5 backdrop-blur-md sm:p-10 lg:grid-cols-[1fr_0.78fr] lg:items-center lg:p-14">
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(244,241,234,0.66),rgba(145,168,191,0.32),transparent)]" />
        <div className="absolute right-8 top-8 h-28 w-28 rounded-full border border-white/12 bg-[radial-gradient(circle,rgba(244,241,234,0.12),transparent_70%)]" />
        <div className="absolute -left-20 bottom-8 h-64 w-64 rounded-full bg-[#9fb1c4]/22 blur-3xl" />
        <div className="absolute right-[-8rem] bottom-[-8rem] h-80 w-80 rounded-full bg-[#d8d2c4]/14 blur-3xl" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#c8c2b4]">
            {content.cta.eyebrow}
          </p>
          <h2
            id="contact-heading"
            className="relative mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            {content.cta.title}
          </h2>
          <div className="relative mt-8 flex flex-wrap gap-3 text-sm font-medium text-[#d8d2c4]">
            {content.cta.tags.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.055))] px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="relative lg:justify-self-end">
          <p className="max-w-md text-base leading-7 text-[#d8d2c4]">
            {content.cta.description}
          </p>
          <Link
            href={getProjectHref(content.language)}
            className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#ffffff,#d8d2c4)] px-6 py-4 text-sm font-semibold text-[#111312] shadow-[0_18px_48px_rgba(244,241,234,0.16)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_58px_rgba(244,241,234,0.22)] sm:w-auto"
          >
            {content.cta.button}
          </Link>
          <div className="mt-7 grid gap-3 text-sm text-[#f4f1ea]">
            <a
              href="mailto:pawel@altusluna.com"
              className="glass-hover-sweep group relative flex min-w-0 items-center gap-3 overflow-hidden rounded-2xl border border-white/14 bg-[linear-gradient(145deg,rgba(255,255,255,0.16),rgba(255,255,255,0.055))] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/[0.18]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] transition-colors group-hover:bg-white/[0.1]">
                @
              </span>
              <span className="min-w-0 break-words">pawel@altusluna.com</span>
            </a>
            <a
              href="tel:+35797492264"
              className="glass-hover-sweep group relative flex min-w-0 items-center gap-3 overflow-hidden rounded-2xl border border-white/14 bg-[linear-gradient(145deg,rgba(255,255,255,0.16),rgba(255,255,255,0.055))] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/[0.18]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] transition-colors group-hover:bg-white/[0.1]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-none stroke-current"
                >
                  <path
                    d="M6.8 3.5h2.3l1.2 3.9-1.8 1.8a14.8 14.8 0 0 0 6.3 6.3l1.8-1.8 3.9 1.2v2.3a1.6 1.6 0 0 1-1.6 1.6A15.4 15.4 0 0 1 5.2 5.1 1.6 1.6 0 0 1 6.8 3.5Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="min-w-0 break-words">+35797492264</span>
            </a>
            <a
              href="https://instagram.com/altusluna"
              target="_blank"
              rel="noreferrer"
              className="glass-hover-sweep group relative flex min-w-0 items-center gap-3 overflow-hidden rounded-2xl border border-white/14 bg-[linear-gradient(145deg,rgba(255,255,255,0.16),rgba(255,255,255,0.055))] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/[0.18]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] transition-colors group-hover:bg-white/[0.1]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-none stroke-current"
                >
                  <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    className="fill-current stroke-none"
                  />
                </svg>
              </span>
              <span>@altusluna</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
