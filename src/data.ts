export const PROFILE = {
  name: "Mariano Gonzalez Salazar",
  role: "Senior Frontend Engineer",
  company: "Claap",
  companyUrl: "https://www.claap.io",
  tagline:
    "I build polished, data-heavy web products — and interfaces that explain data instead of just showing it.",
  location: "Madrid, Spain",
  email: "marianogs_95@hotmail.com",
  photo: `${import.meta.env.BASE_URL}ProfileImage.png`,
  links: {
    github: "https://github.com/mgs95",
    linkedin: "https://www.linkedin.com/in/marianogs",
  },
  source: "https://github.com/mgs95/interactive_cv",
};

export const ABOUT = [
  `I'm a frontend engineer with 8+ years shipping product across startups and
   large companies. Today I work at Claap, building an AI-powered video
   collaboration platform that helps teams stay aligned without more meetings.`,
  `Before that I spent time on the logic engine behind millions of Typeform
   forms, and on data-visualization products at Intelygenz and Telefónica —
   which is where my soft spot for D3 and well-crafted charts comes from.`,
];

export type ExperienceEntry = {
  company: string;
  url: string;
  role: string;
  start: string;
  end: string;
  summary: string[];
  tags: string[];
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "Claap",
    url: "https://www.claap.io",
    role: "Senior Frontend Engineer",
    start: "Jan 2023",
    end: "Present",
    summary: [
      `Building an AI-powered video collaboration platform: meeting recording,
       AI notes and async workflows that replace unnecessary meetings.`,
      `Own large parts of the web app — from the recording and playback
       experience to AI-generated summaries — in a small, fast-moving team.`,
    ],
    tags: ["TypeScript", "React", "GraphQL", "Node.js", "AI products"],
  },
  {
    company: "Typeform",
    url: "https://www.typeform.com",
    role: "Senior Frontend Engineer",
    start: "Nov 2021",
    end: "Jan 2023",
    summary: [
      `Core department, Logic team: the engine that powers conditional flows
       in millions of forms.`,
      `Built and maintained the logic editing experience used by every
       Typeform creator.`,
    ],
    tags: ["TypeScript", "React", "GraphQL"],
  },
  {
    company: "Intelygenz",
    url: "https://intelygenz.com",
    role: "Frontend Developer & Data Viz Engineer",
    start: "Sep 2019",
    end: "Nov 2021",
    summary: [
      `R&D and AI department. Turned machine-learning models into interactive
       data-visualization products for enterprise clients.`,
    ],
    tags: ["React", "D3", "Data visualization", "Python"],
  },
  {
    company: "Telefónica I+D",
    url: "https://www.telefonica.com",
    role: "Full-Stack Developer",
    start: "Sep 2017",
    end: "Sep 2019",
    summary: [
      `Full-stack development at LUCA (Data-Driven Decisions), Telefónica's
       big-data and analytics unit.`,
    ],
    tags: ["JavaScript", "Node.js", "Python", "Big data"],
  },
];

export type EducationEntry = {
  school: string;
  url: string;
  degree: string;
  start: string;
  end: string;
  summary: string;
};

export const EDUCATION: EducationEntry[] = [
  {
    school: "Universidad Carlos III de Madrid",
    url: "https://www.uc3m.es",
    degree: "Telematics Engineering Degree",
    start: "2013",
    end: "2018",
    summary: `Electrical engineering + computer science: telecommunications,
      networks and programming. Final degree project: 9.7/10.`,
  },
  {
    school: "Stony Brook University, New York",
    url: "https://www.stonybrook.edu",
    degree: "Exchange Program",
    start: "2016",
    end: "2017",
    summary: `One-year exchange completing fourth-year courses plus extras like
      Advanced Game Programming. Average score: 9.3/10.`,
  },
];

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const SKILLS: SkillGroup[] = [
  {
    title: "Core",
    skills: ["TypeScript", "JavaScript", "React", "GraphQL", "HTML & CSS"],
  },
  {
    title: "Data visualization",
    skills: ["D3", "Dataviz design", "SVG & Canvas"],
  },
  {
    title: "Beyond the frontend",
    skills: ["Node.js", "Python", "GitHub Actions", "Docker"],
  },
];

export type Language = {
  name: string;
  level: string;
  /** 1–5, used for the dots meter */
  score: number;
};

export const LANGUAGES: Language[] = [
  { name: "Spanish", level: "Native", score: 5 },
  { name: "English", level: "C1 — full professional", score: 4 },
  { name: "Japanese", level: "A2 — elementary", score: 2 },
];

export const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
] as const;
