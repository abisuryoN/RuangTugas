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
    desc: 'Admin dan tim kami selalu siaga membalas pesan dan mengerjakan tugasmu dengan cepat.',
    color: 'from-amber-400 to-orange-500',
    glow: 'group-hover:shadow-amber-400/40',
  },
  {
    icon: HiClock,
    title: 'Tepat Deadline',
    desc: 'Kami menjamin tugas selesai sebelum batas waktu yang kamu tentukan tanpa alasan.',
    color: 'from-emerald-400 to-teal-500',
    glow: 'group-hover:shadow-emerald-400/40',
  },
  {
    icon: HiCollection,
    title: 'Banyak Bidang Tugas',
    desc: 'Mulai dari IT, desain, matematika, hingga karya ilmiah. Kami punya ahli di setiap bidang.',
    color: 'from-blue-400 to-indigo-500',
    glow: 'group-hover:shadow-blue-400/40',
  },
  {
    icon: HiRefresh,
    title: 'Revisi Jika Dibutuhkan',
    desc: 'Ada yang kurang sesuai? Tenang, kami memberikan layanan revisi hingga kamu puas.',
    color: 'from-violet-400 to-purple-500',
    glow: 'group-hover:shadow-violet-400/40',
  },
  {
    icon: HiUserGroup,
    title: 'Admin Aktif',
    desc: 'Komunikasi yang jelas dan transparan. Admin selalu siap membantu kendalamu.',
    color: 'from-cyan-400 to-blue-500',
    glow: 'group-hover:shadow-cyan-400/40',
  },
  {
    icon: HiCode,
    title: 'Desain & Coding Modern',
    desc: 'Hasil kerja mengikuti standar terbaru. Kode bersih, desain modern dan premium.',
    color: 'from-rose-400 to-pink-500',
    glow: 'group-hover:shadow-rose-400/40',
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
            <span className="text-text-heading">Kenapa Memilih </span><span className="text-gradient">Ruang Tugas?</span>
          </h2>
          <p className="text-text-body/70 text-sm sm:text-base leading-relaxed">
            Kami berkomitmen memberikan layanan terbaik untuk membantu kesuksesan akademikmu.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {keunggulan.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`group relative p-6 md:p-8 rounded-2xl bg-white border border-blue-50 shadow-sm hover:shadow-xl ${item.glow} hover:-translate-y-1.5 transition-all duration-300`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
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
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Wave Divider */}
      <WaveDivider topColor="transparent" bottomColor="#FFFFFF" variant="simple" />
    </section>
  );
}
