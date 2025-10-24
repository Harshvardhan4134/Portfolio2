import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";
import { SKILLS } from "@/data/constants";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, ArrowRight } from "lucide-react";

const SkillsSection = () => {
  const [expandedSkill, setExpandedSkill] = useState<number | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [titleLoaded, setTitleLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTitleLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSkillClick = (skillId: number) => {
    setExpandedSkill(expandedSkill === skillId ? null : skillId);
  };

  const getSkillLevel = (skillId: number) => {
    // Define skill levels based on your expertise
    const expertSkills = [1, 2, 5, 7, 8, 9, 13, 14, 24]; // JS, TS, React, Next.js, Tailwind, Node.js, Git, GitHub, Vercel
    const intermediateSkills = [3, 4, 6, 10, 11, 12, 15, 16, 17, 18, 19, 20, 21, 22, 23]; // HTML, CSS, Vue, Express, Postgres, MongoDB, Prettier, NPM, Firebase, WordPress, Linux, Docker, Nginx, AWS, Vim
    const learningSkills = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43]; // New skills
    
    if (expertSkills.includes(skillId)) return { level: "Expert", color: "bg-green-500", percentage: 90 };
    if (intermediateSkills.includes(skillId)) return { level: "Intermediate", color: "bg-blue-500", percentage: 70 };
    return { level: "Learning", color: "bg-purple-500", percentage: 40 };
  };

  return (
    <section id="skills" className="w-full h-screen md:h-[150dvh] px-4 sm:px-6 md:px-8">
      <div className="top-[70px] sticky mb-96">
        <Link href={"#skills"}>
          <BoxReveal width="100%">
            <div className="relative">
              <h2
                className={cn(
                  "bg-clip-text text-3xl sm:text-4xl text-center text-transparent md:text-6xl lg:text-7xl",
                  "bg-gradient-to-b from-black/80 to-black/50",
                  "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50",
                  "transition-all duration-1000 ease-out",
                  titleLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                )}
              >
                SKILLS
              </h2>
              {/* Animated underline */}
              <div 
                className={cn(
                  "absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-full transition-all duration-1000 ease-out",
                  titleLoaded ? "w-full opacity-100" : "w-0 opacity-0"
                )}
                style={{ transitionDelay: titleLoaded ? "0.5s" : "0s" }}
              />
            </div>
          </BoxReveal>
        </Link>
        
        {/* Enhanced Skills Grid */}
        <div className="mt-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 p-4">
            {Object.values(SKILLS).map((skill) => {
              const skillLevel = getSkillLevel(skill.id);
              const isExpanded = expandedSkill === skill.id;
              const isHovered = hoveredSkill === skill.id;
              
              return (
                <div
                  key={skill.id}
                  className="group relative"
                  onMouseEnter={() => setHoveredSkill(skill.id)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Orbital glow effect */}
                  <div 
                    className={cn(
                      "absolute -inset-2 rounded-full opacity-0 transition-all duration-500",
                      isHovered && "opacity-100 animate-pulse"
                    )}
                    style={{
                      background: `radial-gradient(circle, ${skill.color}20 0%, transparent 70%)`,
                    }}
                  />
                  
                  {/* Skill card */}
                  <div
                    className={cn(
                      "relative flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border transition-all duration-300 cursor-pointer",
                      isExpanded 
                        ? "bg-white/10 border-white/30 scale-110 shadow-lg shadow-white/10" 
                        : isHovered 
                        ? "bg-white/8 border-white/20 scale-105 shadow-md shadow-white/5"
                        : "border-white/10 hover:border-white/20"
                    )}
                    onClick={() => handleSkillClick(skill.id)}
                  >
                    {/* Skill icon with energy ring */}
                    <div className="relative w-10 h-10 mb-3 flex items-center justify-center">
                      <div 
                        className={cn(
                          "absolute -inset-1 rounded-full border-2 opacity-0 transition-all duration-500",
                          isHovered && "opacity-100 animate-ping"
                        )}
                        style={{ borderColor: skill.color }}
                      />
                      <div 
                        className={cn(
                          "absolute -inset-2 rounded-full border opacity-0 transition-all duration-700",
                          isHovered && "opacity-50 animate-ping"
                        )}
                        style={{ 
                          borderColor: skill.color,
                          animationDelay: "0.2s"
                        }}
                      />
                      <img
                        src={skill.icon}
                        alt={skill.label}
                        className={cn(
                          "w-full h-full object-contain filter brightness-0 invert dark:brightness-100 dark:invert-0 transition-all duration-300",
                          isHovered && "scale-110"
                        )}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                    
                    {/* Skill name */}
                    <span className={cn(
                      "text-xs text-center font-medium transition-all duration-300",
                      isExpanded ? "text-white scale-110" : "text-neutral-300 group-hover:text-white"
                    )}>
                      {skill.label}
                    </span>
                    
                    {/* Skill level badge */}
                    <Badge 
                      className={cn(
                        "mt-2 text-xs px-2 py-0.5 transition-all duration-300",
                        skillLevel.color,
                        isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
                      )}
                    >
                      {skillLevel.level}
                    </Badge>
                  </div>

                  {/* Expanded card */}
                  {isExpanded && (
                    <Card className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-black/95 backdrop-blur-lg border-white/30 shadow-xl shadow-white/10 overflow-visible z-50">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/50" />
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-center">
                          <Badge className={`px-2 text-xs ${skillLevel.color}`}>
                            {skillLevel.level}
                          </Badge>
                          <span className="text-xs font-mono text-white/50">
                            {skill.id}
                          </span>
                        </div>
                        <CardTitle className="text-sm mt-2 flex items-center">
                          {skill.label}
                          <ArrowRight size={12} className="ml-2 text-white/60" />
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-xs text-white/80">
                        <p className="mb-4">{skill.shortDescription}</p>
                        
                        {/* Energy level */}
                        <div className="mb-4 pt-3 border-t border-white/10">
                          <div className="flex justify-between items-center text-xs mb-2">
                            <span className="flex items-center">
                              <Zap size={10} className="mr-1" />
                              Proficiency Level
                            </span>
                            <span className="font-mono">{skillLevel.percentage}%</span>
                          </div>
                          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <div
                              className={cn("h-full transition-all duration-1000", skillLevel.color)}
                              style={{ width: `${skillLevel.percentage}%` }}
                            />
                          </div>
                        </div>

                        {/* Related skills */}
                        <div className="pt-3 border-t border-white/10">
                          <div className="flex items-center mb-2">
                            <ArrowRight size={10} className="text-white/70 mr-1" />
                            <h4 className="text-xs uppercase tracking-wider font-medium text-white/70">
                              Similar Technologies
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {Object.values(SKILLS)
                              .filter(s => s.id !== skill.id && Math.abs(s.id - skill.id) <= 3)
                              .slice(0, 3)
                              .map((relatedSkill) => (
                                <div
                                  key={relatedSkill.id}
                                  className="flex items-center h-6 px-2 py-0 text-xs rounded border border-white/20 bg-transparent hover:bg-white/10 text-white/80 hover:text-white transition-all cursor-pointer"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleSkillClick(relatedSkill.id);
                                  }}
                                >
                                  {relatedSkill.label}
                                </div>
                              ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Skills summary */}
          <div className="text-center mt-8">
            <p className="text-sm text-neutral-400">
              <span className="text-white font-semibold">{Object.values(SKILLS).length}</span> skills across 
              <span className="text-blue-400 font-semibold"> Full-Stack Development</span>, 
              <span className="text-purple-400 font-semibold"> DevOps</span>, and 
              <span className="text-green-400 font-semibold"> Cloud Technologies</span>
            </p>
            <p className="text-xs text-neutral-500 mt-2">
              Interactive 3D keyboard experience below • Click any skill for details
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
