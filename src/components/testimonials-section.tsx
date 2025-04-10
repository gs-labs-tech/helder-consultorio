"use client";

import { testimonials } from "@/static/testimonials";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { Section } from "./ui/section";

export function TestimonialsSection() {
  return (
    <Section
      title=""
      id="reccomendations"
      className="w-screen flex flex-col items-center justify-center"
    >
      <div className="flex flex-col gap-10 pt-20 pb-10 px-6">
        <h2 className="text-2xl font-bold text-center">
          Recomendações de colegas da área
        </h2>
        <AnimatedTestimonials testimonials={testimonials.colleagues} />

        <h2 className="text-2xl font-bold text-center">
          Recomendações de participantes de estudos e supervisões
        </h2>
        <AnimatedTestimonials testimonials={testimonials.students} />

        <h2 className="text-2xl font-bold text-center">
          Comentários de pacientes
        </h2>
        <AnimatedTestimonials testimonials={testimonials.clients} />
      </div>
    </Section>
  );
}
