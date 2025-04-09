"use client";
import { motion } from "motion/react";

import { Section } from "./ui/section";

export function OfficeSection() {
  return (
    <Section id="office" title="Consultório" className="bg-black">
      <div className="grid grid-cols-2 gap-16">
        <div className="flex justify-center items-center gap-8 flex-col">
          <motion.div
            className="w-[30rem] flex flex-col gap-8"
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
        </div>

        <motion.div
          className="flex justify-center items-center"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <img
            src="/consultorio.jpg"
            className="w-[30rem] h-[30rem] object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </Section>
  );
}
