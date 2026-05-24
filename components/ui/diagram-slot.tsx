import Image from "next/image";

type DiagramSlotProps = {
  imagePath: string;
  title: string;
  className?: string;
};

export function DiagramSlot({ imagePath, title, className = "" }: DiagramSlotProps) {
  return (
    <figure className={`relative ${className}`}>
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-gray-200/90 bg-gray-50 dark:border-white/10 dark:bg-white/[0.03]">
        <Image
          src={imagePath}
          alt={title}
          fill
          className="object-contain p-4"
          sizes="(max-width: 1024px) 100vw, 900px"
        />
      </div>
      <figcaption className="mt-2 text-center text-xs text-gray-500 dark:text-gray-400">{title}</figcaption>
    </figure>
  );
}
