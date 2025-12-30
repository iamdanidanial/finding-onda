import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import onda1 from "/assets/onda6.jpg";

export default function AboutProfile() {
  return (
    <section
      id="tentang"
      className="py-20 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* FOTO UTAMA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src={onda1}
              alt="Produk ONDA"
              className="w-full h-[420px] object-cover"
            />
          </motion.div>

          {/* DESKRIPSI */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold">
              <MapPin className="w-4 h-4" />
              ONDA Indonesia
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              ONDA
            </h2>

            <p className="text-slate-700 leading-relaxed text-lg">
              ONDA merupakan bagian dari kehidupan sehari-hari masyarakat
              Indonesia melalui solusi sanitasi dan plumbing yang fungsional,
              tahan lama, dan mudah ditemukan. Produk ONDA hadir di rumah,
              bangunan publik, hingga ruang urban, bekerja secara sederhana
              namun konsisten menjaga kenyamanan dan kebutuhan dasar manusia.
            </p>

            <p className="text-slate-700 leading-relaxed">
              Dengan pengalaman panjang dan komitmen terhadap kualitas,
              ONDA dikenal sebagai merek yang mengutamakan keandalan,
              kemudahan penggunaan, serta inovasi yang relevan dengan
              kebutuhan nyata di lapangan.
            </p>

            {/* INFO SINGKAT */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white shadow">
                <div className="text-sm text-slate-500">Fokus</div>
                <div className="font-semibold text-slate-900">
                  Sanitasi & Plumbing
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white shadow">
                <div className="text-sm text-slate-500">Kehadiran</div>
                <div className="font-semibold text-slate-900">
                  Rumah & Ruang Publik
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
