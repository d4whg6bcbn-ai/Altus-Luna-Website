export function CTASection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-10 border-y border-[#ded3c3] py-16 lg:grid-cols-[1fr_0.7fr] lg:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#62745d]">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-[#27231f] sm:text-4xl"
          >
            Have a listing, launch, or brand presence that needs to feel more
            considered?
          </h2>
        </div>
        <div className="lg:justify-self-end">
          <p className="max-w-md text-base leading-7 text-[#665f56]">
            Share the project, the timeline, and the kind of trust you need the
            work to build. Altus Luna can help shape the next practical step.
          </p>
          <a
            href="mailto:hello@altusluna.com"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-[#28352d] px-6 py-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#3c4d41]"
          >
            Email Altus Luna
          </a>
        </div>
      </div>
    </section>
  );
}
