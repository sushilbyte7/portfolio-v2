export type ProjectVariant = "large" | "wide" | "standard";

export type ProjectCategory = "web app" | "android app" | "machine learning";

export interface Project {
  title: string;
  hook: string;
  description?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageSrc: string;
  imageAlt: string;
  variant: ProjectVariant;
  category: ProjectCategory;
  date?: string;
}

export interface Experience {
  company: string;
  role: string;
  date: string;
  location?: string;
  description: string[];
  skills?: string[];
  logoSrc?: string;
  logoAlt?: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  grade?: string;
  description: string;
  logoSrc?: string;
  logoAlt?: string;
}

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "DevOps"
  | "Android"
  | "Machine Learning"
  | "Tools & Others";

export interface Skill {
  name: string;
  category: SkillCategory;
  primary?: boolean;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon?: string;
}
