
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  id, 
  children, 
  className = '', 
  delay = 0.2 
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
