"use client";

import { motion } from "motion/react";

import {
  studyGroupsData,
  timelineProfessionalBackground,
} from "../static/professional-background";

import { Button } from "./ui/button";
import * as Card from "./ui/card";
import { Section } from "./ui/section";
import { Timeline } from "./ui/timeline";

export function ProfessionalBackgroundSection() {
  return (
    <Section id="professional-background" title="Formações e Dedicações">
      <div className="flex flex-col gap-4 px-8">
        <span className="text-sm lg:text-base text-justify">
          Além da prática clínica e estudos cotidianos que a fundamentam, e a
          experiência com supervisão a psicoterapeutas, dedica-se também à
          coordenação do GEPO e às suas respectivas atividades, bem como
          ministra dois Grupos de Estudos através desta instituição
        </span>

        <motion.div
          className="mt-4 grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 gap-6 lg:gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {studyGroupsData.map((studyGroup) => (
            <Card.Card
              key={studyGroup.text}
              className="border border-white/10 shadow-sm text-white bg-card/10"
            >
              <Card.CardContent className="flex flex-col justify-center items-center gap-4 lg:gap-3 px-7 lg:px-14">
                <p className="text-center text-sm h-fit lg:h-12">
                  {studyGroup.text}
                </p>

                <Button
                  className="w-fit hover:scale-110 duration-300 transition-all"
                  variant="secondary"
                  asChild
                >
                  <a
                    href={studyGroup.redirectUrl}
                    target="_blank"
                    className="flex items-center text-lg font-bold"
                  >
                    Saiba Mais
                  </a>
                </Button>
              </Card.CardContent>
            </Card.Card>
          ))}
        </motion.div>

        <div>
          <Timeline data={timelineProfessionalBackground} />
        </div>
      </div>
    </Section>
  );
}
