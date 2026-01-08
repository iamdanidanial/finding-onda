import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, X } from "lucide-react";

type Story = {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  excerpt: string;
  content: string;
};

const stories: Story[] = [
  {
    id: 1,
    title: "Awal yang Tidak Direncanakan",
    date: "6 Desember 2025",
    location: "Ciherang, Cianjur – Bogor",
    image: "/assets/banner3.png",
    excerpt:
      "Semua perjalanan besar sering kali dimulai dari hal yang paling sederhana.",
    content:
      "Hari itu saya tidak sedang merencanakan pencarian apa pun. Saya hanya berkunjung ke rumah seorang teman di sebuah villa yang terletak di kawasan Ciherang, Cianjur. Suasananya tenang, jauh dari hiruk pikuk kota, dan awalnya tidak ada hal yang terasa istimewa. Namun tanpa disengaja, perhatian saya tertuju pada keberadaan tiga produk ONDA yang ada di rumah tersebut. Awalnya terasa biasa saja, tetapi entah mengapa ada rasa penasaran yang tertinggal. Dalam perjalanan pulang menuju Bogor, saya singgah di SPBU Pertamina 34.16108. Di tempat itulah saya kembali menemukan satu produk ONDA. Dua peristiwa kecil yang terjadi di hari yang sama itu perlahan membentuk satu kesadaran baru. Saya belum menyadarinya saat itu, tetapi hari tersebut menjadi titik awal dari sebuah perjalanan panjang yang akan membawa saya melintasi banyak ruang, waktu, dan pemaknaan."
  },
  {
    id: 2,
    title: "Menyusuri Red Line dari Istiqlal ke Citayam",
    date: "7 Desember 2025",
    location: "Jakarta – Citayam",
    image: "/assets/banner1.png",
    excerpt:
      "Pencarian ini dimulai ketika saya memutuskan untuk lebih sadar terhadap sekitar.",
    content:
      "Pada tanggal 7 Desember 2025, saya memutuskan bahwa apa yang terjadi sehari sebelumnya bukan lagi sekadar kebetulan. Perjalanan dimulai dari Masjid Istiqlal, tempat saya kembali menemukan satu produk ONDA. Dari sana, saya berjalan menuju Stasiun Juanda, titik awal penyusuran jalur Red Line. Tepat pukul 14.00, perjalanan dimulai, membawa saya melewati stasiun demi stasiun: Juanda, Gondangdia, Cikini, Manggarai, Tebet, Cawang, hingga Pasar Minggu. Kereta terus melaju melewati Lenteng Agung, Universitas Indonesia, Depok, hingga akhirnya tiba di Citayam. Setiap stasiun terasa seperti satu bab kecil dalam cerita besar yang sedang terbentuk. Saya mulai menyadari bahwa ONDA hadir di ruang-ruang publik yang selama ini hanya saya lewati tanpa benar-benar saya perhatikan. Hari itu mengajarkan bahwa ketika kita melihat dengan lebih sadar, perjalanan yang biasa pun bisa berubah menjadi pengalaman yang bermakna."
  },
  {
    id: 3,
    title: "Menutup Red Line di Tengah Tugas",
    date: "8 Desember 2025",
    location: "Bogor – Jakarta Kota",
    image: "/assets/banner2.png",
    excerpt:
      "Kadang pencarian terbaik justru terjadi di sela-sela kewajiban yang kita lakukan.",
    content:
      "Keesokan harinya, perjalanan berlanjut bersamaan dengan tugas kantor ke Bogor. Tanpa mengubah rutinitas utama, saya tetap membawa kesadaran baru yang mulai terbentuk sejak hari sebelumnya. Pukul 17.12, saya memulai perjalanan dari Stasiun Bogor. Kereta membawa saya menuju Cilebut dan Bojong Gede, sebelum akhirnya masuk ke kawasan Jakarta. Perjalanan berlanjut hingga Sawah Besar, Mangga Besar, Jayakarta, dan berakhir di Stasiun Jakarta Kota. Di titik inilah saya menyadari bahwa jalur Red Line telah saya susuri sepenuhnya. Tepat pukul 20.00, pencarian di jalur ini resmi selesai. Yang muncul bukanlah rasa puas, melainkan dorongan untuk melanjutkan. Saya mulai memahami bahwa perjalanan ini tidak lagi tentang garis di peta, melainkan tentang proses dan kesadaran yang tumbuh di sepanjang jalan."
  },
  {
    id: 4,
    title: "Blue Line, Brown Line, dan Malam yang Panjang",
    date: "13 Desember 2025",
    location: "Jakarta – Tangerang – Cikarang",
    image: "/assets/banner4.png",
    excerpt:
      "Tidak semua perjalanan berjalan lurus, beberapa harus berhenti lalu dilanjutkan.",
    content:
      "Sejak pagi hari, saya memulai pencarian di jalur Blue Line dengan semangat yang masih penuh. Stasiun Kemayoran, Rajawali, Kampung Bandan, Angke, dan Duri menjadi pembuka hari itu. Perjalanan kemudian berlanjut ke jalur Brown Line menuju Tangerang, dimulai dari Grogol hingga stasiun akhir. Namun sekitar pukul 14.00, perjalanan harus terhenti karena kewajiban pekerjaan berupa meeting kantor. Setelah semua selesai, keinginan untuk melanjutkan kembali muncul. Malam itu saya kembali menyusuri Blue Line dari Gang Sentiong hingga Cikarang. Saya tiba di kost pukul 23.45 dengan tubuh yang lelah, tetapi pikiran terasa penuh. Hari itu mengajarkan bahwa konsistensi sering kali diuji oleh kelelahan, dan melanjutkan perjalanan adalah pilihan yang lahir dari komitmen, bukan sekadar energi."
  },
  {
    id: 5,
    title: "Jalur Panjang Green Line",
    date: "14 Desember 2025",
    location: "Tanah Abang – Rangkasbitung",
    image: "/assets/banner5.png",
    excerpt:
      "Perjalanan panjang memberi ruang untuk refleksi yang lebih dalam.",
    content:
      "Pukul enam pagi saya sudah berangkat dari kost, membawa niat untuk menyusuri jalur yang lebih panjang. Green Line membawa saya dari Tanah Abang menuju Rangkasbitung, melewati stasiun demi stasiun seperti Palmerah, Kebayoran, Serpong, hingga akhirnya tiba di tujuan. Perjalanan ini memberi banyak ruang untuk berpikir dan merenung. Setelah itu, saya menyelesaikan sisa jalur Blue Line yang belum tersentuh, melewati Karet, Sudirman, hingga Pasar Senen sebagai penutup hari. Perjalanan berakhir sekitar pukul 19.00. Hari itu terasa panjang, melelahkan, namun penuh makna. Saya mulai melihat ONDA bukan lagi sebagai objek pencarian, melainkan sebagai bagian dari ritme kehidupan sehari-hari yang terus berjalan."
  },
 {
  id: 6,
  title: "Pink Line — dan onda Hadir di Mana Saja",
  date: "18-29 Desember 2025",
  location: "Bogor - Bandung - Cianjur - Jakarta",
  image: "/assets/banner6.png",
  excerpt:
    "Bukan jalur di peta, tapi perjalanan yang menyatukan tugas, rumah, dan kesadaran.",
  content:
    "Perjalanan di fase ini tidak lagi terikat pada satu jalur KRL tertentu, melainkan mengikuti alur kehidupan itu sendiri. Dalam rangkaian tugas ke KPPN Bogor, saya kembali menemukan tiga produk ONDA yang hadir tanpa pernah saya rencanakan. Di Bandung, tepatnya di lingkungan Gedung Keuangan Negara, tujuh produk ONDA muncul dalam keseharian kerja yang berjalan seperti biasa. Dalam perjalanan pulang, saya singgah di SPBU Padalarang dan menemukan satu produk ONDA lainnya, seolah menjadi penghubung antara kota dan perjalanan. Saat mudik ke Cianjur, ONDA kembali hadir di SPBU Karangtengah, bahkan hingga ke masjid di kampung halaman tempat saya menemukan tiga produk lainnya. Perjalanan ini kemudian berlanjut hingga Jakarta, ketika saya menginap di Hotel Mercure Cikini. Di masjid hotel tersebut, saya kembali menemukan ONDA, dan di titik itulah saya berhenti menghitung jumlah temuan. Yang tersisa hanyalah kesadaran tentang kehadiran. ONDA tidak memilih tempat, tidak menuntut perhatian, dan tidak pernah berusaha terlihat. Ia bekerja dengan tenang, konsisten, dan setia menjalankan fungsinya di balik layar. Di fase ini, Finding ONDA tidak lagi tentang pencarian fisik atau dokumentasi semata, melainkan tentang cara baru memandang dunia — lebih pelan, lebih sadar, dan lebih menghargai hal-hal kecil yang selama ini hadir tanpa pernah diminta."
}
];


export default function StoryGridFindingOnda() {
  const [activeStory, setActiveStory] = useState<Story | null>(null);

  return (
    <section id='story' className="py-20 bg-slate-50">
      <div className="container mx-auto">

        {/* HEADER */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Perjalanan Mencari ONDA
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Catatan perjalanan sederhana menyusuri kota,
            menemukan ONDA di ruang-ruang yang sering kita lewati.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <motion.button
              key={story.id}
              whileHover={{ y: -6 }}
              onClick={() => setActiveStory(story)}
              className="bg-white rounded-3xl overflow-hidden shadow-xl text-left"
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {story.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {story.location}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {story.title}
                </h3>

                <p className="text-slate-600 text-sm">
                  {story.excerpt}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* MODAL DETAIL */}
      <AnimatePresence>
        {activeStory && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl relative"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              <button
                onClick={() => setActiveStory(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white shadow"
              >
                <X className="w-4 h-4" />
              </button>

              <img
                src={activeStory.image}
                alt={activeStory.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-8">
                <div className="flex gap-6 text-sm text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {activeStory.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {activeStory.location}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                  {activeStory.title}
                </h3>

                <div className="space-y-4 text-slate-700 leading-relaxed">
                  {activeStory.content}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
