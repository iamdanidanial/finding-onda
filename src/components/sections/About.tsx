import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, MapPin, Info } from "lucide-react";

/**
 * AboutCombined.tsx
 * - Gabungan: Cara Ikut / Tentang Produk ONDA / Lokasi Produk ONDA
 * - TailwindCSS + Framer Motion
 *
 * Cara pakai: import dan letakkan <AboutCombined /> di page kamu.
 */

type GalleryItem = {
  id: number;
  image: string;
  description: string;
  location: string;
  date: string;
  instagram?: string;
  postUrl?: string;
};

const sampleImages: GalleryItem[] = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Fitting ONDA ditemukan di toko bangunan lokal.",
    location: "Toko Bangunan - Jakarta",
    date: "2025-11-28",
    instagram: "@contoh_user",
    postUrl: "#",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/3964343/pexels-photo-3964343.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Shower ONDA di apartemen umum.",
    location: "Apartemen - Surabaya",
    date: "2025-12-01",
    instagram: "@contoh_user2",
    postUrl: "#",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/37347/pipe-plumber-plumb.jpg?auto=compress&cs=tinysrgb&w=1200",
    description: "Selang ONDA di gudang toko.",
    location: "Gudang Toko - Bandung",
    date: "2025-11-30",
    instagram: "@contoh_user3",
    postUrl: "#",
  },
];

export default function AboutCombined() {
  const tabs = [
    { id: "cara", title: "Cara Ikut", icon: Camera },
    { id: "produk", title: "Tentang Produk ONDA", icon: Info },
    { id: "lokasi", title: "Lokasi & Tempat", icon: MapPin },
  ];
  const [active, setActive] = useState<string>("cara");
  const [preview, setPreview] = useState<GalleryItem | null>(null);

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } };
  const item = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } };

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: IMAGE GRID */}
          <div className="grid grid-cols-2 gap-4">
            {sampleImages.map((g) => (
              <motion.button
                key={g.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setPreview(g)}
                className="rounded-2xl overflow-hidden shadow-xl focus:outline-none border-2 border-transparent hover:border-blue-200"
              >
                <img
                  src={g.image}
                  alt={g.description}
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
                <div className="px-3 py-2 bg-white/60 backdrop-blur-sm">
                  <div className="text-sm font-semibold text-slate-900">{g.location}</div>
                  <div className="text-xs text-slate-600">{g.date}</div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* RIGHT: TABS & CONTENT */}
          <div>
            {/* Tabs */}
            <div className="flex gap-3 mb-6">
              {tabs.map((t) => {
                const Icon = t.icon;
                const activeClass =
                  active === t.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-slate-700 border border-slate-100";
                return (
                  <button
                    key={t.id}
                    onClick={() => setActive(t.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-2xl ${activeClass} transition-all`}
                    aria-pressed={active === t.id}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{t.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Animated content area */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={container}
              className="bg-white rounded-2xl p-6 shadow-xl"
            >
              <AnimatePresence mode="wait">
                {active === "cara" && (
                  <motion.div key="cara" variants={item} exit={{ opacity: 0, y: 6 }} className="space-y-4">
                    <div className="text-sm text-blue-600 font-semibold">🎁 Cara Ikut Giveaway</div>
                    <h3 className="text-2xl font-bold text-slate-900">Langkah Mudah untuk Menang</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-slate-700">
                      <li>Cari produk ONDA di sekitar kamu (rumah, toko, halte, stasiun, dll).</li>
                      <li>Ambil foto atau video produk ONDA.</li>
                      <li>Upload ke Instagram, tag <span className="font-semibold">@onda.indonesia</span> dan pakai hashtag <span className="font-semibold">#FindingONDA</span>.</li>
                      <li>Follow semua akun ONDA (Instagram, Facebook, TikTok, YouTube).</li>
                      <li>Komen di postingan resmi giveaway agar entry kamu tervalidasi.</li>
                    </ol>

                    <div className="flex items-center gap-6 mt-4">
                      <div>
                        <div className="text-xs text-slate-500">Periode</div>
                        <div className="font-semibold">25 Nov 2025 — 31 Des 2025</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500">Hadiah Utama</div>
                        <div className="font-semibold">iPhone 13 • Speaker ONDA • Kulkas 1 Pintu</div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {active === "produk" && (
                  <motion.div key="produk" variants={item} exit={{ opacity: 0, y: 6 }} className="space-y-4">
                    <div className="text-sm text-blue-600 font-semibold">🔧 Tentang Produk ONDA</div>
                    <h3 className="text-2xl font-bold text-slate-900">Kenapa Pilih ONDA?</h3>
                    <p className="text-slate-700">
                      ONDA dikenal karena kualitas material, daya tahan, dan jaringan distribusi yang luas. Produk yang
                      sering ditemukan: shower, kran, selang, valve, water filter, dan sparepart. Semua produk mudah
                      ditemukan di toko bangunan, distributor, dan beberapa retailer online/offline.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <div className="p-3 rounded-xl bg-blue-50">
                        <div className="text-sm text-slate-600">Kualitas</div>
                        <div className="font-semibold">Material tahan lama</div>
                      </div>
                      <div className="p-3 rounded-xl bg-blue-50">
                        <div className="text-sm text-slate-600">Jaringan</div>
                        <div className="font-semibold">Toko & distributor nasional</div>
                      </div>
                      <div className="p-3 rounded-xl bg-blue-50">
                        <div className="text-sm text-slate-600">Garansi</div>
                        <div className="font-semibold">Support purna jual</div>
                      </div>
                      <div className="p-3 rounded-xl bg-blue-50">
                        <div className="text-sm text-slate-600">Varian</div>
                        <div className="font-semibold">Shower, Kran, Selang, Valve</div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {active === "lokasi" && (
                  <motion.div key="lokasi" variants={item} exit={{ opacity: 0, y: 6 }} className="space-y-4">
                    <div className="text-sm text-blue-600 font-semibold">📍 Lokasi & Tempat Mencari</div>
                    <h3 className="text-2xl font-bold text-slate-900">Tempat-Tempat yang Sering Menyimpan ONDA</h3>

                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                        Toko bangunan / hardware store — paling sering ditemukan.
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                        Toko perlengkapan mandi & plumbing.
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                        Rumah / apartemen (unit shower, kran).
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                        Area publik terdekat (gedung umum, halte, stasiun) — kadang ada unit ONDA.
                      </li>
                    </ul>

                    <div className="mt-4">
                      <div className="text-sm text-slate-500">Tip</div>
                      <div className="text-slate-700">Semakin unik & kreatif lokasi foto kamu (mis. ONDA di landmark lokal), semakin besar peluang terlihat & dinilai tinggi oleh juri.</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* CTA Footer inside the box */}
              <motion.div
                className="mt-6 pt-4 border-t flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div>
                  <div className="text-sm text-slate-500">Masih bingung?</div>
                  <div className="text-sm text-slate-700">Klik gambar di kiri untuk lihat contoh submission.</div>
                </div>

                <div className="flex gap-3">
                  <a
                    href="#gallery"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-blue-600 text-white shadow"
                  >
                    Lihat Semua Gallery
                  </a>

                  <a
                    href="https://instagram.com/onda.indonesia"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-slate-200 bg-white text-slate-700"
                  >
                    Follow @onda.indonesia
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* PREVIEW MODAL */}
      <AnimatePresence>
        {preview && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                <img src={preview.image} alt={preview.description} className="w-full h-72 object-cover md:col-span-1" />
                <div className="p-6 md:col-span-2">
                  <div className="text-sm text-slate-500">{preview.location} • {preview.date}</div>
                  <h4 className="text-xl font-bold text-slate-900 mt-2">{preview.instagram ?? "Submission"}</h4>
                  <p className="text-slate-700 mt-3">{preview.description}</p>

                  <div className="mt-6 flex gap-3">
                    <a href={preview.postUrl ?? "#"} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-2xl bg-blue-600 text-white">
                      Lihat Post IG
                    </a>
                    <button onClick={() => setPreview(null)} className="px-4 py-2 rounded-2xl border">Tutup</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
