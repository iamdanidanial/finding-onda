import { motion } from "framer-motion";
import { Flame } from "lucide-react";

export default function MaintenanceInfo() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">

      {/* 🔥 FIRE TEXTURE ANIMATION */}
      <div className="absolute inset-0 opacity-[0.25] mix-blend-screen pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-fire-flames-in-the-dark-1378-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 🔥 RED & BLACK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-900/40 to-black" />

      {/* 🔥 EMBER PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 1, 0],
              y: [-20, -200],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            className="absolute w-1 h-1 bg-red-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* CONTENT WRAPPER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl text-center px-6"
      >
        {/* 🔥 FLAME LOGO */}
        <motion.div
          initial={{ scale: 0.7, rotate: -10, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-10"
        >
          <div className="p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl shadow-red-900/60">
            <Flame className="w-24 h-24 text-red-400 drop-shadow-[0_0_25px_rgba(255,50,50,0.9)]" />
          </div>
        </motion.div>

        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-black text-red-300 drop-shadow-lg tracking-wide">
          WEBSITE SEDANG PERBAIKAN
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold text-red-400 drop-shadow mb-8">
          MAINTENANCE MODE
        </h2>

        {/* POETIC MESSAGE */}
        <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto">
          Ada kode yang dibangun dengan amarah dan cinta,  
          tapi tidak semua dihargai sebagaimana mestinya.  
          <br /><br />
          Ia berdiri utuh, namun tidak dipilih.  
          Maka biarlah ia tidur sejenak,  
          sampai dunia tahu nilai dari yang pernah kami perjuangkan.
        </p>

        {/* FOOTER */}
        <p className="text-xs text-white/40 mt-10">
          © {new Date().getFullYear()} — Api ini tidak padam. Ia hanya menunggu alasan untuk menyala lebih besar.
        </p>
      </motion.div>
    </section>
  );
}
