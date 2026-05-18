import { ServiceCard } from "./ServiceCard";

const services = [
  {
    label: "Air",
    title: "Drone shooting / aerial filming",
    description:
      "Smooth aerial footage for properties, projects, venues, outdoor work, and businesses that need scale and context.",
    details:
      "Planning, drone capture, smooth movement, location-focused shots",
  },
  {
    label: "Cut",
    title: "Video editing",
    description:
      "Clean, polished edits that turn raw footage into clear stories for websites, reels, listings, and campaigns.",
    details: "Reels, project highlights, captions, pacing, delivery formats",
  },
  {
    label: "Web",
    title: "Web design / website builds",
    description:
      "Light, modern websites for local businesses, property teams, service brands, and owner-led companies.",
    details: "Page structure, copy direction, responsive design, launch-ready build",
  },
  {
    label: "Post",
    title: "Social media content",
    description:
      "Practical visual content for brands that want to stay visible without posting for the sake of it.",
    details: "Short-form videos, post ideas, simple content rhythm, platform-ready assets",
  },
];

export function ServicesSection() {
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
              Services
            </p>
            <h2
              id="services-heading"
              className="mt-4 text-3xl font-semibold text-[#161817] sm:text-4xl"
            >
              A connected production toolkit for sharper online presence.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#5d5b55] sm:text-lg">
            Altus Luna helps businesses capture what they do, shape it into
            useful content, and present it through websites and social channels
            that feel cinematic, credible, and human.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
