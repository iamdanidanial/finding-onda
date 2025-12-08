import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, Star, CheckCircle, XCircle } from 'lucide-react';
import { destinations } from '../../data/destinations';
import SectionTitle from '../SectionTitle';

export default function Destinations() {

const [selected, setSelected] = useState<any>(null);

useEffect(() => {
  if (selected) {
    document.body.style.overflow = "hidden";  // lock scroll
  } else {
    document.body.style.overflow = "auto";    // unlock scroll
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [selected]);

  return (
    <section id="destinations" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Unforgettable Moments For You"
          subtitle="Explore Bali's most breathtaking destinations with your private driver"
        />

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelected(destination)}
              className="cursor-pointer group"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-xl bg-slate-900/5 backdrop-blur-lg hover:shadow-2xl transition">
                <div className="relative h-96 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.7 }}
                    src={destination.image}
                    alt={destination.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                <div className="absolute bottom-0 p-6 text-white">
                  <div className="flex items-center gap-2 text-purple-400 text-sm mb-2">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">{destination.duration}</span>
                  </div>

                  <h3 className="text-xl font-extrabold">{destination.title}</h3>

                  <p className="text-white/80 text-sm mt-1 line-clamp-2">
                    {destination.description}
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-purple-400 font-bold">
                      From {destination.price}
                    </span>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="bg-white/80 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold shadow-md"
                    >
                      View Tour
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===================== FULL DETAIL PAGE ===================== */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-md overflow-y-auto z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white dark:bg-slate-800 max-w-4xl mx-auto my-10 rounded-3xl shadow-lg p-8"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
              >
                {/* HEADER IMAGE */}
                <img
                  src={selected.image}
                  className="rounded-2xl w-full max-h-[350px] object-cover mb-6"
                />

                {/* TITLE */}
                <h2 className="text-4xl font-bold mb-4">{selected.title}</h2>

                {/* DETAILS */}
                <div className="flex flex-wrap items-center gap-6 text-slate-700 dark:text-slate-200 mb-6">
                  <span className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-500" /> {selected.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-purple-500" /> {selected.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" /> {selected.rating}
                  </span>
                </div>

                {/* DESCRIPTION */}
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  {selected.description}
                </p>

                {/* HIGHLIGHTS */}
                <h3 className="text-2xl font-bold mb-3">✨ Sorotan Lawatan</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {selected.highlights.map((h: string, i: number) => (
                    <div
                      key={i}
                      className="p-3 bg-purple-50 dark:bg-slate-700 rounded-xl border border-purple-200 flex items-center gap-2"
                    >
                      <CheckCircle className="w-5 h-5 text-purple-500" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* INCLUDE - EXCLUDE */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div>
                    <h3 className="text-xl font-bold mb-3">✔ Termasuk:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="text-green-500" /> Air mineral
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="text-green-500" /> Kereta + pemandu pelancong
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="text-green-500" /> Bahan bakar
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">❌ Tidak Termasuk:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <XCircle className="text-red-500" /> Tiket masuk
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="text-red-500" /> Makanan & minuman
                      </li>
                    </ul>
                  </div>
                </div>

                {/* CLOSE BUTTON */}
                <button
                  className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold"
                  onClick={() => setSelected(null)}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
