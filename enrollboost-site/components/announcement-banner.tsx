export function AnnouncementBanner() {
  return (
    <div className="fixed inset-x-0 top-0 z-[60] bg-accent text-white">
      <div className="container flex h-10 items-center justify-center gap-2 text-center text-[12px] font-semibold sm:text-sm">
        <span className="truncate">
          🎓 Get EnrollBoost forms <span className="font-bold">free with a 60-day pilot</span> — limited spots this season.
        </span>
        <a
          href="https://forms.enrollboost.org"
          className="whitespace-nowrap underline underline-offset-2 hover:opacity-90"
        >
          Learn more →
        </a>
      </div>
    </div>
  );
}
