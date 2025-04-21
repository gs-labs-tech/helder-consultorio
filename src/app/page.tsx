"use client";
import { MailPlusIcon, MenuIcon, PhoneCallIcon } from "lucide-react";

import { AboutSection } from "@/components/about-section";
import { AppointmentsSection } from "@/components/appointments-section";
import { HomeSection } from "@/components/home-section";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { OfficeSection } from "@/components/office-section";
import { ProfessionalBackgroundSection } from "@/components/professional-background-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Metadata } from "next";

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

      <Popover>
        <PopoverTrigger asChild>
          <button
            className="fixed bottom-3 right-6 cursor-pointer"
            role="button"
            aria-label="Menu de contatos"
            aria-roledescription="Menu de contatos"
          >
            <div className="flex flex-row items-center justify-center gap-2 bg-gray-950/50 rounded-full p-2">
              <MenuIcon width={22} height={22} />
            </div>
          </button>
        </PopoverTrigger>

        <PopoverContent
          side="left"
          className="flex flex-col gap-3 justify-start items-start mb-2 bg-gray-950 rounded-lg border-none w-fit text-white"
        >
          <a
            className="flex flex-row items-center justify-center gap-2"
            href="https://wa.me/5514996913467"
          >
            <WhatsAppIcon fill="#fff" width={21} height={21} />
            <p className="text-md">WhatsApp</p>
          </a>

          <a
            href="mailto:psicohelder@gmail.com"
            className="flex flex-row items-center justify-center gap-2"
          >
            <MailPlusIcon size={21} />
            <p className="text-md">psicohelder@gmail.com</p>
          </a>

          <p
            className="flex flex-row items-center justify-center gap-2 cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText("014996913467");
            }}
          >
            <PhoneCallIcon size={21} />
            <span className="text-md">014 9 9691-3467</span>
          </p>
        </PopoverContent>
      </Popover>
    </main>
  );
}
