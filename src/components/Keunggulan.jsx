import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiLightningBolt, HiClock, HiCollection, HiRefresh, HiUserGroup, HiCode } from 'react-icons/hi';
import WaveDivider from './WaveDivider';

gsap.registerPlugin(ScrollTrigger);

const keunggulan = [
  {
    icon: HiLightningBolt,
    title: 'Fast Response',
    desc: 'Admin dan tim kami selalu siaga membalas pesan dan mengolah kebutuhan Anda dengan cepat.',
    tone: 'bg-primary-dark',
  },
  {
    icon: HiClock,
    title: 'Tepat Deadline',
    desc: 'Kami menjaga proses tetap sesuai batas waktu yang disepakati.',
    tone: 'bg-primary',
  },
  {
    icon: HiCollection,
    title: 'Banyak Bidang Layanan',
    desc: 'Mulai dari akademik, IT, desain, konten, hingga website. Kami punya tim di setiap bidang.',
    tone: 'bg-[#123a92]',
  },
  {
    icon: HiRefresh,
    title: 'Revisi Jika Dibutuhkan',
    desc: 'Ada yang kurang sesuai? Tenang, kami memberikan layanan revisi hingga kamu puas.',
    tone: 'bg-primary-dark',
  },
  {
    icon: HiUserGroup,
    title: 'Admin Aktif',
    desc: 'Komunikasi yang jelas dan transparan. Admin selalu siap membantu kendalamu.',
    tone: 'bg-primary',
  },
  {
    icon: HiCode,
    title: 'Desain & Coding Modern',
    desc: 'Hasil kerja mengikuti standar terbaru. Kode bersih, desain modern dan premium.',
    tone: 'bg-[#123a92]',
  },
];

export default function Keunggulan() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Entrance animations removed to ensure immediate visibility based on previous feedback,
    // but keeping floating animations for the background blur.
  }, []);

  return (
    <section id="keunggulan" ref={sectionRef} className="relative bg-secondary/30 overflow-hidden">
      {/* Floating Background Blur */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-12 xl:px-16 py-16 md:py-24">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 mb-4">
            <span className="text-[11px] font-semibold text-primary-dark tracking-wide uppercase">Keunggulan Kami</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold mb-4 tracking-tight">
            <span className="text-text-heading">Kenapa Memilih </span><span className="text-gradient">Surgency Studio</span>
          </h2>
          <p className="text-text-body/70 text-sm sm:text-base leading-relaxed">
            Kami berkomitmen memberikan layanan terbaik untuk mendukung kebutuhan edukasi, kreatif, dan digital Anda.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {keunggulan.map((item, i) => {
            const Icon = item.icon;
            return (
              <article
                key={i}
                className="group relative p-6 md:p-8 rounded-[24px] bg-white border border-[rgba(9,19,68,0.08)] shadow-[0_14px_35px_rgba(9,19,68,0.06)] hover:shadow-[0_18px_45px_rgba(9,19,68,0.10)] hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${item.tone} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white text-xl" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-text-heading mb-2 group-hover:text-primary-dark transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-text-body/70 leading-relaxed">
                  {item.desc}
                </p>

                {/* Hover glow background */}
                <div className="absolute inset-0 rounded-[24px] bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </article>
            );
          })}
        </div>
      </div>

      {/* Wave Divider */}
      <WaveDivider topColor="transparent" bottomColor="#FFFFFF" variant="simple" />
    </section>
  );
}
