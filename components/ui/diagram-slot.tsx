import Image from "next/image";

type DiagramSlotProps = {
  imagePath: string;
  title: string;
  className?: string;
  /** card = framed tile; inline = sits inside a section without gallery framing */
  variant?: "card" | "inline";
  /** compact = sidebar; default = section visual; large = featured full width */
  size?: "compact" | "default" | "large";
  showCaption?: boolean;
};

const INLINE_SIZE = {
  compact:
    "aspect-[16/10] min-h-[200px] sm:min-h-[240px]",
  default:
    "aspect-[16/9] min-h-[240px] sm:min-h-[300px] lg:min-h-[360px]",
  large:
    "aspect-[16/9] w-full",
} as const;

const IMAGE_PADDING = {
  compact: "p-2 sm:p-3",
  default: "p-2 sm:p-4",
  large: "p-2 sm:p-3 lg:p-4",
  card: "p-3 sm:p-4",
} as const;

const IMAGE_SIZES = {
  compact: "(max-width: 768px) 92vw, 520px",
  default: "(max-width: 1024px) 96vw, 720px",
  large: "(max-width: 1280px) 96vw, 1120px",
  card: "(max-width: 1024px) 100vw, 900px",
} as const;

export function DiagramSlot({
  imagePath,
  title,
  className = "",
  variant = "card",
  size = "default",
  showCaption = true,
}: DiagramSlotProps) {
  const isInline = variant === "inline";
  const resolvedSize = isInline ? size : "card";

  return (
    <figure className={`relative ${className}`}>
      <div
        className={
          isInline
            ? `group image-hover-wrap relative w-full overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-sm dark:border-white/10 dark:bg-[#12101c] ${INLINE_SIZE[resolvedSize as keyof typeof INLINE_SIZE]}`
            : `group image-hover-wrap relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-gray-200/90 bg-gray-50 dark:border-white/10 dark:bg-white/[0.03]`
        }
      >
        <Image
          src={imagePath}
          alt={title}
          fill
          className={`image-hover-scale object-contain ${
            isInline
              ? `${IMAGE_PADDING[resolvedSize as keyof typeof IMAGE_PADDING]}`
              : IMAGE_PADDING.card
          }`}
          sizes={
            isInline
              ? IMAGE_SIZES[resolvedSize as keyof typeof IMAGE_SIZES]
              : IMAGE_SIZES.card
          }
        />
      </div>
      {showCaption ? (
        <figcaption
          className={
            isInline
              ? `mt-3 text-center text-sm text-gray-600 dark:text-gray-400 ${size === "large" ? "sm:text-base" : ""}`
              : "mt-2 text-center text-xs text-gray-500 dark:text-gray-400"
          }
        >
          {title}
        </figcaption>
      ) : null}
    </figure>
  );
}
