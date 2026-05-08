type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  badge?: string;
  center?: boolean;
};

const SectionHeading = ({
  title,
  subtitle,
  badge,
  center = true,
}: SectionHeadingProps) => {
  return (
    <div
      className={`mb-14 ${
        center ? "text-center mx-auto" : ""
      } max-w-3xl`}
    >

      {/* Badge */}
      {badge && (
        <span className="inline-block mb-4 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-400">
          {badge}
        </span>
      )}

      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-5 text-base md:text-lg leading-relaxed text-zinc-400">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;