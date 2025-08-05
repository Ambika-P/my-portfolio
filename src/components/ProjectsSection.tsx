import React, { useRef, useEffect, useState } from 'react';

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  techStack?: string[];
};

const projects: ProjectProps[] = [
  {
    title: "Learning Labs LMS",
    description: "AI-powered learning platform for creating and managing courses, generating MCQs, and analyzing learner progress.",
    image: "/images/llm.jpg",
    techStack: ["React", "Context API", "Tailwind CSS", "AI", "LLM"]
  },
  {
    title: "Predictive Maintenance – BOSCH",
    description: "Real-time monitoring and analytics for sensor-based preventive maintenance across multiple sites.",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9",
    techStack: ["React", "Context API", "Data Visualization", "REST API"]
  },
  {
    title: "DocGenie – AI Document Assistant",
    description: "Intelligent document Q&A tool with speech-to-text, text-to-speech, and document upload capabilities.",
    image: "/images/docg.jpg",
    techStack: ["React", "Context API", "TTS", "STS", "AI", "REST API"]
  },
  {
    title: "EazyTime – Timesheet Tracker",
    description: "Custom timesheet and attendance system with dashboards for employee and admin roles.",
    image: "/images/easytime.jpg",
    techStack: ["React", "Context API", "Tailwind CSS", "Chart.js", "Role-based UI"]
  },
  {
    title: "RMC Portal – TPS Project Mgmt",
    description: "Portal for managing documentation, faults, shipments, and approvals with charts and access controls.",
    image: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5",
    techStack: ["React", "Context API", "Charts", "Material UI", "REST API"]
  },
  {
    title: "IHASS – Smart Home Automation",
    description: "Control smart appliances, get alerts, automate home settings, and ensure secure remote access.",
    image: "/images/ihass.jpg",
    techStack: ["React", "Context API", "Automation", "REST API"]
  }
];

const ProjectCard = ({ project }: { project: ProjectProps }) => (
  <div className="h-full flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl">
    <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
        {project.title}
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 flex-grow">
        {project.description}
      </p>
      {project.techStack && (
        <div className="mt-4 flex flex-wrap gap-2 border-t border-gray-200 dark:border-gray-600 pt-4">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const ProjectsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isInteractingRef = useRef(false);
  const [scrollDirection, setScrollDirection] = useState<'forward' | 'backward'>('forward');

  const animateScroll = (distance: number, duration: number) => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const start = scrollContainer.scrollLeft;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      scrollContainer.scrollLeft = start + distance * progress;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const startAutoScroll = () => {
      if (window.innerWidth < 768 && scrollContainer) {
        scrollIntervalRef.current = setInterval(() => {
          if (!isInteractingRef.current && scrollContainer) {
            const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
            const currentScrollLeft = scrollContainer.scrollLeft;

            if (scrollDirection === 'forward') {
              if (currentScrollLeft + 250 >= maxScrollLeft) {
                setScrollDirection('backward');
              } else {
                animateScroll(250, 600);
              }
            } else {
              if (currentScrollLeft <= 0) {
                setScrollDirection('forward');
              } else {
                animateScroll(-250, 600);
              }
            }
          }
        }, 2500); // scroll every 1 second
      }
    };

    const stopAutoScroll = () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };

    startAutoScroll();

    return () => {
      stopAutoScroll();
    };
  }, [scrollDirection]);

  return (
    <section id="projects" className="py-10 px-4 sm:px-8 md:px-16">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        My Projects
      </h1>
      <div
        ref={scrollContainerRef}
        className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible scroll-smooth snap-x snap-mandatory"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-[85%] sm:w-[70%] md:w-auto shrink-0 md:shrink md:h-full snap-start"
            onMouseEnter={() => (isInteractingRef.current = true)}
            onMouseLeave={() => (isInteractingRef.current = false)}
            onClick={() => (isInteractingRef.current = true)}
            onBlur={() => (isInteractingRef.current = false)}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
