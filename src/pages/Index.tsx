
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import ResumeSection from '../components/ResumeSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import LanguagesSection from '@/components/LanguagesSection';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  // Initialize intersection observer for scroll animations
  useEffect(() => {
    const sections = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <button
        onClick={() => {
          navigate("/valentine")
        }}
        className="relative z-20 px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm rounded-full
                               shadow-[0_0_20px_rgba(0,200,255,0.6)] hover:scale-110
                               hover:shadow-[0_0_35px_rgba(0,200,255,1)] active:scale-95 transition mr-4">
        YES Subbi💘
      </button>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ProjectsSection />
      <SkillsSection />
      <LanguagesSection />
      <ExperienceSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
