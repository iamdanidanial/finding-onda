import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Button";
import onda1 from "/assets/onda1.jpeg";
import onda3 from "/assets/onda3.jpg";
import onda4 from "/assets/onda4.jpg"; 
import onda5 from "/assets/onda5.jpg";

export default function Hero() {
  // Background slideshow khusus produk ONDA
  const images = [onda1, onda3, onda4, onda5
  ];

  const [index, setIndex] = useState(0);

  // Auto slideshow every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* BACKGROUND SLIDESHOW */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${images[index]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          {/* TAGLINE */}
          <div className="text-white/90 mb-3 text-sm bg-white/10 px-4 py-1 w-fit rounded-full">
            🎉 GIVEAWAY FINDING ONDA 🎉
          </div>

          {/* TITLE */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Temukan Produk <span className="text-blue-400">ONDA</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-lg md:text-xl text-white/90 mb-10">
            Cari produk ONDA di mana saja, ambil foto atau video, upload ke 
            Instagram, dan dapatkan kesempatan memenangkan iPhone 13, Speaker 
            ONDA, dan Kulkas 1 pintu!
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <Button
              variant="primary"
              onClick={() =>
                document
                  .querySelector("#cara-ikut")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Ikuti Giveaway
            </Button>

            <Button
              variant="outline"
              onClick={() =>
                document
                  .querySelector("#gallery")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Lihat Gallery
            </Button>
          </div>

          {/* INFO BONUS */}
          <div className="mt-14 text-white/90">
            <div className="text-sm">Periode Giveaway:</div>
            <div className="text-xl font-semibold">
              25 November – 31 Desember 2025
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
