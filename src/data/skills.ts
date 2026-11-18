import { SkillCategory, SkillItem } from '../types';

export interface CategoryGroup {
  category: SkillCategory;
  shortName: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export const skillCategories: CategoryGroup[] = [
  {
    category: "Programming Languages",
    shortName: "Languages",
    description: "Core programming languages used for algorithmic problem solving and system development.",
    icon: "Code2",
    skills: [
      { name: "Java", category: "Programming Languages", tag: "Object-Oriented", isCore: true },
      { name: "Python", category: "Programming Languages", tag: "AI / Data Science", isCore: true },
      { name: "C", category: "Programming Languages", tag: "Low-level Systems" },
      { name: "JavaScript", category: "Programming Languages", tag: "Web ES6+", isCore: true },
      { name: "TypeScript", category: "Programming Languages", tag: "Type-Safe", isCore: true },
      { name: "SQL", category: "Programming Languages", tag: "Relational Queries" },
    ],
  },
  {
    category: "Frontend Development",
    shortName: "Frontend",
    description: "Modern, responsive, component-driven user interfaces and interaction design.",
    icon: "Layout",
    skills: [
      { name: "React.js", category: "Frontend Development", tag: "Component Architecture", isCore: true },
      { name: "HTML5", category: "Frontend Development", tag: "Semantic Markup", isCore: true },
      { name: "CSS3", category: "Frontend Development", tag: "Responsive Styling" },
      { name: "React Router", category: "Frontend Development", tag: "Client Routing" },
    ],
  },
  {
    category: "Backend Development",
    shortName: "Backend",
    description: "Scalable REST APIs, service orchestration, and backend application servers.",
    icon: "Server",
    skills: [
      { name: "Node.js", category: "Backend Development", tag: "Event-Driven", isCore: true },
      { name: "Express.js", category: "Backend Development", tag: "Web Framework", isCore: true },
      { name: "RESTful APIs", category: "Backend Development", tag: "API Architecture", isCore: true },
      { name: "FastAPI", category: "Backend Development", tag: "High-Performance Python" },
      { name: "Spring Boot", category: "Backend Development", tag: "Enterprise Java" },
    ],
  },
  {
    category: "Databases",
    shortName: "Databases",
    description: "Relational and document storage solutions for structured, scalable data pipelines.",
    icon: "Database",
    skills: [
      { name: "MongoDB", category: "Databases", tag: "NoSQL / Document", isCore: true },
      { name: "MySQL", category: "Databases", tag: "Relational RDBMS", isCore: true },
    ],
  },
  {
    category: "AI and Machine Learning",
    shortName: "AI & ML",
    description: "Neural network architectures, deep learning models, and NLP pipelines.",
    icon: "BrainCircuit",
    skills: [
      { name: "PyTorch", category: "AI and Machine Learning", tag: "Deep Learning Framework", isCore: true },
      { name: "Scikit-learn", category: "AI and Machine Learning", tag: "Classical ML", isCore: true },
      { name: "ResNet18", category: "AI and Machine Learning", tag: "Computer Vision Model" },
      { name: "Natural Language Processing", category: "AI and Machine Learning", tag: "NLP & Tokenization" },
      { name: "Deep Learning", category: "AI and Machine Learning", tag: "Neural Networks" },
      { name: "Computer Vision", category: "AI and Machine Learning", tag: "Image Recognition" },
    ],
  },
  {
    category: "Tools and Platforms",
    shortName: "Tools & DevOps",
    description: "Development environments, version control, and data visualization platforms.",
    icon: "Wrench",
    skills: [
      { name: "Git", category: "Tools and Platforms", tag: "Version Control", isCore: true },
      { name: "GitHub", category: "Tools and Platforms", tag: "Collaboration & Repos", isCore: true },
      { name: "VS Code", category: "Tools and Platforms", tag: "Primary Editor", isCore: true },
      { name: "Power BI", category: "Tools and Platforms", tag: "Data Visualization" },
    ],
  },
];
