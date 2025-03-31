import { Button } from "@/components/ui/button";
import * as Card from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="flex gap-4 items-center">
        <Card.Card className="w-96 mt-4">
          <Card.CardHeader>
            <Card.CardTitle>Contato</Card.CardTitle>
            <Card.CardDescription>
              Psicólogo especializado em terapia cognitivo-comportamental,
              ajudando você a alcançar bem-estar emocional e mental.
            </Card.CardDescription>
          </Card.CardHeader>

          <Card.CardContent className="pt-2">
            <h3 className="font-semibold">Helder Barbosa</h3>
            <p className="font-normal">Telefone: (11) 99999-9999</p>
          </Card.CardContent>
        </Card.Card>

        <div className="flex flex-col items-center space-y-2">
          <Button>Clique para saber mais</Button>
          <Button variant="secondary">Clique para saber mais</Button>
        </div>
      </div>
    </div>
  );
}
