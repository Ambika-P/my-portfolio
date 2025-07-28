import React, { useRef, useEffect, useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Send,
  MapPin
} from 'lucide-react';

import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      setFormState({
        name: '',
        email: '',
        message: ''
      });

      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-purple-50 dark:bg-[#0d0d0d] reveal">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mx-auto dark:text-white">Let's Connect</h2>

        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          <div className="lg:w-1/2 bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>

            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition-all bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-white"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition-all bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-white"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition-all bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-white"
                  placeholder="How can I help you?"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <Send size={20} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Connect With Me</h3>

              <div className="flex flex-col space-y-4">
                <a
                  href="mailto:ambikapudkaje7@gmail.com"
                  className="flex items-center p-3 hover:bg-purple-50 dark:hover:bg-[#2a2a2a] rounded-lg transition-colors"
                >
                  <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg mr-4">
                    <Mail size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Email</p>
                    <p className="text-gray-600 dark:text-gray-400">ambikapudkaje7@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/ambika-p-33394b220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 hover:bg-purple-50 dark:hover:bg-[#2a2a2a] rounded-lg transition-colors"
                >
                  <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg mr-4">
                    <Linkedin size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">LinkedIn</p>
                    <p className="text-gray-600 dark:text-gray-400">linkedin.com/in/AmbikaP-dev</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg p-8">
              <div className="flex items-start">
                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg mr-4">
                  <MapPin size={24} className="text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Location</p>
                  <p className="text-gray-600 dark:text-gray-400">Based in India 🇮🇳</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">Open to remote, hybrid, or in-office roles</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">Preferred location: Bangalore (flexible with others)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
