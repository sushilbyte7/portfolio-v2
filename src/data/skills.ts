import type { SkillCategory } from "@/types";

export interface SkillGroup {
  category: SkillCategory;
  skills: string[];
}

export const skillsContent = {
  eyebrow: "02. skills",
  title: "Technologies",
  subtitle: "Technologies I've worked with across the stack.",
  primarySkills: [
    "React.js",
    "Node.js",
    "JavaScript / TypeScript",
    "Docker / AWS",
    "Python",
  ],
  groups: [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "MySQL", "MongoDB", "Firebase"],
    },
    {
      category: "DevOps",
      skills: ["AWS", "Google Cloud", "Docker", "Kubernetes"],
    },
    {
      category: "Android",
      skills: ["Java", "Kotlin", "XML", "Android Studio"],
    },
    {
      category: "Machine Learning",
      skills: ["Python", "TensorFlow", "Jupyter", "Google Colab"],
    },
    {
      category: "Tools & Others",
      skills: ["Git", "GitHub", "Netlify", "VS Code", "Adobe XD", "Figma"],
    },
  ] satisfies SkillGroup[],
} as const;

export const primarySkillNames = new Set([
  "React.js",
  "Node.js",
  "JavaScript",
  "AWS",
  "Docker",
  "Python",
]);
