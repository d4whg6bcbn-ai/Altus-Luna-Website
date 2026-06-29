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
      className="relative overflow-hidden bg-[#f4f1ea] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,#101211_0%,rgba(16,18,17,0)_100%)] opacity-10" />
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#4f5964]">
              {content.services.eyebrow}
            </p>
            <h2
              id="services-heading"
              className="mt-4 text-3xl font-semibold text-[#161817] sm:text-4xl"
            >
              {content.services.title}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#5d5b55] sm:text-lg">
            {content.services.description}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.services.items.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
