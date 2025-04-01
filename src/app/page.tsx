import { AboutSection } from "@/components/about-section";
import { HomeSection } from "@/components/home-section";
import { OfficeSection } from "@/components/office-section";
import { ProfessionalBackgroundSection } from "@/components/professional-background-section";

export default function Home() {
  return (
    <main className="overflow-y-hidden">
      <HomeSection />
      <AboutSection />
      <OfficeSection />
      <ProfessionalBackgroundSection />
    </main>
  );
}
