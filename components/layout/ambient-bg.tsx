type AmbientBgProps = {
  className?: string;
};

export function AmbientBackground({ className = "" }: AmbientBgProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <div className="absolute -top-28 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[rgba(34,197,94,0.18)] blur-3xl dark:bg-[rgba(34,197,94,0.1)]" />
      <div className="absolute top-24 right-[-140px] h-[460px] w-[460px] rounded-full bg-[rgba(34,211,238,0.16)] blur-3xl dark:bg-[rgba(34,211,238,0.09)]" />
      <div className="absolute bottom-[-160px] left-[-120px] h-[480px] w-[480px] rounded-full bg-[rgba(59,130,246,0.14)] blur-3xl dark:bg-[rgba(59,130,246,0.08)]" />
    </div>
  );
}
