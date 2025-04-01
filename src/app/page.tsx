import { Button } from "@/components/ui/button";
import * as Card from "@/components/ui/card";
import { ScaleIcon, SparkleIcon } from "lucide-react";

export default function Home() {
  return (
    <main>
      <div className="w-full items-center justify-center text-white bg-[url(/background.jpg)] h-[85vh] bg-center bg-black/70 bg-no-repeat bg-cover bg-blend-color bg-opacity-50 border-b flex flex-col">
        <ScaleIcon className="mb-5" size="34" />
        <p className="text-4xl font-bold tracking-wide">Helder Ramalho</p>
        <span className="text-base tracking-tight">Cantor e compositor</span>
      </div>
    </main>
  );
  // return (
  //   <div className="flex flex-col items-center justify-center min-h-screen p-4">
  //     <div className="flex gap-4 items-center">
  //       <Card.Card className="w-96 mt-4">
  //         <Card.CardHeader>
  //           <Card.CardTitle>Contato</Card.CardTitle>
  //           <Card.CardDescription>
  //             Psicólogo especializado em terapia cognitivo-comportamental,
  //             ajudando você a alcançar bem-estar emocional e mental.
  //           </Card.CardDescription>
  //         </Card.CardHeader>

  //         <Card.CardContent className="pt-2">
  //           <h3 className="font-semibold">Helder Barbosa</h3>
  //           <p className="font-normal">Telefone: (11) 99999-9999</p>
  //         </Card.CardContent>
  //       </Card.Card>

  //       <div className="flex flex-col items-center space-y-2">
  //         <Button>Clique para saber mais</Button>
  //         <Button variant="secondary">Clique para saber mais</Button>
  //       </div>
  //     </div>
  //   </div>
  // );
}
