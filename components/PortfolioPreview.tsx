"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import type { SiteContent } from "@/lib/content";

type PortfolioPreviewProps = {
  content: SiteContent;
};

type VideoProject = {
  title: string;
  description: string;
  src: string;
  visualLabel: string;
  posterSrc: string;
};

const videoProjects: VideoProject[] = [
  {
    title: "Antoine Gardens",
    description:
      "A vertical garden showcase filmed in Tala, capturing a beautiful private garden arranged across seven levels.",
    src: "/videos/Garden - Vertical (added logo).mp4",
    visualLabel: "Garden showcase",
    posterSrc: "/images/work/garden-preview.jpg",
  },
  {
    title: "Jeep Invasion Nicosia",
    description:
      "A dynamic event reel created for Mito Solar, proud sponsor of Jeep Invasion in Nicosia.",
    src: "/videos/Jeep Invasion Reel.mp4",
    visualLabel: "Event reel",
    posterSrc: "/images/work/jeep-preview.jpg",
  },
  {
    title: "Kykkos Monastery Travel Guide",
    description:
      "A short travel-guide style reel created for Project Cyprus, presenting the atmosphere and heritage of Kykkos Monastery.",
    src: "/videos/kykkos 2.mp4",
    visualLabel: "Travel guide",
    posterSrc: "/images/work/kykkos-preview.jpg",
  },
  {
    title: "Mito Solar Installation",
    description:
      "A two-day filming project documenting the full solar installation process from preparation to completed system.",
    src: "/videos/Panikos - Install.mp4",
    visualLabel: "Install story",
    posterSrc: "/images/work/panikos-preview.jpg",
  },
  {
    title: "Peyia Harbour & Akamas",
    description:
      "A short travel-guide style reel for Project Cyprus, presenting Peyia Harbour and the edge of the Akamas Peninsula.",
    src: "/videos/Peyia Harbour Reel.mp4",
    visualLabel: "Coastal reel",
    posterSrc: "/images/work/peyia-harbour-preview.jpg",
  },
];

const uiText = {
  en: {
    droneHeading: "Drone & Edit",
    webHeading: "Web Design",
    playLabel: "Open video preview",
    play: "Play project",
    close: "Close preview",
    modalLabel: "Video project preview",
    visit: "Visit live website",
    webTitle: "Project Cyprus",
    webDescription:
      "A multilingual real estate website for a Cyprus-based property advisor, designed to present listings, consultation flow, and market guidance in a premium black-and-gold style.",
    browserBadge: "Live website",
    browserUrl: "projectcyprus.com",
    browserCategory: "Real Estate Advisory",
    browserTagListings: "Listings",
    browserTagConsultation: "Consultation",
  },
  gr: {
    droneHeading: "Drone & Edit",
    webHeading: "Σχεδιασμός Ιστοσελίδων",
    playLabel: "Άνοιγμα προεπισκόπησης βίντεο",
    play: "Προβολή έργου",
    close: "Κλείσιμο προεπισκόπησης",
    modalLabel: "Προεπισκόπηση βίντεο έργου",
    visit: "Άνοιγμα ιστοσελίδας",
    webTitle: "Project Cyprus",
    webDescription:
      "Μια πολύγλωσση ιστοσελίδα ακινήτων για σύμβουλο στην Κύπρο, σχεδιασμένη για παρουσιάσεις ακινήτων, ροή συμβουλευτικής και premium ύφος σε μαύρο και χρυσό.",
    browserBadge: "Ζωντανή ιστοσελίδα",
    browserUrl: "projectcyprus.com",
    browserCategory: "Συμβουλευτική ακινήτων",
    browserTagListings: "Καταχωρίσεις",
    browserTagConsultation: "Συμβουλευτική",
  },
};

export function PortfolioPreview({ content }: PortfolioPreviewProps) {
  const [activeVideo, setActiveVideo] = useState<VideoProject | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const text = uiText[content.language];

  useEffect(() => {
    if (!activeVideo) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveVideo(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeVideo]);

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="ambient-gradient relative overflow-hidden border-y border-white/10 bg-[linear-gradient(180deg,#080b0b_0%,#132022_42%,#090c0c_100%)] py-20 text-[#f4f1ea] lg:py-28"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(244,241,234,0.28),rgba(145,168,191,0.18),transparent)]" />
      <div className="absolute left-[-10rem] top-16 h-[32rem] w-[32rem] rounded-full bg-[#7d8fa8]/26 blur-3xl" />
      <div className="absolute right-[-12rem] top-1/3 h-[34rem] w-[34rem] rounded-full bg-[#d8d2c4]/14 blur-3xl" />
      <div className="absolute bottom-[-14rem] left-1/2 h-[38rem] w-[48rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(145,168,191,0.22),rgba(95,81,132,0.09),transparent_70%)] blur-3xl" />

      <div className="page-shell relative">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#c8c2b4]">
              {content.work.eyebrow}
            </p>
            <h2
              id="work-heading"
              className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl"
            >
              {content.work.title}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#c9c6bd] sm:text-lg">
            {content.work.description}
          </p>
        </div>

        <div className="mt-14">
          <div className="border-b border-white/10 pb-5">
            <h3 className="text-lg font-semibold text-white sm:text-2xl">
              {text.droneHeading}
            </h3>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {videoProjects.map((project) => (
              <VideoProjectCard
                key={project.src}
                project={project}
                playLabel={text.playLabel}
                playText={text.play}
                onOpen={() => setActiveVideo(project)}
              />
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.44fr_0.56fr] lg:items-stretch">
          <div className="rounded-[1.35rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.085),rgba(255,255,255,0.032))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#c8c2b4]">
              {text.webHeading}
            </p>
            <h3 className="mt-4 text-2xl font-semibold leading-tight text-white">
              {text.webTitle}
            </h3>
            <p className="mt-4 text-base leading-7 text-[#c9c6bd]">
              {text.webDescription}
            </p>
            <a
              href="https://www.projectcyprus.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-7 inline-flex rounded-full bg-[linear-gradient(135deg,#ffffff,#d8d2c4)] px-5 py-3 text-sm font-semibold text-[#111312] shadow-[0_18px_48px_rgba(244,241,234,0.16)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_58px_rgba(244,241,234,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8d2c4]"
            >
              {text.visit}
            </a>
          </div>

          <a
            href="https://www.projectcyprus.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="glass-hover-sweep group relative block overflow-hidden rounded-[1.35rem] border border-transparent bg-[linear-gradient(145deg,rgba(38,32,23,0.92),rgba(7,10,10,0.96))_padding-box,linear-gradient(135deg,rgba(235,207,129,0.52),rgba(244,241,234,0.28),rgba(126,147,169,0.24),rgba(244,241,234,0.08))_border-box] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.34)] transition-all hover:-translate-y-1.5 hover:shadow-[0_34px_110px_rgba(0,0,0,0.48)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8d2c4]"
            aria-label={`${text.visit}: ${text.webTitle}`}
          >
            <div className="relative min-h-[22rem] overflow-hidden rounded-[1rem] border border-[#d8c27a]/20 bg-[#100d08]">
              <div className="flex items-center gap-2 border-b border-[#d8c27a]/16 bg-[linear-gradient(90deg,rgba(235,207,129,0.14),rgba(255,255,255,0.055),rgba(0,0,0,0.1))] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#d8d2c4]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#b9a56f]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#7d8fa8]" />
                <span className="ml-3 truncate rounded-full border border-[#d8c27a]/18 bg-black/28 px-3 py-1 text-xs text-[#eadcb0]">
                  {text.browserUrl}
                </span>
              </div>
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 top-[3.15rem] transition-transform duration-700 group-hover:scale-[1.025]"
              >
                <Image
                  src="/images/work/projectcyprus-preview.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className="object-cover object-top opacity-95"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 top-[3.15rem] bg-[radial-gradient(ellipse_at_70%_10%,rgba(235,207,129,0.1),transparent_34%),linear-gradient(180deg,rgba(7,9,9,0.02)_0%,rgba(7,9,9,0.14)_48%,rgba(7,9,9,0.7)_100%),linear-gradient(90deg,rgba(7,9,9,0.46)_0%,rgba(7,9,9,0.08)_56%,rgba(7,9,9,0.32)_100%)]" />
              <div className="relative flex min-h-[20rem] items-end p-6 sm:p-8">
                <div className="max-w-md rounded-2xl border border-[#d8c27a]/22 bg-black/34 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md">
                  <span className="inline-flex rounded-full border border-[#d8c27a]/34 bg-[#d8c27a]/12 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#eadcb0]">
                    {text.browserBadge}
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#d8c27a]">
                    {text.browserCategory}
                  </p>
                  <p className="mt-3 text-3xl font-semibold leading-tight text-white">
                    Project Cyprus
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#eadcb0]">
                    <span className="rounded-full border border-[#d8c27a]/22 bg-[#d8c27a]/10 px-3 py-2">
                      {text.browserTagListings}
                    </span>
                    <span className="rounded-full border border-[#d8c27a]/22 bg-[#d8c27a]/10 px-3 py-2">
                      {text.browserTagConsultation}
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent,rgba(244,241,234,0.08),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </a>
        </div>
      </div>

      {activeVideo ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/78 p-4 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label={text.modalLabel}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setActiveVideo(null);
            }
          }}
        >
          <div className="relative max-h-[calc(100svh-2rem)] w-full max-w-5xl overflow-y-auto rounded-[1.35rem] border border-white/14 bg-[linear-gradient(145deg,rgba(24,29,28,0.98),rgba(7,10,10,0.98))] shadow-[0_36px_140px_rgba(0,0,0,0.68)]">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c8c2b4]">
                  {text.droneHeading}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-white">
                  {activeVideo.title}
                </h3>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setActiveVideo(null)}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-xl leading-none text-white transition-all hover:bg-white/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8d2c4]"
                aria-label={text.close}
              >
                ×
              </button>
            </div>
            <div className="grid gap-0 lg:grid-cols-[0.68fr_0.32fr]">
              <div className="relative bg-black">
                <video
                  key={activeVideo.src}
                  className="max-h-[56svh] w-full bg-black object-contain lg:max-h-[78vh]"
                  src={activeVideo.src}
                  controls
                  autoPlay
                  playsInline
                />
              </div>
              <div className="p-6">
                <p className="text-base leading-8 text-[#d8d2c4]">
                  {activeVideo.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

type VideoProjectCardProps = {
  project: VideoProject;
  playLabel: string;
  playText: string;
  onOpen: () => void;
};

function VideoProjectCard({
  project,
  playLabel,
  playText,
  onOpen,
}: VideoProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPreviewing, setIsPreviewing] = useState(false);

  const playPreview = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video.play().then(() => {
      setIsPreviewing(true);
    }).catch(() => {
      // Browsers can still block hover playback; the click modal remains the reliable path.
      setIsPreviewing(false);
    });
  };

  const pausePreview = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    setIsPreviewing(false);
  };

  return (
    <button
      type="button"
      onClick={onOpen}
      onMouseEnter={playPreview}
      onMouseLeave={pausePreview}
      onFocus={playPreview}
      onBlur={pausePreview}
      className="glass-hover-sweep group relative overflow-hidden rounded-[1.35rem] border border-transparent bg-[linear-gradient(145deg,rgba(28,34,33,0.86),rgba(7,10,10,0.96))_padding-box,linear-gradient(135deg,rgba(244,241,234,0.4),rgba(132,154,176,0.28),rgba(112,94,153,0.14),rgba(244,241,234,0.08))_border-box] text-left shadow-[0_24px_80px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_34px_110px_rgba(0,0,0,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8d2c4]"
      aria-label={`${playLabel}: ${project.title}`}
    >
      <div className="relative aspect-[9/13] overflow-hidden bg-black sm:aspect-[4/5]">
        <div
          aria-hidden="true"
          className={`absolute inset-0 transition-all duration-500 ${
            isPreviewing ? "scale-105 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          <Image
            src={project.posterSrc}
            alt=""
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(244,241,234,0.14),transparent_34%),linear-gradient(180deg,rgba(7,9,9,0)_0%,rgba(7,9,9,0.04)_38%,rgba(7,9,9,0.72)_100%)]" />
          <div className="absolute left-5 top-5 rounded-full border border-white/14 bg-black/28 px-3 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-white/[0.82] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur">
            {project.visualLabel}
          </div>
        </div>
        <video
          ref={videoRef}
          className={`h-full w-full object-cover transition-all duration-500 group-hover:scale-105 ${
            isPreviewing ? "opacity-[0.86]" : "opacity-0"
          }`}
          src={project.src}
          poster={project.posterSrc}
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(244,241,234,0.16),transparent_34%),linear-gradient(180deg,rgba(7,9,9,0)_0%,rgba(7,9,9,0.08)_36%,rgba(7,9,9,0.78)_100%)]" />
        <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/[0.08] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur transition-transform duration-300 group-hover:scale-110">
          ▶
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h4 className="text-xl font-semibold leading-snug text-white">
            {project.title}
          </h4>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#d8d2c4]">
            {project.description}
          </p>
          <span className="mt-5 inline-flex rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#f4f1ea] backdrop-blur">
            {playText}
          </span>
        </div>
      </div>
    </button>
  );
}
