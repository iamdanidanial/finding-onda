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
  content: string[];
};

const stories: Story[] = [
  {
  id: 1,
  title: "Finding ONDA: Awal yang Tidak Direncanakan",
  date: "6 Desember 2025",
  location: "Ciherang, Cianjur – Bogor",
  image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200",
  excerpt:
    "Semua perjalanan besar sering kali dimulai dari hal yang paling sederhana.",
  content: [
    "Hari itu saya tidak sedang mencari apa pun.",
    "Saya hanya berkunjung ke rumah teman di sebuah villa di Ciherang, Cianjur.",
    "Tanpa disengaja, perhatian saya tertuju pada tiga produk ONDA yang ada di rumah tersebut.",
    "Awalnya terasa biasa, namun ada rasa penasaran yang tertinggal.",
    "Dalam perjalanan pulang, saya singgah di SPBU Pertamina 34.16108 Bogor.",
    "Di tempat itulah satu produk ONDA kembali saya temukan.",
    "Dua peristiwa kecil di hari yang sama menjadi titik awal dari sebuah perjalanan panjang.",
    "Saya belum tahu saat itu, bahwa rasa penasaran ini akan membawa saya melintasi banyak ruang dan waktu."
  ]
},
 {
  id: 2,
  title: "Finding ONDA: Menyusuri Red Line dari Istiqlal ke Citayam",
  date: "7 Desember 2025",
  location: "Jakarta – Citayam",
  image: "https://images.pexels.com/photos/1178448/pexels-photo-1178448.jpeg?auto=compress&cs=tinysrgb&w=1200",
  excerpt:
    "Pencarian ini dimulai ketika saya memutuskan untuk lebih sadar terhadap sekitar.",
  content: [
    "Tanggal 7 Desember 2025, saya memutuskan bahwa pencarian ini tidak lagi sekadar kebetulan.",
    "Perjalanan dimulai dari Masjid Istiqlal, tempat saya menemukan satu produk ONDA.",
    "Dari sana, saya menuju Stasiun Juanda, titik awal jalur Red Line.",
    "Pukul 14.00, perjalanan menyusuri stasiun demi stasiun dimulai.",
    "Juanda, Gondangdia, Cikini, Manggarai, Tebet, Cawang, hingga Pasar Minggu.",
    "Kereta membawa saya melewati Lenteng Agung, Universitas Indonesia, Depok, hingga Citayam.",
    "Setiap stasiun terasa seperti bab kecil dalam satu cerita besar.",
    "ONDA hadir di ruang-ruang publik yang selama ini hanya saya lewati tanpa perhatian.",
    "Hari itu saya belajar bahwa melihat dengan sadar bisa mengubah cara memaknai perjalanan."
  ]
},
  {
  id: 3,
  title: "Finding ONDA: Menutup Red Line di Tengah Tugas",
  date: "8 Desember 2025",
  location: "Bogor – Jakarta Kota",
  image: "https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg?auto=compress&cs=tinysrgb&w=1200",
  excerpt:
    "Kadang pencarian terbaik justru terjadi di sela-sela kewajiban.",
  content: [
    "Keesokan harinya, perjalanan berlanjut bersamaan dengan tugas kantor ke Bogor.",
    "Pukul 17.12 saya memulai perjalanan dari Stasiun Bogor.",
    "Kereta membawa saya ke Cilebut dan Bojong Gede.",
    "Perjalanan kemudian berlanjut menuju Sawah Besar, Mangga Besar, Jayakarta, hingga Jakarta Kota.",
    "Di titik ini, saya menyadari bahwa jalur Red Line telah saya susuri sepenuhnya.",
    "Pukul 20.00, pencarian di Red Line resmi selesai.",
    "Bukan rasa puas yang muncul, melainkan dorongan untuk melanjutkan.",
    "Saya mulai memahami bahwa perjalanan ini bukan tentang garis di peta, tetapi tentang prosesnya."
  ]
},
{
  id: 4,
  title: "Finding ONDA: Blue Line, Brown Line, dan Malam yang Panjang",
  date: "13 Desember 2025",
  location: "Jakarta – Tangerang – Cikarang",
  image: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1200",
  excerpt:
    "Tidak semua perjalanan berjalan lurus, beberapa harus berhenti lalu dilanjutkan.",
  content: [
    "Sejak pagi hari, saya memulai pencarian di jalur Blue Line.",
    "Kemayoran, Rajawali, Kampung Bandan, Angke, dan Duri menjadi pembuka hari itu.",
    "Perjalanan berlanjut ke Brown Line Tangerang, dari Grogol hingga Tangerang.",
    "Pukul 14.00 saya harus berhenti karena meeting kantor.",
    "Namun setelah meeting selesai, keinginan untuk melanjutkan kembali muncul.",
    "Malam itu saya kembali menyusuri Blue Line dari Gang Sentiong hingga Cikarang.",
    "Saya tiba di kost pukul 23.45 dengan tubuh lelah dan pikiran penuh.",
    "Hari itu mengajarkan bahwa konsistensi sering kali diuji oleh kelelahan."
  ]
},
{
  id: 5,
  title: "Finding ONDA: Jalur Panjang Green Line",
  date: "14 Desember 2025",
  location: "Tanah Abang – Rangkasbitung",
  image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200",
  excerpt:
    "Perjalanan panjang memberi ruang untuk refleksi yang lebih dalam.",
  content: [
    "Pukul 6 pagi saya sudah berangkat dari kost.",
    "Green Line membawa saya dari Tanah Abang menuju Rangkasbitung.",
    "Stasiun demi stasiun dilewati: Palmerah, Kebayoran, Serpong, hingga Rangkasbitung.",
    "Setelah itu, saya menyelesaikan sisa Blue Line yang belum tersentuh.",
    "Karet, Sudirman, hingga Pasar Senen menjadi penutup hari.",
    "Perjalanan berakhir sekitar pukul 19.00.",
    "Hari itu terasa panjang, namun penuh makna.",
    "Saya mulai melihat ONDA sebagai bagian dari ritme kehidupan sehari-hari."
  ]
},
{
  id: 6,
  title: "Finding ONDA: Hadir di Tugas dan Kampung Halaman",
  date: "18–26 Desember 2025",
  location: "Bogor – Bandung – Cianjur",
  image: "https://images.pexels.com/photos/4240505/pexels-photo-4240505.jpeg?auto=compress&cs=tinysrgb&w=1200",
  excerpt:
    "ONDA hadir tanpa memilih tempat, sama seperti kehidupan.",
  content: [
    "Dalam perjalanan tugas ke KPPN Bogor, saya menemukan tiga produk ONDA.",
    "Di Bandung, tepatnya di lingkungan Gedung Keuangan Negara, tujuh produk ONDA kembali saya temukan.",
    "Dalam perjalanan pulang, saya singgah di SPBU Padalarang dan menemukan satu produk ONDA.",
    "Saat mudik ke Cianjur, ONDA kembali hadir di SPBU Karangtengah.",
    "Bahkan di masjid kampung halaman, tiga produk ONDA ditemukan.",
    "Saya menyadari bahwa ONDA tidak eksklusif pada ruang tertentu.",
    "Ia hadir di kota, di desa, di tempat kerja, dan di rumah.",
    "Keberadaannya terasa tenang namun konsisten."
  ]
},
{
  id: 7,
  title: "Finding ONDA: Tentang Hadir Tanpa Menuntut",
  date: "29 Desember 2025",
  location: "Jakarta",
  image: "https://images.pexels.com/photos/7363195/pexels-photo-7363195.jpeg?auto=compress&cs=tinysrgb&w=1200",
  excerpt:
    "Ini bukan tentang merek, tapi tentang keberadaan.",
  content: [
    "Malam itu saya menginap di Hotel Mercure Cikini.",
    "Di masjid hotel tersebut, saya kembali menemukan produk ONDA.",
    "Perjalanan ini akhirnya membuat saya berhenti menghitung jumlah.",
    "Yang tersisa adalah kesadaran tentang kehadiran.",
    "ONDA bekerja tanpa menuntut perhatian.",
    "Ia menjalankan fungsi dengan setia di balik layar.",
    "Finding ONDA bukan lagi tentang pencarian fisik.",
    "Ia menjadi cara baru untuk melihat dunia dengan lebih sadar."
  ]
}
];

export default function StoryGridFindingOnda() {
  const [activeStory, setActiveStory] = useState<Story | null>(null);

  return (
    <section className="py-20 bg-slate-50">
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
                  {activeStory.content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
