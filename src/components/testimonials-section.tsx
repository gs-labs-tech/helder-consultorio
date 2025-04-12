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
      <div className="flex flex-col gap-20 pt-20 pb-10 px-6">
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center">
            Recomendações de colegas da área
          </h2>
          <AnimatedTestimonials testimonials={testimonials.colleagues} />
          <a
            className="px-0 lg:pl-7 text-base cursor-pointer hover:underline"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeN8omIVbYnmu275-RFfKJ8BnvOtvXM-RcJ1WNXntykfNVB8Q/viewform"
            target="_blank"
          >
            É um colega da área? Deixe sua recomendação!
          </a>
        </div>

        <div className="mt-20">
          <h2 className="text-[2.75rem] font-bold text-center">
            Recomendações de participantes de Grupos de Estudos e Supervisões
          </h2>
          <AnimatedTestimonials testimonials={testimonials.students} />
          <a
            className="px-0 lg:pl-7 text-base cursor-pointer hover:underline"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfRFc6rrO3-L7jPcHKxA7FBHh3gQhH7hZsKWnOXmjzZvsmOCw/viewform"
            target="_blank"
          >
            É um participante de algum grupo de estudos ou supervisão? Deixe seu
            comentário!
          </a>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center">
            Comentários de pacientes
          </h2>
          <AnimatedTestimonials testimonials={testimonials.clients} />
          <a
            className="px-0 lg:pl-7 text-base cursor-pointer hover:underline"
            href="https://docs.google.com/forms/d/e/1FAIpQLScS_uPFY8zXsQ7f1vf4fRokG6jhT9WJ7EmVxi0Rg7FcBje-KQ/viewform"
            target="_blank"
          >
            É um paciente? Deixe seu comentário!
          </a>
        </div>
      </div>
    </Section>
  );
}
