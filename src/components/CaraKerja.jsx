import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiClipboardList, HiPaperAirplane, HiCog, HiCheckCircle, HiChatAlt2 } from 'react-icons/hi';
import WaveDivider from './WaveDivider';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: HiClipboardList,
    step: '01',
    title: 'Isi Form Pemesanan',
    desc: 'Lengkapi form dengan detail tugas, jenis tugas, dan deadline yang dibutuhkan.',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: HiPaperAirplane,
    step: '02',
    title: 'Data Terkirim Otomatis',
    desc: 'Pesanan kamu langsung terkirim ke semua admin kami melalui WhatsApp secara otomatis.',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    icon: HiChatAlt2,
    step: '03',
    title: 'Konfirmasi Pesanan',
    desc: 'Admin akan menghubungi kamu untuk memastikan orderan sudah benar.',
    color: 'from-violet-400 to-purple-500',
  },
  {
    icon: HiCog,
    step: '04',
    title: 'Admin Memproses',
    desc: 'Tim kami segera mengerjakan tugas dengan teliti dan profesional sesuai kebutuhan.',
    color: 'from-indigo-400 to-blue-600',
  },
  {
    icon: HiCheckCircle,
    step: '05',
    title: 'Tugas Selesai!',
    desc: 'Tugas dikirimkan tepat waktu sebelum deadline. Revisi gratis jika diperlukan.',
    color: 'from-emerald-400 to-teal-500',
  },
];

export default function CaraKerja() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Entrance animations removed so content appears immediately
  }, []);

  return (
    <section id="cara-kerja" ref={sectionRef} className="relative bg-white">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-20 md:py-28">
        {/* Section Header */}
        <div className="carakerja-title text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <span className="text-xs font-semibold text-primary-dark tracking-wide uppercase">Cara Kerja</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
            <span className="text-text-heading">Semudah </span><span className="text-gradient">5 Langkah</span>
          </h2>
          <p className="text-text-body/70 text-base sm:text-lg leading-relaxed">
            Proses pemesanan yang cepat, mudah, dan otomatis tanpa ribet.
          </p>
        </div>

        {/* Steps */}
        <div className="steps-grid relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
          {/* Connector line (desktop only) */}
          <div className="connector-line hidden lg:block absolute top-24 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-primary/30 via-primary to-primary/30 z-0" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="step-card relative z-10 text-center group">
                {/* Step number */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-400`}>
                    <Icon className="text-white text-3xl" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center text-xs font-bold text-primary-dark border border-blue-100">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-text-heading mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-text-body/70 leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Wave Divider */}
      <WaveDivider topColor="#FFFFFF" bottomColor="#DBEAFE" variant="layered" />
    </section>
  );
}
