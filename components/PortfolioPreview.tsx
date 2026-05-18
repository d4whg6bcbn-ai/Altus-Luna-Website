import Image from "next/image";

const workFormats = [
  {
    title: "Property launch kit",
    category: "Real estate media",
    description:
      "Listing page direction, vertical reel edits, captions, and outreach copy for a clearer launch.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    alt: "Bright Mediterranean villa terrace with pool and sea-facing outdoor area",
  },
  {
    title: "Founder website refresh",
    category: "Website and brand",
    description:
      "A simple site structure, stronger service story, and a lighter visual system for trust.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    alt: "Warm modern workspace with desks, plants, and natural light",
  },
  {
    title: "Social content rhythm",
    category: "Instagram support",
    description:
      "Weekly reel and carousel concepts built around places, people, proof, and practical value.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85",
    alt: "Small creative team reviewing content together in a bright setting",
  },
];

export function PortfolioPreview() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#62745d]">
              Work preview
            </p>
            <h2
              id="work-heading"
              className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-[#27231f] sm:text-4xl"
            >
              Formats built for launches, listings, and practical brand growth.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[#665f56]">
            A first portfolio can stay honest: these are the kinds of assets
            Altus Luna is designed to create, not inflated case studies.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {workFormats.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-lg border border-[#e6ded2] bg-[#fbfaf7]"
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
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#62745d]">
                  {item.category}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#27231f]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#665f56]">
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
