import { Biography } from "./components/Biography";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { Achievements } from "./components/Achievements";
import { Letter } from "./components/Letter";
import { ScrollProgress } from "./components/ScrollProgress";
import { SectionHeading } from "./components/SectionHeading";
import { Timeline } from "./components/Timeline";

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

      <Letter />

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
