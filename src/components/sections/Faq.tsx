import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpen(open === id ? null : id);
  };

  const faqs = [
    { id: "1", question: "Apakah saya bisa menentukan itinerary sendiri?", answer: "Tentu! Anda bisa menentukan itinerary sesuai keinginan. Driver kami fleksibel dan siap menyesuaikan destinasi, jam keberangkatan, hingga durasi perjalanan." },
    { id: "2", question: "Berapa harga untuk jasa private driver di Bali?", answer: "Harga mulai dari $40–$75 per hari, sudah termasuk mobil, BBM, dan driver profesional." },
    { id: "3", question: "Apakah layanan sudah termasuk BBM dan parkir?", answer: "Ya, sudah termasuk BBM. Biaya parkir dan tiket masuk ditanggung pelanggan." },
    { id: "4", question: "Apakah driver bisa menjadi fotografer?", answer: "Ya, sebagian driver kami sangat jago mengambil foto aesthetic di spot wisata." },
    { id: "5", question: "Jenis mobil apa yang digunakan?", answer: "Kami menyediakan Avanza, Ertiga, Xenia, dan Innova — semua mobil bersih, wangi, dan nyaman." },
    { id: "6", question: "Bagaimana cara memesan?", answer: "Pesan melalui WhatsApp, website booking form, atau Instagram official kami." },
    { id: "7", question: "Apakah perjalanan bisa dibatalkan?", answer: "Bisa! Pembatalan maksimal H-1 tanpa biaya tambahan." }
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300">

      <div className="relative container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT SIDE INTRO */}
        <div className="flex flex-col justify-center z-10">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-600 dark:text-orange-400 font-semibold tracking-wide text-sm"
          >
            ❓ Frequently Asked Questions
          </motion.span>

          <h1 className="text-5xl font-bold leading-tight mt-3 text-slate-900 dark:text-white">
            Jawaban untuk Semua{" "}
            <span className="bg-gradient-to-r from-orange-600 to-amber-500 text-transparent bg-clip-text">
              Pertanyaan Anda
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-lg mt-5 max-w-md">
            Pertanyaan umum seputar layanan Private Driver & Tour Bali.
            Tim kami siap membantu Anda kapan pun — 24 jam sehari.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-12 h-72 w-full rounded-3xl overflow-hidden shadow-xl relative"
          >
            <img
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>

        {/* RIGHT SIDE FAQ */}
        <div className="space-y-5 z-10">

          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              onClick={() => toggle(faq.id)}
              className="
                bg-white/80 dark:bg-slate-800/80
                backdrop-blur-xl
                border border-gray-200 dark:border-slate-700
                rounded-2xl shadow-lg
                px-6 py-5 cursor-pointer hover:shadow-xl transition
              "
            >
              <div className="flex justify-between items-center gap-4">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {faq.question}
                </h2>
                <ChevronDown
                  className={`w-6 h-6 text-gray-600 dark:text-gray-300 transition-transform ${
                    open === faq.id ? "rotate-180" : ""
                  }`}
                />
              </div>

              <AnimatePresence>
                {open === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          ))}

        </div>
      </div>

      {/* Optional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/20 to-white pointer-events-none dark:from-slate-900 dark:via-slate-800/20 dark:to-slate-900 z-0" />

    </section>
  );
}
