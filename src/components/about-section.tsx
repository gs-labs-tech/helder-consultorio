import { Section } from "./ui/section";

export function AboutSection() {
  return (
    <Section id="about" title="Helder Barbosa">
      <div className="grid grid-cols-2 gap-16">
        <div className="flex items-center justify-center">
          <img
            src="/helder.jpg"
            className="w-fit max-w-[30rem] h-[30rem] object-contain rounded-lg shadow-sm border border-border/80"
          />
        </div>

        <div className="flex justify-center gap-8 flex-col">
          <p className="text-base font-normal">
            Psicólogo Clínico e Psicanalista dedicado à prática clínica com
            adolescentes e adultos nas modalidades presencial e online, desde
            2011.
          </p>

          <p className="text-base font-normal">
            Dedica-se também ao desenvolvimento de Grupos de Estudos e
            supervisões.
          </p>

          <p className="text-base font-normal">
            Suas formações são por instituições reconhecidas e prestigiadas pelo
            MEC, Federação Brasileira de Psicanálise (FEBRAPSI) e Movimento
            Articulação das Entidades Psicanalíticas.
          </p>

          <div>
            <p className="text-lg font-normal">
              Inscrição Profissional <strong>CRP-06/176171</strong>
            </p>

            <p className="text-lg font-normal">
              CNPJ <strong>43.105.473/0001-66</strong>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
