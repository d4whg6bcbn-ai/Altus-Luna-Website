import Link from "next/link";

import { CONTACT_PHONE_DISPLAY, getWhatsAppHref } from "@/lib/contact";
import { getProjectHref, type SiteContent } from "@/lib/content";

type CTASectionProps = {
  content: SiteContent;
};

const contactWhatsAppMessage =
  "Hi Altus Luna, I’d like to discuss a project. Can we talk on WhatsApp?";

export function CTASection({ content }: CTASectionProps) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="ambient-gradient relative overflow-hidden bg-[linear-gradient(180deg,#090c0c_0%,#142021_38%,#101619_66%,#070808_100%)] py-20 lg:py-28"
    >
      <div className="absolute inset-0 origin-left scale-[1.08] bg-[url('/images/altus-luna-hero-bg.png')] bg-cover bg-center opacity-[0.96] sm:scale-[1.1] lg:scale-[1.14] lg:bg-[position:32%_center]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_76%_23%,rgba(219,229,239,0.12),transparent_34%),linear-gradient(90deg,rgba(7,9,9,0.82)_0%,rgba(7,9,9,0.46)_42%,rgba(7,9,9,0.04)_100%),linear-gradient(180deg,rgba(7,9,9,0.36)_0%,rgba(7,9,9,0.04)_48%,rgba(5,6,6,0.78)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(244,241,234,0.28),rgba(145,168,191,0.18),transparent)]" />
      <div className="absolute bottom-[-12rem] left-1/2 h-[40rem] w-[58rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(216,210,196,0.26),rgba(111,132,154,0.18),transparent_70%)] blur-3xl" />
      <div className="absolute left-[-12rem] top-8 h-[28rem] w-[28rem] rounded-full bg-[#7d8fa8]/24 blur-3xl" />
      <div className="page-shell relative text-[#f4f1ea]">
        <div className="glass-hover-sweep relative max-w-[42rem] overflow-hidden rounded-[1.5rem] border border-transparent bg-[linear-gradient(145deg,rgba(32,40,40,0.44),rgba(7,10,10,0.5))_padding-box,linear-gradient(135deg,rgba(244,241,234,0.5),rgba(145,168,191,0.36),rgba(95,81,132,0.14),rgba(244,241,234,0.08))_border-box] p-7 shadow-[0_34px_120px_rgba(0,0,0,0.38)] ring-1 ring-white/5 backdrop-blur-md sm:p-10 lg:p-12">
          <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(244,241,234,0.64),rgba(145,168,191,0.34),transparent)]" />
          <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-[#9fb1c4]/20 blur-3xl" />
          <div className="absolute right-[-6rem] top-[-6rem] h-60 w-60 rounded-full bg-[#d8d2c4]/12 blur-3xl" />
          <div className="absolute right-[-8rem] bottom-[-8rem] h-80 w-80 rounded-full bg-[#d8d2c4]/14 blur-3xl" />
          <p className="relative text-xs font-semibold uppercase tracking-[0.26em] text-[#c8c2b4]">
            {content.cta.eyebrow}
          </p>
          <h2
            id="contact-heading"
            className="relative mt-4 max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            {content.cta.title}
          </h2>
          <p className="relative mt-6 max-w-md text-base leading-7 text-[#d8d2c4]">
            {content.cta.description}
          </p>
          <div className="relative mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href={getProjectHref(content.language)}
              className="inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#ffffff,#d8d2c4)] px-6 py-4 text-sm font-semibold text-[#111312] shadow-[0_18px_48px_rgba(244,241,234,0.16)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_58px_rgba(244,241,234,0.22)] sm:w-auto"
            >
              {content.cta.button}
            </Link>
            <a
              href={getWhatsAppHref(contactWhatsAppMessage)}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Chat on WhatsApp about a project"
              data-location="contact"
              data-cta="whatsapp"
              className="glass-hover-sweep inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-white/16 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.055))] px-6 py-4 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.09),0_16px_42px_rgba(0,0,0,0.18)] backdrop-blur transition-all hover:-translate-y-0.5 hover:border-[#d8d2c4]/36 hover:bg-white/[0.14] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_20px_52px_rgba(145,168,191,0.16)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8d2c4] sm:w-auto"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0 fill-none stroke-current"
              >
                <path
                  d="M6.2 18.2 4.5 20l.5-3.2A7.4 7.4 0 1 1 7.6 19a7.6 7.6 0 0 1-1.4-.8Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 9.4c.4 2.1 1.6 3.7 3.8 4.7l1.1-1.1 2 .7v1.4c0 .5-.4.9-.9.9A7.2 7.2 0 0 1 8 9c0-.5.4-.9.9-.9h1.4l.7 2-1 1.1Z"
                  strokeWidth="1.35"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
          <div className="relative mt-7 grid gap-3 text-sm text-[#f4f1ea]">
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
              href={`tel:${CONTACT_PHONE_DISPLAY}`}
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
              <span className="min-w-0 break-words">
                {CONTACT_PHONE_DISPLAY}
              </span>
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
