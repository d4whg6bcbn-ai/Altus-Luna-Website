import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PortfolioPreview } from "@/components/PortfolioPreview";
import { ServicesSection } from "@/components/ServicesSection";
import type { SiteContent } from "@/lib/content";

type HomePageProps = {
  content: SiteContent;
};

export function HomePage({ content }: HomePageProps) {
  const aboutChips =
    content.language === "gr"
      ? ["Κύπρος", "Οπτικό υλικό", "Ιστός"]
      : ["Cyprus", "Visuals", "Web"];

  return (
    <div className="min-h-screen overflow-hidden bg-[#080b0b] text-[#f4f1ea]">
      <Header content={content} />
      <main>
        <Hero content={content} />
        <ServicesSection content={content} />
        <PortfolioPreview content={content} />
        <section
          id="about"
          aria-labelledby="about-heading"
          className="ambient-gradient relative overflow-hidden bg-[linear-gradient(180deg,#080b0b_0%,#142021_42%,#101719_72%,#090c0c_100%)] py-20 lg:py-28"
        >
          <div className="absolute left-1/2 top-0 h-px w-[min(80rem,calc(100%-2.5rem))] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(244,241,234,0.28),rgba(145,168,191,0.2),transparent)]" />
          <div className="absolute right-[-14rem] top-10 h-[30rem] w-[30rem] rounded-full bg-[#b7c7d8]/26 blur-3xl" />
          <div className="absolute bottom-[-12rem] left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(145,168,191,0.28),rgba(216,210,196,0.12),transparent_68%)] blur-3xl" />
          <div className="page-shell grid gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-stretch">
            <div className="glass-hover-sweep relative overflow-hidden rounded-[1.5rem] border border-transparent bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))_padding-box,linear-gradient(135deg,rgba(244,241,234,0.48),rgba(145,168,191,0.34),rgba(103,88,146,0.14),rgba(244,241,234,0.08))_border-box] p-7 shadow-[0_28px_90px_rgba(0,0,0,0.32)] backdrop-blur sm:p-9">
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(244,241,234,0.6),rgba(145,168,191,0.28),transparent)]" />
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(216,210,196,0.16),transparent_68%)] blur-2xl" />
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#c8c2b4]">
                {content.about.eyebrow}
              </p>
              <h2
                id="about-heading"
                className="mt-5 max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl"
              >
                {content.about.title}
              </h2>
              <div className="mt-8 grid grid-cols-3 gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#d8d2c4]">
                {aboutChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.035))] px-3 py-2 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#ffffff]/60 bg-[linear-gradient(145deg,#fbf8f0,#d9d4c8_58%,#b6c0cb_100%)] p-7 text-[#161817] shadow-[0_34px_100px_rgba(0,0,0,0.34)] sm:p-9">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-[#161817]/10" />
              <div className="absolute right-0 top-0 h-28 w-44 bg-[radial-gradient(circle_at_100%_0%,rgba(126,147,169,0.2),transparent_68%)]" />
              <div className="space-y-5 text-base leading-8 text-[#4f5964] sm:text-lg">
                {content.about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
        <CTASection content={content} />
      </main>
      <Footer content={content} />
    </div>
  );
}
