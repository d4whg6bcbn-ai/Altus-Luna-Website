import Image from "next/image";

import type { SiteContent } from "@/lib/content";

type PortfolioPreviewProps = {
  content: SiteContent;
};

export function PortfolioPreview({ content }: PortfolioPreviewProps) {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="ambient-gradient relative overflow-hidden border-y border-white/10 bg-[linear-gradient(135deg,#f8f6ef_0%,#ddd8cc_36%,#aeb8c3_70%,#f8f6ef_100%)] py-20 text-[#161817] lg:py-28"
    >
      <div className="absolute left-0 top-0 h-72 w-full bg-[radial-gradient(circle_at_18%_0%,rgba(22,24,23,0.22),transparent_36%)]" />
      <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(7,9,9,0.12),transparent)]" />
      <div className="absolute right-[-8rem] top-28 h-[28rem] w-[28rem] rounded-full bg-[#aeb8c3]/60 blur-3xl" />
      <div className="absolute bottom-[-10rem] left-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[#d8d2c4]/80 blur-3xl" />
      <div className="page-shell relative">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#4f5964]">
              {content.work.eyebrow}
            </p>
            <h2
              id="work-heading"
              className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-[#161817] sm:text-4xl"
            >
              {content.work.title}
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[#5d5b55]">
            {content.work.description}
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {content.work.items.map((item) => (
            <article
              key={item.title}
              className="glass-hover-sweep group relative overflow-hidden rounded-[1.35rem] border border-transparent bg-[linear-gradient(#101211,#101211)_padding-box,linear-gradient(135deg,rgba(22,24,23,0.48),rgba(161,174,188,0.74),rgba(244,241,234,0.42))_border-box] shadow-[0_24px_80px_rgba(17,19,18,0.2)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_32px_100px_rgba(17,19,18,0.34)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(244,241,234,0.3),transparent_34%),radial-gradient(circle_at_18%_82%,rgba(111,135,159,0.28),transparent_38%),linear-gradient(180deg,rgba(7,9,9,0.04)_0%,rgba(7,9,9,0.22)_38%,rgba(7,9,9,0.9)_100%)]" />
                <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-3 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-white/[0.78]">
                  <span className="rounded-full border border-white/14 bg-black/[0.42] px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur">
                    {item.category}
                  </span>
                  <span className="rounded-full border border-white/14 bg-black/[0.42] px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur">
                    Preview
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <h3 className="max-w-md text-xl font-semibold leading-snug text-white sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-[#d8d2c4] sm:text-base sm:leading-7">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
