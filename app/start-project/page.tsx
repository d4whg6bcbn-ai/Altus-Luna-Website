"use client";

import Link from "next/link";
import type { FormEvent } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getHomeHref, siteContent, type SiteContent } from "@/lib/content";

function encodeForm(formData: FormData) {
  return new URLSearchParams(
    Array.from(formData.entries()).map(([key, value]) => [key, String(value)]),
  ).toString();
}

export default function StartProjectPage() {
  const content = siteContent.en;

  return <StartProjectContent content={content} />;
}

export function StartProjectContent({ content }: { content: SiteContent }) {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeForm(formData),
    });

    if (response.ok) {
      window.location.href =
        content.language === "gr" ? "/gr/thank-you" : "/thank-you";
    }
  }

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#161817]">
      <Header
        content={content}
        alternateHref={
          content.language === "gr" ? "/start-project" : "/gr/start-project"
        }
      />
      <main className="bg-[linear-gradient(180deg,#101211_0%,#1b1f1d_24%,#f4f1ea_24%,#f4f1ea_100%)] px-5 pb-20 pt-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <section className="rounded-[1.75rem] border border-white/10 bg-[#151817] px-6 py-10 text-[#f4f1ea] shadow-[0_28px_90px_rgba(17,19,18,0.22)] sm:px-8 sm:py-12 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#c8c2b4]">
                  {content.form.eyebrow}
                </p>
                <h1 className="mt-4 max-w-xl text-4xl font-semibold text-white sm:text-5xl">
                  {content.form.title}
                </h1>
                <p className="mt-6 max-w-lg text-base leading-8 text-[#d8d2c4] sm:text-lg">
                  {content.form.description}
                </p>
                <div className="mt-8 space-y-4 text-sm text-[#d8d2c4]">
                  <p>{content.form.location}</p>
                  <p>{content.form.email}</p>
                  <p>{content.form.phone}</p>
                </div>
              </div>

              <div className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 sm:p-7">
                <Link
                  href={getHomeHref(content.language)}
                  aria-label={content.form.closeAriaLabel}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-lg text-[#f4f1ea] transition-colors hover:bg-white/[0.12]"
                >
                  X
                </Link>
                <form
                  name="start-project"
                  method="POST"
                  action="/__forms.html"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="start-project" />
                  <input type="hidden" name="bot-field" />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-sm font-medium text-[#f4f1ea]">
                        {content.form.fields.name}
                      </span>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full rounded-2xl border border-white/12 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-[#9da3a9] focus:border-[#c8c2b4]"
                        placeholder={content.form.placeholders.name}
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm font-medium text-[#f4f1ea]">
                        {content.form.fields.business}
                      </span>
                      <input
                        type="text"
                        name="business"
                        className="w-full rounded-2xl border border-white/12 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-[#9da3a9] focus:border-[#c8c2b4]"
                        placeholder={content.form.placeholders.business}
                      />
                    </label>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-sm font-medium text-[#f4f1ea]">
                        {content.form.fields.email}
                      </span>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full rounded-2xl border border-white/12 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-[#9da3a9] focus:border-[#c8c2b4]"
                        placeholder={content.form.placeholders.email}
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm font-medium text-[#f4f1ea]">
                        {content.form.fields.phone}
                      </span>
                      <input
                        type="text"
                        name="phone"
                        className="w-full rounded-2xl border border-white/12 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-[#9da3a9] focus:border-[#c8c2b4]"
                        placeholder={content.form.placeholders.phone}
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#f4f1ea]">
                      {content.form.fields.service}
                    </span>
                    <select
                      name="service"
                      required
                      defaultValue=""
                      className="w-full rounded-2xl border border-white/12 bg-[#1d211f] px-4 py-3 text-sm text-white outline-none focus:border-[#c8c2b4]"
                    >
                      <option value="" disabled>
                        {content.form.placeholders.service}
                      </option>
                      {content.form.serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#f4f1ea]">
                      {content.form.fields.contactMethod}
                    </span>
                    <select
                      name="contactMethod"
                      required
                      defaultValue=""
                      className="w-full rounded-2xl border border-white/12 bg-[#1d211f] px-4 py-3 text-sm text-white outline-none focus:border-[#c8c2b4]"
                    >
                      <option value="" disabled>
                        {content.form.placeholders.contactMethod}
                      </option>
                      {content.form.contactMethods.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#f4f1ea]">
                      {content.form.fields.message}
                    </span>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      className="w-full rounded-2xl border border-white/12 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-[#9da3a9] focus:border-[#c8c2b4]"
                      placeholder={content.form.placeholders.message}
                    />
                  </label>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-full bg-[#f4f1ea] px-6 py-4 text-sm font-semibold text-[#111312] shadow-sm transition-colors hover:bg-white sm:w-auto"
                  >
                    {content.form.submit}
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer content={content} />
    </div>
  );
}
