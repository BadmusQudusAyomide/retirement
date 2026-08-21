import { siteCopy } from "../data/legacy";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(23,50,77,0.08)] bg-[rgba(255,255,255,0.65)] px-6 py-10 sm:px-10 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[var(--slate)] sm:flex-row sm:items-center sm:justify-between">
        <p>
          {siteCopy.retireeName} - Birthday and Retirement Celebration {siteCopy.years}
        </p>
        <p>Celebration website</p>
      </div>
    </footer>
  );
}
