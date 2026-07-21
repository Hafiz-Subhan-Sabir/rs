import { MotionIn } from "@/components/motion/MotionIn";

type SectionHeaderProps = {
  eyebrow?: string;
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
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={`${eyebrow ? "mt-3" : ""} font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-semibold tracking-tight text-stone-900 dark:text-white leading-[1.1] ${maxW}`}
        >
          {title}
        </h2>
        {description ? (
          <p className={`mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed ${maxW}`}>
            {description}
          </p>
        ) : null}
      </header>
    </MotionIn>
  );
}
