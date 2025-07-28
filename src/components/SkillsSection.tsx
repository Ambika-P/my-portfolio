import React, { useRef, useEffect } from 'react';
import {
  Github,
  Code2,
  FileCode2,
  Palette,
  GitBranchPlus,
  CodeXml,
  Layers,
  Code,
  Database,
  Network,
  Wrench,
  UserCheck2,
  LayoutDashboard,
  FileText,
  TerminalSquare
} from 'lucide-react';

type Skill = {
  name: string;
  icon: React.ReactNode;
  proficiency: number;
};

const ProgressBar = ({ proficiency }: { proficiency: number }) => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && progressRef.current) {
          progressRef.current.style.width = `${proficiency}%`;
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, [proficiency]);

  return (
    <div className="h-2 w-full bg-purple-100 dark:bg-purple-900 rounded-full overflow-hidden">
      <div
        ref={progressRef}
        className="h-full bg-purple-500 rounded-full transition-all duration-1000 ease-out"
        style={{ width: '0%' }}
      ></div>
    </div>
  );
};

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills: Skill[] = [
    { name: "React.js (Hooks, Router)", icon: <Code2 size={40} />, proficiency: 90 },
    { name: "Context API", icon: <Network size={40} />, proficiency: 95 },
    { name: "JavaScript (ES6+)", icon: <CodeXml size={40} />, proficiency: 85 },
    { name: "HTML5", icon: <FileCode2 size={40} />, proficiency: 95 },
    { name: "CSS3", icon: <Palette size={40} />, proficiency: 90 },
    { name: "Tailwind CSS", icon: <Layers size={40} />, proficiency: 80 },
    { name: "Material UI", icon: <Code size={40} />, proficiency: 85 },
    { name: "Bootstrap", icon: <LayoutDashboard size={40} />, proficiency: 80 },
    { name: "RESTful API Integration", icon: <Network size={40} />, proficiency: 90 },
    { name: "MySQL / PostgreSQL", icon: <Database size={40} />, proficiency: 50 },
    { name: "VS Code", icon: <TerminalSquare size={40} />, proficiency: 95 },
    { name: "Git", icon: <GitBranchPlus size={40} />, proficiency: 85 },
    { name: "Postman", icon: <Wrench size={40} />, proficiency: 90 },
    { name: "Figma / Adobe XD", icon: <FileText size={40} />, proficiency: 30 },
    { name: "Chrome/React DevTools", icon: <Github size={40} />, proficiency: 90 },
    { name: "Agile / Scrum", icon: <UserCheck2 size={40} />, proficiency: 85 },
    { name: "UI/UX Collaboration", icon: <LayoutDashboard size={40} />, proficiency: 85 },
    { name: "Mentoring & Teamwork", icon: <UserCheck2 size={40} />, proficiency: 90 },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900 reveal">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mx-auto text-gray-900 dark:text-white">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg mr-4 skill-icon">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
              </div>

              <div className="mt-2">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Proficiency</span>
                  <span className="text-sm font-medium text-purple-600">{skill.proficiency}%</span>
                </div>
                <ProgressBar proficiency={skill.proficiency} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
