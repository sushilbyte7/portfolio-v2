import type { Project } from "@/types";

export const projectsContent = {
  eyebrow: "03. projects",
  title: "Selected Work",
  subtitle: "A cross-section of what I've built — web, mobile, and ML.",
  showMoreLabel: "Show more",
  showLessLabel: "Show less",
};

export const projects: Project[] = [
  {
    title: "DecisionHub",
    hook:
      "A no-code rule engine for business analysts — build, visualize, and test decision strategies in real-time.",
    description:
      "A no-code rule builder that lets Business Analysts create and visualize decision strategies without writing a single line of code. Rules execute in real-time with step-by-step calculation transparency.",
    tags: ["React.js", "PostgreSQL", "Node.js", "Express.js", "Redux", "React Flow"],
    liveUrl: "https://decisionhub.netlify.app/",
    imageSrc: "",
    imageAlt: "Screenshot of DecisionHub",
    variant: "large",
    category: "web app",
  },
  {
    title: "Trackify",
    hook:
      "Employee task tracker with Docker deployment, CI/CD pipeline, and dual role authentication.",
    description:
      "A workplace productivity app with employer and employee dashboards. Features task logging, real-time tracking, and was deployed using Docker on AWS with full CI/CD via DuckDNS and Husky.",
    tags: [
      "React.js",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Redux",
      "Docker",
      "AWS",
      "CI/CD",
    ],
    liveUrl: "https://trackify-management.netlify.app/",
    imageSrc: "",
    imageAlt: "Screenshot of Trackify",
    variant: "wide",
    category: "web app",
    date: "Jun 2023 – Jul 2023",
  },
  {
    title: "Podstream",
    hook: "On-demand podcast streaming with Google Auth, JWT, and a fully responsive React UI.",
    tags: ["React.js", "MongoDB", "Node.js", "Express.js", "Redux"],
    liveUrl: "https://podstream.netlify.app/",
    imageSrc: "",
    imageAlt: "Screenshot of Podstream",
    variant: "standard",
    category: "web app",
    date: "Apr 2023 – May 2023",
  },
  {
    title: "Vexa",
    hook: "Project management app with task tracking, team collaboration, and member invitations.",
    tags: ["React.js", "MongoDB", "Node.js", "Express.js", "Redux", "NodeMailer"],
    liveUrl: "https://vexa-app.netlify.app/",
    imageSrc: "",
    imageAlt: "Screenshot of Vexa",
    variant: "standard",
    category: "web app",
    date: "Oct 2022 – Jan 2023",
  },
  {
    title: "Brain Tumor Detection",
    hook:
      "CNN-based MRI classifier achieving 99.2% accuracy, served via a Python API with a React frontend.",
    tags: ["Python", "TensorFlow", "Keras", "VGG16", "React"],
    liveUrl: "https://brain-tumor.netlify.app/",
    imageSrc: "",
    imageAlt: "Screenshot of Brain Tumor Detection",
    variant: "standard",
    category: "machine learning",
    date: "Jan 2023 – Mar 2023",
  },
  {
    title: "Buckoid",
    hook: "Android expense tracker with Google Drive backup, 100+ Play Store downloads.",
    tags: ["Kotlin", "MVVM", "Room Database", "Google Drive API"],
    imageSrc: "",
    imageAlt: "Screenshot of Buckoid",
    variant: "standard",
    category: "android app",
    date: "Dec 2021 – Apr 2022",
  },
  {
    title: "Job Finding App",
    hook:
      "Archive candidate: very short description, no live URL, and no verified repository.",
    tags: ["React Native", "JavaScript", "Axios"],
    imageSrc: "",
    imageAlt: "Screenshot of Job Finding App",
    variant: "standard",
    category: "web app",
  },
  {
    title: "Whatsapp Clone",
    hook:
      "Archive candidate: clone project from 2021 with no verified repository or live URL.",
    tags: ["React.js", "Firebase", "Firestore"],
    imageSrc: "",
    imageAlt: "Screenshot of Whatsapp Clone",
    variant: "standard",
    category: "web app",
  },
  {
    title: "Todo Web App",
    hook: "Archive candidate: generic CRUD app from 2021 that does not differentiate.",
    tags: [],
    imageSrc: "",
    imageAlt: "Screenshot of Todo Web App",
    variant: "standard",
    category: "web app",
  },
  {
    title: "Breaking Bad",
    hook:
      "Archive candidate: API consumer app with no backend, from 2021.",
    tags: [],
    imageSrc: "",
    imageAlt: "Screenshot of Breaking Bad",
    variant: "standard",
    category: "web app",
  },
  {
    title: "Quiz App",
    hook:
      "Archive candidate: dated Android app from 2020–2021 with no live URL.",
    tags: [],
    imageSrc: "",
    imageAlt: "Screenshot of Quiz App",
    variant: "standard",
    category: "android app",
  },
  {
    title: "Face Recognition",
    hook:
      "Archive candidate: Python/OpenCV script with no verified ownership or demo.",
    tags: [],
    imageSrc: "",
    imageAlt: "Screenshot of Face Recognition",
    variant: "standard",
    category: "machine learning",
  },
];
