import React, { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-24 transition-all duration-1000 ease-in-out 
        bg-gradient-to-br 
        from-white via-purple-50 to-purple-100 
        dark:from-gray-900 dark:via-gray-800 dark:to-purple-950
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-center text-4xl font-extrabold text-purple-700 dark:text-purple-300 tracking-tight mb-4">
          About <span className="text-purple-500 dark:text-purple-400">Me</span>
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Passionate frontend developer focused on building responsive and engaging user experiences.
        </p>

        <div className="max-w-5xl mx-auto backdrop-blur-md 
          bg-white/70 dark:bg-gray-900/70 
          border border-purple-200 dark:border-purple-700 
          rounded-2xl shadow-xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center md:text-left">
            Frontend Developer with 3 Years of Experience
          </h3>

          <p className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
            Developed dynamic, real-time web applications across domains like <strong>home automation</strong>, <strong>EasyTime (timesheet)</strong>, <strong>predictive maintenance</strong>, <strong>DocGenie</strong>, and the <strong>RMC Portal</strong>. Specialized in React.js frontend development using advanced features such as <strong>Hooks</strong>, <strong>Context API</strong>, <strong>React Router</strong>, and <strong>Lazy Loading</strong> to build scalable, responsive UIs.
          </p>

          <p className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
            Implemented features including <strong>PDF upload</strong>, <strong>text-to-speech</strong>, <strong>speech-to-text</strong>, <strong>dynamic forms with validation</strong>, <strong>role-based UI rendering</strong>, and <strong>theme toggling</strong>. Integrated RESTful APIs and created <strong>real-time dashboards</strong> with interactive charts using <strong>Recharts</strong>. Collaborated in agile teams while mentoring junior developers and delivering maintainable, optimized UI architecture.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-3">Technical Skills</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>React.js / JavaScript</li>
                <li>Tailwind CSS, Material UI</li>
                <li>REST APIs & Axios</li>
                <li>Git / GitHub</li>
                <li>VS Code & Dev Tools</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-3">Soft Skills</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Problem-solving & debugging</li>
                <li>Clean code practices</li>
                <li>Team collaboration</li>
                <li>Self-motivated & adaptable</li>
              </ul>
            </div>
          </div>

          {/* Resume Button — Uncomment if needed */}
          {/* 
          <div className="text-center mt-10">
            <a
              href="/Ambika_P_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full shadow hover:bg-purple-700 dark:hover:bg-purple-500 transition"
            >
              Download Resume
            </a>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
