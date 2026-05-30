import { useState } from 'react';
import { HiAcademicCap, HiColorSwatch, HiDesktopComputer } from 'react-icons/hi';
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
  'React / Vite',
  'Laravel support',
  'Database',
  'UI basic',
  'Deployment',
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
  },
  {
    icon: HiColorSwatch,
    title: 'Surgency Creative',
    tagline: 'Desain & Konten Kreatif',
    desc: 'Layanan desain dan konten kreatif untuk kebutuhan visual, promosi, personal branding, dan media sosial.',
    list: creativeServices,
    accent: 'bg-[#123a92]',
  },
  {
    icon: HiDesktopComputer,
    title: 'Surgency Digital',
    tagline: 'Solusi Digital',
    desc: 'Solusi digital untuk website, coding, UI, dan project online yang modern, responsif, serta mudah dikembangkan.',
    list: digitalServices,
    accent: 'bg-[#091344]',
  },
];

function ServiceList({ items }) {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items.slice(0, 4);
  const hasMore = items.length > 4;

  return (
    <div>
      <div className="flex flex-wrap gap-1.5 md:gap-2">
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
          className="mt-2 text-[11px] md:text-xs font-semibold text-primary-dark hover:text-primary-deeper transition-colors"
        >
          {showAll ? 'Tampilkan lebih sedikit' : `+${items.length - 4} lainnya`}
        </button>
      )}
    </div>
  );
}

export default function Layanan() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <article
                key={i}
                className="service-card group relative p-5 md:p-6 rounded-[24px] bg-white border border-[rgba(9,19,68,0.08)] shadow-[0_18px_45px_rgba(9,19,68,0.06)] hover:shadow-[0_22px_55px_rgba(9,19,68,0.10)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Icon Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`${svc.accent} w-12 h-12 rounded-xl flex items-center justify-center shadow-md flex-shrink-0`}>
                    <Icon className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-heading leading-tight">{svc.title}</h3>
                    <p className="text-xs text-text-muted font-medium">{svc.tagline}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-text-body/70 leading-relaxed mb-4 line-clamp-2">
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
                  className="mt-4 w-full text-center py-2.5 rounded-xl text-sm font-semibold bg-primary-dark text-white shadow-[0_12px_24px_rgba(9,19,68,0.18)] hover:bg-primary hover:shadow-[0_14px_28px_rgba(5,66,201,0.22)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  Konsultasi Layanan
                </a>

                <div className="absolute inset-0 rounded-[24px] bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </article>
            );
          })}
        </div>
      </div>
      <WaveDivider topColor="#eef4ff" bottomColor="#ffffff" variant="simple" />
    </section>
  );
}
