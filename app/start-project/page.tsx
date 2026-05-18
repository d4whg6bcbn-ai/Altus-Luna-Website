import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const serviceOptions = [
  "Drone shooting / aerial filming",
  "Video editing",
  "Web design / website build",
  "Social media content creation",
  "Not sure yet / need advice",
];

const contactMethods = ["Email", "Phone call", "WhatsApp"];

export default function StartProjectPage() {
  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#161817]">
      <Header />
      <main className="bg-[linear-gradient(180deg,#101211_0%,#1b1f1d_24%,#f4f1ea_24%,#f4f1ea_100%)] px-5 pb-20 pt-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <section className="rounded-[1.75rem] border border-white/10 bg-[#151817] px-6 py-10 text-[#f4f1ea] shadow-[0_28px_90px_rgba(17,19,18,0.22)] sm:px-8 sm:py-12 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#c8c2b4]">
                  Start a project
                </p>
                <h1 className="mt-4 max-w-xl text-4xl font-semibold text-white sm:text-5xl">
                  Tell me what you need and I&apos;ll get back to you shortly.
                </h1>
                <p className="mt-6 max-w-lg text-base leading-8 text-[#d8d2c4] sm:text-lg">
                  This form is the quickest way to share your business, the
                  kind of work you need, and how you&apos;d prefer to be
                  contacted.
                </p>
                <div className="mt-8 space-y-4 text-sm text-[#d8d2c4]">
                  <p>Based in Cyprus, working across drone, edit, web, and social content.</p>
                  <p>Email: pawel@altusluna.com</p>
                  <p>Phone / WhatsApp: +35797942264</p>
                </div>
              </div>

              <div className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 sm:p-7">
                <Link
                  href="/"
                  aria-label="Close form"
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-lg text-[#f4f1ea] transition-colors hover:bg-white/[0.12]"
                >
                  X
                </Link>
                <form
                  name="start-project"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  action="/thank-you"
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="start-project" />
                  <input type="hidden" name="bot-field" />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-sm font-medium text-[#f4f1ea]">
                        Name
                      </span>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full rounded-2xl border border-white/12 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-[#9da3a9] focus:border-[#c8c2b4]"
                        placeholder="Your name"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm font-medium text-[#f4f1ea]">
                        Business name
                      </span>
                      <input
                        type="text"
                        name="business"
                        className="w-full rounded-2xl border border-white/12 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-[#9da3a9] focus:border-[#c8c2b4]"
                        placeholder="Your business"
                      />
                    </label>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-sm font-medium text-[#f4f1ea]">
                        Email
                      </span>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full rounded-2xl border border-white/12 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-[#9da3a9] focus:border-[#c8c2b4]"
                        placeholder="you@example.com"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm font-medium text-[#f4f1ea]">
                        Phone or WhatsApp number
                      </span>
                      <input
                        type="text"
                        name="phone"
                        className="w-full rounded-2xl border border-white/12 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-[#9da3a9] focus:border-[#c8c2b4]"
                        placeholder="+357..."
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#f4f1ea]">
                      Service needed
                    </span>
                    <select
                      name="service"
                      required
                      defaultValue=""
                      className="w-full rounded-2xl border border-white/12 bg-[#1d211f] px-4 py-3 text-sm text-white outline-none focus:border-[#c8c2b4]"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#f4f1ea]">
                      Preferred contact method
                    </span>
                    <select
                      name="contactMethod"
                      required
                      defaultValue=""
                      className="w-full rounded-2xl border border-white/12 bg-[#1d211f] px-4 py-3 text-sm text-white outline-none focus:border-[#c8c2b4]"
                    >
                      <option value="" disabled>
                        Choose contact method
                      </option>
                      {contactMethods.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#f4f1ea]">
                      Project details / message
                    </span>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      className="w-full rounded-2xl border border-white/12 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-[#9da3a9] focus:border-[#c8c2b4]"
                      placeholder="Tell me about the project, timeline, and what kind of help you need."
                    />
                  </label>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-full bg-[#f4f1ea] px-6 py-4 text-sm font-semibold text-[#111312] shadow-sm transition-colors hover:bg-white sm:w-auto"
                  >
                    Send project details
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
