import { useState } from 'react';
import { HiAcademicCap, HiColorSwatch, HiDesktopComputer } from 'react-icons/hi';

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
    color: 'from-blue-500 to-indigo-600',
    bgGlow: 'bg-blue-50',
    borderColor: 'border-blue-100',
    iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
  },
  {
    icon: HiColorSwatch,
    title: 'Surgency Creative',
    tagline: 'Desain & Konten Kreatif',
    desc: 'Layanan desain dan konten kreatif untuk kebutuhan visual, promosi, personal branding, dan media sosial.',
    list: creativeServices,
    color: 'from-pink-500 to-rose-600',
    bgGlow: 'bg-pink-50',
    borderColor: 'border-pink-100',
    iconBg: 'bg-gradient-to-br from-pink-500 to-rose-600',
  },
  {
    icon: HiDesktopComputer,
    title: 'Surgency Digital',
    tagline: 'Solusi Digital',
    desc: 'Solusi digital untuk website, coding, UI, dan project online yang modern, responsif, serta mudah dikembangkan.',
    list: digitalServices,
    color: 'from-emerald-500 to-teal-600',
    bgGlow: 'bg-emerald-50',
    borderColor: 'border-emerald-100',
    iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
  },
];

function ServiceList({ items, color }) {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items.slice(0, 4);
  const hasMore = items.length > 4;

  return (
    <div>
      <div className="flex flex-wrap gap-1.5 md:gap-2">
        {visibleItems.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 text-[11px] md:text-xs font-medium text-text-heading border border-blue-100"
          >
            <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${color} flex-shrink-0`} />
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
    <section id="layanan" className="relative bg-secondary/50">
      <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-16 py-14 md:py-20">
        <div className="layanan-title text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 mb-3">
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
                className={`service-card group relative p-5 md:p-6 rounded-2xl bg-white border ${svc.borderColor} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col`}
              >
                {/* Icon Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`${svc.iconBg} w-12 h-12 rounded-xl flex items-center justify-center shadow-md flex-shrink-0`}>
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
                  <ServiceList items={svc.list} color={svc.color} />
                </div>

                {/* CTA */}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 w-full text-center py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r ${svc.color} text-white shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300`}
                >
                  Konsultasi Layanan
                </a>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
