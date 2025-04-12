"use client";
import { MailPlusIcon } from "lucide-react";
import { motion } from "motion/react";
import { WhatsAppIcon } from "./icons/whatsapp";

export function HomeSection() {
  return (
    <motion.section
      className="w-screen items-center justify-center text-white bg-[url(/consultorio-2.jpg)] min-h-screen bg-center bg-black/70 bg-no-repeat bg-cover bg-blend-color bg-opacity-50 border-b flex flex-col"
      transition={{ duration: 1 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id="home"
    >
      <motion.h1
        className="text-2xl lg:text-4xl font-bold tracking-wide w-full text-center"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Helder Barbosa
      </motion.h1>

      <motion.span
        className="text-xl tracking-tight w-full text-center"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        Psicólogo Clínico e Psicanalista
      </motion.span>

      <motion.div
        className="flex flex-col gap-2 mt-8"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <a
          className="flex flex-row items-center justify-center gap-2"
          href="https://wa.me/5514996913467"
        >
          <WhatsAppIcon fill="#fff" width={25} height={25} />
          <p className="text-base translate-y-1">
            Entrar em contato pelo WhatsApp
          </p>
        </a>

        <a
          href="mailto:psicohelder@gmail.com"
          className="flex flex-row items-center justify-center gap-2"
        >
          <MailPlusIcon size={25} />
          <p className="text-base translate-y-1">Entrar em contato via email</p>
        </a>
      </motion.div>
    </motion.section>
  );
}
