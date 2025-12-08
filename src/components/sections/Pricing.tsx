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
    id: "1",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    caption: "hello good afternoon from Bali 🌴",
    link: "https://www.instagram.com/",
    username: "mata.baldriver",
    avatar: "https://i.pravatar.cc/150?img=12"
  },
  {
    id: "2",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    caption: "Banana boat with lovely guests! 🚤",
    link: "https://www.instagram.com/",
    username: "mata.baldriver",
    avatar: "https://i.pravatar.cc/150?img=32"
  },
  {
    id: "3",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    caption: "Flying high in Bali swing! 🌺",
    link: "https://www.instagram.com/",
    username: "mata.baldriver",
    avatar: "https://i.pravatar.cc/150?img=45"
  }
];


export default function InstagramSection() {
  
  return (
    <section id="instagram" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">

        {/* SECTION TITLE */}
        <div className="text-center mb-16">
          <span className="px-4 py-1 text-sm rounded-full bg-orange-100 text-orange-600">
            Mengapa Memilih Kami
          </span>

          <h2 className="text-4xl font-bold mt-4 leading-tight">
            <span className="text-orange-600">Pengalaman</span>
            <span className="ml-2">Bepergian Seperti Belum Pernah</span>
            <br />
            <span>Sebelumnya</span>
          </h2>

          <p className="mt-6 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Di Mata Bali Private Driver, kami lebih dari sekadar layanan transportasi —
            kami adalah penghubung Anda ke jantung dan jiwa Bali.
          </p>
        </div>

        {/* 3 INFO BOX */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">

          <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-slate-800 border border-orange-200">
            <h3 className="font-semibold text-xl text-orange-700 mb-3">Andal & Ramah</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Tepat waktu, profesional, dan selalu tersenyum — kami memperlakukan
              setiap tamu seperti keluarga.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-slate-800 border border-orange-200">
            <h3 className="font-semibold text-xl text-orange-700 mb-3">
              Pengalaman Yang Tak Terlupakan
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Baik itu pertama kali Anda di Bali atau kesekian kalinya, kami
              berupaya keras untuk memastikan pengalaman Anda unik, personal,
              dan benar-benar tak terlupakan.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-slate-800 border border-orange-200">
            <h3 className="font-semibold text-xl text-orange-700 mb-3">Wawasan Lokal</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Pengemudi kami lahir dan besar di Bali — kami tahu tempat terbaik
              untuk makan, berkunjung, dan tempat-tempat unik yang tidak akan Anda
              temukan di buku panduan.
            </p>
          </div>
        </div>

       <section className="bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {instagramPosts.map((post, index) => (
          <motion.a
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
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

            {/* IMAGE */}
            <img
              src={post.image}
              className="w-full h-80 object-cover"
              alt={post.caption}
            />

            {/* ACTION ICONS */}
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex gap-4">
                <Heart className="w-6 h-6 text-slate-700 dark:text-slate-200" />
                <MessageCircle className="w-6 h-6 text-slate-700 dark:text-slate-200" />
                <Send className="w-6 h-6 text-slate-700 dark:text-slate-200" />
              </div>
              <Bookmark className="w-6 h-6 text-slate-700 dark:text-slate-200" />
            </div>

            {/* CAPTION */}
            <div className="px-4 pb-4">
              <p className="text-sm">
                <span className="font-semibold">{post.username}</span>{" "}
                <span className="text-slate-700 dark:text-slate-300">{post.caption}</span>
              </p>
            </div>

          </motion.a>
        ))}

      </div>
    </section>
      </div>
    </section>
  );
}
