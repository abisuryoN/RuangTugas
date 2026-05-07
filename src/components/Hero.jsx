import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WaveDivider from './WaveDivider';

gsap.registerPlugin(ScrollTrigger);

// SVG Illustration: SD - white shirt, red pants/skirt
function StudentSD({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="sdTitle">
      <title id="sdTitle">Ilustrasi siswa belajar</title>
      {/* Body - White shirt */}
      <rect x="65" y="120" width="70" height="80" rx="15" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
      {/* Collar */}
      <path d="M85 120 L100 142 L115 120" fill="white" stroke="#D1D5DB" strokeWidth="1"/>
      {/* Pocket */}
      <rect x="75" y="140" width="16" height="12" rx="2" fill="none" stroke="#D1D5DB" strokeWidth="1" />
      {/* Head */}
      <circle cx="100" cy="85" r="38" fill="#FFDBB4" />
      {/* Hair - short boyish */}
      <ellipse cx="100" cy="68" rx="40" ry="28" fill="#4A3728" />
      {/* Eyes */}
      <circle cx="87" cy="88" r="4.5" fill="#1E3A8A" />
      <circle cx="113" cy="88" r="4.5" fill="#1E3A8A" />
      <circle cx="89" cy="86" r="1.8" fill="white" />
      <circle cx="115" cy="86" r="1.8" fill="white" />
      {/* Smile */}
      <path d="M90 102 Q100 112 110 102" stroke="#E8825C" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Cheeks */}
      <ellipse cx="78" cy="98" rx="6" ry="4" fill="#FFBFA0" opacity="0.5" />
      <ellipse cx="122" cy="98" rx="6" ry="4" fill="#FFBFA0" opacity="0.5" />
      {/* Book in hand */}
      <rect x="140" y="160" width="28" height="22" rx="3" fill="#60A5FA" />
      <rect x="143" y="164" width="18" height="2" rx="1" fill="white" opacity="0.7" />
      <rect x="143" y="169" width="12" height="2" rx="1" fill="white" opacity="0.5" />
      {/* Arms - white sleeves */}
      <rect x="45" y="130" width="20" height="50" rx="10" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
      <rect x="135" y="130" width="20" height="50" rx="10" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
      {/* Hands */}
      <circle cx="55" cy="180" r="9" fill="#FFDBB4" />
      <circle cx="145" cy="180" r="9" fill="#FFDBB4" />
      {/* RED pants */}
      <rect x="72" y="195" width="24" height="40" rx="12" fill="#DC2626" />
      <rect x="104" y="195" width="24" height="40" rx="12" fill="#DC2626" />
      {/* Shoes */}
      <ellipse cx="84" cy="240" rx="15" ry="8" fill="#1F2937" />
      <ellipse cx="116" cy="240" rx="15" ry="8" fill="#1F2937" />
      {/* Backpack straps */}
      <path d="M82 120 L78 150" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
      <path d="M118 120 L122 150" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

// SVG Illustration: SMP - white shirt, navy/dark blue pants
function StudentSMP({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="smpTitle">
      <title id="smpTitle">Ilustrasi pendidikan modern</title>
      {/* Body - White shirt */}
      <rect x="62" y="125" width="76" height="85" rx="15" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
      {/* Collar */}
      <path d="M85 125 L100 148 L115 125" fill="white" stroke="#D1D5DB" strokeWidth="1" />
      {/* Pocket */}
      <rect x="74" y="148" width="18" height="13" rx="2" fill="none" stroke="#D1D5DB" strokeWidth="1" />
      {/* Head */}
      <circle cx="100" cy="82" r="40" fill="#FFDBB4" />
      {/* Hair - ponytail style for girl */}
      <ellipse cx="100" cy="62" rx="42" ry="30" fill="#2D1810" />
      <ellipse cx="132" cy="55" rx="14" ry="24" fill="#2D1810" />
      {/* Hair band */}
      <circle cx="122" cy="50" r="5" fill="#1E3A8A" />
      {/* Eyes */}
      <ellipse cx="86" cy="85" rx="4" ry="4.5" fill="#1E3A8A" />
      <ellipse cx="114" cy="85" rx="4" ry="4.5" fill="#1E3A8A" />
      <circle cx="88" cy="83" r="1.5" fill="white" />
      <circle cx="116" cy="83" r="1.5" fill="white" />
      {/* Eyebrows */}
      <path d="M80 76 Q86 72 92 76" stroke="#2D1810" strokeWidth="2" fill="none" />
      <path d="M108 76 Q114 72 120 76" stroke="#2D1810" strokeWidth="2" fill="none" />
      {/* Smile */}
      <path d="M91 98 Q100 108 109 98" stroke="#E8825C" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Cheeks */}
      <ellipse cx="78" cy="95" rx="7" ry="4" fill="#FFBFA0" opacity="0.4" />
      <ellipse cx="122" cy="95" rx="7" ry="4" fill="#FFBFA0" opacity="0.4" />
      {/* NAVY BLUE skirt */}
      <path d="M62 205 L68 215 L78 210 L88 215 L100 210 L112 215 L122 210 L132 215 L138 205 L138 195 L62 195 Z" fill="#1E3A5F" />
      {/* Arms - white sleeves */}
      <rect x="40" y="135" width="22" height="55" rx="11" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
      <rect x="138" y="135" width="22" height="55" rx="11" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
      {/* Hands */}
      <circle cx="51" cy="190" r="10" fill="#FFDBB4" />
      <circle cx="149" cy="190" r="10" fill="#FFDBB4" />
      {/* Pencil in hand */}
      <rect x="145" y="172" width="4" height="32" rx="2" fill="#FBBF24" transform="rotate(-15 147 185)" />
      <rect x="145" y="200" width="4" height="6" rx="1" fill="#F472B6" transform="rotate(-15 147 200)" />
      {/* NAVY BLUE long pants/legs */}
      <rect x="74" y="212" width="22" height="40" rx="11" fill="#1E3A5F" />
      <rect x="104" y="212" width="22" height="40" rx="11" fill="#1E3A5F" />
      {/* Shoes */}
      <ellipse cx="85" cy="258" rx="14" ry="8" fill="#1F2937" />
      <ellipse cx="115" cy="258" rx="14" ry="8" fill="#1F2937" />
    </svg>
  );
}

// SVG Illustration: SMA - white shirt, gray pants
function StudentSMA({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="smaTitle">
      <title id="smaTitle">Ilustrasi laptop dan tugas akademik</title>
      {/* Body - White shirt */}
      <rect x="60" y="130" width="80" height="95" rx="15" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
      {/* Collar */}
      <path d="M85 130 L100 152 L115 130" fill="white" stroke="#D1D5DB" strokeWidth="1" />
      {/* Pocket */}
      <rect x="72" y="155" width="20" height="14" rx="3" fill="none" stroke="#D1D5DB" strokeWidth="1" />
      {/* Badge on pocket */}
      <rect x="76" y="158" width="8" height="4" rx="1" fill="#60A5FA" opacity="0.6" />
      {/* Head */}
      <circle cx="100" cy="85" r="42" fill="#FFDBB4" />
      {/* Hair - neat boy */}
      <path d="M58 75 Q60 35 100 30 Q140 35 142 75 L140 65 Q135 45 100 40 Q65 45 60 65 Z" fill="#1A0F0A" />
      <path d="M58 75 L60 82 Q62 70 68 65" fill="#1A0F0A" />
      <path d="M142 75 L140 82 Q138 70 132 65" fill="#1A0F0A" />
      {/* Glasses */}
      <circle cx="86" cy="88" r="12" fill="none" stroke="#374151" strokeWidth="2" />
      <circle cx="114" cy="88" r="12" fill="none" stroke="#374151" strokeWidth="2" />
      <line x1="98" y1="88" x2="102" y2="88" stroke="#374151" strokeWidth="2" />
      <line x1="74" y1="86" x2="66" y2="82" stroke="#374151" strokeWidth="1.5" />
      <line x1="126" y1="86" x2="134" y2="82" stroke="#374151" strokeWidth="1.5" />
      {/* Eyes */}
      <circle cx="86" cy="89" r="3.5" fill="#1E3A8A" />
      <circle cx="114" cy="89" r="3.5" fill="#1E3A8A" />
      <circle cx="88" cy="87" r="1.2" fill="white" />
      <circle cx="116" cy="87" r="1.2" fill="white" />
      {/* Smile */}
      <path d="M92 105 Q100 112 108 105" stroke="#E8825C" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Arms - white sleeves */}
      <rect x="38" y="140" width="22" height="60" rx="11" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
      <rect x="140" y="140" width="22" height="60" rx="11" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
      {/* Laptop */}
      <rect x="42" y="196" width="38" height="26" rx="4" fill="#374151" />
      <rect x="45" y="199" width="32" height="18" rx="2" fill="#1E3A8A" />
      <rect x="48" y="202" width="10" height="2" rx="1" fill="#93C5FD" />
      <rect x="48" y="206" width="16" height="2" rx="1" fill="#60A5FA" />
      <rect x="48" y="210" width="8" height="2" rx="1" fill="#93C5FD" />
      {/* Hands */}
      <circle cx="49" cy="200" r="10" fill="#FFDBB4" />
      <circle cx="151" cy="200" r="10" fill="#FFDBB4" />
      {/* GRAY pants */}
      <rect x="70" y="220" width="25" height="48" rx="12" fill="#6B7280" />
      <rect x="105" y="220" width="25" height="48" rx="12" fill="#6B7280" />
      {/* Shoes */}
      <ellipse cx="82" cy="273" rx="16" ry="8" fill="#1F2937" />
      <ellipse cx="118" cy="273" rx="16" ry="8" fill="#1F2937" />
    </svg>
  );
}

// SVG Illustration: Kuliah - blue jacket, graduation cap
function StudentKuliah({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 200 310" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="kuliahTitle">
      <title id="kuliahTitle">Ilustrasi mahasiswa mengerjakan tugas</title>
      {/* Body - Blue Jacket */}
      <rect x="58" y="135" width="84" height="105" rx="15" fill="#2563EB" />
      {/* Jacket detail - zipper */}
      <line x1="100" y1="135" x2="100" y2="240" stroke="#1D4ED8" strokeWidth="2" />
      {/* Inner white shirt */}
      <rect x="85" y="135" width="30" height="25" rx="5" fill="white" />
      {/* Head */}
      <circle cx="100" cy="85" r="44" fill="#FFDBB4" />
      {/* Hair */}
      <path d="M56 78 Q58 30 100 25 Q142 30 144 78 Q140 50 100 45 Q60 50 56 78 Z" fill="#1A0F0A" />
      {/* Graduation cap */}
      <polygon points="100,15 50,35 100,55 150,35" fill="#1E3A8A" />
      <rect x="92" y="10" width="16" height="8" rx="3" fill="#1E3A8A" />
      <line x1="140" y1="35" x2="150" y2="55" stroke="#FBBF24" strokeWidth="2" />
      <circle cx="150" cy="57" r="4" fill="#FBBF24" />
      {/* Eyes */}
      <circle cx="85" cy="88" r="4" fill="#1E3A8A" />
      <circle cx="115" cy="88" r="4" fill="#1E3A8A" />
      <circle cx="87" cy="86" r="1.5" fill="white" />
      <circle cx="117" cy="86" r="1.5" fill="white" />
      {/* Eyebrows */}
      <path d="M78 78 Q85 74 92 78" stroke="#1A0F0A" strokeWidth="2.5" fill="none" />
      <path d="M108 78 Q115 74 122 78" stroke="#1A0F0A" strokeWidth="2.5" fill="none" />
      {/* Smile */}
      <path d="M90 103 Q100 115 110 103" stroke="#E8825C" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Arms - blue jacket */}
      <rect x="35" y="145" width="23" height="68" rx="11" fill="#2563EB" />
      <rect x="142" y="145" width="23" height="68" rx="11" fill="#2563EB" />
      {/* Hands */}
      <circle cx="47" cy="213" r="10" fill="#FFDBB4" />
      <circle cx="153" cy="213" r="10" fill="#FFDBB4" />
      {/* Certificate/Diploma */}
      <rect x="140" y="195" width="35" height="25" rx="3" fill="#FBBF24" />
      <rect x="144" y="200" width="20" height="2" rx="1" fill="white" opacity="0.7" />
      <rect x="144" y="205" width="14" height="2" rx="1" fill="white" opacity="0.5" />
      <circle cx="157" cy="212" r="4" fill="#EF4444" opacity="0.7" />
      {/* Dark pants */}
      <rect x="68" y="235" width="27" height="48" rx="13" fill="#374151" />
      <rect x="105" y="235" width="27" height="48" rx="13" fill="#374151" />
      {/* Shoes */}
      <ellipse cx="82" cy="288" rx="17" ry="9" fill="#1E3A8A" />
      <ellipse cx="118" cy="288" rx="17" ry="9" fill="#1E3A8A" />
    </svg>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const illustrationsRef = useRef(null);
  const blurBlobsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge', { y: 30, opacity: 0, duration: 0.8 })
        .from('.hero-headline', { y: 40, opacity: 0, duration: 0.9 }, '-=0.4')
        .from('.hero-sub', { y: 30, opacity: 0, duration: 0.8 }, '-=0.5')
        .from('.hero-btn', { y: 25, opacity: 0, stagger: 0.15, duration: 0.7 }, '-=0.4')
        .from('.hero-stat', { y: 20, opacity: 0, stagger: 0.1, duration: 0.6 }, '-=0.3');

      // Student illustrations stagger
      gsap.from('.student-illust', {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'back.out(1.5)',
        delay: 0.6,
      });

      // Floating animations for illustrations removed based on request

      // Background blobs animation
      gsap.to('.blur-blob-1', {
        x: 30,
        y: -20,
        duration: 6,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
      gsap.to('.blur-blob-2', {
        x: -25,
        y: 25,
        duration: 7,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
      gsap.to('.blur-blob-3', {
        x: 20,
        y: 15,
        duration: 8,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Mouse parallax removed based on request
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/50 to-secondary/30" />

      {/* Floating blur blobs */}
      <div ref={blurBlobsRef} className="absolute inset-0 pointer-events-none">
        <div className="blur-blob blur-blob-1 absolute top-20 left-[10%] w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob" />
        <div className="blur-blob blur-blob-2 absolute top-40 right-[15%] w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        <div className="blur-blob blur-blob-3 absolute bottom-20 left-[30%] w-80 h-80 bg-secondary/40 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-12 xl:px-16 pt-24 md:pt-28 pb-12 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-2 lg:gap-6 items-center">
          {/* Left - Text */}
          <div className="text-center lg:text-left">
            <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] font-semibold text-primary-dark tracking-wide uppercase">
                Terpercaya & Profesional
              </span>
            </div>

            <h1 className="hero-headline text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-extrabold leading-tight tracking-tight mb-4">
              <span className="text-text-heading">Ruang Tugas<span className="sr-only"> — </span></span>
              <br />
              <span className="text-gradient">Solusi Tugas</span>
              <br />
              <span className="text-text-heading">Sekolah & Kuliah</span>
            </h1>

            <p className="hero-sub text-sm sm:text-base text-text-body/80 lg:max-w-lg mx-auto lg:mx-0 mb-4 lg:mb-6 leading-relaxed">
              Bantuan tugas IT, matematika, karya ilmiah, desain Canva, jaringan komputer, coding, dan berbagai kebutuhan akademik lainnya.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-2 lg:mb-8">
              <a
                href="#pesan"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#pesan')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hero-btn px-6 py-3 bg-gradient-to-r from-primary to-primary-deeper text-white text-sm font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300 text-center"
              >
                📩 Pesan Sekarang
              </a>
              <a
                href="#layanan"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#layanan')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hero-btn px-6 py-3 bg-white border-2 border-blue-100 text-primary-dark text-sm font-bold rounded-xl shadow-md hover:border-primary hover:shadow-primary/20 hover:scale-105 transition-all duration-300 text-center"
              >
                📋 Lihat Layanan
              </a>
            </div>

            {/* Stats (Desktop Only) */}
            <div className="hidden lg:flex gap-6 justify-start">
              <div className="hero-stat text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-text-heading">30+</div>
                <div className="text-[11px] sm:text-xs text-text-muted font-medium">Tugas Selesai</div>
              </div>
              <div className="hero-stat text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-text-heading">27+</div>
                <div className="text-[11px] sm:text-xs text-text-muted font-medium">Client Puas</div>
              </div>
              <div className="hero-stat text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-text-heading">4.8</div>
                <div className="text-[11px] sm:text-xs text-text-muted font-medium">Rating ⭐</div>
              </div>
            </div>
          </div>

          {/* Right - Illustrations */}
          <div ref={illustrationsRef} className="relative flex flex-col items-center justify-center -mt-24 lg:mt-0">
            {/* Background glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse-glow" />
            </div>

            {/* Student illustrations - centered and moved up */}
            <div className="relative flex items-end justify-center gap-1 sm:gap-3 md:gap-4 mb-10 md:mb-24">
              <div className="student-illust student-sd">
                <StudentSD className="w-16 h-auto sm:w-20 md:w-24 lg:w-28 drop-shadow-xl" />
              </div>
              <div className="student-illust student-smp">
                <StudentSMP className="w-18 h-auto sm:w-22 md:w-26 lg:w-32 drop-shadow-xl" />
              </div>
              <div className="student-illust student-sma">
                <StudentSMA className="w-20 h-auto sm:w-24 md:w-28 lg:w-34 drop-shadow-xl" />
              </div>
              <div className="student-illust student-kuliah">
                <StudentKuliah className="w-20 h-auto sm:w-24 md:w-30 lg:w-36 drop-shadow-xl" />
              </div>
            </div>

            {/* Stats (Mobile Only) - Placed under illustrations */}
            <div className="flex lg:hidden gap-6 justify-center w-full pb-8">
              <div className="hero-stat text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-text-heading">30+</div>
                <div className="text-[11px] sm:text-xs text-text-muted font-medium">Tugas Selesai</div>
              </div>
              <div className="hero-stat text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-text-heading">27+</div>
                <div className="text-[11px] sm:text-xs text-text-muted font-medium">Client Puas</div>
              </div>
              <div className="hero-stat text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-text-heading">4.8</div>
                <div className="text-[11px] sm:text-xs text-text-muted font-medium">Rating ⭐</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <WaveDivider topColor="transparent" bottomColor="#DBEAFE" variant="layered" />
    </section>
  );
}
