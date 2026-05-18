import Image from "next/image";
import Link from "next/link";

const stats = [
  ["Drone", "Aerial filming with scale and atmosphere"],
  ["Edit", "Polished cuts for web, reels, and launch assets"],
  ["Web", "Clean websites and social-ready visual systems"],
];

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-[#101211] text-[#f4f1ea]"
    >
      <Image
        src="/images/altus-luna-hero-bg.png"
        alt="Moonlit city skyline with a drone silhouette"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,10,10,0.94)_0%,rgba(8,10,10,0.78)_48%,rgba(8,10,10,0.42)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-52 bg-[linear-gradient(0deg,#101211_0%,rgba(16,18,17,0)_100%)]" />
      <div className="absolute left-6 top-32 hidden h-28 w-28 rounded-full border border-white/10 lg:block" />

      <div className="mx-auto flex min-h-[82svh] max-w-6xl items-center px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.26em] text-[#c8c2b4]">
            Altus Luna creative media
          </p>
          <h1
            id="hero-heading"
            className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.06] text-white sm:text-5xl lg:text-6xl"
          >
            Cinematic visuals for brands ready to be seen with more depth.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#d8d2c4] sm:text-xl sm:leading-9">
            Drone shooting, aerial filming, video editing, website builds, and
            social content for local businesses, property professionals, service
            brands, and teams that need stronger online presence.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-[#f4f1ea] px-6 py-4 text-sm font-semibold text-[#111312] shadow-[0_16px_40px_rgba(0,0,0,0.28)] transition-colors hover:bg-white"
            >
              Explore services
            </a>
            <Link
              href="/start-project"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/8 px-6 py-4 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/14"
            >
              Plan a project
            </Link>
          </div>

          <dl className="mt-12 grid max-w-2xl gap-5 border-t border-white/14 pt-7 sm:grid-cols-3">
            {stats.map(([term, detail]) => (
              <div key={term}>
                <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c8c2b4]">
                  {term}
                </dt>
                <dd className="mt-2 text-sm leading-6 text-[#d8d2c4]">
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
