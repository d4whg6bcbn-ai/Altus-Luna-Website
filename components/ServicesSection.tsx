import { ServiceCard } from "./ServiceCard";

import type { SiteContent } from "@/lib/content";

type ServicesSectionProps = {
  content: SiteContent;
};

export function ServicesSection({ content }: ServicesSectionProps) {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="ambient-gradient relative overflow-hidden bg-[linear-gradient(180deg,#080b0b_0%,#142020_38%,#101719_66%,#080b0b_100%)] py-20 lg:py-28"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(244,241,234,0.22),transparent)]" />
      <div className="absolute left-[-12rem] top-12 h-[28rem] w-[28rem] rounded-full bg-[#8ea2b8]/28 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(177,194,212,0.22),rgba(74,91,112,0.12),transparent_68%)] blur-2xl" />
      <div className="absolute right-[-10rem] bottom-8 h-[28rem] w-[28rem] rounded-full bg-[#d8d2c4]/[0.18] blur-3xl" />
      <div className="page-shell relative">
        <div className="grid gap-7 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#c8c2b4]">
              {content.services.eyebrow}
            </p>
            <h2
              id="services-heading"
              className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl"
            >
              {content.services.title}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#c9c6bd] sm:text-lg lg:pt-8">
            {content.services.description}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {content.services.items.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
