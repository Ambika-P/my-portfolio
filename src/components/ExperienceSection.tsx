import React, { useRef, useEffect } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

type TimelineItemProps = {
  year: string;
  title: string;
  company?: string;
  institution?: string;
  description: string;
  isEducation?: boolean;
};

const TimelineItem = ({
  year,
  title,
  company,
  institution,
  description,
  isEducation = false,
}: TimelineItemProps) => {
  return (
    <div className="flex mb-8 md:mb-0">
      <div className="flex flex-col items-center mr-6">
        <div className="p-3 rounded-full bg-purple-100 border-4 border-white shadow-md z-10 dark:border-gray-800">
          {isEducation ? (
            <GraduationCap size={24} className="text-purple-600" />
          ) : (
            <Briefcase size={24} className="text-purple-600" />
          )}
        </div>
        <div className="w-0.5 bg-purple-200 grow dark:bg-purple-400"></div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8 md:mb-12 grow dark:bg-gray-800">
        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-3 dark:bg-purple-200 dark:text-purple-900">
          {year}
        </span>
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-purple-600 mb-3 font-medium dark:text-purple-300">
          {isEducation ? institution : company}
        </p>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
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

  const experienceItems = [
    {
      year: "Aug 2022 – Present",
      title: "Software Engineer",
      company: "Alten Global Technologies Pvt Ltd",
      description:
        "Building dynamic, responsive web applications using React.js, REST APIs, and modern frontend libraries like MUI and Tailwind CSS. Collaborated in Agile teams and contributed to key projects including predictive maintenance and Learning Labs LMS.",
    },
    {
      year: "July 2018 – July 2022",
      title: "B.E in Computer Science & Engineering (CSE)",
      institution: "KVG College of Engineering, Sullia",
      description:
        "Graduated with a CGPA of 8.66. Focused on software engineering principles, data structures, algorithms, and full-stack development.",
      isEducation: true,
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 bg-purple-50 reveal dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mx-auto text-gray-900 dark:text-white">
          My Journey
        </h2>

        <div className="mt-16 max-w-3xl mx-auto">
          {experienceItems.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              company={item.company}
              institution={item.institution}
              description={item.description}
              isEducation={item.isEducation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
