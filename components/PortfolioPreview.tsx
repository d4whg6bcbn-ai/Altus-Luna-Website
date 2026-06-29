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
      className="border-y border-[#d8d2c4] bg-[#fbfaf7] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#4f5964]">
              {content.work.eyebrow}
            </p>
            <h2
              id="work-heading"
              className="mt-4 max-w-2xl text-3xl font-semibold text-[#161817] sm:text-4xl"
            >
              {content.work.title}
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[#5d5b55]">
            {content.work.description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {content.work.items.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-xl border border-[#d8d2c4] bg-white shadow-[0_20px_60px_rgba(17,19,18,0.07)]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4f5964]">
                  {item.category}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-[#161817]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#5d5b55]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
