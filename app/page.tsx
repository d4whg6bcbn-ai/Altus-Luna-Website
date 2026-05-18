import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PortfolioPreview } from "@/components/PortfolioPreview";
import { ServicesSection } from "@/components/ServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#161817]">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <PortfolioPreview />
        <section
          id="about"
          aria-labelledby="about-heading"
          className="bg-[#eef1f5] px-5 py-20 sm:px-8 lg:px-12"
        >
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#4f5964]">
                About Altus Luna
              </p>
              <h2
                id="about-heading"
                className="mt-4 max-w-xl text-3xl font-semibold text-[#161817] sm:text-4xl"
              >
                Hands-on creative support for businesses that need stronger
                visuals without the inflated agency feeling.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-[#5d5b55] sm:text-lg">
              <p>
                Altus Luna is built for practical visual work: the aerial shot
                that shows scale, the edit that makes a business feel active,
                the website that explains the offer, and the content that keeps
                a brand present online.
              </p>
              <p>
                The style is calm, considered, and local-first, with room for
                the warmth of Cyprus places, people, properties, services, and
                small business stories.
              </p>
            </div>
          </div>
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
