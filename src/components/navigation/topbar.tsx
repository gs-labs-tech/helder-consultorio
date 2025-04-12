"use client";

import { navigationLinks } from "@/static/navigation-links";
import React, { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarTrigger } from "./sidebar";

export function NavigationTopbar() {
  const [open, setOpen] = React.useState<boolean>(false);

  function handleOnClick(sectionId: string) {
    scrollToPosition(sectionId);
    setOpen(false);
  }

  return (
    <nav className="py-4 z-50 px-2 border-b border-white/10 sticky backdrop-blur supports-[backdrop-filter]:bg-black/20 top-0 w-full">
      <div className="flex md:hidden">
        <SidebarTrigger onClick={() => setOpen(true)} className="ml-2" />
      </div>

      <div className="hidden md:flex justify-center items-center">
        <NavigationList onClick={handleOnClick} />
      </div>

      <Sidebar open={open} onClose={() => setOpen(false)}>
        <NavigationList className="flex flex-col" onClick={handleOnClick} />
      </Sidebar>
    </nav>
  );
}

interface NavigationListProps extends Omit<ComponentProps<"ul">, "onClick"> {
  onClick: (sectionId: string) => void;
}

function NavigationList({ onClick, className, ...rest }: NavigationListProps) {
  return (
    <ul className={cn("flex gap-6", className)} {...rest}>
      {navigationLinks.map((link) => (
        <li key={link.sectionId}>
          <button
            className="hover:border-b border-foreground transition-all ease-in-out duration-100"
            onClick={() => onClick(link.sectionId)}
          >
            {link.title}
          </button>
        </li>
      ))}
    </ul>
  );
}

function scrollToPosition(sectionId: string) {
  const section = document.querySelector(sectionId);
  section?.scrollIntoView({ behavior: "smooth" });
}
