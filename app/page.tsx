import { Biography } from "./components/Biography";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Achievements } from "./components/Achievements";
import { ScrollProgress } from "./components/ScrollProgress";
import { SectionHeading } from "./components/SectionHeading";
import { Timeline } from "./components/Timeline";
import { numbers, tributes } from "./data/legacy";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--ivory)] text-[var(--navy)]">
      <ScrollProgress />
      <Hero />
      <Biography />
      <Timeline />
      <Achievements />

      <section id="gallery" className="px-6 py-20 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Gallery"
            title="Moments worth preserving"
            description="This section is ready for portraits, ceremonies, and family memories."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {["Early Years", "Career", "Leadership", "Awards", "Retirement Ceremony", "Family"].map(
              (item) => (
                <div
                  key={item}
                  className="group flex min-h-[240px] w-full flex-col rounded-[1.6rem] border border-[rgba(23,50,77,0.08)] bg-[linear-gradient(135deg,rgba(23,50,77,0.94),rgba(54,88,71,0.9))] p-5 text-white shadow-[0_18px_44px_rgba(23,50,77,0.12)] transition-transform duration-300 hover:-translate-y-1 sm:min-h-[280px] sm:p-6"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-[rgba(255,255,255,0.75)] sm:text-sm">
                    {item}
                  </p>
                  <div className="mt-5 flex-1 rounded-[1.2rem] border border-white/15 bg-white/10 p-4 sm:mt-6 sm:p-5">
                    <div className="h-full min-h-[140px] rounded-[1rem] border border-dashed border-white/20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_55%)]" />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Memories"
            title="Words from people whose lives were touched"
            description="A first pass for appreciation cards and future carousel content."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {tributes.map((item) => (
              <article
                key={item.author}
                className="rounded-[1.6rem] bg-white p-7 shadow-[0_16px_40px_rgba(23,50,77,0.06)]"
              >
                <p className="text-lg leading-8 text-[var(--slate)]">“{item.quote}”</p>
                <p className="mt-5 text-sm uppercase tracking-[0.3em] text-[var(--gold)]">
                  — {item.author}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-[linear-gradient(180deg,#17324d,#244764)] px-8 py-12 text-white shadow-[0_24px_70px_rgba(23,50,77,0.18)] lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[rgba(255,255,255,0.65)]">
              Family Appreciation
            </p>
            <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">
              Our family sincerely appreciates everyone who supported this journey.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[rgba(255,255,255,0.82)]">
              This section can later be expanded into a full family message, ceremony details, or
              a protected album.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {numbers.slice(0, 2).map((item) => (
              <div key={item.label} className="rounded-[1.5rem] bg-white/10 p-6">
                <p className="font-display text-4xl text-[var(--gold)]">{item.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white/70">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
