import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import WaveDivider from './WaveDivider';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Andi Prasetyo',
    role: 'Mahasiswa Informatika',
    avatar: '👨‍🎓',
    rating: 5,
    text: 'Tugas pemrograman Java saya selesai lebih cepat dari deadline. Kodenya rapi, bersih, dan ada komentar penjelasnya. Sangat recommended!',
  },
  {
    name: 'Sari Dewi',
    role: 'Siswi SMA Kelas 12',
    avatar: '👩‍🎓',
    rating: 5,
    text: 'Makalah sosiologi saya dapat nilai A! Penulisannya profesional dan sesuai format yang diminta sekolah. Terima kasih Ruang Tugas!',
  },
  {
    name: 'Budi Santoso',
    role: 'Mahasiswa Teknik',
    avatar: '🧑‍💻',
    rating: 5,
    text: 'Proyek jaringan komputer Cisco saya dikerjakan dengan sangat baik. Konfigurasinya tepat dan laporannya lengkap. Top!',
  },
  {
    name: 'Dina Putri',
    role: 'Siswi SMK Multimedia',
    avatar: '👩‍🎨',
    rating: 5,
    text: 'Desain Canva dan presentasi PPT saya hasilnya keren banget. Modern, clean, dan sesuai tema. Pasti pesan lagi!',
  },
  {
    name: 'Rizky Ramadhan',
    role: 'Mahasiswa Ekonomi',
    avatar: '👨‍💼',
    rating: 4,
    text: 'Proposal penelitian saya dikerjakan tepat waktu dan formatnya sesuai standar kampus. Komunikasinya juga responsif banget.',
  },
  {
    name: 'Maya Anggraeni',
    role: 'Siswi SMP Kelas 9',
    avatar: '👧',
    rating: 5,
    text: 'Tugas matematika saya yang susah ternyata bisa diselesaikan dengan mudah. Jawabannya lengkap dengan cara pengerjaannya!',
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <HiStar
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'star-filled' : 'star-empty'}`}
        />
      ))}
    </div>
  );
}

export default function Testimoni() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = typeof window !== 'undefined' && window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating card effect
      document.querySelectorAll('.testi-card').forEach((card, i) => {
        gsap.to(card, {
          y: -6,
          duration: 3 + i * 0.3,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: i * 0.4,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const navigate = (dir) => {
    setCurrentIndex((prev) => {
      const next = prev + dir;
      return Math.max(0, Math.min(next, maxIndex));
    });
  };

  useEffect(() => {
    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        x: `-${currentIndex * (100 / cardsPerView)}%`,
        duration: 0.6,
        ease: 'power2.out',
      });
    }
  }, [currentIndex, cardsPerView]);

  return (
    <section id="testimoni" ref={sectionRef} className="relative bg-secondary/50">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-20 md:py-28">
        {/* Section Header */}
        <div className="testimoni-title text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 mb-4">
            <span className="text-xs font-semibold text-primary-dark tracking-wide uppercase">Testimoni</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
            <span className="text-text-heading">Apa Kata </span><span className="text-gradient">Mereka?</span>
          </h2>
          <p className="text-text-body/70 text-base sm:text-lg leading-relaxed">
            Kepuasan pelanggan adalah prioritas utama kami. Lihat apa yang mereka katakan.
          </p>
        </div>

        {/* Slider */}
        <div className="testi-slider relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-6 transition-transform"
            style={{ width: `${(testimonials.length / cardsPerView) * 100}%` }}
          >
            {testimonials.map((testi, i) => (
              <div
                key={i}
                className="testi-card flex-shrink-0"
                style={{ width: `calc(${100 / testimonials.length * cardsPerView}% - 24px)` }}
              >
                <div className="h-full p-6 md:p-7 rounded-2xl bg-white border border-blue-50 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-secondary flex items-center justify-center text-2xl shadow-inner">
                      {testi.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-text-heading text-sm">{testi.name}</h4>
                      <p className="text-xs text-text-muted">{testi.role}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <StarRating rating={testi.rating} />

                  {/* Text */}
                  <p className="mt-4 text-sm text-text-body/80 leading-relaxed">
                    &ldquo;{testi.text}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Nav Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => navigate(-1)}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full bg-white border border-blue-100 shadow-lg flex items-center justify-center text-primary-dark hover:bg-primary hover:text-white hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Previous"
            >
              <HiChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-blue-200 hover:bg-blue-300'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => navigate(1)}
              disabled={currentIndex >= maxIndex}
              className="w-12 h-12 rounded-full bg-white border border-blue-100 shadow-lg flex items-center justify-center text-primary-dark hover:bg-primary hover:text-white hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Next"
            >
              <HiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <WaveDivider topColor="#EFF6FF" bottomColor="#FFFFFF" variant="default" />
    </section>
  );
}
