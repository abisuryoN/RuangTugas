import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiCode, HiCalculator, HiDocumentText, HiColorSwatch, HiGlobeAlt, HiAcademicCap, HiDesktopComputer, HiBookOpen } from 'react-icons/hi';
import WaveDivider from './WaveDivider';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: HiCode,
    title: 'IT / Pemrograman',
    desc: 'Web, mobile, desktop, database, dan berbagai projek programming lainnya.',
    color: 'from-blue-500 to-indigo-600',
    glow: 'group-hover:shadow-blue-400/40',
  },
  {
    icon: HiCalculator,
    title: 'Matematika',
    desc: 'Aljabar, kalkulus, statistika, trigonometri, dan soal-soal matematika.',
    color: 'from-emerald-400 to-teal-600',
    glow: 'group-hover:shadow-emerald-400/40',
  },
  {
    icon: HiDocumentText,
    title: 'Proposal / Laporan',
    desc: 'Karya ilmiah, proposal, makalah, skripsi, dan laporan akademik.',
    color: 'from-amber-400 to-orange-500',
    glow: 'group-hover:shadow-amber-400/40',
  },
  {
    icon: HiColorSwatch,
    title: 'Design / Canva / PPT',
    desc: 'Figma, Adobe Family (PS/AI), Canva, PowerPoint, poster, dan desain kreatif lainnya.',
    color: 'from-pink-400 to-rose-600',
    glow: 'group-hover:shadow-pink-400/40',
  },
  {
    icon: HiGlobeAlt,
    title: 'Network / Jaringan',
    desc: 'Cisco, Mikrotik, jaringan komputer, subnetting, dan konfigurasi.',
    color: 'from-cyan-400 to-blue-600',
    glow: 'group-hover:shadow-cyan-400/40',
  },
  {
    icon: HiAcademicCap,
    title: 'Tugas SMA',
    desc: 'Semua mata pelajaran SMA termasuk IPA, IPS, dan bahasa.',
    color: 'from-violet-400 to-purple-600',
    glow: 'group-hover:shadow-violet-400/40',
  },
  {
    icon: HiDesktopComputer,
    title: 'Tugas SMK',
    desc: 'Jurusan TKJ, RPL, multimedia, administrasi, dan teknik lainnya.',
    color: 'from-sky-400 to-blue-600',
    glow: 'group-hover:shadow-sky-400/40',
  },
  {
    icon: HiBookOpen,
    title: 'Tugas Kuliah',
    desc: 'Tugas dari berbagai jurusan dan fakultas di perguruan tinggi.',
    color: 'from-indigo-400 to-blue-700',
    glow: 'group-hover:shadow-indigo-400/40',
  },
];

export default function Layanan() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    // Entrance animations removed so content appears immediately
  }, []);

  return (
    <section id="layanan" ref={sectionRef} className="relative bg-secondary/50">
      <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-16 py-14 md:py-20">
        {/* Section Header */}
        <div className="layanan-title text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 mb-3">
            <span className="text-[11px] font-semibold text-primary-dark tracking-wide uppercase">Layanan Kami</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-extrabold mb-3 tracking-tight">
            <span className="text-text-heading">Apa yang Bisa Kami </span><span className="text-gradient">Bantu?</span>
          </h2>
          <p className="text-text-body/70 text-sm sm:text-base leading-relaxed">
            Berbagai jenis tugas akademik yang dapat kami kerjakan dengan profesional dan tepat waktu.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className={`service-card group relative p-5 md:p-6 rounded-xl bg-white border border-blue-50 shadow-sm hover:shadow-lg ${service.glow} hover:-translate-y-1 transition-all duration-300 cursor-default`}
              >
                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white text-lg" />
                </div>

                {/* Content */}
                <h3 className="text-sm font-bold text-text-heading mb-1.5 group-hover:text-primary-dark transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-text-body/70 leading-relaxed">
                  {service.desc}
                </p>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Wave Divider */}
      <WaveDivider topColor="#EFF6FF" bottomColor="#FFFFFF" variant="default" />
    </section>
  );
}
