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
      className="relative overflow-hidden bg-[#f4f1ea] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#101211]" />
      <div className="relative mx-auto grid max-w-6xl gap-10 overflow-hidden rounded-[1.5rem] border border-white/12 bg-[#151817] p-8 text-[#f4f1ea] shadow-[0_28px_80px_rgba(17,19,18,0.22)] sm:p-10 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:p-14">
        <div className="absolute right-8 top-8 h-28 w-28 rounded-full border border-white/10" />
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#c8c2b4]">
            {content.cta.eyebrow}
          </p>
          <h2
            id="contact-heading"
            className="relative mt-4 max-w-3xl text-3xl font-semibold text-white sm:text-4xl"
          >
            {content.cta.title}
          </h2>
          <div className="relative mt-8 flex flex-wrap gap-3 text-sm font-medium text-[#d8d2c4]">
            {content.cta.tags.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/12 bg-white/[0.06] px-4 py-2"
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
            className="mt-7 inline-flex items-center justify-center rounded-full bg-[#f4f1ea] px-6 py-4 text-sm font-semibold text-[#111312] shadow-sm transition-colors hover:bg-white"
          >
            {content.cta.button}
          </Link>
          <div className="mt-7 space-y-3 text-sm text-[#f4f1ea]">
            <a
              href="mailto:pawel@altusluna.com"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition-colors hover:bg-white/[0.08]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]">
                @
              </span>
              <span>pawel@altusluna.com</span>
            </a>
            <a
              href="tel:+35797492264"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition-colors hover:bg-white/[0.08]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]">
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
              <span>+35797492264</span>
            </a>
            <a
              href="https://instagram.com/altusluna"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition-colors hover:bg-white/[0.08]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]">
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
