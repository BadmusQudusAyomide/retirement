import { Biography } from "./components/Biography";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { Achievements } from "./components/Achievements";
import { ScrollProgress } from "./components/ScrollProgress";
import { SectionHeading } from "./components/SectionHeading";
import { Timeline } from "./components/Timeline";
import { letter } from "./data/legacy";

const galleryImages = [
  "/photos/1CA2B946-8425-44BA-8F67-3B85E6C683EA(1).png",
  "/photos/1CA2B946-8425-44BA-8F67-3B85E6C683EA.png",
  "/photos/208FCE66-786C-4610-AF13-3BA947D5C9D4(1).png",
  "/photos/208FCE66-786C-4610-AF13-3BA947D5C9D4.png",
  "/photos/6764e36f-010a-491d-a0dd-b12ff642126b.jpg",
  "/photos/7b603812-3452-49eb-a1e1-d9fe97f46084.jpg",
  "/photos/7CC67575-EEFF-4021-8818-5E65AE7E075C.png",
  "/photos/90404a1a-6352-43f1-a927-0a7d57b20d6d.jpg",
  "/photos/A80C1EC1-D20E-4381-8BD2-46CD08935BBD.png",
  "/photos/D3D42A56-0C72-4180-8C65-56963DDBDC3D.png",
  "/photos/IMG_0062.JPG",
  "/photos/IMG_6463.JPG",
  "/photos/IMG_6464.JPG",
  "/photos/IMG_6465.JPG",
  "/photos/IMG_6584.JPG",
  "/photos/IMG_6585.JPG",
  "/photos/IMG_6586.JPG",
  "/photos/IMG_6587.JPG",
  "/photos/IMG_6588.JPG",
  "/photos/IMG_6589.JPG",
  "/photos/IMG_6590.JPG",
  "/photos/IMG_6591.JPG",
];
const galleryFeatured: [string, string] = ["/photos/IMG_6588.JPG", "/photos/IMG_6591.JPG"];
const galleryStream = galleryImages.filter((src) => !galleryFeatured.includes(src));
const galleryRatios = ["aspect-[4/5]", "aspect-[1/1]", "aspect-[3/4]", "aspect-[5/6]"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--ivory)] text-[var(--navy)]">
      <ScrollProgress />
      <Hero />

      <section id="letter" className="px-6 py-14 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Open Letter"
            title="A letter of love and gratitude"
            description="This is written in a letter style so family and guests can read it naturally, line by line."
            align="center"
          />
          <article className="mt-12 rounded-[2rem] border border-[rgba(23,50,77,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(250,245,236,0.96))] p-7 shadow-[0_20px_60px_rgba(23,50,77,0.08)] sm:p-10 lg:p-14">
            <div className="mx-auto max-w-3xl">
              <h2 className="mt-4 font-display text-3xl tracking-tight text-[var(--navy)] sm:text-4xl">
                {letter.salutation}
              </h2>
              <div className="mt-8 space-y-6 text-base leading-9 text-[var(--slate)] sm:text-lg">
                {letter.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 space-y-3 border-l-4 border-[var(--gold)] bg-[rgba(184,146,63,0.05)] px-5 py-4">
                {letter.closingLines.map((line) => (
                  <p key={line} className="text-base leading-8 text-[var(--navy)] sm:text-lg">
                    {line}
                  </p>
                ))}
              </div>
              <p className="mt-8 text-base leading-8 text-[var(--slate)] sm:text-lg">
                {letter.signOff}
              </p>
              <p className="mt-6 font-display text-2xl text-[var(--navy)]">
                {letter.congratulations}
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.28em] text-[var(--gold)]">
                {letter.signature}
              </p>
            </div>
          </article>
        </div>
      </section>

      <Biography />
      <Timeline />

      <section id="gallery" className="px-6 py-20 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Gallery"
            title="Memories in pictures"
            description="A swipeable gallery on mobile and a curated mosaic on desktop, with official portraits placed front and center."
          />
          <Gallery
            images={galleryImages}
            featured={galleryFeatured}
            stream={galleryStream}
            ratios={galleryRatios}
          />
        </div>
      </section>

      <Achievements />

      <Footer />
    </main>
  );
}
