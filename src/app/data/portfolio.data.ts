export interface PersonalInfo {
  name: string;
  title: string;
  shortBio: string;
  about: string;
  profileImage: string;
  email: string;
  github: string;
  linkedin: string;
  instagram: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  image: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  skills: string[];
  qualities: string[];
  experiences: Experience[];
  projects: Project[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  personal: {
    name: 'Kayodê Ferreira Amorim Santos',
    title: 'Desenvolvedor Frond-End',
    shortBio:
      'Crio interfaces modernas, responsivas e experiências digitais com foco em tecnologia, usabilidade e código limpo.',
    about:
      'Sou estudante e desenvolvedor júnior apaixonado por tecnologia. Gosto de transformar ideias em aplicações funcionais, bonitas e fáceis de usar. Atualmente, foco meus estudos em desenvolvimento web, especialmente Angular, TypeScript e boas práticas de desenvolvimento.',
    profileImage:
      'https://cdn.discordapp.com/attachments/1195228920115642419/1555032893540007956/IMG_20260527_121444.jpg?backend=b2&ex=6abf0cbc&is=6abdbb3c&hm=a28af3794e41c6713944862bb96a17b428d4f308ccb3a3b4186bb819a6905d9d&',
    email: 'kayode.fasantos@gmail.com',
    github: 'https://github.com/444kyxg',
    linkedin: 'https://www.linkedin.com/in/kayodê-ferreira/',
    instagram: 'https://instagram.com/444kyxg'
  },

  skills: [
    'Angular',
    'TypeScript',
    'RxJS',
    'HTML5',
    'CSS3',
    'JavaScript',
    'Git',
    'GitHub',
    'Vercel',
    'Python'
  ],

  qualities: [
    'Pensamento lógico',
    'Aprendizado contínuo',
    'Organização',
    'Trabalho em equipe',
    'Resolução de problemas',
    'Atenção aos detalhes'
  ],

  experiences: [
    {
      role: 'Desenvolvedor Front-end',
      company: 'Projeto pessoal / Freelance',
      period: '2025 — Atual',
      description:
        'Desenvolvimento de interfaces responsivas utilizando Angular, TypeScript, HTML e CSS, com foco em componentização, reutilização de código e experiência do usuário.'
    },
    {
      role: 'Estudante de Desenvolvimento de Sistemas',
      company: 'SENAI',
      period: '2025 — Atual',
      description:
        'Formação com foco em lógica de programação, desenvolvimento web, banco de dados, versionamento e construção de aplicações.'
    }
  ],

  projects: [
    {
      title: 'Food Waste Zero',
      description:
        'Plataforma para conectar estabelecimentos, consumidores e organizações no combate ao desperdício de alimentos.',
      technologies: ['Angular', 'TypeScript', 'CSS', 'LocalStorage'],
      demoUrl: 'https://foodwastezero.vercel.app',
      githubUrl: 'https://github.com/444kyxg/FOODWASTEZERO',
      image:
        'https://cdn.discordapp.com/attachments/1195228920115642419/1555024567557300376/image.png?backend=b2&ex=6abf04fb&is=6abdb37b&hm=3a7d7da0db8edca30a77543612c502da4a0065382d7ceedcaab522ded55bb441&'
    }
  ]
};