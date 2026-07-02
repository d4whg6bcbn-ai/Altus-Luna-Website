import { getWhatsAppHref } from "@/lib/contact";

type ServiceCardProps = {
  index: number;
  title: string;
  description: string;
  details: string;
  label: string;
};

const iconPaths = [
  "M4 13.5 9.6 8l2.5 2.5L20 4M5 18h14M8 18l2-5h4l2 5",
  "M5 6.5h14v11H5zM9 6.5v11M15 6.5v11M5 10h14M5 14h14",
  "M4.5 6.5h15v10h-15zM8 19h8M10 16.5 9 19M14 16.5l1 2.5",
  "M7 8.5h10M7 12h7M5.5 19l3-3.5H18a2 2 0 0 0 2-2v-7A2 2 0 0 0 18 4.5H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h.5z",
];

const accentGlows = [
  "from-[#b8c7d8]/24 via-[#6f879f]/12",
  "from-[#d8d2c4]/22 via-[#8a7f70]/12",
  "from-[#91a8bf]/24 via-[#6f879f]/12",
  "from-[#b6accd]/22 via-[#7787a0]/12",
];

const whatsappCtas = [
  {
    service: "drone-filming",
    text: "Ask about drone filming",
    message:
      "Hi Altus Luna, I’m interested in drone filming. Can we discuss a project?",
  },
  {
    service: "video-editing",
    text: "Ask about video editing",
    message:
      "Hi Altus Luna, I’m interested in video editing. Can we discuss a project?",
  },
  {
    service: "website-project",
    text: "Discuss a website project",
    message:
      "Hi Altus Luna, I’m interested in a website project. Can we discuss what I need?",
  },
  {
    service: "social-content",
    text: "Plan social content",
    message:
      "Hi Altus Luna, I’m interested in social media content. Can we discuss a content package?",
  },
];

export function ServiceCard({
  index,
  title,
  description,
  details,
  label,
}: ServiceCardProps) {
  const iconPath = iconPaths[index % iconPaths.length];
  const accentGlow = accentGlows[index % accentGlows.length];
  const whatsappCta = whatsappCtas[index];

  return (
    <article className="glass-hover-sweep group relative flex h-full min-h-[25rem] flex-col justify-between overflow-hidden rounded-[1.35rem] border border-transparent bg-[linear-gradient(145deg,rgba(34,42,42,0.78),rgba(9,14,14,0.9))_padding-box,linear-gradient(135deg,rgba(244,241,234,0.46),rgba(145,168,191,0.34),rgba(112,94,153,0.14),rgba(244,241,234,0.08))_border-box] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_34px_100px_rgba(0,0,0,0.42)]">
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(244,241,234,0.72),rgba(145,168,191,0.34),transparent)] opacity-75 transition-opacity duration-300 group-hover:opacity-100" />
      <div className={`absolute -right-16 -top-14 h-40 w-40 rounded-full bg-gradient-to-br ${accentGlow} to-transparent blur-2xl transition-transform duration-500 group-hover:scale-125`} />
      <div className="absolute -left-20 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full bg-[#6f879f]/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 h-40 w-full bg-[linear-gradient(0deg,rgba(216,210,196,0.18),rgba(145,168,191,0.1),transparent)] opacity-95" />
      <div>
        <div className="relative mb-7 flex items-center justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/14 bg-[linear-gradient(145deg,rgba(255,255,255,0.13),rgba(255,255,255,0.04))] text-[#f4f1ea] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_16px_34px_rgba(0,0,0,0.18)]">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-none stroke-current"
            >
              <path
                d={iconPath}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#c8c2b4] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            {label}
          </span>
        </div>
        <h3 className="relative text-xl font-semibold leading-snug text-white">
          {title}
        </h3>
        <p className="relative mt-4 text-base leading-7 text-[#c9c6bd]">
          {description}
        </p>
      </div>
      <div className="relative mt-8 border-t border-white/10 pt-5">
        <p className="text-sm font-medium leading-6 text-[#d8d2c4]">
          {details}
        </p>
        {whatsappCta ? (
          <a
            href={getWhatsAppHref(whatsappCta.message)}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${whatsappCta.text} on WhatsApp`}
            data-service={whatsappCta.service}
            data-cta="whatsapp"
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/16 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.055))] px-4 py-3 text-center text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.09),0_16px_42px_rgba(0,0,0,0.22)] backdrop-blur transition-all hover:-translate-y-0.5 hover:border-[#d8d2c4]/36 hover:bg-white/[0.14] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_20px_52px_rgba(145,168,191,0.16)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8d2c4]"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 shrink-0 fill-none stroke-current"
            >
              <path
                d="M6.2 18.2 4.5 20l.5-3.2A7.4 7.4 0 1 1 7.6 19a7.6 7.6 0 0 1-1.4-.8Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 9.4c.4 2.1 1.6 3.7 3.8 4.7l1.1-1.1 2 .7v1.4c0 .5-.4.9-.9.9A7.2 7.2 0 0 1 8 9c0-.5.4-.9.9-.9h1.4l.7 2-1 1.1Z"
                strokeWidth="1.35"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{whatsappCta.text}</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}
