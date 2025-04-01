"use client";

import { Card, CardContent, CardFooter } from "./ui/card";

export function ProfessionalBackgroundSection() {
  return (
    <section
      id="professional-background"
      className="w-full flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl font-bold mt-20 pb-10">Formações e Dedicações</h1>

      <div className="w-full flex flex-col items-center justify-evenly text-white bg-center bg-background bg-no-repeat bg-cover bg-blend-color bg-opacity-50 border-b pb-10">
        <div className="w-10/12 h-fit flex justify-center items-center text-center gap-6 flex-col">
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent>
                <p className="mt-2 text-lg font-normal">
                  Grupo de Estudos “Introdução ao pensamento clínico de Donald
                  Woods Winnicott: estudos da obra”.{" "}
                </p>
              </CardContent>
              <CardFooter>
                <a
                  className="underline"
                  href="https://forms.gle/t3ySLCKFfbLNtBjD7"
                  target="_blank"
                >
                  Mais informações aqui
                </a>
              </CardFooter>
            </Card>

            <Card>
              <CardContent>
                <p className="mt-2 text-lg font-normal">
                  Grupo de Estudos “A metapsicologia freudiana e kleiniana”.{" "}
                </p>
              </CardContent>
              <CardFooter>
                <a
                  className="underline"
                  href="https://forms.gle/J1ZyY9kqUaB8crE97"
                  target="_blank"
                >
                  Mais informações aqui
                </a>{" "}
              </CardFooter>
            </Card>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <Card>
              <CardContent>
                <p className="mt-2 text-lg font-normal">
                  Psicólogo Clínico pela UniFio [2006 a 2010]
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="mt-2 text-lg font-normal">
                  Especialização em Psicologia Clínica Psicanalítica pela
                  Universidade Estadual de Londrina, PR (UEL) [2012 a 2013];
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="mt-2 text-lg font-normal">
                  Formação em Psicanálise pelo Instituto Sedes Sapientiae (ISS)
                  – São Paulo, SP [2015 a 2019];
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="mt-2 text-lg font-normal">
                  Formação em Psicanálise pelo Instituto Sedes Sapientiae (ISS)
                  – São Paulo, SP [2015 a 2019];
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="mt-2 text-lg font-normal">
                  Cursou “Para além da Contratransferência: o analista
                  implicado” com Gina Tamburrino pelo ISS [2023];
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="mt-2 text-lg font-normal">
                  Membro do Grupo de Estudos de Psicanálise de Ourinhos e região
                  (GEPO) desde 2009 e coordenador desde 2020;
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="mt-2 text-lg font-normal">
                  Membro do Grupo de Estudos de Winnicott: Playground
                  Psicanalítico - ministrado por Ricardo Telles de Deus [desde
                  2024], entre outros cursos de aprimoramento e extensão, e mais
                  de 15 anos de experiência com análise pessoal;
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="mt-2 text-lg font-normal">
                  Além da prática clínica e estudos cotidianos que a
                  fundamentam, e a experiência com supervisão a psicoterapeutas,
                  dedica-se também à coordenação do GEPO como coordenador geral
                  e também às suas respectivas atividades, bem como ministra
                  dois Grupos de Estudos através desta instituição
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
