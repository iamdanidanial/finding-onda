import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' } : {}}
      transition={{ duration: 0.3 }}
      className={`bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
}
