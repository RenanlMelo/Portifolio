import { Project } from "../types/project";

export const projects: Project[] = [
  {
    name: "Ambiciente",
    url: "https://ambiciente.vercel.app/",
    description:
      "College project focused on reporting environmental violations and sharing articles about environmental issues.",
    img: "ambiciente.png",
    altImg: "Imagem de projeto realizado para trabalho da faculdade.",
    repository: "https://github.com/RenanlMelo/Ambiciente",
    technologies: {
      frontend: ["Next.js", "Typescript", "Tailwind CSS"],
      backend: ["FastAPI"],
      api: [],
      database: ["SQLite"],
      dataVisualization: ["Power BI"], // Nova categoria adicionada
    },
  },
  {
    name: "Leveling Corp",
    url: "https://levelingcorp.com.br/",
    description: "A fully responsive and functional institutional website.",
    img: "leveling.png",
    altImg: "Imagem de projeto para empresa Leveling",
    repository: "https://github.com/RenanlMelo/Leveling",
    technologies: {
      frontend: ["React.js", "Typescript", "Tailwind CSS", "React Spring"],
      backend: [],
      api: [],
      database: [],
    },
  },
  {
    name: "Unilock Pisos - Intertravados",
    url: "https://www.unilockpisos.com.br/",
    description:
      "Showcase a company specializing in the installation of interlocking floors. ",
    img: "unilock.png",
    altImg: "Imagem de projeto para empresa Unilock Pisos",
    repository: "https://github.com/RenanlMelo/Unilock_Pisos",
    technologies: {
      frontend: ["React.js", "Typescript", "Tailwind CSS"],
      backend: [],
      api: [],
      database: [],
    },
  },
  {
    name: "Auto Sales Brasil",
    url: "https://autosalesbrasil.vercel.app/",
    description:
      "E-commerce platform for car resale, offering a modern, responsive interface for buying and selling vehicles.",
    img: "autosales.png",
    altImg: "Imagem de projeto para empresa Auto Sales Brasil",
    repository: "https://github.com/RenanlMelo/autosalesbrasil",
    technologies: {
      frontend: ["React.js", "Typescript"],
      backend: ["Node.js"],
      api: ["Sanity.io"],
      database: ["MongoDB"],
    },
  },
];
