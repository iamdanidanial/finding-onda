import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Menu,
  X,
  Sun,
  Moon,
  Phone,
  MapPin,
  Home,
  Wrench,
  Info,
  Glasses,
  Wallet
} from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✔ Ikon sudah diperbaiki agar sesuai menu
  const menuItems = [
    { label: 'Home', href: '#home', icon: Home },
    { label: 'Services', href: '#services', icon: Wrench },
    { label: 'Destinations', href: '#destinations', icon: MapPin },
    { label: 'Pricing', href: '#pricing', icon: Wallet },
    { label: 'About', href: '#about', icon: Info },
    { label: 'Contact', href: '#contact', icon: Phone }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        {/* Logo + Desktop Nav */}
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            <Glasses
              className={`w-8 h-8 transition-colors ${
                isScrolled ? 'text-orange-600' : 'text-white'
              }`}
            />
            <span
              className={`text-2xl font-bold transition-colors ${
                isScrolled
                  ? 'text-slate-900 dark:text-white'
                  : 'text-white'
              }`}
            >
              Finding Onda
            </span>
          </motion.div>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map(({ label, href, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(href);
                }}
                whileHover={{ scale: 1.1 }}
                className={`flex items-center gap-2 font-medium transition-colors ${
                  isScrolled
                    ? 'text-slate-700 hover:text-orange-600 dark:text-slate-300 dark:hover:text-orange-400'
                    : 'text-white hover:text-orange-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </motion.a>
            ))}

            {/* Dark mode button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${
                isScrolled
                  ? 'bg-slate-100 dark:bg-slate-800'
                  : 'bg-white/20'
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-orange-400" />
              ) : (
                <Moon
                  className={`w-5 h-5 ${
                    isScrolled ? 'text-slate-700' : 'text-white'
                  }`}
                />
              )}
            </motion.button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                isScrolled ? 'bg-slate-100 dark:bg-slate-800' : 'bg-white/20'
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-orange-400" />
              ) : (
                <Moon className={`w-5 h-5 ${isScrolled ? 'text-slate-700' : 'text-white'}`} />
              )}
            </motion.button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-white/10"
          >
            {menuItems.map(({ label, href, icon: Icon }) => (
              <button
                key={label}
                onClick={() => scrollToSection(href)}
                className="flex items-center gap-3 w-full py-3 text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 font-medium transition-colors"
              >
                <Icon className="w-5 h-5" />
                {label}
              </button>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
