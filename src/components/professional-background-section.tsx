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
        <div className="grid grid-cols-2 gap-4">
          {studyGroupsData.map((studyGroup) => (
            <Card.Card
              key={studyGroup.text}
              className="border border-white/10 shadow-sm text-white bg-card/10"
            >
              <Card.CardContent className="flex flex-col justify-center items-center gap-3 px-14">
                <p className="text-center text-base h-12">{studyGroup.text}</p>

                <Button className="w-fit" variant="secondary" asChild>
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
        </div>

        <div>
          <Timeline data={timelineProfessionalBackground} />
        </div>

        <span className="text-base text-justify">
          Além da prática clínica e estudos cotidianos que a fundamentam, e a
          experiência com supervisão a psicoterapeutas, dedica-se também à
          coordenação do GEPO como coordenador geral e também às suas
          respectivas atividades, bem como ministra dois Grupos de Estudos
          através desta instituição
        </span>
      </div>
    </Section>
  );
}
