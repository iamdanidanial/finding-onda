import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  bright?: boolean; // <-- ✨ tambahan agar bisa mode terang
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  bright = false, // default: tidak
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={centered ? 'text-center mb-12' : 'mb-12'}
    >
      <h2
        className={`
          text-4xl md:text-5xl font-bold mb-4
          ${bright ? 'text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]' : 'text-slate-900 dark:text-white'}
        `}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`
            text-lg max-w-2xl mx-auto
            ${bright ? 'text-white/90 drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]' : 'text-slate-600 dark:text-slate-300'}
          `}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
