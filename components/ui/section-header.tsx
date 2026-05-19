import { MotionIn } from "@/components/motion/MotionIn";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const maxW = align === "center" ? "max-w-3xl" : "max-w-2xl";

  return (
    <MotionIn>
      <header className={`mb-10 md:mb-14 ${alignClass}`}>
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-600 dark:text-cyan-400/90">
          {eyebrow}
        </p>
        <h2
          className={`mt-3 text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold tracking-tight text-gray-900 dark:text-white leading-[1.1] ${maxW}`}
        >
          {title}
        </h2>
        {description ? (
          <p className={`mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed ${maxW}`}>
            {description}
          </p>
        ) : null}
      </header>
    </MotionIn>
  );
}
