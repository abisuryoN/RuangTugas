import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import WaveDivider from './WaveDivider';

const testimonials = [
  {
    name: 'Rina Maharani',
    role: 'Mahasiswa S1 Sistem Informasi',
    quote: 'Surgency Studio sangat membantu! Coding akademik Java yang tadinya bikin pusing jadi lebih mudah dipahami. Servis cepat dan hasilnya rapi.',
    rating: 5,
    avatar: 'RM',
    tone: 'bg-primary',
  },
  {
    name: 'Dimas Pratama',
    role: 'Pelajar SMA Negeri 3',
    quote: 'Feed Instagram brand aku sekarang keliatan lebih profesional. Desainya clean dan konsisten. Recommended banget untuk kebutuhan kreatif!',
    rating: 5,
    avatar: 'DP',
    tone: 'bg-[#123a92]',
  },
  {
    name: 'Siti Nurhaliza',
    role: 'Mahasiswa Teknik Informatika',
    quote: 'Landing page untuk tugas akhir portfolio aku jadi keliatan modern dan responsif. Proses revisinya juga fleksibel dan sabar. Terima kasih!',
    rating: 5,
    avatar: 'SN',
    tone: 'bg-primary-dark',
  },
  {
    name: 'Ahmad Fauzi',
    role: 'Mahasiswa Akuntansi',
    quote: 'Analisis studi kasus manajemen proyek aku disusun rapih dari awal sampai akhir. Penjelasannya detail dan mudah dipahami. Mantap!',
    rating: 5,
    avatar: 'AF',
    tone: 'bg-primary',
  },
  {
    name: 'Putri Amelia',
    role: 'Mahasiswa Desain Komunikasi Visual',
    quote: 'Video konten promosi untuk tugas kampus hasilnya keren banget! Cutting, transisi, dan musik udah pas. Profisiensi tinggi dan tepat waktu.',
    rating: 5,
    avatar: 'PA',
    tone: 'bg-[#123a92]',
  },
  {
    name: 'Bagus Setiawan',
    role: 'Pelajar SMK Jurusan RPL',
    quote: 'Bantuan tugas web development React/Vite aku kerjakan bareng tim Surgency. Kode-nya rapi, dokumentasinya jelas. Worth it banget!',
    rating: 5,
    avatar: 'BS',
    tone: 'bg-primary-dark',
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar
          key={i}
          size={11}
          className={i < rating ? 'text-primary' : 'text-gray-200'}
        />
      ))}
    </div>
  );
}

export default function Testimoni() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex(i => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActiveIndex(i => (i + 1) % testimonials.length);

  return (
    <section id="testimoni" className="relative bg-secondary">
      <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-16 py-14 md:py-20">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[rgba(5,66,201,0.15)] mb-3">
            <span className="text-[11px] font-semibold text-primary-dark tracking-wide uppercase">Testimoni</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-extrabold mb-3 tracking-tight text-text-heading">
            Apa Kata Klien Kami
          </h2>
          <p className="text-text-body/70 text-sm sm:text-base leading-relaxed">
            Kepuasan klien adalah prioritas utama kami.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-2xl mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 px-1">
                  <div className="p-6 md:p-8 rounded-[24px] bg-white border border-[rgba(9,19,68,0.08)] shadow-[0_18px_45px_rgba(9,19,68,0.08)] text-center">
                    {/* Avatar */}
                    <div className={`w-14 h-14 mx-auto mb-4 rounded-full ${t.tone} flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                      {t.avatar}
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center mb-3">
                      <StarRating rating={t.rating} />
                    </div>

                    {/* Quote */}
                    <blockquote className="text-sm text-text-body/80 leading-relaxed italic mb-4 line-clamp-5">
                      "{t.quote}"
                    </blockquote>

                    {/* Author */}
                    <div>
                      <p className="text-sm font-bold text-text-heading">{t.name}</p>
                      <p className="text-xs text-text-muted">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full bg-white border border-blue-100 shadow-sm flex items-center justify-center text-text-body hover:bg-blue-50 hover:text-primary-dark transition-all duration-300"
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>

            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? 'w-6 h-2.5 bg-primary-dark'
                      : 'w-2.5 h-2.5 bg-blue-200 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-9 h-9 rounded-full bg-white border border-blue-100 shadow-sm flex items-center justify-center text-text-body hover:bg-blue-50 hover:text-primary-dark transition-all duration-300"
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* Dots info */}
          <p className="text-center text-xs text-text-muted mt-2">
            {activeIndex + 1} dari {testimonials.length}
          </p>
        </div>
      </div>
      <WaveDivider topColor="#eef4ff" bottomColor="#ffffff" variant="simple" />
    </section>
  );
}
