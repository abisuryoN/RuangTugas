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

  const handleMouseEnter = (index) => {
    if (index === 0) return;
    
    const plane = document.querySelector(`.plane-connector-${index}`);
    if (plane) {
      gsap.to(plane, {
        x: '140%', // Travel further to the right
        rotation: 90,
        duration: 0.8,
        ease: 'power2.inOut',
      });
    }
  };

  const handleMouseLeave = (index) => {
    if (index === 0) return;
    
    const plane = document.querySelector(`.plane-connector-${index}`);
    if (plane) {
      gsap.to(plane, {
        x: '-140%', // Return further to the left
        rotation: 90,
        duration: 0.8,
        ease: 'power2.inOut',
      });
    }
  };

  return (
    <section id="cara-kerja" ref={sectionRef} className="relative bg-white overflow-hidden">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-20 md:py-28">
        <div className="carakerja-title text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight text-text-heading">
            Cara Kerja
          </h2>
          <p className="text-xl font-bold mb-2">
            <span className="text-text-heading">Semudah </span><span className="text-gradient">5 Langkah</span>
          </p>
          <p className="text-text-body/70 text-base sm:text-lg leading-relaxed">
            Proses pemesanan yang cepat, mudah, dan otomatis tanpa ribet.
          </p>
        </div>

        {/* Steps */}
        <div className="steps-grid relative flex flex-col lg:flex-row justify-between gap-16 lg:gap-0">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] z-0">
            {/* Thicker and more visible dashed line */}
            <div className="w-full h-px border-t-[3px] border-dashed border-primary/40 relative" />
          </div>

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div 
                key={i} 
                className="step-card relative z-10 flex flex-col items-center text-center group lg:w-1/5"
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={() => handleMouseLeave(i)}
              >
                {/* Horizontal Plane Connector (Desktop) */}
                {i > 0 && (
                  <div className="hidden lg:flex absolute top-10 right-1/2 w-full h-0 items-center justify-center pointer-events-none z-10">
                    <div className="relative w-full flex justify-center items-center">
                       {/* Adjusted plane to sit EXACTLY on the line */}
                       <HiPaperAirplane 
                         className={`plane-connector-${i} text-primary text-xl drop-shadow-md transition-shadow duration-300 bg-white`} 
                         style={{ transform: 'translateX(-140%) rotate(90deg)' }}
                       />
                    </div>
                  </div>
                )}

                {/* Vertical Line & Plane (Mobile) */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute top-full left-1/2 -translate-x-1/2 h-16 w-px border-l-2 border-dashed border-primary/40 z-0">
                    <HiPaperAirplane className="absolute top-1/2 left-1/2 -translate-x-1/2 text-primary rotate-180 text-lg animate-pulse" />
                  </div>
                )}

                {/* Step number container */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                  
                  <div className={`relative w-20 h-20 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-400 z-10`}>
                    <Icon className={`text-white text-3xl ${Icon === HiPaperAirplane ? 'rotate-90' : ''}`} />
                  </div>
                  
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center text-xs font-bold text-primary-dark border border-blue-100 z-20">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-text-heading mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-text-body/70 leading-relaxed max-w-[180px] mx-auto">
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
