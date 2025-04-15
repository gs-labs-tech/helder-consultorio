"use client";
import { MailPlusIcon, PhoneCallIcon } from "lucide-react";
import { motion } from "motion/react";
import { WhatsAppIcon } from "./icons/whatsapp";

export function HomeSection() {
  return (
    <motion.section
      className="w-screen items-center justify-center text-white bg-[url(/consultorio-2.jpg)] min-h-screen bg-center bg-black/50 bg-no-repeat bg-cover bg-blend-color bg-opacity-50 border-b flex flex-col"
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
          <WhatsAppIcon fill="#fff" width={21} height={21} />
          <p className="text-md">
            WhatsApp
          </p>
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
      </motion.div>
    </motion.section>
  );
}
