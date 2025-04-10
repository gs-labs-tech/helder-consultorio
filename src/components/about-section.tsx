"use client"
import { motion } from "motion/react";

import { Section } from "./ui/section";

export function AboutSection() {
  return (
    <Section id="about" title="Helder Barbosa">
      <div className="grid grid-rows-2 lg:grid-rows-1 grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-16">
        <motion.div
          className="flex items-center justify-center mt-6 lg:mt-0"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <img
            src="/helder.jpg"
            className="w-fit max-w-[30rem] h-[30rem] object-contain rounded-lg shadow-sm border border-border/80"
          />
        </motion.div>

        <motion.div
          className="flex justify-start lg:justify-center gap-8 flex-col mt-4 lg:mt-0 px-6 lg:px-0"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <p className="text-base font-normal">
            Psicólogo Clínico e Psicanalista dedicado à prática clínica com
            adolescentes e adultos nas modalidades presencial e online, desde
            2011.
          </p>

          <p className="text-base font-normal">
            Dedica-se também ao desenvolvimento de Grupos de Estudos e
            supervisões.
          </p>

          <p className="text-base font-normal">
            Suas formações são por instituições reconhecidas e prestigiadas pelo
            MEC, Federação Brasileira de Psicanálise (FEBRAPSI) e Movimento
            Articulação das Entidades Psicanalíticas.
          </p>

          <div>
            <p className="text-lg font-normal">
              Inscrição Profissional <strong>CRP-06/176171</strong>
            </p>

            <p className="text-lg font-normal">
              CNPJ <strong>43.105.473/0001-66</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
