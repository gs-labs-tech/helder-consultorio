"use client";

export function OfficeSection() {
  return (
    <section
      id="office"
      className="w-full flex flex-col items-center justify-center bg-black"
    >
      <h1 className="text-4xl font-bold mt-20">Consultório</h1>

      <div className="w-full flex mb-14 flex-row-reverse items-center justify-evenly text-white h-fit bg-black bg-no-repeat bg-cover bg-blend-color bg-opacity-50 border-b">
        <img
          src="/background-2.jpg"
          className="w-[28rem] h-[30rem] object-cover rounded-lg"
        />

        <div className="w-[30rem] h-[40rem] flex justify-center items-center gap-6 flex-col">
          <p className="mt-2 text-[17px] font-normal">
            Localizado na Av. Dr. Altino Arantes, 131 – sala 16 – Ed. J.J.
            Carvalho, na cidade de Ourinhos, SP | CEP 19900-030.
          </p>

          <p className="mt-2 text-[17px] font-normal">
            Espaço não compartilhado com outros profissionais e as vias de
            entrada e saída são distintas, garantindo a privacidade dos
            pacientes.
          </p>

          <p className="mt-2 text-[17px] font-normal">
            Os atendimentos online são realizados pela plataforma Google Meet
            com link de acesso exclusivo e realizados em computador utilizado
            exclusivamente no consultório.
          </p>

          <p className="mt-2 text-[17px] font-normal">
            Por se localizar na região central da cidade e haver dificuldades
            para estacionar, é disponibilizado a comodidade de uma vaga em
            estacionamento privado durante o período de atendimento.
          </p>

          <p className="mt-2 text-[17px] font-normal">
            O consultório e sua acessibilidade foram pensados cuidadosamente
            para oferecer conforto e privacidade.
          </p>
        </div>
      </div>
    </section>
  );
}
