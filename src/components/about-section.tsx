"use client";

export function AboutSection() {
  return (
    <div
      id="about"
      className="w-full flex flex-col items-center justify-center p-10"
    >
      <h1 className="text-4xl font-bold mt-4">Sobre o profissional</h1>

      <div className="w-full flex flex-row items-center justify-evenly text-white h-fit bg-center bg-background bg-no-repeat bg-cover bg-blend-color bg-opacity-50 border-b">
        <img
          src="/helder.jpg"
          className="w-[20rem] h-[30rem] object-cover rounded-lg"
        />

        <div className="w-[30rem] h-[40rem] flex justify-center items-center gap-6 flex-col">
          <h2 className="text-3xl font-semibold">Helder de Oliveira Barbosa</h2>

          <p className="mt-6 text-lg font-normal">
            Psicólogo Clínico e Psicanalista dedicado à prática clínica com
            adolescentes e adultos nas modalidades presencial e online – desde
            2011.
          </p>

          <p className="mt-6 text-lg font-normal">
            Dedica-se também ao desenvolvimento de Grupos de Estudos e
            supervisões.
          </p>

          <p className="mt-6 text-lg font-normal">
            Suas formações são por instituições reconhecidas e prestigiadas pelo
            MEC, Federação Brasileira de Psicanálise (FEBRAPSI) e Movimento
            Articulação das Entidades Psicanalíticas.
          </p>
        </div>
      </div>
    </div>
  );
}
