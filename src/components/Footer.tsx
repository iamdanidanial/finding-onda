import { Car, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 relative overflow-hidden">
      {/* soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-slate-950 pointer-events-none" />

      <div className="container relative mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Car className="w-9 h-9 text-purple-400 drop-shadow-md" />
              <span className="text-3xl font-bold tracking-wide text-white">Bali With Me</span>
            </div>

            <p className="text-slate-400 leading-relaxed">
              Your trusted private driver service for safe, premium,
              and comfortable travel across Indonesia’s beautiful destinations.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Destinations', 'Pricing', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>info@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-purple-400 mt-1" />
                <span>Bali, Indonesia</span>
              </li>
            </ul>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Twitter, href: '#' }
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.15 }}
                  className="w-11 h-11 bg-slate-800/60 hover:bg-purple-500/80 transition-colors duration-300 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 shadow-lg"
                >
                  <Icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 pt-8 text-center text-slate-500"
        >
          <p>
            &copy; {currentYear} <span className="text-white font-semibold">Bali With Me</span>.  
            All Rights Reserved — Driven with comfort and passion.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
