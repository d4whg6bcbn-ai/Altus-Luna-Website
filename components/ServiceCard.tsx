type ServiceCardProps = {
  title: string;
  description: string;
  details: string;
};

export function ServiceCard({
  title,
  description,
  details,
}: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col justify-between rounded-lg border border-[#e4d9c9] bg-white p-6 shadow-[0_18px_45px_rgba(46,39,29,0.06)] transition-transform duration-300 hover:-translate-y-1">
      <div>
        <h3 className="text-xl font-semibold tracking-tight text-[#27231f]">
          {title}
        </h3>
        <p className="mt-4 text-base leading-7 text-[#665f56]">
          {description}
        </p>
      </div>
      <p className="mt-8 border-t border-[#eee7dd] pt-5 text-sm font-medium leading-6 text-[#62745d]">
        {details}
      </p>
    </article>
  );
}
