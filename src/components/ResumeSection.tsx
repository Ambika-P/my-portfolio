import React, { useRef, useEffect } from 'react';
import { FileText, ExternalLink } from 'lucide-react';

const ResumeSection = () => {
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

  return (
    <section ref={sectionRef} className="py-16 bg-white dark:bg-gray-900 reveal">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to work together?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Take a look at my resume to learn more about my skills and experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/Ambika_P_Resume.pdf"
              target="_blank"
              className="btn-primary flex items-center justify-center"
            >
              <FileText size={20} className="mr-2" />
              Download Resume
            </a>

            {/* <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center justify-center"
            >
              <ExternalLink size={20} className="mr-2" />
              View Online
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
