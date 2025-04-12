"use client";

import { motion } from "motion/react";

import { Section } from "./ui/section";

export function AppointmentsSection() {
  return (
    <Section
      id="appointments"
      title="Sobre os atendimentos"
      className="bg-black"
    >
      <div className="w-full flex flex-col mb-14 mt-10 items-center justify-center text-white bg-no-repeat bg-cover bg-blend-color bg-opacity-50">
        <motion.div
          className="h-fit flex flex-col gap-10 items-center text-center px-6 lg:p-0"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h3 className="text-2xl font-semibold">
            Por que as pessoas procuram psicoterapia?
          </h3>

          <p className="text-base font-normal text-justify">
            Como é de se deduzir: as pessoas procuram psicoterapia porque estão
            em sofrimento intenso (sintomas explícitos) e/ou estão muito
            insatisfeitas com a própria vida (crises existenciais). De forma
            genérica é possível expor um pouco desta motivações da seguinte
            forma:
          </p>

          <ul className="list-disc list-inside flex flex-col text-justify justify-center gap-8 w-full">
            <li className="text-base font-normal">
              A primeira (sintomas explícitos) é quando a condição está crítica.
              Estas pessoas se encontram em sofrimentos ou crises intensas que
              as paralisam e/ou as submetem a variadas limitações no viver
              cotidiano, como: problemas com ‘auto-estima’, inseguranças
              limitantes, déficit de atenção, hiperatividade, depressão, manias,
              ansiedade, persecutoriedade, problemas com sono, com alimentação,
              com relacionamentos, eficiência, doenças psicossomáticas etc.,
              etc., etc. Ou seja, condições que incapacitam as funções e
              necessidades básicas da vida.
            </li>

            <li className="text-base font-normal">
              Sobre as crises existenciais, as observamos através de queixas de
              diminuição dos ânimos com a vida, os “tanto faz”, apáticos; não
              necessariamente os depressivos – esta queixa é comum em pessoas
              que fazem apenas uso de medicamentos psiquiátricos (sem
              acompanhamento psicoterapêutico) por anos; relatam que os
              medicamentos realmente diminuíram e/ou eliminaram o sofrimento,
              porém, diminuiu também o ‘sabor da vida’. Estas pessoas, sejam
              elas medicalizadas ou não, costumam buscar ajuda para se
              reencontrarem consigo mesmas, procuram habitar o próprio Ser.
              Estão em busca do que faz sentido para si próprio e não apenas
              manterem-se ajustadas aos padrões. Isto pode parecer simples, mas,
              na atualidade, muitas pessoas estão alienadas de si próprias.’
            </li>

            <li className="text-base font-normal">
              Há também outro perfil de demandas: os que procuram psicoterapia
              como parte do processo de sua formação psicanalítica; que é
              indispensável.
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="h-fit flex flex-col mt-10 gap-10 justify-center text-justify px-6 lg:p-0"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <h3 className="text-2xl font-semibold text-center">
            Como o trabalho acontece?
          </h3>

          <p className="text-base font-normal text-justify">
            De forma muito simples: conversando. E, claro, mantendo um bom
            relacionamento com empatia e sensibilidade.
          </p>

          <p className="text-base font-normal flex flex-col justify-center gap-2 text-justify">
            <span className="mb-1 font-semibold">
              "Mas, apenas conversando? Posso conversar com um amigo, parente
              etc."
            </span>
            É verdade, é possível conversar com muitas outras pessoas, porém,
            quando desabafamos, estas oferecem palpites e conselhos (que nem
            sempre seguem) e nossa vida não se transforma. Passamos anos e anos
            com as mesmas queixas e desabafos e, pior, ouvindo os mesmos
            palpites. Enfim, ao invés de tentar explicar de forma exaustiva como
            o trabalho acontece, vamos de ensaio (e já experimentar um pouco de
            uma conversa de análise).
          </p>

          <p className="text-base font-normal text-justify">
            Imaginem: uma criança na cozinha imita os mesmos movimentos de sua
            mãe que prepara o bolo. Manuseia farinha, fermento, cacau, morango,
            açúcar, água, etc. Se não estiver sob orientação, a criança faz
            apenas sujeira com os ingredientes. A mãe os transforma num bolo,
            pois, domina a ‘alquimia’ - as medidas e o tempo adequado para a
            transformação. Os palpiteiros e conselheiros são como essa criança,
            podem até usar dos mesmos ingredientes/palavras do analista, porém,
            só fazem sujeira (e antes fosse fácil de limpar como os do bolo).
            Pois, não sabem ouvir tecnicamente, não conhecem a ‘alquimia’ que
            transforma o psiquismo. Desconhecem o momento e a medida adequada
            das palavras no momento exato que a transformação pode ocorrer –
            experimentem errar o tempo e a medida do amido de milho.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
