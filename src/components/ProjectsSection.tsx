import React, { useRef, useEffect } from 'react';

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  techStack?: string[];
};

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col justify-between">
      <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        </div>

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
};

const ProjectsSection = () => {
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

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-purple-50 dark:bg-gray-900 reveal">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold text-center text-purple-700 dark:text-purple-300 mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
