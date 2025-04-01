import { AboutSection } from "@/components/about-section";
import { HomeSection } from "@/components/home-section";

export default function Home() {
  return (
    <main className="overflow-y-scroll h-screen w-full scroll-smooth">
      <HomeSection />
      <AboutSection />
    </main>
  );
}
