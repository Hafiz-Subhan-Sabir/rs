export default function Loading() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-[80px] z-40 h-[2px] overflow-hidden bg-gray-200/50 dark:bg-white/5"
    >
      <div className="route-loading-bar h-full w-1/3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400" />
    </div>
  );
}
