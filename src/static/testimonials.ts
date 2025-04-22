const colleagues = [
  {
    quote:
      "Helder é um analista muito comprometido com o trabalho clínico. É dedicado, muito estudioso e apresenta uma escuta sensível!",
    name: "Gina Tamburrino",
    designation:
      "Psicóloga e Psicanalista, Dra em Psicologia pela PUC-SP, Coordenadora Suplente do Curso Formação em Psicanálise do Instituto Sedes Sapientiae",
  },
  {
    quote: `Desde que conheci o Helder, vejo sua trajetória como profissional da área da Psicologia e da Psicanálise,
      seu envolvimento  e seriedade com os estudos que nossa profissão requer. Assim como também, a participação nas atividades
      de ensino e divulgação de nosso conhecimento aos recém formados. Um outro aspecto que merece ser lembrado,
      é o seu compromisso ético com a sua função de psicoterapeuta psicanalitico.`,
    name: "Carmen Sílvia Mariotto Jubran",
    designation:
      "Psicóloga pela UNESP Assis e Psicanalista pela SBPSP, Fundadora do GEPO",
  },
  {
    quote:
      "Por acompanhar de perto parte de sua trajetória na psicanálise, recomendo com confiança seu trabalho como analista",
    name: "Liliane Ribeiro Nicolau Beluche",
    designation:
      "Psicóloga, Especialista em Psicoterapia Psicanalítica pelo IBP Bauru, Membro do GEPO",
  },
  {
    quote:
      "Helder é muito bom analista, com formação consistente, envolvido com o trabalhoe com o constante aperfeiçoamentode sua prática. Além disso, é um clínico habilidoso, intuitivo, com estilo próprio e com boas qualidades para ajudar seus pacientes.",
    name: "Bruno Medici Silveira",
    designation:
      "Psicólogo pela USP e Psicanalista pelo Instituto Sedes Sapientiae, Mestre em Psicologia pela USP",
  },
  {
    quote:
      "Sem arte não existe transformação! Profissional comprometido com o trabalho, ético e que exerce seu ofício com muita arte analítica!",
    name: "Silvana Maria F. N. do Amaral",
    designation:
      "Psicóloga, Psicanalista pela SBPSP e compõe o Conselho Diretor do GEP Marília",
  },
  {
    quote:
      "Foi meu aluno na graduação de Psicologia, é excelente profissional, experiente, dedicado e estudioso. Encaminharia até um familiar meu seu atendimento.",
    name: "Eunice Belloti",
    designation:
      "Psicóloga, Pedagoga, Mestre em Psicologia pela UNESP de Assis e Fundadora do GEPO",
  },
  {
    quote:
      "O Helder é um profissional comprometido com o trabalho, cuidadoso nas dimensões clínica e teórica da psicanálise. É um psicanalista de escuta ampla, presença implicada, ético e humano. Um colega que recomendo sem restrições.",
    name: "Caueh Perrella",
    designation: "Psicanalista e Docente no Instituto Sedes Sapientiae",
  },
  {
    quote:
      "Conheço Helder pessoalmente e sou testemunha de sua seriedade e dedicação ao trabalho e aos estudos constantes que esse tipo de trabalho exige.",
    name: "Guilherme Alencar Lacombe",
    designation:
      "Psiquiatra pela UFRJ, Psicanalista pela SBPSP e Fundador do GEPO",
  },
  {
    designation:
      "Psiquiatra pela UFRJ, membro da Associação Brasileira de Neurologia e Psiquiatria Infantil e Formação em Psicoterapia Psicanalítica pelo Núcleo de Psicanálise de Marília e Região",
    name: "Ana Terezinha Oliveira Lacombe",
    quote:
      "Sua seriedade no trabalho e dedicação e preocupação com o estudo do humano e do seu sofrimento que é a razão de ser fundamental do nosso trabalho",
  },
  {
    designation:
      "Psicóloga, Psicoterapeuta de Orientação Psicanalítica pelo GEP Marília e Mestranda em Psicologia pela UNESP Assis",
    name: "Amanda Zedan de Carvalho",
    quote:
      "Helder é meu amigo desde 2007, época em que cursamos juntos a faculdade de psicologia. Desde então, posso afirmar com convicção sua dedicação não apenas aos estudos de psicanálise , mas também à tudo que se propõe a fazer. Além de todo o seu conhecimento técnico, ele possui uma forte veia artística, o que acentua sua sensibilidade. Sem dúvida, Helder é um ótimo profissional. Ético, comprometido e humano. Posso dizer também , que ele é um pai maravilhoso e um esposo cuidadoso. Não mede esforços ao bem estar de sua família. Admiro muito sua trajetória de vida, marcada por esforço constante e resiliência.",
  },
];

const clients = [
  {
    quote:
      "A indicação ocorreu da minha ex psicanalista que foi traçar outros caminhos e desde 2017 estou fazendo psicanálise com esse profissional excelente, inteligentíssimo, muito acolhedor e empático e assim coopera para minha evolução, autoconfiança e autoconhecimento.",
  },
  {
    quote:
      "Foi através de seu trabalho como psicanalista que senti pela primeira vez um sincero acolhimento, como um bom ouvinte, sem pré-julgamentos e uma capacidade imensa de acreditar no meu potencial mais do que eu mesma.",
  },
  {
    quote:
      "Estava precisando de ajuda e encontrei na pessoa dele ,muito apoio ,me ajudou muito,um excelente profissional",
  },
  {
    quote:
      "Sou muito grata por todo o apoio que o Helder vem proporcionando ao longo da minha jornada de análise. Sua escuta sensível, a abordagem humana e a forma ética com que conduz o trabalho fazem toda a diferença. Penso que esses são elementos fundamentais que me auxiliaram a enfrentar diversos processos, ainda que doloridos, de forma mais leve.",
  },
  {
    quote:
      "O trabalho profissional e técnico, recomendo. Foi bem recomendado e faço minhas recomendações. A saúde emocional requer bons profissionais.",
  },
  {
    quote:
      "Hélder é um ser humano ímpar e um profissional incrível. O seu trabalho reúne acolhimento, cuidado e compromisso ético. Recomendo a todos aqueles que buscam acompanhamento psicológico pela abordagem psicanalítica.",
  },
  {
    quote:
      "Procurei o Dr. Helder por indicação da Dra. Roberta psiquiatra. Desde quando iniciei o tratamento com o Dr. Helder, confesso que minha vida melhorou muito com as terapias. Dr. Helder é um excelente profissional da área da psicologia, onde tenho ido semanalmente e recomendo a todas as pessoas que são indicadas ou não por um psiquiatra.",
  },
  {
    quote:
      "Iniciei a psicoterapia com o Helder para “solucionar” dificuldades momentâneas… Encorajado a cada sessão, pude navegar cada vez mais em busca do meu autoconhecimento. Anos se passaram e, podendo contar com o Helder e seu infinito repertório na “materialização do subjetivo”, sinto-me cada vez mais preparado para ir além — sempre além — do que um dia imaginei ser impossível.",
  },
  {
    quote:
      "A necessidade de um profissional que conseguisse me ver, além do que as aparências mostram. E me confrontar-se comigo mesmo, fazendo eu me reconhecer e conseguir me livrar de armadilhas e mecanismos de fuga que eu criei.",
  },
  {
    quote: "O Helder oferece um ambiente onde o lúdico se mistura com o onírico, e a filosofia das coisas surgem na suavizes das conversas e diálogos. As sessões traduzem desfechos no emaranhado de confusões internas, os nós se desatam e o horizonte se torna mais claro e compreensível. Eu dizia, amedrontado, “não sou eu quem me navega”, hoje, sinto o peso do leme nas mãos cortando as águas, o sal e o intangível, timoneiro de mim, mesmo que não haja caminhos no oceano."
  },
  {
    quote: "Eu procurei o Helder para o teste vocacional, com o termino desse teste iniciamos as seções de terapia. Isso ja vai fazer 10 anos… e posso falar com propriedade a respeito do seu trabalho! Um pessoa extremamente ética, responsável. Uma pessoa que sempre recomendo para amigos que estão procurando um profissional.",
  },
  {
    quote:
      "Parabéns por desempenhar um papel tão crucial. Você salva vidas, proporciona ajuda e guia para novas oportunidades. Sua crença em mim foi transformadora; hoje, sou uma pessoa melhor graças a isso.",
  },
  {
    quote:
      "Nada a sugerir, apenas agradecer pelos cuidados que deixou em mim. Muito obrigada.",
  },
  {
    quote:
      "Helder Barbosa é uma excelente pessoa, o que o torna um excelente profissional. E vice-versa.",
  },
  {
    quote:
      "Através da psicoterapia tenho menos dias nublados comigo mesma e tenho começado a criar a coragem de colocar meus limites.",
  },
  {
    quote:
      "Todo ambiente do Helder é muito acolhedor, desde a sala de espera até seu consultório. Começar a fazer sessões de psicanálise foi novidade para mim, mas sempre me senti muito acolhido e respeitado. Hoje o considero um grande amigo! As sessões com ele estão me ajudando a superar meus problemas e me tornar uma pessoa melhor!",
  },
  {
    quote:
      "Bom aqui fica o agradecimento por ser um profissional tão sensível e capacitado para lidar com as emoções e questões que muitas vezes são tão pertubadoras. Obrigada!!!",
  },
  {
    quote:
      "O Helder é um profissional excelente! Além de ser muito inteligente e estar em constante busca pelo próprio desenvolvimento, ele é um ser humano incrível. A sua forma cuidadosa, atenta e sensível de conduzir as sessões possibilita o desenvolvimento de um vínculo honesto e profundo que é, sem dúvidas, essencial para o tratamento. Eu sou imensamente grata por esse encontro e recomendo o trabalho do Helder de olhos fechados.",
  },
  {
    quote:
      "Cheguei ao Helder como alguém que chega procurando respostas para tudo. Durante os 6 anos de terapia, ele me ofereceu mais do que eu poderia esperar: atendimento de qualidade, sempre disposto a ouvir e me auxiliar a ouvir o que eu mesmo estava falando, caminhando comigo para que, após muito tempo, eu voltasse a caminhar por mim mesmo novamente. Eu poderia encher aqui de elogios, mas a única coisa que eu posso falar é: se existe um profissional como ele, eu desconheço. Ele é O melhor",
  },
];

const students = [
  {
    quote:
      "O Helder é um psicoterapeuta de orientação psicanalítica que tem contribuído muito no meu percurso profissional. Somos parceiros no Grupo de Estudos de Psicanálise de Ourinhos e Região; além disso, ele é meu supervisor e também coordena dois grupos de estudo dos quais participo. É uma pessoa ética, comprometida e sempre disponível para estudar e transmitir a teoria psicanalítica com responsabilidade e clareza.",
    designation: "Participante de Grupos de Estudo e Supervisões",
    name: "Liliane Ribeiro Nicolau Beluche",
  },
  {
    quote: "Domínio do conhecimento",
    designation: "Participante de Grupos de Estudo e Supervisões",
    name: "Mayra Pereira de Souza",
  },
  {
    quote: "O conhecimento técnico sobre psicanálise e sua ética",
    designation: "Participante de Grupos de Estudo e Supervisões",
    name: "Leticia Bonato",
  },
  {
    quote:
      "Pude conhecer o Helder e seu trabalho através do GEPO, por meio das atividades que ele ministra, como grupos de estudos e seminários clínicos. Tenho aprendido muito com os encontros que realizamos. Um profissional ético, sensível e com grande conhecimento teórico e técnico. Sou muito grata pelas trocas e aprendizados!",
    designation: "Participante de Grupos de Estudo e Supervisões",
    name: "Gabriela Oliveira",
  },
  {
    quote:
      "Procurei o Helder para ser meu supervisor clínico porque ele é alguém com um conhecimento teórico sólido, além de ser paciente, atencioso e ter uma didática muito clara. Todas essas qualidades fizeram muita diferença no meu aprendizado e na minha evolução clínica.",
    designation: "Participante de Grupos de Estudo e Supervisões",
    name: "Maria Padovan",
  },
  {
    quote:
      "Participo do grupo de estudos de Winnicott e Freud e também faço supervisão clínica com o Helder. Conheci o Helder através do GEPO e me identifiquei com a sua forma de pensar a teoria, além dos interesses de estudo. Participar das atividades que ele oferece tem enriquecido a minha prática e escuta clínica, além de, com certeza, aprimorar os conhecimentos técnicos e teóricos. E, para além disso, o Helder é uma ótima companhia do percurso clínico pela sua generosidade e carinho.",
    designation: "Participante de Grupos de Estudo e Supervisões",
    name: "Fernanda Marques",
  },
];

export const testimonials = {
  colleagues,
  clients,
  students,
};
