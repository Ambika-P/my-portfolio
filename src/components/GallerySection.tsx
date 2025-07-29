import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ Local images from /public/images
  const galleryImages = [

    {
      url: '/images/LLM-dash.png',
      title: 'Learning Labs LMS',
      description: 'Role-based LMS with AI features like MCQ generation and recommendation'
    },
    {
      url: '/images/chart4.png',
      title: 'Learning Labs LMS',
      description: 'Role-based LMS with AI features like MCQ generation and recommendation'
    },
    {
      url: '/images/chart5.png',
      title: 'Learning Labs LMS',
      description: 'Role-based LMS with AI features like MCQ generation and recommendation'
    },
    {
      url: '/images/LLM-cert.png',
      title: 'Learning Labs LMS',
      description: 'Role-based LMS with AI features like MCQ generation and recommendation'
    },
    {
      url: '/images/rmc.png',
      title: 'RMC Portal',
      description: 'Dynamic repair & maintenance system for tracking and reports'
    },
    {
      url: '/images/easy.png',
      title: 'EasyTime System',
      description: 'Employee timesheet & productivity tracking tool'
    },
    {
      url: '/images/chart3.png',
      title: 'EasyTime System',
      description: 'Employee timesheet & productivity tracking tool'
    },
    {
      url: '/images/chat.jpg',
      title: 'DocGenie',
      description: 'Medical consultation platform with upload & text-to-speech features'
    },
    {
      url: '/images/bosch1.jpg',
      title: 'Predictive Engine UI',
      description: 'Dashboard built for predictive maintenance (BOSCH)'
    },
    {
      url: '/images/bosch2.jpg',
      title: 'Data Charts - Predictive App',
      description: 'Recharts-based fault analytics module with filters'
    },
    {
      url: '/images/chart1.png',
      title: '',
      description: ''
    },
    {
      url: '/images/chart2.png',
      title: '',
      description: ''
    },
  ];

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

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900 reveal">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mx-auto text-gray-900 dark:text-white">
          UI Design Highlights
        </h2>

        <div className="mt-12 relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-contain object-center rounded-xl bg-white dark:bg-gray-800"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                    <p className="text-white/80">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 dark:bg-gray-700/30 dark:hover:bg-gray-700/50 p-2 rounded-full shadow-lg backdrop-blur-sm transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} className="text-gray-800 dark:text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 dark:bg-gray-700/30 dark:hover:bg-gray-700/50 p-2 rounded-full shadow-lg backdrop-blur-sm transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={24} className="text-gray-800 dark:text-white" />
          </button>

          <div className="flex justify-center mt-4 space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${activeIndex === index ? 'bg-purple-600 dark:bg-purple-500' : 'bg-purple-200 dark:bg-purple-800'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
