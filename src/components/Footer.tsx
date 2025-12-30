import {
  Home,
  Info,
  MapPin,
  Wallet,
  Instagram,
  Mail,
  Glasses
} from 'lucide-react';
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
              <Glasses className="w-9 h-9 text-orange-400 drop-shadow-md" />
              <span className="text-3xl font-bold tracking-wide text-white">
                Finding ONDA
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed">
              Catatan perjalanan menemukan ONDA di ruang-ruang yang sering
              kita lewati tanpa sadar — dari stasiun, masjid, SPBU,
              hingga kampung halaman.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Navigasi</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#home', icon: Home },
                { label: 'Tentang', href: '#tentang', icon: Info },
                { label: 'Finding ONDA', href: '#gallery', icon: MapPin },
                { label: 'Posting IG', href: '#instagram', icon: MapPin },
                { label: 'Cerita', href: '#story', icon: Wallet }
              ].map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* About Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-white">
              Tentang Proyek
            </h3>
            <ul className="space-y-3 text-slate-400">
              <li>📍 Eksplorasi produk ONDA</li>
              <li>🚉 Menyusuri stasiun & ruang publik</li>
              <li>📖 Cerita perjalanan personal</li>
              <li>📸 Dokumentasi foto & cerita</li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-white">
              Terhubung
            </h3>

            <div className="flex gap-4 mb-4">
              <motion.a
                href="#instagram"
                whileHover={{ scale: 1.15 }}
                className="w-11 h-11 bg-slate-800/60 hover:bg-orange-500/80 transition-colors duration-300 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 shadow-lg"
              >
                <Instagram className="w-5 h-5 text-white" />
              </motion.a>

              <motion.a
                href="mailto:hello@findingonda.com"
                whileHover={{ scale: 1.15 }}
                className="w-11 h-11 bg-slate-800/60 hover:bg-orange-500/80 transition-colors duration-300 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 shadow-lg"
              >
                <Mail className="w-5 h-5 text-white" />
              </motion.a>
            </div>

            <p className="text-slate-400 text-sm">
              Ikuti perjalanan ini di Instagram dan cerita lengkapnya di website.
            </p>
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
            &copy; {currentYear}{' '}
            <span className="text-white font-semibold">
              Finding ONDA
            </span>
            .  
            Sebuah perjalanan, bukan sekadar pencarian.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
