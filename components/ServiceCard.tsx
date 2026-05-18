type ServiceCardProps = {
  title: string;
  description: string;
  details: string;
  label: string;
};

export function ServiceCard({
  title,
  description,
  details,
  label,
}: ServiceCardProps) {
  return (
    <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-[#d8d2c4] bg-[#fbfaf7] p-6 shadow-[0_20px_60px_rgba(17,19,18,0.08)] transition-transform duration-300 hover:-translate-y-1">
      <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#eef1f5]" />
      <div>
        <div className="relative mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#c8c2b4] bg-[#111312] text-xs font-semibold uppercase tracking-[0.18em] text-[#f4f1ea] shadow-[0_14px_35px_rgba(17,19,18,0.18)]">
          {label}
        </div>
        <h3 className="relative text-xl font-semibold text-[#161817]">
          {title}
        </h3>
        <p className="relative mt-4 text-base leading-7 text-[#5d5b55]">
          {description}
        </p>
      </div>
      <p className="relative mt-8 border-t border-[#e3ded3] pt-5 text-sm font-medium leading-6 text-[#4f5964]">
        {details}
      </p>
    </article>
  );
}
