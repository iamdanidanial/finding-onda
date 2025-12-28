import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  onClick,
  href,
  className = ''
}: ButtonProps) {
  const baseStyles = 'px-8 py-3 rounded-full font-semibold transition-all duration-300';

  const variants = {
    primary: 'bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/50',
    secondary: 'bg-slate-800 text-white hover:bg-slate-700',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-slate-900'
  };

  const Component = href ? 'a' : 'button';

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Component
        href={href}
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        target={href ? '_blank' : undefined}
        rel={href ? 'noopener noreferrer' : undefined}
      >
        {children}
      </Component>
    </motion.div>
  );
}
