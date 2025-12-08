// src/data/gallery.ts
import Images from "../utils/images";

export const galleryData = [
  {
    id: 1,
    title: "Onda Ditemukan di Stasiun Gubeng",
    datetime: "2025-01-12 14:32",
    location_type: "Stasiun",
    location_name: "Stasiun Gubeng Surabaya",
    address: "Jl. Gubeng Masjid No.1, Gubeng, Surabaya",
    description: "Onda terlihat di dekat peron 2 stasiun Gubeng, Surabaya.",
    photo_main: Images.gambar001,
    photo_maps: Images.sc001
  },
  {
    id: 2,
    title: "Onda Muncul di Halte Sudirman",
    datetime: "2025-01-18 09:10",
    location_type: "Halte",
    location_name: "Halte TransJakarta Sudirman",
    address: "Jl. Jenderal Sudirman, Jakarta Pusat",
    description: "Penampakan Onda di Halte TransJakarta Sudirman pada pagi hari.",
    photo_main: Images.gambar002,
    photo_maps: Images.sc002
  },
  {
    id: 3,
    title: "Onda Terlihat di SPBU Pertamina",
    datetime: "2025-01-24 18:55",
    location_type: "SPBU",
    location_name: "Pertamina 54.601.78",
    address: "Jl. Diponegoro No. 88, Bandung",
    description: "Onda terpantau di SPBU Pertamina saat pengisian bahan bakar.",
    photo_main: Images.gambar003,
    photo_maps: Images.sc003
  },
  {
    id: 4,
    title: "Onda Terpantau di Terminal Bungurasih",
    datetime: "2025-01-28 07:45",
    location_type: "Terminal",
    location_name: "Terminal Purabaya (Bungurasih)",
    address: "Jl. Letjen Sutoyo, Sidoarjo",
    description: "Onda muncul di area terminal Bungurasih pada pagi hari.",
    photo_main: "https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=1200",
    photo_maps: "https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=1200"
  }
];
