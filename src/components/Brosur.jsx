import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WaveDivider from './WaveDivider';

gsap.registerPlugin(ScrollTrigger);

export default function Brosur() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade up and scroll reveal for text
      gsap.from(textRef.current.children, {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 85%',
        },
      });

      // Scroll reveal for image
      gsap.from(imageRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 85%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="brosur" ref={sectionRef} className="relative bg-gradient-to-b from-secondary via-white to-white overflow-hidden pt-10">
      {/* Floating blur background tipis */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 left-[10%] w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-12 xl:px-16 py-8 md:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-8 lg:gap-16 items-center">

          {/* Kolom kiri: Teks */}
          <div ref={textRef} className="text-center lg:text-left order-1 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 mb-4 shadow-sm">
              <span className="text-[11px] font-semibold text-primary-dark tracking-wide uppercase">
                Brosur Kami
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold mb-4 tracking-tight leading-tight">
              <span className="text-text-heading">Tugas Beres, Mulai </span>
              <br className="hidden sm:block" />
              <span className="text-gradient">Rp 20.000 </span>
              <span className="text-text-heading">Aja!</span>
            </h2>

            <p className="text-text-body/80 text-sm sm:text-base leading-relaxed mb-6 lg:mb-8 max-w-lg mx-auto lg:mx-0">
              Jangan biarkan tugas menumpuk. Kami siap bantu kerjakan tugas IT, matematika, desain Canva, karya ilmiah, hingga jaringan dengan hasil terbaik dan harga terjangkau.
            </p>

            <a
              href="/brosur_ruangtugas_portrait_4x5 (1).jpg"
              download="Brosur_Ruang_Tugas.jpg"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary to-primary-deeper text-white text-sm font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Download Brosur (JPG)
            </a>
          </div>

          {/* Kolom kanan: Gambar Brosur */}
          <div ref={imageRef} className="order-2 lg:order-2 flex justify-center -mt-12 sm:-mt-16 md:mt-0">
            <div className="relative group w-full max-w-sm lg:max-w-md xl:max-w-lg">
              {/* Glow effect on hover */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary/30 to-accent/30 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

              <img
                src="/brosur_ruangtugas_portrait_4x5 (1).jpg"
                alt="brosur ruang tugas"
                loading="lazy"
                className="relative z-10 w-full h-auto object-contain rounded-2xl shadow-md hover:shadow-xl border-2 border-blue-50 group-hover:scale-[1.02] transition-transform duration-500 bg-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider transisi ke bg-secondary/50 (#EFF6FF) yang digunakan di Layanan */}
      <WaveDivider topColor="transparent" bottomColor="#EFF6FF" variant="simple" />
    </section>
  );
}
