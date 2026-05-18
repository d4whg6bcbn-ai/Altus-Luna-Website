import Image from "next/image";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#111312]/92 text-[#f4f1ea] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-5 py-3.5 sm:px-8 lg:px-12">
        <a href="#" className="group flex items-center gap-3">
          <span className="relative block h-11 w-40 overflow-hidden rounded-full border border-white/10 bg-black shadow-[0_10px_30px_rgba(0,0,0,0.18)] sm:w-48">
            <Image
              src="/images/logo-horizontal.svg"
              alt="Altus Luna"
              fill
              priority
              sizes="(min-width: 640px) 192px, 160px"
              className="scale-[2.6] object-contain px-4 py-2"
            />
          </span>
          <span className="hidden text-xs text-[#b9b8b2] sm:block">
            Cinematic visual content
          </span>
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 text-sm font-medium text-[#c9c6bd] md:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:pawel@altusluna.com"
          className="inline-flex items-center justify-center rounded-full border border-[#d8d2c4]/40 bg-[#f4f1ea] px-4 py-2.5 text-sm font-semibold text-[#111312] shadow-sm transition-colors hover:bg-white sm:px-5 sm:py-3"
        >
          Start a project
        </a>
      </div>
    </header>
  );
}
