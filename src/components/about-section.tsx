"use client";
import { motion } from "motion/react";

import { Section } from "./ui/section";

export function AboutSection() {
  return (
    <Section id="about" title="Helder de Oliveira Barbosa">
      <div className="grid grid-rows-[min-content_1fr] lg:grid-rows-1 grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16">
        <motion.div
          className="flex items-center justify-center mt-6 lg:mt-0 "
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <img
            src="/helder.jpg"
            className="w-[20rem] lg:w-[32rem] h-[20rem] lg:h-[32rem] object-contain rounded-lg shadow-sm border border-border/80"
          />
        </motion.div>

        <motion.div
          className="flex justify-start lg:justify-center gap-8 flex-col mt-4 lg:mt-0 px-6 lg:px-0"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <p className="text-sm lg:text-base font-normal text-justify">
            Psicólogo Clínico e Psicanalista desde 2011 dedicado à prática
            clínica com adolescentes e adultos nas modalidades presencial e
            online.
          </p>

          <p className="text-sm lg:text-base font-normal text-justify">
            Dedica-se também ao desenvolvimento de Grupos de Estudos e
            supervisões.
          </p>

          <p className="text-sm lg:text-base font-normal text-justify">
            Suas formações são por instituições reconhecidas e prestigiadas pelo
            MEC, Federação Brasileira de Psicanálise (FEBRAPSI) e Movimento
            Articulação das Entidades Psicanalíticas.
          </p>

          <div>
            <p className="text-sm lg:text-base font-normal text-justify">
              Inscrição Profissional CRP-06/176171
            </p>

            <p className="text-sm lg:text-base font-normal text-justify">
              CNPJ 43.105.473/0001-66
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
