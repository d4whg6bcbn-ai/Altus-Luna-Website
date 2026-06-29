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
  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#161817]">
      <Header content={content} />
      <main>
        <Hero content={content} />
        <ServicesSection content={content} />
        <PortfolioPreview content={content} />
        <section
          id="about"
          aria-labelledby="about-heading"
          className="bg-[#eef1f5] px-5 py-20 sm:px-8 lg:px-12"
        >
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#4f5964]">
                {content.about.eyebrow}
              </p>
              <h2
                id="about-heading"
                className="mt-4 max-w-xl text-3xl font-semibold text-[#161817] sm:text-4xl"
              >
                {content.about.title}
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-[#5d5b55] sm:text-lg">
              {content.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
        <CTASection content={content} />
      </main>
      <Footer content={content} />
    </div>
  );
}
