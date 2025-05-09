"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name?: string;
  designation?: string;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="mx-auto w-full py-4 font-sans antialiased md:max-w-4xl px-2">
      <div className="relative grid grid-cols-1 gap-20">
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            {testimonials[active].name && (
              <h2 className="text-[1.8rem] font-bold text-foreground/80">
                {testimonials[active].name}
              </h2>
            )}

            {testimonials[active].designation && (
              <p className="text-sm text-foreground/50">
                {testimonials[active].designation}
              </p>
            )}

            <motion.p className="mt-2 text-sm lg:text-base text-foreground h-fit py-2 text-justify">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline"
                >
                  {word}
                  {index !== testimonials[active].quote.split(" ").length - 1
                    ? " "
                    : ""}
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          <div className="flex gap-4 mt-4 items-center justify-between">
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                aria-label="Back to previous testimonial"
                className="group/button flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
              >
                <ArrowLeftIcon className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Go to next testimonial"
                className="group/button flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
              >
                <ArrowRightIcon className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
              </button>
            </div>

            {/* Counter */}
            <div className="text-sm lg:text-base">
              {active + 1}/{testimonials.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
