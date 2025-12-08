import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, Tag, Clock } from "lucide-react";
import SectionTitle from "../SectionTitle";
import { galleryData } from "../../data/galleryData";

export default function Gallery() {
  const [selected, setSelected] = useState<any>(null);

  // Pagination
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(galleryData.length / itemsPerPage);
  const paginatedItems = galleryData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Lock scroll when modal is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selected]);

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Gallery Finding ONDA"
          subtitle="Temukan foto ONDA di berbagai lokasi — halte, stasiun, toko, hingga jalan umum."
        />

        {/* GRID LIST */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-12">
  {paginatedItems.map((item, index) => {
    // Badge color generator
    const typeColor =
      item.location_type === "Stasiun"
        ? "bg-red-600"
        : item.location_type === "Halte"
        ? "bg-blue-600"
        : item.location_type === "Pertamina"
        ? "bg-yellow-600"
        : "bg-gray-700";

    return (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08, duration: 0.5 }}
        whileHover={{ scale: 1.03 }}
        className="cursor-pointer group relative rounded-3xl overflow-hidden shadow-xl bg-black"
        onClick={() => setSelected(item)}
      >
        {/* IMAGE POTRAIT */}
        <div className="h-[420px] w-full overflow-hidden relative">
          <img
            src={item.photo_main}
            alt={item.title}
            className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-700"
          />

          {/* GRADIENT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90"></div>

          {/* ABSOLUTE TEXT CONTENT */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            {/* BADGES */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColor} text-white shadow-lg`}
              >
                {item.location_type}
              </span>

              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg flex items-center gap-1">
                <Calendar className="w-3 h-3" /> {item.datetime}
              </span>
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-bold leading-tight drop-shadow-xl line-clamp-2">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-sm text-white/80 mt-1 line-clamp-2 drop-shadow-md">
              {item.description}
            </p>
          </div>
        </div>

        {/* HOVER OVERLAY TEXT */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <span className="text-white font-semibold tracking-wide backdrop-blur-xl px-4 py-2 rounded-full bg-white/20 shadow-lg">
            Klik untuk lihat detail
          </span>
        </div>
      </motion.div>
    );
  })}
</div>


        {/* PAGINATION */}
        <div className="flex justify-center items-center gap-4 mt-14">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-lg disabled:opacity-40"
          >
            Prev
          </button>

          <span className="text-lg font-semibold text-slate-700 dark:text-slate-300">
            {currentPage} / {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-lg disabled:opacity-40"
          >
            Next
          </button>
        </div>

        {/* MODAL DETAIL */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50 px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="
                  bg-white dark:bg-slate-800 
                  rounded-3xl shadow-2xl 
                  max-w-5xl w-full 
                  max-h-[90vh] 
                  overflow-y-auto 
                  p-6 
                  relative
                "
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                {/* CLOSE BUTTON */}
                <button
                  className="absolute top-4 right-4 p-2 bg-white/20 dark:bg-black/20 rounded-full"
                  onClick={() => setSelected(null)}
                >
                  <X className="w-6 h-6 text-red-500" />
                </button>

                {/* FLEX WRAPPER: IMAGE + DETAILS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* PHOTO MAIN – PORTRAIT FRIENDLY */}
                  <div className="flex justify-center">
                    <img
                      src={selected.photo_main}
                      alt={selected.title}
                      className="rounded-xl max-h-[80vh] object-contain"
                    />
                  </div>

                  {/* DETAILS */}
                  <div>
                    <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                      {selected.title}
                    </h2>

                    <p className="flex items-center text-slate-700 dark:text-slate-300 mb-3">
                      <Tag className="w-5 h-5 mr-2 text-blue-500" />
                      <strong className="mr-2">Jenis Lokasi:</strong>
                      {selected.location_type}
                    </p>

                    <p className="flex items-center text-slate-700 dark:text-slate-300 mb-3">
                      <Calendar className="w-5 h-5 mr-2 text-green-500" />
                      <strong className="mr-2">Tanggal:</strong>
                      {selected.date}
                    </p>

                    <p className="flex items-center text-slate-700 dark:text-slate-300 mb-3">
                      <Clock className="w-5 h-5 mr-2 text-yellow-500" />
                      <strong className="mr-2">Waktu:</strong>
                      {selected.time}
                    </p>

                    <p className="flex items-center text-slate-700 dark:text-slate-300 mb-3">
                      <MapPin className="w-5 h-5 mr-2 text-red-500" />
                      <strong className="mr-2">Alamat:</strong>
                      {selected.address}
                    </p>

                    
                    {/* MAPS */}
                    {selected.photo_maps && (
                        <div className="mt-10">
                            <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">
                            Lokasi Maps
                            </h3>
                            <img
                            src={selected.photo_maps}
                            className="rounded-xl w-full max-h-[350px] object-cover"
                            />
                        </div>
                    )}
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
