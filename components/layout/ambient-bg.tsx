type AmbientBgProps = {
  className?: string;
};

export function AmbientBackground({ className = "" }: AmbientBgProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <div className="absolute -top-28 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-orange-600/[0.08] blur-3xl dark:bg-orange-400/[0.07]" />
      <div className="absolute top-40 right-[-120px] h-[400px] w-[400px] rounded-full bg-amber-700/[0.06] blur-3xl dark:bg-amber-500/[0.05]" />
    </div>
  );
}
