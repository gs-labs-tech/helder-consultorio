"use client";
import { motion } from "motion/react";
import { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type SectionProps = ComponentProps<"section"> & {
  title?: string;
};

export function Section({
  title,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      {...props}
      className={cn(
        "text-white w-screen grid place-content-center min-h-screen px-2 lg:px-0 pt-20 pb-10 overflow-x-hidden",
        className
      )}
    >
      <motion.div
        className="lg:container w-full h-full flex flex-col items-center justify-center gap-4 lg:gap-16"
        transition={{ duration: 0.5, delay: 0.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {title && (
          <motion.h1
            className="text-xl text-center font-bold"
            transition={{ duration: 0.5, delay: 0.5 }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
          >
            {title}
          </motion.h1>
        )}
        {children}
      </motion.div>
    </section>
  );
}
