/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, Smartphone } from "lucide-react";
import SectionTitle from "../SectionTitle";
import { galleryData } from "../../data/galleryData";

/* =====================
   BADGE COLOR HANDLER
===================== */
const typeColor = (type?: string) => {
  switch (type) {
    case "Stasiun Blueline":
      return "bg-blue-600 text-white";
    case "Stasiun Redline":
      return "bg-red-600 text-white";
    case "Stasiun Greenline":
      return "bg-green-600 text-white";
    case "Stasiun Brownline":
      return "bg-amber-900 text-white";
    case "Stasiun Pinkline":
      return "bg-pink-600 text-white";
    case "Kantor":
      return "bg-indigo-600 text-white";
    case "Masjid":
      return "bg-purple-600 text-white";
    case "Rumah":
      return "bg-yellow-600 text-white";
    case "Pertamina":
      return "bg-cyan-600 text-white";
    default:
      return "bg-slate-600 text-white";
  }
};

/* =====================
   DATA SUMMARY HELPERS
===================== */
const summarizeByType = (data: any[]) =>
  data.reduce((acc: Record<string, number>, item) => {
    const type = item.location?.place?.type || "Unknown";
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

const summarizeByProvince = (data: any[]) =>
  data.reduce((acc: Record<string, number>, item) => {
    const prov = item.location?.provinsi || "Unknown";
    acc[prov] = (acc[prov] || 0) + 1;
    return acc;
  }, {});

const summarizeByKabupaten = (data: any[]) =>
  data.reduce((acc: Record<string, number>, item) => {
    const kab = item.location?.kabupaten || "Unknown";
    acc[kab] = (acc[kab] || 0) + 1;
    return acc;
  }, {});


/* =====================
   PAGINATION GENERATOR
===================== */
const getPaginationRange = (
  current: number,
  total: number,
  range = 5
) => {
  const pages: (number | string)[] = [];
  const half = Math.floor(range / 2);

  let start = Math.max(1, current - half);
  const end = Math.min(total, start + range - 1);

  if (end - start < range - 1) {
    start = Math.max(1, end - range + 1);
  }

  if (start > 1) {
    pages.push(1);
    if (start > 2) pages.push("...");
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (end < total) {
    if (end < total - 1) pages.push("...");
    pages.push(total);
  }

  return pages;
};

export default function Gallery() {
  const [selected, setSelected] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 16;
  const totalPages = Math.ceil(galleryData.length / itemsPerPage);

  const paginatedItems = galleryData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const pagination = getPaginationRange(currentPage, totalPages);

  const summaryType = summarizeByType(galleryData);
  const summaryProvince = summarizeByProvince(galleryData);
  const summaryKabupaten = summarizeByKabupaten(galleryData);
  


  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "auto";
  }, [selected]);

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">

        <SectionTitle
          title="Gallery Finding ONDA"
          subtitle="Foto ONDA di berbagai lokasi umum — valid, asli, dan terdokumentasi."
        />

        {/* ================= MODERN SUMMARY ================= */}
<div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">

  {/* TYPE CARD */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative overflow-hidden rounded-3xl p-6 
               bg-white/80 dark:bg-slate-800/80 
               backdrop-blur-xl shadow-xl border border-white/20"
  >
    <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />

    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
      🏷️ Kategori Lokasi
    </h3>

    <div className="space-y-3 max-h-96 overflow-y-auto pr-2 scrollbar-thin">
      {Object.entries(summaryType).map(([key, val]) => (
        <div
          key={key}
          className="flex items-center justify-between p-3 rounded-xl 
                     bg-slate-100 dark:bg-slate-700"
        >
          <span className="text-sm font-medium">{key}</span>
          <span className="px-3 py-1 text-sm font-bold rounded-full bg-blue-600 text-white">
            {val}
          </span>
        </div>
      ))}
    </div>
  </motion.div>

  {/* PROVINSI CARD */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.1 }}
    className="relative overflow-hidden rounded-3xl p-6 
               bg-white/80 dark:bg-slate-800/80 
               backdrop-blur-xl shadow-xl border border-white/20"
  >
    <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl" />

    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
      🗺️ Provinsi
    </h3>

    <div className="space-y-3 max-h-96 overflow-y-auto pr-2 scrollbar-thin">
      {Object.entries(summaryProvince).map(([key, val]) => (
        <div
          key={key}
          className="flex items-center justify-between p-3 rounded-xl 
                     bg-slate-100 dark:bg-slate-700"
        >
          <span className="text-sm font-medium">{key}</span>
          <span className="px-3 py-1 text-sm font-bold rounded-full bg-emerald-600 text-white">
            {val}
          </span>
        </div>
      ))}
    </div>
  </motion.div>

  {/* KABUPATEN CARD */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2 }}
    className="relative overflow-hidden rounded-3xl p-6 
               bg-white/80 dark:bg-slate-800/80 
               backdrop-blur-xl shadow-xl border border-white/20"
  >
    <div className="absolute -top-12 -right-12 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />

    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
      🏙️ Kabupaten / Kota
    </h3>

    <div className="space-y-3 max-h-96 overflow-y-auto pr-2 scrollbar-thin">
      {Object.entries(summaryKabupaten).map(([key, val]) => (
        <div
          key={key}
          className="flex items-center justify-between p-3 rounded-xl 
                     bg-slate-100 dark:bg-slate-700"
        >
          <span className="text-sm font-medium">{key}</span>
          <span className="px-3 py-1 text-sm font-bold rounded-full bg-purple-600 text-white">
            {val}
          </span>
        </div>
      ))}
    </div>
  </motion.div>
</div>


        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-12">
          {paginatedItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelected(item)}
              className="cursor-pointer relative rounded-3xl overflow-hidden shadow-xl bg-black group"
            >
              <div className="h-[420px] relative">
                <img
                  src={new URL(item.gallery.photo, import.meta.url).href}
                  alt={item.gallery.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-2 ${typeColor(
                      item.location?.place.type
                    )}`}
                  >
                    {item.location?.place.type}
                  </span>

                  <h3 className="text-xl font-bold">
                    {item.gallery.title}
                  </h3>

                  <p className="text-sm text-white/80">
                    {item.location?.kecamatan}, {item.location?.kabupaten}
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="px-4 py-2 rounded-full bg-white/20 text-white backdrop-blur">
                  Lihat Detail
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= PAGINATION ================= */}
        <div className="flex justify-center items-center gap-2 mt-14 flex-wrap">
          {pagination.map((page, i) =>
            page === "..." ? (
              <span key={i} className="px-2 text-slate-400">…</span>
            ) : (
              <button
                key={i}
                onClick={() => setCurrentPage(page as number)}
                className={`w-10 h-10 rounded-full font-semibold transition
                  ${
                    currentPage === page
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-slate-200 dark:bg-slate-700 hover:bg-blue-500 hover:text-white"
                  }`}
              >
                {page}
              </button>
            )
          )}
        </div>

        {/* ================= MODAL DETAIL ================= */}
        <AnimatePresence>
  {selected && (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white dark:bg-slate-800 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        initial={{ scale: 0.9, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 40 }}
      >
        {/* CLOSE */}
        <button
          onClick={() => setSelected(null)}
          className="absolute top-5 right-5 z-10 bg-white/80 dark:bg-slate-700 p-2 rounded-full shadow"
        >
          <X className="text-red-500" />
        </button>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* IMAGE */}
          <div className="relative h-[85vh] w-full overflow-hidden bg-black">
            {/* BACKGROUND BLUR */}
            <img
              src={new URL(selected.gallery.photo, import.meta.url).href}
              className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-40"
              aria-hidden
            />

            {/* IMAGE UTAMA */}
            <img
              src={new URL(selected.gallery.photo, import.meta.url).href}
              alt={selected.gallery.title}
              className="relative z-10 w-full h-full object-contain"
            />
          </div>

          {/* DETAIL */}
          <div className="p-8 space-y-8">
            {/* TITLE */}
            <div>
              <span className="inline-block mb-2 px-3 py-1 text-xs rounded-full bg-blue-600 text-white">
                {selected.location.place.type}
              </span>

              <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
                {selected.gallery.title}
              </h2>
            </div>

            {/* LOCATION */}
            <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl p-5">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <MapPin className="text-red-500" />
                Lokasi Lengkap
              </h3>

              <p className="text-sm leading-relaxed">
                {selected.location.full_address}
              </p>
              <p className="text-sm leading-relaxed">
                Desa <strong>{selected.location.desa}</strong>, Kecamatan{" "}
                <strong>{selected.location.kecamatan}</strong>
                <br />
                Kabupaten <strong>{selected.location.kabupaten}</strong>, Provinsi{" "}
                <strong>{selected.location.provinsi}</strong>
                <br />
                Kode Pos {selected.location.kode_pos},{" "}
                {selected.location.negara}
              </p>

              <a
                href={selected.location.maps.google}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-sm text-blue-600 font-semibold hover:underline"
              >
                📍 Buka di Google Maps
              </a>
            </div>

            {/* TIME */}
            <div className="flex items-center gap-3">
              <Calendar className="text-green-500" />
              <div>
                <p className="text-sm text-slate-500">Waktu Pengambilan</p>
                <p className="font-semibold">
                  {new Date(selected.exif.taken_at).toLocaleString("id-ID")}
                </p>
              </div>
            </div>

            {/* EXIF */}
            <div className="border border-dashed border-slate-300 dark:border-slate-600 rounded-2xl p-5">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Smartphone className="text-blue-500" />
                Metadata Kamera (EXIF)
              </h3>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-slate-500">Perangkat</p>
                  <p className="font-semibold">
                    {selected.exif.device.brand}{" "}
                    {selected.exif.device.model}
                  </p>
                </div>

                <div>
                  <p className="text-slate-500">ISO</p>
                  <p className="font-semibold">
                    {selected.exif.camera.iso}
                  </p>
                </div>

                <div>
                  <p className="text-slate-500">Aperture</p>
                  <p className="font-semibold">
                    {selected.exif.camera.aperture}
                  </p>
                </div>

                <div>
                  <p className="text-slate-500">Shutter</p>
                  <p className="font-semibold">
                    {selected.exif.camera.shutter_speed}
                  </p>
                </div>

                <div>
                  <p className="text-slate-500">Focal Length</p>
                  <p className="font-semibold">
                    {selected.exif.camera.focal_length_35mm}mm
                  </p>
                </div>

                <div>
                  <p className="text-slate-500">Koordinat</p>
                  <p className="font-semibold text-xs">
                    {selected.location.latitude},{" "}
                    {selected.location.longitude}
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-500 mt-4">
                * Metadata diambil otomatis dari kamera (GPS & EXIF) sebagai
                bukti keaslian foto.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      </div>
    </section>
  );
}
