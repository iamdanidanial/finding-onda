import { motion } from "framer-motion";
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";

interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  link: string;
  username: string;
  avatar: string;
}

const instagramPosts: InstagramPost[] = [
   {
    id: "6",
    image: "/assets/coverpink.png",
    caption: "Penelusuran di Stasiun Ancol dan Tanjung Priok menunjukkan ketersediaan produk ONDA di seluruh titik. Jalur Pink Line tercatat memiliki tingkat kehadiran ONDA 100%.",
    link: "https://www.instagram.com/p/DS5fgBcE84r/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    username: "iamdanidanial",
    avatar: "/assets/profile.jpg"
  },
   {
    id: "5",
    image: "/assets/coverother.png",
   caption: "Saya menemukan produk ONDA tidak hanya di Stasiun Commuter Line, tetapi juga di masjid, kantor, hotel, dan ruang publik lainnya. Semua dokumentasi diambil langsung di lokasi sebagai bagian dari penelusuran saya terhadap kehadiran ONDA di kehidupan sehari-hari.",
    link: "https://www.instagram.com/p/DS5fHIRE445/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    username: "iamdanidanial",
    avatar: "/assets/profile.jpg"
  },
   {
    id: "4",
    image: "/assets/coverbrown.png",
    caption: "Seluruh stasiun di Jalur Coklat terkonfirmasi memiliki produk ONDA. Tidak ditemukan stasiun tanpa kehadiran ONDA pada jalur ini.",
    link: "https://www.instagram.com/p/DS5e4LUEze_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    username: "iamdanidanial",
    avatar: "/assets/profile.jpg"
  },
  {
    id: "3",
    image: "/assets/coverblue.png",
    caption: "Produk ONDA teridentifikasi di sejumlah Stasiun KRL Jalur Biru. Temuan ini memperlihatkan distribusi ONDA yang merata di jalur dengan volume penumpang padat.",
    link: "https://www.instagram.com/p/DS5ewY6Eyje/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    username: "iamdanidanial",
    avatar: "/assets/profile.jpg"
  },
  {
    id: "2",
    image: "/assets/coverred.png",
    caption: "Produk ONDA ditemukan di area Stasiun KRL Jalur Merah. Dokumentasi diambil langsung di lokasi stasiun, menunjukkan bahwa ONDA hadir dan digunakan di ruang publik dengan aktivitas tinggi.",
    link: "https://www.instagram.com/p/DS5eUrnE2nj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    username: "iamdanidanial",
    avatar: "/assets/profile.jpg"
  },
  {
    id: "1",
    image: "/assets/covergreen.png",
    caption: "Penelusuran di Stasiun KRL Jalur Hijau menunjukkan sebagian besar titik sudah terdapat produk ONDA. Kehadiran ONDA terlihat konsisten di area fasilitas umum stasiun.",
    link: "https://www.instagram.com/p/DS5cuiYEwl4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    username: "iamdanidanial",
    avatar: "/assets/profile.jpg"
  },
];

export default function InstagramSection() {
  return (
    <section id="instagram" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">

        {/* SECTION TITLE */}
        <div className="text-center mb-16">
          <span className="px-4 py-1 text-sm rounded-full bg-blue-100 text-blue-600">
            Finding ONDA
          </span>

          <h2 className="text-4xl font-bold mt-4 leading-tight">
            Pencarian ONDA di
            <span className="text-blue-600 ml-2">Stasiun KRL</span>
          </h2>

          <p className="mt-6 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Dokumentasi pencarian produk ONDA yang dilakukan langsung
            di berbagai stasiun Commuter Line sebagai bentuk observasi nyata
            di ruang publik.
          </p>
        </div>

        {/* INSTAGRAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 
              shadow-md hover:shadow-xl hover:-translate-y-1 transition-all bg-white dark:bg-slate-800"
            >

              {/* TOP BAR */}
              <div className="flex items-center gap-3 p-4">
                <img
                  src={post.avatar}
                  alt={post.username}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                  {post.username}
                </span>
              </div>

            <div className="aspect-[4/5] w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover"
              />
            </div>


              {/* ACTION ICONS */}
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex gap-4">
                  <Heart className="w-5 h-5" />
                  <MessageCircle className="w-5 h-5" />
                  <Send className="w-5 h-5" />
                </div>
                <Bookmark className="w-5 h-5" />
              </div>

              {/* CAPTION */}
              <div className="px-4 pb-4">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <span className="font-semibold mr-1">{post.username}</span>
                  {post.caption}
                </p>
              </div>

            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
