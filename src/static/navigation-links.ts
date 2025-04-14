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
    title: "Apresentação",
  },
  {
    sectionId: "#office",
    title: "Consultório",
  },
  {
    sectionId: "#professional-background",
    title: "Formações",
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
