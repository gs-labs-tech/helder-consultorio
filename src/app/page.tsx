import { AboutSection } from "@/components/about-section";
import { AppointmentsSection } from "@/components/appointments-section";
import { HomeSection } from "@/components/home-section";
import { OfficeSection } from "@/components/office-section";
import { ProfessionalBackgroundSection } from "@/components/professional-background-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactMenu } from "@/components/ui/contact-menu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Helder Barbosa | Psicólogo Clínico e Psicanalista",
  description: "Psicólogo Clínico e Psicanalista",
  keywords: [
    "Helder",
    "Barbosa",
    "Helder barbosa",
    "Psicólogo",
    "Psicanalista",
    "Analista",
    "Clinica",
    "Helder Barbosa Psicólogo brasileiro homem",
    "Helder Barbosa Psicanalista brasileiro homem",
    "Helder Barbosa Psicanalista brasileiro freudiano",
    "Helder Barbosa Psicanalista brasileiro kleiniano",
    "Helder Barbosa Psicanalista brasileiro winnicottiano",
    "Helder Barbosa Psicanalista brasileiro com formação no Sedes",
    "Psicólogo Ourinhos",
    "Psicólogo Ourinhos São Paulo",
    "Ourinhos Psicólogo",
    "Ourinhos Psicólogo São Paulo",
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
    "Psicanalista freudiano em ourinhos",
    "Psicanalista freudiano em ourinhos são paulo",
    "Psicanalista kleiniano em ourinhos",
    "Psicanalista kleiniano em ourinhos são paulo",
    "Psicanalista winnicottiano em ourinhos",
    "Psicanalista winnicottiano em ourinhos são paulo",
    "Psicanalista com formação no Sedes em ourinhos",
    "Psicanalista com formação no Sedes em ourinhos são paulo",
    "Psicanalista brasileiro freudiano em ourinhos",
    "Psicanalista brasileiro kleiniano em ourinhos",
    "Psicanalista brasileiro winnicottiano em ourinhos",
    "Psicanalista brasileiro com formação no Sedes em ourinhos",
  ],
  openGraph: {
    siteName: "Helder Barbosa | Psicólogo Clínico e Psicanalista",
    title: "Helder Barbosa | Psicólogo Clínico e Psicanalista",
    type: "website",
    locale: "pt_BR",
    url: "https://helderbarbosa.com.br/",
    images: [
      {
        url: "https://helderbarbosa.com.br/consultorio-2.webp",
        width: 3177,
        height: 1786,
        alt: "Consultório do Psicólogo Helder Barbosa",
      },
    ],
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
