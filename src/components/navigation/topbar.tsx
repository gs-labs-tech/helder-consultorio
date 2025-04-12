export function NavigationTopbar() {
  return (
    <nav className="py-4 z-50 px-2 border-b border-white/10 sticky backdrop-blur supports-[backdrop-filter]:bg-black/20 top-0 w-full">
      <div className="flex justify-center items-center container">
        <div className="col-span-1 w-[calc(100%-14rem)] flex items-center justify-center">
          <ul className="flex space-x-14 ml-4 text-base">
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
                Apresentação
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
                href="#appointments"
              >
                Atendimentos
              </a>
            </li>
            <li>
              <a
                className="hover:border-b border-foreground transition-all duration-300"
                href="#reccomendations"
              >
                Recomendações
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
