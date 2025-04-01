"use client";

import { SproutIcon } from "lucide-react";

export function HomeSection() {
  return (
    <div
      id="home"
      className="w-full items-center justify-center text-white bg-[url(/background.jpg)] h-[85vh] bg-center bg-black/70 bg-no-repeat bg-cover bg-blend-color bg-opacity-50 border-b flex flex-col"
    >
      <SproutIcon className="mb-5" size="36" />
      <p className="text-4xl font-bold tracking-wide">Helder Barbosa</p>
      <span className="text-base tracking-tight">
        Psicoterapeuta & Psicólogo
      </span>
    </div>
  );
}
