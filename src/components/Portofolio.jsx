import { useState } from 'react';
import { HiAcademicCap, HiColorSwatch, HiDesktopComputer } from 'react-icons/hi';

const WA_LINK = 'https://wa.me/6285719630624';

const portfolioItems = [
  {
    category: 'Edu',
    icon: HiAcademicCap,
    color: 'from-blue-500 to-indigo-600',
    items: [
      { title: 'Pendampingan Tugas Algoritma', desc: 'Membantu memahami alur soal, penyusunan jawaban, dan perapihan hasil akhir.' },
      { title: 'Analisis Studi Kasus Manajemen Proyek', desc: 'Penyusunan pembahasan, struktur jawaban, dan ringkasan presentasi.' },
      { title: 'Bantuan Coding Akademik Java', desc: 'Membantu debug, merapikan struktur kode, dan menjelaskan alur program.' },
    ],
  },
  {
    category: 'Creative',
    icon: HiColorSwatch,
    color: 'from-pink-500 to-rose-600',
    items: [
      { title: 'Desain Feed Instagram Brand', desc: 'Membuat visual feed yang clean, konsisten, dan siap posting.' },
      { title: 'Video Konten Promosi', desc: 'Editing konten pendek untuk kebutuhan Reels, TikTok, dan promosi digital.' },
      { title: 'CV dan Portfolio Visual', desc: 'Mendisain CV dan portfolio agar lebih profesional dan menarik.' },
    ],
  },
  {
    category: 'Digital',
    icon: HiDesktopComputer,
    color: 'from-emerald-500 to-teal-600',
    items: [
      { title: 'Website Landing Page', desc: 'Membuat landing page responsif untuk promosi jasa atau bisnis.' },
      { title: 'Website Company Profile', desc: 'Website modern untuk memperkenalkan brand, layanan, dan kontak bisnis.' },
      { title: 'UI Website Sederhana', desc: 'Membuat tampilan antarmuka yang clean, rapi, dan mudah digunakan.' },
    ],
  },
];

const filters = ['Semua', 'Edu', 'Creative', 'Digital'];

export default function Portofolio() {
  const [activeFilter, setActiveFilter] = useState('Semua');

  const filtered = activeFilter === 'Semua'
    ? portfolioItems
    : portfolioItems.filter(p => p.category === activeFilter);

  return (
    <section id="portofolio" className="relative bg-white">
      <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-16 py-14 md:py-20">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-3">
            <span className="text-[11px] font-semibold text-primary-dark tracking-wide uppercase">Hasil Kerja</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-extrabold mb-3 tracking-tight text-text-heading">
            Portofolio
          </h2>
          <p className="text-text-body/70 text-sm sm:text-base leading-relaxed">
            Beberapa contoh hasil kerja dari layanan Edu, Creative, dan Digital.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                activeFilter === f
                  ? 'bg-gradient-to-r from-primary to-primary-deeper text-white shadow-md'
                  : 'bg-white border border-blue-100 text-text-body hover:bg-blue-50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto">
          {filtered.map((group) => {
            const Icon = group.icon;
            return group.items.map((item, idx) => (
              <div
                key={`${group.category}-${idx}`}
                className="relative p-5 rounded-xl bg-white border border-blue-50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-gradient-to-r ${group.color} text-white`}>
                    <Icon className="text-xs" />
                    {group.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-text-heading mb-2 leading-tight">{item.title}</h3>

                {/* Description */}
                <p className="text-xs text-text-body/70 leading-relaxed flex-1 line-clamp-3">{item.desc}</p>

                {/* CTA */}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold bg-blue-50 text-primary-dark hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Konsultasi Serupa
                </a>
              </div>
            ));
          })}
        </div>
      </div>
    </section>
  );
}
