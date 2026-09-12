export interface Skill {
  name: string;
  category: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    color: "#a855f7",
    skills: [
      { name: "HTML", category: "frontend" },
      { name: "CSS", category: "frontend" },
      { name: "JavaScript", category: "frontend" },
      { name: "React", category: "frontend" },
      { name: "Next.js", category: "frontend" },
      { name: "Three.js", category: "frontend" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    color: "#f97316",
    skills: [
      { name: "Node.js", category: "backend" },
      { name: "Express", category: "backend" },
      { name: "Python", category: "backend" },
      { name: "PHP", category: "backend" },
      { name: "Java", category: "backend" },
    ],
  },
  {
    id: "databases",
    name: "Databases",
    color: "#06b6d4",
    skills: [
      { name: "MySQL", category: "databases" },
      { name: "MongoDB", category: "databases" },
      { name: "SQL", category: "databases" },
      { name: "PostgreSQL", category: "databases" },
      { name: "SQLite", category: "databases" },
    ],
  },
  {
    id: "tools",
    name: "Tools",
    color: "#10b981",
    skills: [
      { name: "Git", category: "tools" },
      { name: "GitHub", category: "tools" },
      { name: "Vite", category: "tools" },
      { name: "npm", category: "tools" },
      { name: "pnpm", category: "tools" },
      { name: "Docker", category: "tools" },
      { name: "WSL", category: "tools" },
      { name: "Vercel", category: "tools" },
      { name: "Netlify", category: "tools" },
      { name: "Render", category: "tools" },
      { name: "Claude Code", category: "tools" },
      { name: "Codex", category: "tools" },
      { name: "opencode", category: "tools" },
    ],
  },
  {
    id: "ai-ml",
    name: "AI / ML",
    color: "#ec4899",
    skills: [
      { name: "Machine Learning", category: "ai-ml" },
      { name: "Local AI", category: "ai-ml" },
      { name: "Ollama", category: "ai-ml" },
      { name: "AI Integrations", category: "ai-ml" },
      { name: "AI Automation", category: "ai-ml" },
      { name: "Prompt Engineering", category: "ai-ml" },
    ],
  },
  {
    id: "security",
    name: "Security",
    color: "#ef4444",
    skills: [
      { name: "SSL/TLS", category: "security" },
      { name: "Secure Communication", category: "security" },
      { name: "Information Security", category: "security" },
    ],
  },
];
