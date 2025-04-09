"use client";

import { motion } from "motion/react";
export interface TimelineData {
  time: string;
  title: string;
  description?: string;
}

interface TimelineProps {
  data: TimelineData[];
}

export function Timeline({ data }: TimelineProps) {
  return (
    <ol className="relative border-s border-gray-500 dark:border-gray-700 my-12">
      {data.map((item, index) => (
        <motion.li
          key={index}
          className="mb-10 ms-4"
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: -30, opacity: 0 }}
          transition={{ duration: 1, delay: index * 0.15 }}
        >
          {/* Timeline dot */}
          <motion.div
            className="absolute w-3 h-3 bg-card rounded-full mt-1.5 -start-1.5 border-2 border-gray-500 dark:border-gray-900 dark:bg-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 2 }}
          />

          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {item.time}
          </time>
          <h3 className="text-base font-semibold text-white">{item.title}</h3>

          {item.description && (
            <p className="text-base font-normal text-gray-300">
              {item.description}
            </p>
          )}
        </motion.li>
      ))}
    </ol>
  );
}
