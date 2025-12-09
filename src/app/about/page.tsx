"use client";

import React from "react";
import { config } from "@/data/config";
import {
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaPython,
  FaReact,
  FaAws,
  FaDocker,
  FaNodeJs,
  FaGit
} from "react-icons/fa";
import {
  SiTypescript,
  SiPostgresql, 
  SiMongodb, 
  SiTailwindcss,
  SiTensorflow,
  SiMysql,
  SiReact
} from "react-icons/si";
import { Calendar, Briefcase, GraduationCap, Music, Heart, Code2, Database, Brain } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { FloatingConsultButton } from "@/components/ui/floating-consult-button";

const QUICK_FACTS = [
  { icon: <FaMapMarkerAlt className="text-orange-600" />, label: "Location", value: "Visakhapatnam, India" },
  { icon: <FaEnvelope className="text-orange-600" />, label: "Email", value: "gharsha238@gmail.com", href: "mailto:gharsha238@gmail.com" },
  { icon: <FaLinkedin className="text-orange-600" />, label: "LinkedIn", value: "/harshvardhan-gedela", href: "https://www.linkedin.com/in/harshvardhan-gedela/" },
  { icon: <GraduationCap className="text-orange-600" />, label: "Education", value: "B.Tech - Computer Science" },
];

const CAREER_JOURNEY = [
  {
    year: "2023-Present",
    title: "DevOps Engineer & Full-Stack Developer",
    description: "Collaborating with international clients, deploying & automating workflows, and building AI-powered applications",
    icon: <Brain className="text-orange-600" />
  },
  {
    year: "2022-2023",
    title: "Database Management & Development",
    description: "Hands-on experience in database management, API development, and cloud infrastructure",
    icon: <Database className="text-orange-600" />
  },
  {
    year: "2021-2022",
    title: "DevOps & Automation Journey",
    description: "Started exploring DevOps practices, CI/CD pipelines, and infrastructure automation",
    icon: <Code2 className="text-orange-600" />
  },
  {
    year: "2019-2023",
    title: "B.Tech in Computer Science",
    description: "Built foundation in programming, algorithms, software engineering, and cloud technologies",
    icon: <GraduationCap className="text-orange-600" />
  }
];

const TECH_STACK = [
  { name: "Python", icon: <FaPython size={32} />, color: "#3776AB" },
  { name: "React", icon: <FaReact size={32} />, color: "#61DAFB" },
  { name: "TypeScript", icon: <SiTypescript size={32} />, color: "#3178C6" },
  { name: "Node.js", icon: <FaNodeJs size={32} />, color: "#339933" },
  { name: "PostgreSQL", icon: <SiPostgresql size={32} />, color: "#4169E1" },
  { name: "MongoDB", icon: <SiMongodb size={32} />, color: "#47A248" },
  { name: "AWS", icon: <FaAws size={32} />, color: "#FF9900" },
  { name: "Docker", icon: <FaDocker size={32} />, color: "#2496ED" },
  { name: "TensorFlow", icon: <SiTensorflow size={32} />, color: "#FF6F00" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={32} />, color: "#06B6D4" },
  { name: "Git", icon: <FaGit size={32} />, color: "#F05032" },
];

const PROFESSIONAL_EXPERIENCE = [
  {
    company: "Lendlly",
    role: "Freelance (Client)",
    period: "Present",
    description: "Built using Rork AI + Cursor + Google Maps + Supabase",
    achievements: [
      "Designed a mobile-first rental/swapping marketplace like OYO/Ola",
      "Defined project scope with client and delivered mobile-first rental marketplace within agreed timelines",
      "Managed end-to-end execution: requirements gathering, UI/UX design, workflow automation, and stakeholder updates",
      "Created swipeable UI with map pins, in-app calendar logic, and verified user workflows",
      "Built Lendlly website using Lovable, Replit, and Supabase",
      "Produced a final deliverable (live website + app) with reporting on usage flows and future roadmap recommendations"
    ],
    tech: ["Rork AI", "Cursor", "Google Maps", "Supabase", "Lovable", "Replit"]
  },
  {
    company: "Stuvalley Technology",
    role: "Data Analytics Internship",
    period: "May 2024 – Jun 2024",
    description: "Data processing and analytics internship focusing on Excel automation and data visualization",
    achievements: [
      "Developed and automated data processing tasks using advanced Excel (VBA, Pivot Tables, Macros), enhancing data clarity through visualizations",
      "Collaborated with cross-functional teams to solve real-world data challenges, delivering actionable insights",
      "Cleaned and normalized datasets from diverse sources, ensuring consistency and reliability for downstream analysis",
      "Presented findings through dashboards, emphasizing trends and anomalies for stakeholders"
    ],
    tech: ["Excel", "VBA", "Pivot Tables", "Macros", "Data Visualization", "Analytics"]
  },
  {
    company: "Bharat Heavy Electricals Limited (BHEL)",
    role: "Intern",
    period: "Jun 2024 – Jul 2024",
    description: "Industrial internship focusing on manufacturing operations and workflow management",
    achievements: [
      "Gained exposure to large-scale manufacturing operations and observed the functioning of heavy machinery and production units",
      "Understood workflow and coordination processes across departments in a live industrial environment",
      "Assisted in basic communication tasks to support smooth information flow between teams and supervisors",
      "Developed a foundational understanding of shop floor management and safety protocols"
    ],
    tech: ["Manufacturing Operations", "Workflow Management", "Industrial Processes", "Safety Protocols"]
  }
];

const CERTIFICATIONS = [
  "IBM Data Science Professional Certificate",
  "Google Data Analytics Professional Certificate",
  "Microsoft Power BI Data Analyst",
  "AWS Cloud Practitioner",
  "Advanced SQL for Data Science"
];

const FUN_FACTS = [
  { icon: <Code2 className="text-orange-600" />, text: "Love automating workflows and making developers' lives easier with DevOps" },
  { icon: <Heart className="text-orange-600" />, text: "Strong analytical skills with a team-oriented approach to problem-solving" },
  { icon: <Brain className="text-orange-600" />, text: "Passionate about AI, cloud infrastructure, and process improvements" },
  { icon: <Music className="text-orange-600" />, text: "Always exploring new technologies and building innovative solutions" }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20">
        
        {/* Hero Introduction */}
        <section className="mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent" 
              style={{ fontFamily: 'Caveat, cursive' }}>
            Hi there! 👋
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl">
            I&apos;m <span className="text-orange-600 font-bold">{config.author}</span>—a Computer Science engineer passionate about DevOps, AI automation, and building products that solve real problems. 
            Whether it&apos;s optimizing Docker containers, creating data dashboards, or developing full-stack applications, 
            I love bringing ideas to life with smart design and code. You&apos;ll find me collaborating with international clients, 
            automating workflows, and exploring the intersection of development and operations. 💻
          </p>
        </section>

        <Separator className="my-12 bg-gray-800" />

        {/* Quick Facts */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white" style={{ fontFamily: 'Caveat, cursive' }}>
            Quick Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {QUICK_FACTS.map((fact, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-orange-600 transition-all">
                <div className="text-3xl">{fact.icon}</div>
                <div>
                  <p className="text-sm text-gray-400">{fact.label}</p>
                  {fact.href ? (
                    <Link href={fact.href} className="text-white hover:text-orange-600 transition-colors">
                      {fact.value}
                    </Link>
                  ) : (
                    <p className="text-white">{fact.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-12 bg-gray-800" />

        {/* Career Journey */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white" style={{ fontFamily: 'Caveat, cursive' }}>
            My Journey
          </h2>
          <div className="space-y-8">
            {CAREER_JOURNEY.map((item, index) => (
              <div key={index} className="relative pl-12 pb-8 border-l-2 border-gray-800 last:border-l-0">
                <div className="absolute left-[-20px] top-0 w-10 h-10 bg-black border-2 border-orange-600 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-orange-600 transition-all">
                  <p className="text-sm text-orange-600 font-semibold mb-2">{item.year}</p>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-12 bg-gray-800" />

        {/* Tech Stack */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white" style={{ fontFamily: 'Caveat, cursive' }}>
            Tech & Tools I Love
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {TECH_STACK.map((tech, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-orange-600 hover:scale-105 transition-all cursor-pointer group"
              >
                <div className="group-hover:scale-110 transition-transform" style={{ color: tech.color }}>
                  {tech.icon}
                </div>
                <p className="text-xs text-gray-400 text-center">{tech.name}</p>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-12 bg-gray-800" />

        {/* Professional Experience */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white" style={{ fontFamily: 'Caveat, cursive' }}>
            Professional Experience
          </h2>
          <div className="space-y-8">
            {PROFESSIONAL_EXPERIENCE.map((exp, index) => (
              <div 
                key={index} 
                className="p-6 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-orange-600 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.company}</h3>
                    <p className="text-orange-600 font-semibold">{exp.role}</p>
                    <p className="text-sm text-gray-400">{exp.period}</p>
                  </div>
                  <Briefcase className="text-orange-600" size={24} />
                </div>
                
                <p className="text-gray-300 mb-4 italic">{exp.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-start">
                        <span className="text-orange-600 mr-2 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-12 bg-gray-800" />

        {/* Education & Certifications */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white" style={{ fontFamily: 'Caveat, cursive' }}>
            Education & Certifications
          </h2>
          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 mb-6">
            <div className="flex items-center gap-3 mb-2">
              <GraduationCap className="text-orange-600" size={24} />
              <h3 className="text-xl font-bold text-white">Bachelor of Technology - Computer Science</h3>
            </div>
            <p className="text-gray-400 ml-9">GITAM University • 2019-2023</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((cert, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800"
              >
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                <p className="text-gray-300">{cert}</p>
                      </div>
                  ))}
            </div>
        </section>

        <Separator className="my-12 bg-gray-800" />

        {/* Fun Facts & Personal */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white" style={{ fontFamily: 'Caveat, cursive' }}>
            Beyond the Code
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FUN_FACTS.map((fact, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-lg border border-gray-800 hover:border-orange-600 transition-all"
              >
                <div className="text-2xl mt-1">{fact.icon}</div>
                <p className="text-gray-300 leading-relaxed">{fact.text}</p>
                    </div>
            ))}
          </div>
        </section>

        <Separator className="my-12 bg-gray-800" />

      </div>

      {/* Add Google Font for handwritten style */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');
      `}</style>
      
      {/* Floating Consult Button */}
      <FloatingConsultButton
        buttonSize={180}
        imageSize={110}
        imageSrc="/assets/me2.jpg"
        imageAlt="Harshvardhan Gedela - Portfolio Consultant"
        revolvingText="LET'S TALK - FREE CONSULT - GET IN TOUCH - "
        revolvingSpeed={12}
        popupHeading="Schedule a Call"
        popupDescription="Ready to discuss your next project? Let's have a free 30-minute consultation to explore how we can work together to bring your ideas to life."
        popupBadgeText="Free"
        ctaButtonText="Book a Call"
        ctaButtonAction={() => {
          // You can replace this with your actual booking link
          window.open('mailto:gharsha238@gmail.com?subject=Portfolio Consultation Request', '_blank');
        }}
        position={{ bottom: "2rem", right: "2rem" }}
      />
    </div>
  );
}
