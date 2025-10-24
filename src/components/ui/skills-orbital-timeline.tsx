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
  // Additional skills
  "sql": Database,
  "c": Code,
  "powerbi": BarChart3,
  "excel": FileText,
};

// Convert skills data to timeline format - only specified skills
const convertSkillsToTimeline = () => {
  // Only include these specific skills
  const allowedSkills = ["python", "postgres", "git", "react", "firebase", "supabase"];
  
  // Add skills that might not be in the main SKILLS object
  const additionalSkills = [
    { id: 100, name: "sql", label: "SQL", shortDescription: "Structured Query Language for databases", color: "#336791" },
    { id: 101, name: "c", label: "C", shortDescription: "The mother of all programming languages", color: "#00599C" },
    { id: 102, name: "powerbi", label: "Power BI", shortDescription: "Business intelligence and data visualization", color: "#F2C811" },
    { id: 103, name: "excel", label: "Excel", shortDescription: "Spreadsheet mastery for data analysis", color: "#217346" }
  ];

  const filteredSkills = Object.values(SKILLS).filter(skill => allowedSkills.includes(skill.name));
  const allSkills = [...filteredSkills, ...additionalSkills];

  return allSkills.map((skill, index) => {
    // Determine status based on skill proficiency
    const expertSkills = ["react", "git", "python"];
    const intermediateSkills = ["postgres", "firebase", "supabase", "sql", "c", "powerbi", "excel"];
    
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
    
    allSkills.forEach((otherSkill) => {
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
  const backend = ["nodejs", "express", "python", "go", "java", "c"];
  const database = ["postgres", "mongodb", "redis", "supabase", "sql"];
  const devops = ["docker", "kubernetes", "jenkins", "ansible", "terraform", "nginx"];
  const cloud = ["aws", "azure", "vercel", "firebase"];
  const tools = ["git", "github", "npm", "prettier", "vim", "linux", "shell"];
  const monitoring = ["prometheus", "grafana", "sonarqube"];
  const security = ["owasp", "trivy"];
  const testing = ["selenium"];
  const ai = ["openai"];
  const analytics = ["powerbi", "excel"];

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
  if (analytics.includes(skillName)) return "Analytics";
  
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
