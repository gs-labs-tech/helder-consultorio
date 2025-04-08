import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type SectionProps = ComponentProps<"section"> & {
  title: string;
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
      className={cn("text-white w-full pt-20 pb-24", className)}
    >
      <div className="container lg:max-w-[90vw] 2xl:max-w-[60vw] flex flex-col gap-16">
        <h1 className="text-4xl text-center font-bold">{title}</h1>
        {children}
      </div>
    </section>
  );
}
