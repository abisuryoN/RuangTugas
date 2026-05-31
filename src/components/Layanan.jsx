import { useEffect, useRef, useState } from 'react';
import { HiAcademicCap, HiColorSwatch, HiDesktopComputer, HiStar } from 'react-icons/hi';
import WaveDivider from './WaveDivider';

const eduServices = [
  'Pendampingan materi',
  'Struktur dokumen',
  'Analisis soal',
  'Studi kasus',
  'Riset referensi',
  'Coding akademik',
  'Perhitungan & data',
  'Perapihan naskah',
  'Penjelasan konsep',
];

const creativeServices = [
  'Desain poster',
  'Feed Instagram',
  'Carousel',
  'CV & portfolio',
  'Branding visual',
  'Desain proposal',
  'Video konten',
  'Reels / TikTok',
  'Thumbnail',
  'Konten promosi',
];

const digitalServices = [
  'Website',
  'Landing page',
  'Company profile',
  'Web UMKM',
  'Personal branding site',
  'Toko online',
  'Portofolio online',
  'Dashboard simple',
  'UI / UX Design',
  'Maintenance web',
];

const WA_LINK = 'https://wa.me/6285719630624?text=Halo%20Surgency%20Studio%2C%20saya%20ingin%20konsultasi%20layanan.';

const services = [
  {
    icon: HiAcademicCap,
    title: 'Surgency Edu',
    tagline: 'Pendampingan Akademik',
    desc: 'Pendampingan akademik untuk riset, struktur, perapihan dokumen, dan pemahaman materi agar hasil lebih terarah.',
    list: eduServices,
    accent: 'bg-[#0542c9]',
    detailHref: '/edu',
  },
  {
    icon: HiColorSwatch,
    title: 'Surgency Creative',
    tagline: 'Desain & Konten Kreatif',
    desc: 'Layanan desain dan konten kreatif untuk kebutuhan visual, promosi, personal branding, dan media sosial.',
    list: creativeServices,
    accent: 'bg-[#123a92]',
    detailHref: '/creative',
  },
  {
    icon: HiDesktopComputer,
    title: 'Surgency Digital',
    tagline: 'Solusi Digital',
    desc: 'Solusi digital untuk website, coding, UI, dan project online yang modern, responsif, serta mudah dikembangkan.',
    list: digitalServices,
    accent: 'bg-[#091344]',
    detailHref: '/digital',
  },
];

const mobilePaketCard = {
  icon: HiStar,
  title: 'Paket',
  tagline: 'Konten + Landing Page',
  desc: 'Paket siap pakai untuk bantu brand tampil lebih rapi dan profesional.',
  accent: 'bg-[#f59e0b]',
  mobileOnly: true,
};

function ServiceList({ items }) {
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const limit = isMobile ? 3 : 4;
  const visibleItems = showAll ? items : items.slice(0, limit);
  const hasMore = items.length > limit;

  return (
    <div className="service-list">
      <div className="service-list-chips flex flex-wrap content-start gap-1.5 md:gap-2">
        {visibleItems.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white text-[11px] md:text-xs font-medium text-text-heading border border-[rgba(5,66,201,0.15)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
      {hasMore && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="show-more-service text-[11px] md:text-xs font-semibold text-primary-dark hover:text-primary transition-colors"
        >
          {showAll ? 'Tutup' : `+${items.length - limit} lainnya`}
        </button>
      )}
    </div>
  );
}

function ServiceCard({ svc }) {
  const Icon = svc.icon;
  return (
    <article className="service-card service-detail-card group relative p-5 md:p-6 rounded-[24px] bg-white border border-[rgba(9,19,68,0.08)] shadow-[0_18px_45px_rgba(9,19,68,0.06)] hover:shadow-[0_22px_55px_rgba(9,19,68,0.10)] hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="flex items-start gap-3 mb-3 md:mb-4">
        <div className={`${svc.accent} w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-md flex-shrink-0`}>
          <Icon className="text-white text-lg md:text-xl" />
        </div>
        <div>
          <h3 className="text-sm md:text-base font-bold text-text-heading leading-tight">{svc.title}</h3>
          <p className="text-[10px] md:text-xs text-text-muted font-medium">{svc.tagline}</p>
        </div>
      </div>

      <p className="text-[11px] md:text-xs text-text-body/70 leading-relaxed mb-3 line-clamp-2">
        {svc.desc}
      </p>

      <div className="mt-auto">
        <ServiceList items={svc.list} />
      </div>

      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 md:mt-4 w-full text-center py-2 md:py-2.5 rounded-xl text-[11px] md:text-sm font-semibold bg-primary-dark text-white shadow-[0_12px_24px_rgba(9,19,68,0.18)] hover:bg-primary hover:shadow-[0_14px_28px_rgba(5,66,201,0.22)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
      >
        Konsultasi Layanan
      </a>
      <a href={svc.detailHref} className="relative z-10 mt-2 text-center text-[11px] font-bold text-primary transition-colors hover:text-primary-dark md:text-xs">
        Lihat Detail &rarr;
      </a>

      <div className="absolute inset-0 rounded-[24px] bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </article>
  );
}

function MobilePaketCard() {
  return (
    <article className="service-card group relative p-5 rounded-[24px] bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 shadow-[0_18px_45px_rgba(9,19,68,0.06)] hover:shadow-[0_22px_55px_rgba(9,19,68,0.10)] hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="flex items-start gap-3 mb-3">
        <div className="bg-[#f59e0b] w-11 h-11 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
          <HiStar className="text-white text-lg" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-text-heading leading-tight">{mobilePaketCard.title}</h3>
          <p className="text-[10px] text-text-muted font-medium">{mobilePaketCard.tagline}</p>
        </div>
      </div>
      <p className="text-[11px] text-text-body/70 leading-relaxed mb-3 line-clamp-2">{mobilePaketCard.desc}</p>
      <div className="mt-2 mb-3">
        <div className="flex flex-wrap gap-1.5">
          {['10-20 Konten', 'Landing Page', 'Copywriting', '+'].map((chip) => (
            <span key={chip} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white text-[10px] font-medium text-text-heading border border-amber-200">
              {chip}
            </span>
          ))}
        </div>
      </div>
      <a href="#paket" className="mt-4 flex min-h-10 w-full items-center justify-center rounded-xl bg-amber-500 px-4 py-2.5 text-center text-xs font-semibold text-white shadow-[0_12px_24px_rgba(245,158,11,0.25)] transition-all duration-300 hover:scale-[1.02] hover:bg-amber-600 active:scale-[0.98]">
        Lihat Paket
      </a>
    </article>
  );
}

export default function Layanan() {
  const carouselRef = useRef(null);
  const transitionTimerRef = useRef(null);
  const isTransitioningRef = useRef(false);
  const activeSlideRef = useRef(9);
  const mobileCards = [...services, mobilePaketCard];
  const mobileSlides = Array.from({ length: 5 }, () => mobileCards).flat();

  const jumpToSlide = (index) => {
    const carousel = carouselRef.current;
    const slide = carousel?.children[index];
    if (!carousel || !slide) return;

    carousel.style.scrollBehavior = 'auto';
    carousel.style.scrollSnapType = 'none';
    carousel.scrollLeft = slide.offsetLeft - (carousel.clientWidth - slide.clientWidth) / 2;
    activeSlideRef.current = index;
    requestAnimationFrame(() => {
      carousel.style.scrollBehavior = '';
      carousel.style.scrollSnapType = '';
    });
  };

  const scrollToSlide = (index) => {
    const carousel = carouselRef.current;
    const slide = carousel?.children[index];
    if (!carousel || !slide) return;

    carousel.scrollTo({
      left: slide.offsetLeft - (carousel.clientWidth - slide.clientWidth) / 2,
      behavior: 'smooth',
    });
    activeSlideRef.current = index;
  };

  const moveCarousel = (direction) => {
    if (isTransitioningRef.current) return;

    let currentIndex = activeSlideRef.current;
    if (currentIndex <= mobileCards.length) {
      currentIndex += mobileCards.length * 2;
      jumpToSlide(currentIndex);
    } else if (currentIndex >= mobileSlides.length - mobileCards.length - 1) {
      currentIndex -= mobileCards.length * 2;
      jumpToSlide(currentIndex);
    }

    isTransitioningRef.current = true;
    requestAnimationFrame(() => scrollToSlide(currentIndex + direction));
    window.clearTimeout(transitionTimerRef.current);
    transitionTimerRef.current = window.setTimeout(() => {
      isTransitioningRef.current = false;
    }, 380);
  };

  useEffect(() => {
    const positionCarousel = requestAnimationFrame(() => jumpToSlide(activeSlideRef.current));
    return () => {
      cancelAnimationFrame(positionCarousel);
      window.clearTimeout(transitionTimerRef.current);
    };
  }, []);

  return (
    <section id="layanan" className="relative bg-secondary">
      <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-16 py-14 md:py-20">
        <div className="layanan-title text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[rgba(5,66,201,0.15)] mb-3">
            <span className="text-[11px] font-semibold text-primary-dark tracking-wide uppercase">Layanan Kami</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-extrabold mb-3 tracking-tight text-text-heading">
            Layanan Surgency Studio
          </h2>
          <p className="text-text-body/70 text-sm sm:text-base leading-relaxed">
            Pilih layanan sesuai kebutuhan Anda, dari akademik, kreatif, sampai digital.
          </p>
        </div>

        {/* Mobile: 2 columns | Desktop: 3 columns */}
        <div className="hidden items-start gap-3 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <article
                key={i}
                className="service-card group relative p-5 md:p-6 rounded-[24px] bg-white border border-[rgba(9,19,68,0.08)] shadow-[0_18px_45px_rgba(9,19,68,0.06)] hover:shadow-[0_22px_55px_rgba(9,19,68,0.10)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Icon Header */}
                <div className="flex items-start gap-3 mb-3 md:mb-4">
                  <div className={`${svc.accent} w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-md flex-shrink-0`}>
                    <Icon className="text-white text-lg md:text-xl" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-text-heading leading-tight">{svc.title}</h3>
                    <p className="text-[10px] md:text-xs text-text-muted font-medium">{svc.tagline}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[11px] md:text-xs text-text-body/70 leading-relaxed mb-3 line-clamp-2">
                  {svc.desc}
                </p>

                {/* Service list */}
                <div className="mt-auto">
                  <ServiceList items={svc.list} />
                </div>

                {/* CTA */}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 md:mt-4 w-full text-center py-2 md:py-2.5 rounded-xl text-[11px] md:text-sm font-semibold bg-primary-dark text-white shadow-[0_12px_24px_rgba(9,19,68,0.18)] hover:bg-primary hover:shadow-[0_14px_28px_rgba(5,66,201,0.22)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  Konsultasi Layanan
                </a>
                <a
                  href={svc.detailHref}
                  className="relative z-10 mt-2 text-center text-[11px] font-bold text-primary transition-colors hover:text-primary-dark md:text-xs"
                >
                  Lihat Detail &rarr;
                </a>

                <div className="absolute inset-0 rounded-[24px] bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </article>
            );
          })}

          {/* Paket Card — mobile only */}
          <article className="mobile-only-service service-card group relative p-5 rounded-[24px] bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 shadow-[0_18px_45px_rgba(9,19,68,0.06)] hover:shadow-[0_22px_55px_rgba(9,19,68,0.10)] hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-[#f59e0b] w-11 h-11 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                <HiStar className="text-white text-lg" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-text-heading leading-tight">{mobilePaketCard.title}</h3>
                <p className="text-[10px] text-text-muted font-medium">{mobilePaketCard.tagline}</p>
              </div>
            </div>
            <p className="text-[11px] text-text-body/70 leading-relaxed mb-3 line-clamp-2">
              {mobilePaketCard.desc}
            </p>
            <div className="mt-auto mb-3">
              <div className="flex flex-wrap gap-1.5">
                {['10-20 Konten', 'Landing Page', 'Copywriting', '+'].map((chip, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white text-[10px] font-medium text-text-heading border border-amber-200"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <a
              href="#paket"
              className="mt-4 flex min-h-10 w-full items-center justify-center rounded-xl bg-amber-500 px-4 py-2.5 text-center text-xs font-semibold text-white shadow-[0_12px_24px_rgba(245,158,11,0.25)] transition-all duration-300 hover:scale-[1.02] hover:bg-amber-600 active:scale-[0.98]"
            >
              Lihat Paket
            </a>
          </article>
        </div>

        <div className="layanan-carousel-shell md:hidden">
          <div ref={carouselRef} className="layanan-carousel" aria-label="Pilihan layanan Surgency Studio">
            {mobileSlides.map((svc, index) => (
              svc.mobileOnly
                ? <MobilePaketCard key={`${svc.title}-${index}`} />
                : <ServiceCard key={`${svc.title}-${index}`} svc={svc} />
            ))}
          </div>
          <button type="button" className="layanan-carousel-button layanan-carousel-prev" onClick={() => moveCarousel(-1)} aria-label="Lihat layanan sebelumnya">
            &lt;
          </button>
          <button type="button" className="layanan-carousel-button layanan-carousel-next" onClick={() => moveCarousel(1)} aria-label="Lihat layanan berikutnya">
            &gt;
          </button>
        </div>
      </div>
      <WaveDivider topColor="#eef4ff" bottomColor="#ffffff" variant="simple" />
    </section>
  );
}
