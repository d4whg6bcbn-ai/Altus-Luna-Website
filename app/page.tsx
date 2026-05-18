import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PortfolioPreview } from "@/components/PortfolioPreview";
import { ServicesSection } from "@/components/ServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbfaf7] text-[#27231f]">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <PortfolioPreview />
        <section
          id="about"
          aria-labelledby="about-heading"
          className="bg-[#f1f5f0] px-5 py-20 sm:px-8 lg:px-12"
        >
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#62745d]">
                About Altus Luna
              </p>
              <h2
                id="about-heading"
                className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-[#27231f] sm:text-4xl"
              >
                Creative support for brands that need polish without losing
                their human edge.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-[#5f5a53] sm:text-lg">
              <p>
                Altus Luna is built for practical creative work: the website
                that makes a company easier to trust, the reel that helps a
                property feel real, and the message that starts a better client
                conversation.
              </p>
              <p>
                The style is calm, considered, and local-first, with room for
                the warmth of Cyprus businesses, homes, people, and places.
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
