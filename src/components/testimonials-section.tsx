"use client";

import { testimonials } from "@/static/testimonials";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="w-full flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl font-bold mt-20">Depoimentos</h1>

      <div>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
}
