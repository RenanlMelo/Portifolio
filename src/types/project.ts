export interface Technologies {
  frontend: string[];
  backend: string[];
  api: string[];
  database: string[];
  dataVisualization?: string[];
}

export interface Project {
  name: string;
  url: string;
  description: string;
  img: string;
  altImg: string;
  repository: string;
  technologies: Technologies;
}
