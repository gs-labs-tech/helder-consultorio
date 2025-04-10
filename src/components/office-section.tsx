"use client";
import { motion } from "motion/react";

import { Section } from "./ui/section";

export function OfficeSection() {
  return (
    <Section id="office" title="Consultório" className="bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-[min-content_1fr] lg:grid-rows-1 gap-8 lg:gap-16">
        <motion.div
          className="w-full lg:w-[30rem] flex flex-col gap-8 order-2 lg:order-1 justify-start lg:justify-center items-start lg:items-center px-4 lg:px-0"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <p className="mt-2 text-base font-normal">
            Localizado na Av. Dr. Altino Arantes, 131 – sala 16 – Ed. J.J.
            Carvalho, na cidade de Ourinhos, SP | CEP 19900-030.
          </p>

          <p className="mt-2 text-base font-normal">
            Espaço não compartilhado com outros profissionais e as vias de
            entrada e saída são distintas, garantindo a privacidade dos
            pacientes.
          </p>

          <p className="mt-2 text-base font-normal">
            Os atendimentos online são realizados pela plataforma Google Meet
            com link de acesso exclusivo e realizados em computador utilizado
            exclusivamente no consultório.
          </p>

          <p className="mt-2 text-base font-normal">
            Por se localizar na região central da cidade e haver dificuldades
            para estacionar, é disponibilizado a comodidade de uma vaga em
            estacionamento privado durante o período de atendimento.
          </p>

          <p className="mt-2 text-base font-normal">
            O consultório e sua acessibilidade foram pensados cuidadosamente
            para oferecer conforto e privacidade.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center order-1 lg:order-2 px-4 lg:px-0 mt-4 lg:mt-0 items-center h-fit lg:h-full"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <img
            src="/consultorio.jpg"
            className="w-[20rem] lg:w-[32rem] h-[20rem] lg:h-[32rem] object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </Section>
  );
}
