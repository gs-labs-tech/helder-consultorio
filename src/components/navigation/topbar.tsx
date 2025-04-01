import { FacebookIcon, InstagramIcon } from "lucide-react";
import { Button } from "../ui/button";

export function NavigationTopbar() {
  return (
    <nav className="py-4 px-2 border-b border-border/50 sticky backdrop-blur supports-[backdrop-filter]:bg-background/70 top-0 w-full">
      <div className="flex justify-between items-center container">
        <p className="col-span-1 w-[22.5rem] ml-2 text-lg font-semibold block justify-self-start whitespace-nowrap">
          Helder B.
        </p>
        <div className="col-span-1 w-[calc(100%-14rem)] flex items-center justify-center">
          <ul className="flex space-x-4 ml-4">
            <li>
              <a href="#home">Sobre o profissional</a>
            </li>
            <li>
              <a href="#about">Consultório</a>
            </li>
            <li>
              <a href="#services">Formação</a>
            </li>
            <li>
              <a href="#contact">Recomendações</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-end gap-2 w-[22.5rem]">
          <Button variant="outline" size="icon">
            <InstagramIcon />
          </Button>
        </div>
      </div>
    </nav>
  );
}
