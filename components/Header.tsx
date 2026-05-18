const navItems = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#e8e1d7] bg-[#fbfaf7]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-12">
        <a href="#" className="group flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full border border-[#c8b99f] bg-white text-sm font-semibold tracking-[0.18em] text-[#526b5a] shadow-sm">
            AL
          </span>
          <span>
            <span className="block text-sm font-semibold uppercase tracking-[0.24em] text-[#27231f]">
              Altus Luna
            </span>
            <span className="block text-xs text-[#756f66]">
              Creative media studio
            </span>
          </span>
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 text-sm font-medium text-[#5f5a53] md:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[#27231f]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:hello@altusluna.com"
          className="inline-flex items-center justify-center rounded-full bg-[#28352d] px-5 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#3c4d41]"
        >
          Start a project
        </a>
      </div>
    </header>
  );
}
