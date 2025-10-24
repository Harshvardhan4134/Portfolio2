"use client";

import { 
  Code, 
  Database, 
  Cloud, 
  Terminal, 
  Shield, 
  Zap, 
  Globe, 
  Server,
  Cpu,
  GitBranch,
  Package,
  Monitor,
  Layers,
  Settings,
  Rocket,
  Lock,
  Wrench,
  BarChart3,
  Search,
  FileText,
  Coffee,
  Container,
  Network,
  Code2,
  Palette,
  Smartphone,
  HardDrive,
  Activity,
  GitCommit,
  Download,
  Upload,
  Play,
  Pause,
  Square,
  Circle,
  Triangle,
  Hexagon
} from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { SKILLS } from "@/data/constants";

// Map skills to appropriate icons
const skillIconMap: Record<string, React.ElementType> = {
  "js": Code,
  "ts": Code2,
  "html": Globe,
  "css": Palette,
  "react": Zap,
  "vue": Triangle,
  "nextjs": Rocket,
  "tailwind": Palette,
  "nodejs": Server,
  "express": Network,
  "postgres": Database,
  "mongodb": Database,
  "git": GitBranch,
  "github": GitCommit,
  "prettier": FileText,
  "npm": Package,
  "firebase": Cloud,
  "wordpress": Globe,
  "linux": Terminal,
  "docker": Container,
  "nginx": Server,
  "aws": Cloud,
  "vim": Terminal,
  "vercel": Rocket,
  "azure": Cloud,
  "shell": Terminal,
  "python": Code,
  "selenium": Monitor,
  "jenkins": Settings,
  "kubernetes": Container,
  "ansible": Wrench,
  "terraform": Layers,
  "prometheus": BarChart3,
  "grafana": BarChart3,
  "sonarqube": Search,
  "owasp": Shield,
  "trivy": Shield,
  "maven": Package,
  "go": Code,
  "java": Coffee,
  "redis": Database,
  "supabase": Database,
  "openai": Cpu,
};

// Convert skills data to timeline format
const convertSkillsToTimeline = () => {
  return Object.values(SKILLS).map((skill, index) => {
    // Determine status based on skill proficiency
    const expertSkills = ["js", "ts", "react", "nextjs", "tailwind", "nodejs", "git", "github", "vercel"];
    const intermediateSkills = ["html", "css", "vue", "express", "postgres", "mongodb", "prettier", "npm", "firebase", "wordpress", "linux", "docker", "nginx", "aws", "vim"];
    
    let status: "completed" | "in-progress" | "pending";
    let energy: number;
    
    if (expertSkills.includes(skill.name)) {
      status = "completed";
      energy = 90;
    } else if (intermediateSkills.includes(skill.name)) {
      status = "in-progress";
      energy = 70;
    } else {
      status = "pending";
      energy = 40;
    }

    // Create related skills (skills with similar categories)
    const relatedIds: number[] = [];
    const currentCategory = getSkillCategory(skill.name);
    
    Object.values(SKILLS).forEach((otherSkill) => {
      if (otherSkill.id !== skill.id && getSkillCategory(otherSkill.name) === currentCategory) {
        relatedIds.push(otherSkill.id);
      }
    });

    return {
      id: skill.id,
      title: skill.label,
      date: `${2020 + (skill.id % 4)}`, // Mock dates
      content: skill.shortDescription,
      category: getSkillCategory(skill.name),
      icon: skillIconMap[skill.name] || Code,
      relatedIds: relatedIds.slice(0, 3), // Limit to 3 related skills
      status,
      energy,
    };
  });
};

// Categorize skills
const getSkillCategory = (skillName: string): string => {
  const frontend = ["js", "ts", "html", "css", "react", "vue", "nextjs", "tailwind"];
  const backend = ["nodejs", "express", "python", "go", "java"];
  const database = ["postgres", "mongodb", "redis", "supabase"];
  const devops = ["docker", "kubernetes", "jenkins", "ansible", "terraform", "nginx"];
  const cloud = ["aws", "azure", "vercel", "firebase"];
  const tools = ["git", "github", "npm", "prettier", "vim", "linux", "shell"];
  const monitoring = ["prometheus", "grafana", "sonarqube"];
  const security = ["owasp", "trivy"];
  const testing = ["selenium"];
  const ai = ["openai"];

  if (frontend.includes(skillName)) return "Frontend";
  if (backend.includes(skillName)) return "Backend";
  if (database.includes(skillName)) return "Database";
  if (devops.includes(skillName)) return "DevOps";
  if (cloud.includes(skillName)) return "Cloud";
  if (tools.includes(skillName)) return "Tools";
  if (monitoring.includes(skillName)) return "Monitoring";
  if (security.includes(skillName)) return "Security";
  if (testing.includes(skillName)) return "Testing";
  if (ai.includes(skillName)) return "AI/ML";
  
  return "Other";
};

export function SkillsOrbitalTimeline() {
  const timelineData = convertSkillsToTimeline();

  return (
    <div className="w-full h-screen">
      <RadialOrbitalTimeline timelineData={timelineData} />
    </div>
  );
}

export default SkillsOrbitalTimeline;
