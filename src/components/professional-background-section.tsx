"use client";

import { professionalBackground } from "../static/professional-background";

export function ProfessionalBackgroundSection() {
  return (
    <section
      id="professional-background"
      className="w-full flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl font-bold mt-20 pb-10">Formações e Dedicações</h1>

      <div className="w-full flex flex-col items-center justify-evenly text-white bg-center bg-background bg-no-repeat bg-cover bg-blend-color bg-opacity-50 border-b pb-10">
        <div className="w-10/12 h-fit flex justify-center items-center text-center flex-col">
          <ol className="grid grid-cols-1 gap-y-10">
            {professionalBackground.map((item) => (
              <li
                key={item.text}
                className="flex flex-row items-center justify-center text-md gap-2 h-fit"
              >
                <p className="text-center font-medium text-lg">{item.text}</p>

                {item.redirectUrl && (
                  <a
                    href={item.redirectUrl}
                    target="_blank"
                    className="flex items-center text-lg font-bold underline"
                  >
                    Saiba Mais
                  </a>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
