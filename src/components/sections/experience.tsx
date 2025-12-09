import React, { useEffect, useRef } from "react";
import { Timeline } from "../ui/timeline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PROFESSIONAL_EXPERIENCE = [
  {
    company: "Lendlly",
    role: "Freelance (Client)",
    period: "Present",
    description: "Built using React + Firebase + Google Maps",
    achievements: [
      "Designed a mobile-first rental/swapping marketplace like OYO/Ola",
      "Defined project scope with client and delivered mobile-first rental marketplace within agreed timelines",
      "Managed end-to-end execution: requirements gathering, UI/UX design, workflow automation, and stakeholder updates",
      "Created swipeable UI with map pins, in-app calendar logic, and verified user workflows",
      "Built Lendlly website using React, Firebase, and Google Maps",
      "Produced a final deliverable (live website + app) with reporting on usage flows and future roadmap recommendations"
    ],
    tech: ["React", "Firebase", "Google Maps", "TypeScript"]
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

// Timeline data for the new component
const TIMELINE_DATA = [
  {
    title: "2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Current freelance projects and professional growth
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
            <h4 className="font-semibold text-orange-600 mb-2">Lendlly</h4>
            <p className="text-xs text-neutral-700 dark:text-neutral-300">Mobile-first rental marketplace</p>
            <div className="flex flex-wrap gap-1 mt-2">
              <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded">React</span>
              <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded">Firebase</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-600 mb-2">Stuvalley Technology</h4>
            <p className="text-xs text-neutral-700 dark:text-neutral-300">Data Analytics Internship</p>
            <div className="flex flex-wrap gap-1 mt-2">
              <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded">Excel VBA</span>
              <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded">Analytics</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-purple-600 mb-2">BHEL</h4>
            <p className="text-xs text-neutral-700 dark:text-neutral-300">Industrial Internship</p>
            <div className="flex flex-wrap gap-1 mt-2">
              <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded">Manufacturing</span>
              <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded">Operations</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
        {
          title: "2021-2025",
          content: (
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                Pursuing B.Tech in Mechanical Engineering while building full-stack projects and startup concepts
              </p>
              <div className="mb-8">
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
                  ✅ Pursuing B.Tech in Mechanical Engineering from Raghu Engineering College, Visakhapatnam
                </div>
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
                  ✅ Developed problem-solving mindset through practical, hands-on learning
                </div>
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
                  ✅ Explored technology's real-world impact by building full-stack projects
                </div>
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
                  ✅ Created startup concepts and innovative solutions during college
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-gray-500/20 to-gray-600/20 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                  <h4 className="font-semibold text-gray-600 mb-2">Education</h4>
                  <p className="text-xs text-neutral-700 dark:text-neutral-300">B.Tech Mechanical Engineering</p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">2021-2025</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  <h4 className="font-semibold text-indigo-600 mb-2">Skills Development</h4>
                  <p className="text-xs text-neutral-700 dark:text-neutral-300">Full-Stack Development</p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">Startup & Innovation</p>
                </div>
              </div>
            </div>
          ),
        },
  {
    title: "Journey",
    content: (
                <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Key milestones and achievements in my professional journey
        </p>
        <div className="mb-8">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Collaborating with international clients on freelance projects
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Building AI-powered applications with modern tech stack
                </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Automating workflows and deploying cloud infrastructure
              </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Developing full-stack applications with React, Node.js, and databases
              </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            ✅ Creating data visualization dashboards and analytics solutions
              </div>
              </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-600 mb-2">Current Focus</h4>
            <p className="text-xs text-neutral-700 dark:text-neutral-300">Project management & AI Automation</p>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">Full-Stack Development</p>
          </div>
          <div className="bg-gradient-to-br from-violet-500/20 to-violet-600/20 p-4 rounded-lg border border-violet-200 dark:border-violet-800">
            <h4 className="font-semibold text-violet-600 mb-2">Expertise</h4>
            <p className="text-xs text-neutral-700 dark:text-neutral-300">Data Analyst</p>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">Process Optimization</p>
          </div>
        </div>
      </div>
    ),
  },
];

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate the experience section
      if (sectionRef.current) {
        gsap.fromTo(
          sectionRef.current,
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="w-full min-h-screen" ref={sectionRef}>
      <Timeline data={TIMELINE_DATA} />
    </section>
  );
};

export default ExperienceSection;
