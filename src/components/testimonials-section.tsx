"use client";

import { testimonials } from "@/static/testimonials";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function TestimonialsSection() {
  return (
    <section
      id="reccomendations"
      className="w-full flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl font-bold mt-20 mb-10">Recomendações</h1>

      <div className="flex flex-col gap-10">
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
    </section>
  );
}
