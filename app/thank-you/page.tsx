import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#161817]">
      <Header />
      <main className="bg-[linear-gradient(180deg,#101211_0%,#1b1f1d_30%,#f4f1ea_30%,#f4f1ea_100%)] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <section className="rounded-[1.75rem] border border-white/10 bg-[#151817] px-6 py-12 text-center text-[#f4f1ea] shadow-[0_28px_90px_rgba(17,19,18,0.22)] sm:px-10 sm:py-16">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#c8c2b4]">
              Message sent
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
              Thank you — your message has been sent. I&apos;ll get back to you shortly.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#d8d2c4] sm:text-lg">
              If your project is time-sensitive, you can also email
              pawel@altusluna.com or reach out on WhatsApp at +35797942264.
            </p>
            <Link
              href="/"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-[#f4f1ea] px-6 py-4 text-sm font-semibold text-[#111312] shadow-sm transition-colors hover:bg-white"
            >
              Back to homepage
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
