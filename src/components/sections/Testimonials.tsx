import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import SectionTitle from "../SectionTitle";

export default function Testimonials() {
  const groupSize = 3; 
  const totalGroups = Math.ceil(testimonials.length / groupSize);

  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // 🔥 BACKGROUND STATIC — RANDOM 3 GAMBAR
  const backgrounds = [
    "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1920"
  ];

  // 🌄 background mengikuti slide group (1→bg1, 2→bg2, 3→bg3)
  const currentBackground = backgrounds[currentGroupIndex % backgrounds.length];

  // ambil testimoni 3 per slide
  const currentGroup = testimonials.slice(
    currentGroupIndex * groupSize,
    currentGroupIndex * groupSize + groupSize
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentGroupIndex((prev) => (prev + 1) % totalGroups);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentGroupIndex(
      (prev) => (prev - 1 + totalGroups) % totalGroups
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentGroupIndex((prev) => (prev + 1) % totalGroups);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (direction) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* 🌌 Background Static Random */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-[4px] brightness-50 scale-110 transition-all duration-700"
        style={{
          backgroundImage: `url(${currentBackground})`,
        }}
      />

      <div className="relative container mx-auto px-6">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Real experiences from travelers who trusted us with their journey"
          bright={true}
        />

        <div className="max-w-6xl mx-auto relative">
          <div className="relative min-h-[450px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentGroupIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 250, damping: 25 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                className="absolute w-full"
              >
                {/* GRID 3 TESTIMONI */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {currentGroup.map((item, index) => (
                    <div
                      key={index}
                      className="backdrop-blur-xl bg-white/10 border border-white/20 dark:bg-black/20 dark:border-white/10 rounded-3xl p-8 shadow-2xl text-center"
                    >
                      <motion.img
                        whileHover={{ scale: 1.08 }}
                        src={item.avatar}
                        alt={item.name}
                        className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-transparent bg-gradient-to-tr from-orange-500 to-pink-500 p-1 mx-auto"
                      />

                      {/* ⭐ Rating */}
                      <div className="flex justify-center gap-1 mb-3">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>

                      <p className="text-white/90 text-base italic mb-4 leading-relaxed">
                        \"{item.comment}\"
                      </p>

                      <h4 className="text-xl font-bold text-white">
                        {item.name}
                      </h4>
                      <p className="text-white/70 text-sm">{item.country}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="w-12 h-12 backdrop-blur-md bg-white/20 rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white/40 transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* dots indicator */}
            <div className="flex gap-2">
              {Array.from({ length: totalGroups }).map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.25 }}
                  onClick={() => {
                    setDirection(index > currentGroupIndex ? 1 : -1);
                    setCurrentGroupIndex(index);
                  }}
                  className={`h-3 rounded-full transition-all ${
                    index === currentGroupIndex
                      ? "bg-orange-400 w-8 shadow-md shadow-orange-500/50"
                      : "bg-white/40 w-3"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="w-12 h-12 backdrop-blur-md bg-white/20 rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white/40 transition"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
