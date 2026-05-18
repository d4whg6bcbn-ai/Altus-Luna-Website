import Image from "next/image";

const workFormats = [
  {
    title: "Aerial project showcase",
    category: "Drone and edit package",
    description:
      "Aerial shots, detail footage, and a clean short edit that shows the scale, setting, and finish of real work.",
    image: "/images/Drone in Nature - Mountains & Sea.png",
    alt: "Aerial view of sea and mountains captured by drone",
  },
  {
    title: "Local business website",
    category: "Web design",
    description:
      "A clear site structure, natural copy, and a warm visual system that helps visitors understand the service quickly.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    alt: "Warm modern workspace with desks, plants, and natural light",
  },
  {
    title: "Property content set",
    category: "Real estate support",
    description:
      "Short-form video, simple post assets, and website-ready visuals for agents, property teams, and place-based brands.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    alt: "Bright Mediterranean villa terrace with pool and outdoor landscaping",
  },
];

export function PortfolioPreview() {
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
              Work preview
            </p>
            <h2
              id="work-heading"
              className="mt-4 max-w-2xl text-3xl font-semibold text-[#161817] sm:text-4xl"
            >
              Formats built for properties, service businesses, and practical
              online visibility.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[#5d5b55]">
            A first portfolio can stay honest: these are the kinds of assets
            Altus Luna is designed to create, not inflated case studies.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {workFormats.map((item) => (
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
