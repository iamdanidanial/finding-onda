import { useParams } from "react-router-dom";
import { destinations } from "../../data/destinations";
import { Clock, MapPin, Star, Check, X } from "lucide-react";

export default function DestinationDetail() {
  const { id } = useParams();
  const data = destinations.find((d) => d.id.toString() === id);

  if (!data) return <div className="p-10 text-center">Tour not found.</div>;

  return (
    <div className="bg-purple-50 min-h-screen py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* LEFT SIDE — MAIN CONTENT */}
        <div className="lg:col-span-2 space-y-10">

          {/* HERO IMAGE */}
          <div className="rounded-3xl overflow-hidden shadow-xl h-[350px]">
            <img
              src={data.image}
              className="w-full h-full object-cover"
            />
          </div>

          {/* TITLE */}
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">
              {data.title}
            </h1>

            <div className="flex items-center gap-4 text-slate-700 text-sm mb-4">
              <div className="flex items-center gap-1">
                <Clock className="w-5 h-5 text-purple-600" />
                {data.duration}
              </div>

              <div className="flex items-center gap-1">
                <MapPin className="w-5 h-5 text-purple-600" />
                {data.location}
              </div>

              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-yellow-500" />
                {data.rating}
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed">
              {data.descriptionLong || data.description}
            </p>
          </div>

          {/* SOROTAN */}
          <div>
            <h2 className="text-xl font-bold mb-3">Sorotan Lawatan</h2>
            <div className="flex flex-wrap gap-3">
              {data.highlights.map((h, i) => (
                <div
                  key={i}
                  className="px-4 py-2 bg-white rounded-full shadow-sm border text-slate-700"
                >
                  {h}
                </div>
              ))}
            </div>
          </div>

          {/* KEMASUKAN & PENGECUALIAN */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Kemasukan */}
            <div className="bg-white p-6 rounded-3xl shadow">
              <h3 className="text-lg font-bold mb-3">Kemasukan:</h3>
              <ul className="space-y-2">
                {data.includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pengecualian */}
            <div className="bg-white p-6 rounded-3xl shadow">
              <h3 className="text-lg font-bold mb-3">Pengecualian:</h3>
              <ul className="space-y-2">
                {data.excludes.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <X className="w-5 h-5 text-red-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* GALLERY */}
          <div>
            <h2 className="text-xl font-bold mb-3">Galeri Lawatan</h2>
            <div className="grid grid-cols-3 gap-4">
              {data.gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="rounded-2xl h-32 w-full object-cover shadow"
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — BOOKING CARD */}
        <div className="lg:col-span-1">
          <div className="sticky top-10 bg-white p-6 rounded-3xl shadow-xl border border-purple-200">
            <h3 className="text-xl font-bold text-center mb-2 text-purple-700">
              Tempah Sekarang
            </h3>

            <p className="text-slate-600 text-center mb-5 text-sm">
              Pasukan kami akan menghubungi anda kembali
            </p>

            <div className="text-center text-3xl font-bold text-slate-900 mb-6">
              ${data.price}
            </div>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nama"
                className="w-full px-4 py-3 border rounded-xl"
              />
              <input
                type="text"
                placeholder="Nombor WhatsApp"
                className="w-full px-4 py-3 border rounded-xl"
              />
              <input
                type="date"
                className="w-full px-4 py-3 border rounded-xl"
              />
              <select className="w-full px-4 py-3 border rounded-xl">
                <option>1 Orang</option>
                <option>2 Orang</option>
                <option>3 Orang</option>
                <option>4 Orang</option>
              </select>

              <button
                type="button"
                className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl"
              >
                Tempah Sekarang
              </button>
            </form>

            <p className="text-xs text-slate-500 mt-4 text-center">
              Lawatan peribadi & fleksibel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
