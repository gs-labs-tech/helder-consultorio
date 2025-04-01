export function NavigationTopbar() {
  return (
    <nav className="py-4 px-2 border-b border-border/50 sticky backdrop-blur supports-[backdrop-filter]:bg-background/70 top-0 w-full">
      <div className="flex justify-center items-center container">
        <div className="col-span-1 w-[calc(100%-14rem)] flex items-center justify-center">
          <ul className="flex space-x-6 ml-4">
            <li>
              <a
                className="hover:border-b border-foreground transition-all ease-in-out duration-100"
                href="#home"
              >
                Início
              </a>
            </li>
            <li>
              <a
                className="hover:border-b border-foreground transition-all ease-in-out duration-100"
                href="#about"
              >
                Sobre o profissional
              </a>
            </li>
            <li>
              <a
                className="hover:border-b border-foreground transition-all ease-in-out duration-100"
                href="#office"
              >
                Consultório
              </a>
            </li>
            <li>
              <a
                className="hover:border-b border-foreground transition-all ease-in-out duration-100"
                href="#professional-background"
              >
                Formação
              </a>
            </li>
            <li>
              <a
                className="hover:border-b border-foreground transition-all ease-in-out duration-100"
                href="#reccomendations"
              >
                Recomendações
              </a>
            </li>
            <li>
              <a
                className="hover:border-b border-foreground transition-all duration-300"
                href="#feedbacks"
              >
                Depoimentos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
