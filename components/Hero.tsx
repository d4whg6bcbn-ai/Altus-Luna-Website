import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[78svh] overflow-hidden"
    >
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85"
        alt="Sunlit modern Mediterranean home exterior with warm stone and glass"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,250,247,0.96)_0%,rgba(251,250,247,0.82)_42%,rgba(251,250,247,0.32)_100%)]" />

      <div className="relative mx-auto flex min-h-[78svh] max-w-6xl items-center px-5 py-20 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#62745d]">
            Cyprus creative media studio
          </p>
          <h1
            id="hero-heading"
            className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight text-[#27231f] sm:text-6xl lg:text-7xl"
          >
            Websites, reels, and brand support for businesses that need to feel
            trusted.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5f5a53] sm:text-xl sm:leading-9">
            Altus Luna helps Cyprus real estate teams, founders, and local
            service brands show up with clear websites, warm property content,
            thoughtful outreach, and social assets that feel considered.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-[#28352d] px-6 py-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#3c4d41]"
            >
              Explore services
            </a>
            <a
              href="mailto:hello@altusluna.com"
              className="inline-flex items-center justify-center rounded-full border border-[#c8b99f] bg-white/75 px-6 py-4 text-sm font-semibold text-[#27231f] shadow-sm transition-colors hover:bg-white"
            >
              Plan a project
            </a>
          </div>

          <dl className="mt-12 grid max-w-2xl gap-5 border-t border-[#d9cfbf] pt-7 sm:grid-cols-3">
            {[
              ["Focus", "Real estate, small business, brand launches"],
              ["Tone", "Premium, warm, practical"],
              ["Outputs", "Web, reels, outreach, social"],
            ].map(([term, detail]) => (
              <div key={term}>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-[#62745d]">
                  {term}
                </dt>
                <dd className="mt-2 text-sm leading-6 text-[#5f5a53]">
                  {detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
