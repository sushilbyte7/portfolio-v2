import type { Experience } from "@/types";

export const experienceContent = {
  eyebrow: "04. experience",
  title: "Experience",
  subtitle: "Building products, platforms, and communities across the stack.",
};

export const experience: Experience[] = [
  {
    company: "Neurobit",
    role: "Frontend Engineer Intern",
    date: "June 2023 – November 2023",
    description: [
      "Enhanced user experiences on Neurobit PSG & Hybrid portals by resolving bugs, reducing load time by 40%",
      "Built Neurobit Analytics portal using React.js with REST API integration via Axios, optimized with React Query",
      "Refactored codebase to TypeScript, updated dependencies, integrated Vite with Jest for unit testing",
    ],
    skills: ["ReactJS", "Redux", "NodeJs", "Material UI", "HTML", "CSS", "JavaScript"],
  },
  {
    company: "Flipr Innovations Pvt. Ltd.",
    role: "DevOps & Fullstack Engineering Intern",
    date: "August 2023 – October 2023",
    description: [
      "Built Flipr Connect Platform using React.js with GraphQL/Axios integration and HLD/Figma design",
      "Backend built with GraphQL + Node.js + MongoDB — reduced API calls by 20%",
      "Dockerized and automated with Kubernetes & Jenkins CI/CD on AWS EC2, added Prometheus & Grafana monitoring",
    ],
    skills: [
      "Docker",
      "Terraform",
      "AWS",
      "EC2",
      "Portainer",
      "Nginx",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Next.js",
    ],
  },
  {
    company: "Flipr",
    role: "Fullstack Externship",
    date: "June 2023 – July 2023",
    description: [
      "Built full-stack employee management web app, deployed via Docker on AWS EC2",
      "Named top performer in the program",
    ],
    skills: ["ReactJS", "Redux", "NodeJs", "Material UI", "Docker", "AWS", "MongoDB"],
  },
  {
    company: "Rudraksha Welfare Foundation",
    role: "Android Developer Intern",
    date: "June 2021 – October 2021",
    description: [
      "Built RudraShakti (Astrologer App) with MVVM architecture using Java and Android Studio + Firebase SDK",
      "Implemented 1:1 video call using Socket.IO and Firebase Cloud Functions with Retrofit integration",
      "Created Low Level Design, converted Figma mockups to XML layout code",
    ],
    skills: [
      "Android",
      "Java",
      "Kotlin",
      "XML",
      "Node.js",
      "Cloud Firestore",
      "Firebase",
      "Figma",
    ],
  },
  {
    company: "Google Developer Student Club, KIIT",
    role: "Android Developer",
    date: "November 2021 – Present",
    description: [
      "Developed Android projects in collaboration with the GDSC community",
      "Hosted and participated in hackathons, study jams, and developer workshops",
    ],
    skills: ["Kotlin", "XML", "Figma", "Mobile Application Development", "Leadership"],
  },
  {
    company: "GirlScript Summer of Code",
    role: "Open Source Contributor",
    date: "May 2023 – Present",
    description: [
      "Contributed to open-source projects across the GSSoC program",
      "Collaborated with community contributors and mentors from the industry",
    ],
  },
];
