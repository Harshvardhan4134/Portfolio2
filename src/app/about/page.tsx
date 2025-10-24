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

const QUICK_FACTS = [
  { icon: <FaMapMarkerAlt className="text-orange-600" />, label: "Location", value: "Visakhapatnam, India" },
  { icon: <FaEnvelope className="text-orange-600" />, label: "Email", value: "abhijitzende75@gmail.com", href: "mailto:abhijitzende75@gmail.com" },
  { icon: <FaLinkedin className="text-orange-600" />, label: "LinkedIn", value: "/zende-abhijit", href: "https://www.linkedin.com/in/zende-abhijit/" },
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

const EXPERIENCE = [
  {
    title: "AI Dockerfile Optimizer",
    role: "DevOps & AI Engineer",
    description: "Built an AI-powered tool to optimize Docker containers, reducing image sizes and improving performance",
    tech: ["Docker", "Python", "AI/ML", "DevOps"]
  },
  {
    title: "Finance Me - Financial Platform",
    role: "Full-Stack Developer",
    description: "Developed a comprehensive financial management platform with real-time data processing",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"]
  },
  {
    title: "Smart Job Tracker",
    role: "Full-Stack Developer",
    description: "Created a job application tracking system with automated workflows and analytics",
    tech: ["TypeScript", "React", "MongoDB", "Node.js"]
  },
  {
    title: "Smart Parking Assistant",
    role: "IoT & Backend Developer",
    description: "Designed an IoT-based parking management system with real-time availability tracking",
    tech: ["IoT", "Python", "PostgreSQL", "Cloud"]
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
            What I&apos;ve Built
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EXPERIENCE.map((exp, index) => (
              <div 
                key={index} 
                className="p-6 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-orange-600 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <Briefcase className="text-orange-600" size={20} />
            </div>
                <p className="text-sm text-orange-600 mb-3">{exp.role}</p>
                <p className="text-gray-400 mb-4">{exp.description}</p>
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

        {/* Call to Action */}
        <section className="text-center py-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white" style={{ fontFamily: 'Caveat, cursive' }}>
            Let&apos;s Build Something Amazing Together!
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I&apos;m always open to collaborating on interesting projects, freelance opportunities, 
            or just having a chat about tech, music, or anything in between.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact"
              className="px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Get In Touch
            </Link>
            <Link 
              href={config.social.linkedin}
              target="_blank"
              className="px-8 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors border border-gray-700"
            >
              Connect on LinkedIn
            </Link>
          </div>
        </section>

      </div>

      {/* Add Google Font for handwritten style */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');
      `}</style>
    </div>
  );
}
