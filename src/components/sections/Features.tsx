import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

export default function Features() {
  // Background images for ONDA theme
  const bgImages = [
    "https://images.pexels.com/photos/37347/pipe-plumber-plumb.jpg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/3964343/pexels-photo-3964343.jpeg?auto=compress&cs=tinysrgb&w=1920",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  // 4 langkah ikut giveaway
  const steps = [
    {
      id: 1,
      icon: "Camera",
      title: "Temukan Produk ONDA",
      description:
        "Cari produk ONDA di rumah, toko, pasar, atau tempat umum apa pun.",
    },
    {
      id: 2,
      icon: "Image",
      title: "Foto atau Video Produk ONDA",
      description:
        "Ambil foto/video produk ONDA yang kamu temui dengan kreatif!",
    },
    {
      id: 3,
      icon: "Instagram",
      title: "Upload Ke Instagram",
      description:
        "Tag @onda.indonesia & gunakan hashtag #FindingONDA di caption.",
    },
    {
      id: 4,
      icon: "CheckCircle",
      title: "Follow & Komen",
      description:
        "Follow seluruh akun sosial media ONDA & komen di posting utama.",
    },
  ];

  return (
    <section id="cara-ikut" className="relative py-32 text-white overflow-hidden">

      {/* Background image slideshow */}
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="absolute inset-0 bg-cover bg-center scale-105 blur-[2px]"
        style={{ backgroundImage: `url(${bgImages[index]})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/60 to-black/85" />

      {/* CONTENT */}
      <div className="relative container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 px-5 py-1 rounded-full text-sm tracking-wide backdrop-blur-md border border-white/20 inline-block"
          >
            🎉 Cara Ikut Giveaway
          </motion.span>

          <h2 className="text-5xl font-extrabold mt-4 leading-tight drop-shadow-xl">
            Ikuti Langkahnya &  
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">
              Menangkan Hadiahnya!
            </span>
          </h2>

          <p className="text-white/90 mt-6 max-w-xl leading-relaxed text-lg">
            Gabung dalam event besar <span className="font-bold text-yellow-300">Finding ONDA</span>! 
            Temukan produk ONDA di mana saja, upload foto/video, dan menangkan 
            <strong> iPhone 13, Speaker ONDA, hingga Kulkas 1 Pintu!</strong>
          </p>

          {/* IMAGE */}
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            src="https://res.cloudinary.com/dummyimage/onda-banner.jpg"
            className="rounded-3xl w-full h-64 object-cover mt-10 shadow-2xl border border-white/10"
            alt="ONDA Giveaway"
          />
        </div>

        {/* RIGHT SIDE — STEPS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {steps.map((step) => {
            const IconComponent =
              Icons[step.icon as keyof typeof Icons] as React.ElementType;

            return (
              <motion.div
                key={step.id}
                variants={item}
                whileHover={{ x: 8 }}
                className="flex items-start gap-5 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                {/* ICON */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center shadow-xl shadow-black/30">
                  {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-2xl font-bold tracking-wide">{step.title}</h3>
                  <p className="text-white/85 text-lg">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
