import { FaWhatsapp } from 'react-icons/fa';
import { HiAcademicCap, HiCode, HiColorSwatch } from 'react-icons/hi';
import WaveDivider from './WaveDivider';

const WA_LINK = 'https://wa.me/6285719630624?text=Halo%20Surgency%20Studio%2C%20saya%20ingin%20konsultasi%20kebutuhan%20layanan.';

const pillars = [
  {
    icon: HiAcademicCap,
    title: 'Edu',
    desc: 'Pendampingan akademik, riset, PPT, makalah, dokumen, dan coding akademik.',
  },
  {
    icon: HiColorSwatch,
    title: 'Creative',
    desc: 'Poster, feed Instagram, carousel, CV, portfolio, branding, dan konten video.',
  },
  {
    icon: HiCode,
    title: 'Digital',
    desc: 'Website, landing page, company profile, UI, coding, dan deployment.',
  },
];

export default function Brosur() {
  return (
    <section id="brosur" className="relative overflow-hidden bg-secondary">
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16 py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-8 rounded-[28px] border border-[rgba(9,19,68,0.08)] bg-white p-5 shadow-[0_18px_55px_rgba(9,19,68,0.08)] sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="brand-panel rounded-[24px] bg-primary-dark p-6 text-white sm:p-8">
            <img
              src="/surgency-01.png"
              alt="Surgency Studio"
              className="h-20 w-auto rounded-xl bg-white p-2 shadow-[0_12px_28px_rgba(0,0,0,0.12)]"
            />
            <div className="mt-7 h-1.5 w-16 rounded-full bg-primary" />
            <h2 className="mt-4 max-w-lg text-3xl font-black leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.22)] sm:text-4xl">
              Solusi lengkap untuk kebutuhan Anda
            </h2>
            <p className="mt-4 max-w-md text-sm font-semibold leading-7 text-white/90">
              Satu studio untuk dukungan akademik, desain kreatif, dan solusi
              digital. Konsultasikan brief, deadline, dan target output Anda.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 transition hover:bg-white hover:text-primary-dark sm:w-auto"
            >
              <FaWhatsapp className="text-lg" />
              Konsultasi Sekarang
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-[22px] border border-[rgba(5,66,201,0.15)] bg-secondary p-5">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl text-primary shadow-sm">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-extrabold text-text-heading">{item.title}</h3>
                  <p className="mt-2 text-xs leading-6 text-text-body/75">{item.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
      <WaveDivider topColor="#eef4ff" bottomColor="#eef4ff" variant="simple" />
    </section>
  );
}
