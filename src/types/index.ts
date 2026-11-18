export interface Project {
  id: string;
  title: string;
  category: 'AI & Intelligent Systems' | 'Full Stack Web' | 'Systems & Security';
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  keyFeatures: string[];
  architectureNote: string;
  metrics?: string;
  githubUrl: string;
  demoUrl?: string;
  bannerType: 'infra' | 'security' | 'food' | 'eco' | 'mental';
}

export type SkillCategory = 
  | 'Programming Languages'
  | 'Frontend Development'
  | 'Backend Development'
  | 'Databases'
  | 'AI and Machine Learning'
  | 'Tools and Platforms';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  tag?: string;
  isCore?: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  detail: string;
  type: 'academic' | 'education' | 'activity' | 'certification';
  badge: string;
  highlight?: string;
}

export interface BeyondTool {
  name: string;
  subtitle: string;
  description: string;
  tags: string[];
  iconType: 'workflow' | 'vision';
  status: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ThemeMode = 'light' | 'dark';
