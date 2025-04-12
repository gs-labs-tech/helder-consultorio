interface NavigationLink {
  title: string;
  sectionId: string;
}

export const navigationLinks: NavigationLink[] = [
  {
    sectionId: "#home",
    title: "Início",
  },
  {
    sectionId: "#about",
    title: "Sobre o profissional",
  },
  {
    sectionId: "#office",
    title: "Consultório",
  },
  {
    sectionId: "#professional-background",
    title: "Formação",
  },
  {
    sectionId: "#appointments",
    title: "Atendimentos",
  },
  {
    sectionId: "#reccomendations",
    title: "Recomendações",
  },
];
