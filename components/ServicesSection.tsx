import { ServiceCard } from "./ServiceCard";

const services = [
  {
    title: "Website builds",
    description:
      "Clean, responsive websites for property teams, consultants, hospitality brands, and owner-led businesses.",
    details: "Structure, copy direction, page design, launch-ready build",
  },
  {
    title: "Real estate video reels",
    description:
      "Short-form property edits that make homes, views, and neighbourhood details feel tangible.",
    details: "Shot planning, edit pacing, captions, delivery formats",
  },
  {
    title: "Instagram content",
    description:
      "A calmer content rhythm for brands that need to stay visible without sounding manufactured.",
    details: "Reels, carousels, post ideas, visual direction",
  },
  {
    title: "Client outreach",
    description:
      "Simple, human messaging for first contact, follow-ups, and relationship-building campaigns.",
    details: "Email copy, DM structure, offer clarity, response flow",
  },
  {
    title: "Brand strategy",
    description:
      "Positioning, tone, and offer refinement so every touchpoint feels coherent and credible.",
    details: "Messaging, audience fit, visual mood, service packaging",
  },
  {
    title: "PV proposal emails",
    description:
      "Clear proposal communication for solar and property-adjacent services where trust matters early.",
    details: "Proposal narrative, subject lines, follow-up sequences",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#62745d]">
              Services
            </p>
            <h2
              id="services-heading"
              className="mt-4 text-3xl font-semibold tracking-tight text-[#27231f] sm:text-4xl"
            >
              The useful creative pieces, brought into one steady system.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#5f5a53] sm:text-lg">
            Altus Luna works across the practical moments where a business
            needs to look ready: before a property goes live, before a founder
            starts outreach, or before a brand asks people to trust it.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
