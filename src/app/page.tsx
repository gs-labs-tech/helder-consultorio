import { AboutSection } from "@/components/about-section";
import { AppointmentsSection } from "@/components/appointments-section";
import { HomeSection } from "@/components/home-section";
import { OfficeSection } from "@/components/office-section";
import { ProfessionalBackgroundSection } from "@/components/professional-background-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { Metadata } from "next";
import { ContactMenu } from "@/components/ui/contact-menu";

export const metadata: Metadata = {
  title: "Psicólogo Helder Barbosa",
  description: "Psicólogo Clínico e Psicanalista",
  keywords: [
    "Helder",
    "Barbosa",
    "Helder barbosa",
    "Psicólogo",
    "Psicanalista",
    "Analista",
    "Clinica",
    "Clínico",
    "Psicólogo clínico",
    "Helder barbosa psicólogo",
    "Psicólogo helder barbosa",
    "Helder Barbosa psicólogo",
    "Psicólogo Helder Barbosa",
    "Psicanalista Helder Barbosa",
    "Psicologia clínica",
    "Psicanálise",
    "Psicoterapia com psicanalista",
    "Tratamento psicológico",
    "Atendimento psicológico",
    "Psicólogo clínico particular",
    "Psicanálise individual",
    "Psicólogo especialista em psicanálise",
    "Consulta com Helder Barbosa",
    "Psicólogo perto de mim",
    "Agendamento psicólogo Helder Barbosa",
    "Terapia com psicanalista",
    "Psicólogo em ourinhos",
    "Psicólogo em ourinhos são paulo",
    "Psicanalista em ourinhos",
    "Psicanalista em ourinhos são paulo",
  ],
  openGraph: {
    url: "https://helderbarbosa.com.br/",
    type: "website",
    title: "Helder Barbosa",
    description: "Psicólogo Clínico e Psicanalista",
  },
  appleWebApp: {
    title: "https://helderbarbosa.com.br/",
    statusBarStyle: "black",
  },
  category: "Psicologia",
  alternates: {
    canonical: "https://helderbarbosa.com.br/",
  },
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HomeSection />
      <AboutSection />
      <OfficeSection />
      <ProfessionalBackgroundSection />
      <AppointmentsSection />
      <TestimonialsSection />
      <ContactMenu />
    </main>
  );
}
