"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MailPlusIcon, MenuIcon, PhoneCallIcon } from "lucide-react";

import { WhatsAppIcon } from "@/components/icons/whatsapp";

export function ContactMenu() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="fixed bottom-3 right-6 cursor-pointer"
          role="button"
          aria-label="Menu de contatos"
          aria-roledescription="Menu de contatos"
        >
          <div className="flex flex-row items-center justify-center gap-2 bg-gray-950/50 rounded-full p-2">
            <MenuIcon width={22} height={22} />
          </div>
        </button>
      </PopoverTrigger>

      <PopoverContent
        side="left"
        className="flex flex-col gap-3 justify-start items-start mb-2 bg-gray-950 rounded-lg border-none w-fit text-white"
      >
        <a
          className="flex flex-row items-center justify-center gap-2"
          href="https://wa.me/5514996913467"
        >
          <WhatsAppIcon fill="#fff" width={21} height={21} />
          <p className="text-md">WhatsApp</p>
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
      </PopoverContent>
    </Popover>
  );
}
