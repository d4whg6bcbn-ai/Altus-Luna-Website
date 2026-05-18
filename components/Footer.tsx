import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/start-project" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#101211] px-5 py-12 text-[#f4f1ea] sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div className="flex max-w-xl flex-col gap-5">
          <div className="relative h-14 w-44 overflow-hidden rounded-full border border-white/10 bg-black sm:w-52">
            <Image
              src="/images/logo-horizontal.svg"
              alt="Altus Luna"
              fill
              sizes="(min-width: 640px) 208px, 176px"
              className="scale-[2.6] object-contain px-4 py-2.5"
            />
          </div>
          <p className="max-w-md text-sm leading-6 text-[#c9c6bd]">
            Drone filming, video editing, social content, and websites for
            Cyprus businesses, property professionals, and service brands that
            want to look clear, cinematic, and credible online.
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-[#c9c6bd]"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
