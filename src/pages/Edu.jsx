import { Children, cloneElement, useEffect, useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import {
  HiArrowLeft,
  HiCheck,
  HiChevronLeft,
  HiChevronRight,
  HiOutlineAcademicCap,
  HiOutlineCalculator,
  HiOutlineClipboardCheck,
  HiOutlineClipboardList,
  HiOutlineCode,
  HiOutlineLightningBolt,
  HiOutlinePresentationChartBar,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import BottomNav from '../components/BottomNav';
import Footer from '../components/Footer';
import WaveDivider from '../components/WaveDivider';

const CONSULTATION_LINK =
  'https://wa.me/6285719630624?text=Halo%20Surgency%20Studio,%20saya%20mau%20konsultasi%20layanan%20Surgency%20Edu.';
const PRICE_LINK =
  'https://wa.me/6285719630624?text=Halo%20Surgency%20Studio,%20saya%20mau%20konsultasi%20harga%20layanan%20Surgency%20Edu.';

const serviceGroups = [
  {
    title: 'Akademik & Penulisan',
    icon: HiOutlineAcademicCap,
    items: [
      'Makalah',
      'Artikel',
      'Laporan',
      'Proposal',
      'Resume materi',
      'Review jurnal',
      'Studi kasus',
      'Riset referensi',
      'Penyusunan struktur jawaban',
      'Parafrase dan proofreading',
      'Format daftar pustaka',
      'Perapihan dokumen',
    ],
  },
  {
    title: 'Data & Perhitungan',
    icon: HiOutlineCalculator,
    items: [
      'Analisis data sederhana',
      'Perhitungan manual',
      'Excel',
      'Statistik dasar',
      'Metode numerik',
      'Aljabar linear',
      'Matematika diskrit',
      'Fisika dasar',
      'Interpretasi hasil perhitungan',
    ],
  },
  {
    title: 'Coding & Project Akademik',
    icon: HiOutlineCode,
    items: [
      'HTML, CSS, JavaScript',
      'PHP dan Laravel',
      'Java NetBeans',
      'Database MySQL',
      'SQL',
      'ERD',
      'UML',
      'Flowchart',
      'Laporan project',
      'Dokumentasi sistem',
      'Debugging dasar',
    ],
  },
  {
    title: 'Presentasi Akademik',
    icon: HiOutlinePresentationChartBar,
    items: [
      'PPT tugas',
      'Desain slide',
      'Naskah presentasi',
      'Ringkasan materi',
      'Struktur pembahasan',
      'Persiapan tanya jawab',
    ],
  },
];

const prices = [
  {
    title: 'Basic Edu',
    price: 'Mulai Rp25.000',
    description:
      'Untuk kebutuhan ringan seperti resume materi, perapihan dokumen, revisi kecil, rangkuman, dan bantuan tugas sederhana.',
  },
  {
    title: 'Standard Edu',
    price: 'Mulai Rp50.000',
    description:
      'Untuk makalah, laporan, PPT, analisis soal, studi kasus, riset referensi, dan tugas dengan pembahasan lebih lengkap.',
  },
  {
    title: 'Custom Project',
    price: 'By Request',
    description:
      'Untuk coding akademik, project kuliah, data, perhitungan kompleks, laporan lengkap, deadline cepat, atau kebutuhan khusus lainnya.',
  },
];

const audiences = [
  'Pelajar SMP',
  'Pelajar SMA/SMK',
  'Mahasiswa',
  'Tugas individu',
  'Tugas kelompok',
  'Project kuliah',
  'Presentasi kelas',
  'Persiapan deadline mendadak',
];

const benefits = [
  'Konsultasi kebutuhan sebelum pengerjaan',
  'Hasil disesuaikan dengan instruksi tugas',
  'Struktur jawaban dibuat rapi',
  'Bisa request format tertentu',
  'Revisi aman sesuai kesepakatan',
  'Penjelasan konsep bisa dibantu',
  'Deadline menyesuaikan tingkat kesulitan',
];

const steps = [
  {
    title: 'Konsultasi Kebutuhan',
    text: 'Ceritakan jenis tugas, deadline, format, dan instruksi dari guru atau dosen.',
  },
  {
    title: 'Kirim Brief & File Tugas',
    text: 'Kirim soal, materi, contoh format, atau referensi yang perlu digunakan.',
  },
  {
    title: 'Analisis Materi',
    text: 'Tim Surgency memeriksa kebutuhan dan menentukan alur pengerjaan.',
  },
  {
    title: 'Proses Pendampingan',
    text: 'Pengerjaan dilakukan sesuai brief, mulai dari struktur, isi, desain, data, atau coding.',
  },
  {
    title: 'Revisi & Finalisasi',
    text: 'Hasil dicek kembali dan direvisi jika ada bagian yang perlu disesuaikan.',
  },
];

function SectionHeading({ label, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{label}</p>
      <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-primary-dark sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm leading-7 text-text-body/70 sm:text-base">{description}</p>
      )}
    </div>
  );
}

function HorizontalCards({ children, label, className = '' }) {
  const carouselRef = useRef(null);
  const cards = Children.toArray(children);
  const cardCount = cards.length;
  const activeSlideRef = useRef(cardCount * 2);
  const isTransitioningRef = useRef(false);
  const transitionTimerRef = useRef(null);
  const mobileSlides = Array.from({ length: 5 }, (_, groupIndex) =>
    cards.map((card, cardIndex) =>
      cloneElement(card, {
        key: `mobile-${groupIndex}-${card.key ?? cardIndex}`,
        className: `${card.props.className} md:!hidden`,
      }),
    ),
  ).flat();

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

  const move = (direction) => {
    if (isTransitioningRef.current) return;

    const carousel = carouselRef.current;
    if (!carousel || window.innerWidth >= 768) return;

    let currentIndex = activeSlideRef.current;
    if (currentIndex <= cardCount) {
      currentIndex += cardCount * 2;
      jumpToSlide(currentIndex);
    } else if (currentIndex >= mobileSlides.length - cardCount - 1) {
      currentIndex -= cardCount * 2;
      jumpToSlide(currentIndex);
    }

    const targetIndex = currentIndex + direction;
    const slide = carousel.children[targetIndex];
    if (!slide) return;

    isTransitioningRef.current = true;
    requestAnimationFrame(() => carousel.scrollTo({
      left: slide.offsetLeft - (carousel.clientWidth - slide.clientWidth) / 2,
      behavior: 'smooth',
    }));
    activeSlideRef.current = targetIndex;

    window.clearTimeout(transitionTimerRef.current);
    transitionTimerRef.current = window.setTimeout(() => {
      isTransitioningRef.current = false;
    }, 380);
  };

  useEffect(() => {
    const setInitialPosition = () => {
      if (window.innerWidth < 768) jumpToSlide(cardCount * 2);
    };

    requestAnimationFrame(setInitialPosition);
    window.addEventListener('resize', setInitialPosition);

    return () => {
      window.removeEventListener('resize', setInitialPosition);
      window.clearTimeout(transitionTimerRef.current);
    };
  }, [cardCount]);

  return (
    <div className="relative mt-7 min-w-0">
      <div
        ref={carouselRef}
        aria-label={label}
        className={`flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-5 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-4 md:px-1 ${className}`}
      >
        {mobileSlides}
        {cards.map((card, index) =>
          cloneElement(card, {
            key: `desktop-${card.key ?? index}`,
            className: `${card.props.className} !hidden md:!flex`,
          }),
        )}
      </div>
      <button
        type="button"
        onClick={() => move(-1)}
        aria-label="Geser ke kiri"
        className="absolute -left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-primary-dark text-xl text-white shadow-lg transition hover:bg-primary sm:-left-5 md:hidden"
      >
        <HiChevronLeft />
      </button>
      <button
        type="button"
        onClick={() => move(1)}
        aria-label="Geser ke kanan"
        className="absolute -right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-primary-dark text-xl text-white shadow-lg transition hover:bg-primary sm:-right-5 md:hidden"
      >
        <HiChevronRight />
      </button>
    </div>
  );
}

function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-2 text-sm leading-6 text-text-body/80">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white">
        <HiCheck />
      </span>
      <span>{children}</span>
    </li>
  );
}

export default function Edu() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Surgency Edu | Surgency Studio"
        description="Pendampingan akademik yang rapi, terarah, dan mudah dipahami untuk pelajar dan mahasiswa."
        path="edu"
      />
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-white">
          <div className="relative z-10 w-full px-5 pb-12 pt-24 sm:px-8 md:pb-10 md:pt-28 lg:px-12 xl:px-16">
            <div className="grid items-center gap-8 lg:min-h-[490px] lg:grid-cols-[0.98fr_1.02fr]">
              <div className="max-w-xl text-center lg:text-left">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-dark shadow-sm">
                  Detail Layanan
                </div>
                <h1 className="font-heading text-[3.15rem] font-extrabold leading-[0.9] tracking-normal text-text-heading sm:text-6xl lg:text-[4.6rem] xl:text-[5.05rem]">
                  Surgency
                  <span className="block text-primary">Edu</span>
                </h1>
                <p className="mx-auto mt-5 max-w-lg text-lg font-bold leading-7 text-primary-dark lg:mx-0">
                  Pendampingan akademik yang rapi, terarah, dan mudah dipahami.
                </p>
                <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-text-body/75 sm:text-base lg:mx-0">
                  Surgency Edu membantu pelajar dan mahasiswa menyelesaikan kebutuhan akademik
                  dengan proses yang lebih terstruktur. Mulai dari tugas harian, makalah,
                  presentasi, analisis soal, studi kasus, riset referensi, perhitungan, coding
                  akademik, sampai project kuliah.
                </p>
                <p className="mt-4 text-sm font-extrabold text-primary">Harga mulai Rp25.000</p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                  <a
                    href={CONSULTATION_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-dark px-6 py-3 text-sm font-bold text-white shadow-[0_14px_28px_rgba(9,19,68,0.18)] transition hover:-translate-y-0.5 hover:bg-primary"
                  >
                    <FaWhatsapp className="text-lg" />
                    Konsultasi Surgency Edu
                  </a>
                  <a
                    href="/"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary bg-white px-6 py-3 text-sm font-bold text-primary transition hover:-translate-y-0.5 hover:bg-secondary"
                  >
                    <HiArrowLeft />
                    Kembali ke Beranda
                  </a>
                </div>
              </div>
              <div className="relative mx-auto flex min-h-[300px] w-full max-w-lg items-center justify-start lg:min-h-[440px] lg:max-w-none">
                <div
                  className="absolute right-[-46%] top-[-8%] h-[350px] w-[350px] bg-primary-dark sm:right-[-24%] sm:h-[420px] sm:w-[420px] lg:right-[-18%] lg:h-[520px] lg:w-[520px] xl:right-[-12%] xl:h-[590px] xl:w-[590px]"
                  style={{
                    borderRadius: '50% 50% 0 50%',
                    clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 38% 100%, 0 62%, 0 31%)',
                  }}
                />
                <div className="relative -ml-5 w-[78%] sm:-ml-8 sm:w-[70%] lg:-ml-4 lg:w-[62%] xl:w-[58%]">
                  <div className="flex h-[145px] items-center overflow-hidden rounded-[1.55rem] bg-white px-8 shadow-[0_18px_50px_rgba(15,23,42,0.16)] ring-1 ring-blue-100 sm:h-[165px] sm:px-10 lg:h-[185px] lg:px-12 xl:h-[198px]">
                    <div className="relative h-24 w-full overflow-hidden sm:h-28 lg:h-32 xl:h-36">
                      <img
                        src="/surgency-01.png"
                        alt="Logo Surgency Studio"
                        className="absolute left-1/2 top-1/2 h-full w-auto max-w-none -translate-x-1/2 -translate-y-1/2 scale-[2.15] object-contain"
                      />
                    </div>
                  </div>
                  <div className="absolute -right-8 top-[60%] h-16 w-16 -translate-y-1/2 rounded-full bg-primary shadow-2xl shadow-primary/30 sm:-right-10 sm:h-20 sm:w-20 lg:-right-12 lg:h-24 lg:w-24" />
                </div>
              </div>
            </div>
          </div>
          <WaveDivider topColor="#ffffff" bottomColor="#eef4ff" variant="simple" />
        </section>

        <section className="bg-secondary px-6 py-14 sm:px-10 md:py-20 lg:px-16">
          <div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
            <div>
              <SectionHeading
                label="Overview"
                title="Bukan sekadar bantu tugas, tapi bantu prosesnya lebih jelas"
              />
              <p className="mt-4 text-sm leading-7 text-text-body/70 sm:text-base">
                Surgency Edu dibuat untuk kamu yang butuh pendampingan akademik secara cepat,
                rapi, dan tetap mudah dipahami. Setiap kebutuhan akan dibahas terlebih dahulu
                agar pengerjaan sesuai dengan instruksi, format, deadline, dan standar yang diminta.
              </p>
              <p className="mt-3 text-sm leading-7 text-text-body/70 sm:text-base">
                Kami bisa membantu dari tahap memahami soal, menyusun struktur jawaban, mencari
                referensi, membuat draft, merapikan file, revisi, hingga persiapan presentasi.
              </p>
            </div>
            <aside className="rounded-[24px] bg-primary-dark p-6 text-white shadow-[0_18px_45px_rgba(9,19,68,0.14)]">
              <HiOutlineClipboardList className="text-3xl text-[#b8cbff]" />
              <h3 className="mt-4 text-lg font-bold text-white">Konsultasikan dulu, kami bantu arahkan</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Setiap tugas punya kebutuhan yang berbeda. Proses dimulai dari konsultasi singkat
                agar tim Surgency memahami jenis tugas, tingkat kesulitan, deadline, format file,
                dan hasil akhir yang kamu butuhkan.
              </p>
              <a
                href={CONSULTATION_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-white hover:text-[#b8cbff]"
              >
                Mulai Konsultasi <HiChevronRight />
              </a>
            </aside>
          </div>
        </section>
        <WaveDivider topColor="#eef4ff" bottomColor="#ffffff" variant="simple" />

        <section className="bg-white px-6 py-14 sm:px-10 md:py-20 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              label="Layanan detail"
              title="Yang Bisa Kami Bantu"
              description="Surgency Edu menyediakan pendampingan untuk berbagai kebutuhan akademik, mulai dari penulisan, data, perhitungan, coding, sampai presentasi."
            />
            <HorizontalCards label="Kategori layanan Surgency Edu">
              {serviceGroups.map(({ title, icon: Icon, items }) => (
                <article
                  key={title}
                  className="flex min-h-[470px] basis-[86%] shrink-0 snap-center flex-col rounded-[24px] border border-primary-dark/10 bg-white p-5 shadow-[0_14px_34px_rgba(9,19,68,0.07)] md:basis-[48%] lg:basis-[calc(25%-0.75rem)]"
                >
                  <Icon className="text-3xl text-primary" />
                  <h3 className="mt-4 text-lg font-extrabold text-primary-dark">{title}</h3>
                  <ul className="mt-4 grid gap-2.5">
                    {items.map((item) => <CheckItem key={item}>{item}</CheckItem>)}
                  </ul>
                </article>
              ))}
            </HorizontalCards>
          </div>
        </section>
        <WaveDivider topColor="#ffffff" bottomColor="#eef4ff" variant="layered" />

        <section className="bg-secondary px-6 py-14 sm:px-10 md:py-20 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              label="Harga Layanan Surgency Edu"
              title="Mulai dari Rp25.000"
              description="Harga menyesuaikan jenis tugas, tingkat kesulitan, deadline, jumlah revisi, dan format hasil akhir yang dibutuhkan. Konsultasikan kebutuhanmu terlebih dahulu agar tim Surgency bisa memberikan estimasi harga yang paling sesuai."
            />
            <HorizontalCards label="Pilihan harga Surgency Edu">
              {prices.map(({ title, price, description }, index) => (
                <article
                  key={title}
                  className={`flex min-h-[320px] basis-[86%] shrink-0 snap-center flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_14px_34px_rgba(9,19,68,0.07)] md:basis-[48%] lg:basis-[calc(33.333%-0.7rem)] ${
                    index === 1 ? 'border-2 border-primary' : 'border border-primary-dark/10'
                  }`}
                >
                  <div className={`${index === 1 ? 'bg-primary' : 'bg-primary-dark'} px-5 py-5 text-center`}>
                    <p className="text-xl font-extrabold uppercase tracking-wide text-white">{title}</p>
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="text-center text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">{price}</p>
                    <div className="my-4 h-px bg-primary-dark/10" />
                    <p className="text-sm leading-6 text-text-body/70">{description}</p>
                    <a
                      href={PRICE_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-auto inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white transition ${
                        index === 1 ? 'bg-primary hover:bg-primary-dark' : 'bg-primary-dark hover:bg-primary'
                      }`}
                    >
                      <FaWhatsapp />
                      Konsultasi Harga
                    </a>
                  </div>
                </article>
              ))}
            </HorizontalCards>
            <p className="mt-1 text-center text-xs leading-5 text-text-body/60">
              Estimasi harga dapat berubah sesuai detail brief, deadline, tingkat kesulitan, dan kebutuhan revisi.
            </p>
          </div>
        </section>
        <WaveDivider topColor="#eef4ff" bottomColor="#ffffff" variant="simple" />

        <section className="bg-white px-6 py-14 sm:px-10 md:py-20 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              label="Cocok untuk siapa"
              title="Fleksibel untuk berbagai kebutuhan akademik"
              description="Surgency Edu cocok untuk kamu yang sedang butuh bantuan akademik yang lebih terarah, bukan sekadar hasil yang asal jadi."
            />
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {audiences.map((audience) => (
                <div key={audience} className="rounded-2xl border border-primary-dark/10 bg-white p-4 shadow-[0_10px_24px_rgba(9,19,68,0.05)]">
                  <HiOutlineUserGroup className="text-xl text-primary" />
                  <p className="mt-3 text-sm font-bold leading-5 text-primary-dark">{audience}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <WaveDivider topColor="#ffffff" bottomColor="#eef4ff" variant="layered" />

        <section className="bg-secondary px-6 py-14 sm:px-10 md:py-20 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              label="Kenapa Surgency Edu"
              title="Rapi, jelas, dan bisa direvisi"
              description="Kami mengutamakan hasil yang sesuai brief, mudah dipahami, dan siap dikembangkan kembali oleh pengguna."
            />
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 rounded-2xl border border-primary-dark/10 bg-white p-4 shadow-sm">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm text-white">
                    <HiCheck />
                  </span>
                  <p className="text-sm font-bold leading-5 text-primary-dark">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <WaveDivider topColor="#eef4ff" bottomColor="#f6f8fc" variant="simple" />

        <section className="bg-surface-alt px-6 py-14 sm:px-10 md:py-20 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <SectionHeading label="Alur kerja" title="Proses singkat dan terarah" />
            <HorizontalCards label="Alur kerja Surgency Edu">
              {steps.map(({ title, text }, index) => (
                <article
                  key={title}
                  className="min-h-[230px] basis-[86%] shrink-0 snap-center rounded-2xl border border-primary-dark/5 bg-white p-5 shadow-sm md:basis-[42%] lg:basis-[calc(20%-0.8rem)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold text-primary">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <HiOutlineLightningBolt className="text-xl text-primary-dark/30" />
                  </div>
                  <h3 className="mt-5 text-base font-extrabold text-primary-dark">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-text-body/70">{text}</p>
                </article>
              ))}
            </HorizontalCards>
          </div>
        </section>

        <section className="bg-surface-alt px-6 pb-14 sm:px-10 md:pb-20 lg:px-16">
          <div className="mx-auto max-w-6xl rounded-[24px] border border-primary/10 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <HiOutlineClipboardCheck className="mt-0.5 shrink-0 text-3xl text-primary" />
              <div>
                <h2 className="text-lg font-extrabold text-primary-dark">Catatan Layanan</h2>
                <p className="mt-2 text-sm leading-7 text-text-body/70">
                  Surgency Edu berfokus pada pendampingan akademik, penyusunan, perapihan,
                  penjelasan, dan bantuan teknis sesuai kebutuhan pengguna. Pengguna tetap
                  bertanggung jawab memahami dan menggunakan hasil akhir dengan bijak.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary px-6 py-14 sm:px-10 md:py-20 lg:px-16">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-primary-dark px-6 py-9 text-white shadow-[0_22px_55px_rgba(9,19,68,0.18)] sm:px-9 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b8cbff]">Mulai sekarang</p>
              <h2 className="mt-3 max-w-2xl text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                Ceritakan kebutuhan akademikmu, kami bantu susun langkah terbaik.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
                Butuh bantuan tugas, laporan, presentasi, coding, atau project kuliah?
                Konsultasikan dulu kebutuhanmu bersama Surgency Edu.
              </p>
            </div>
            <a
              href={CONSULTATION_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-primary-dark md:mt-0"
            >
              <FaWhatsapp className="text-lg" />
              Konsultasi Surgency Edu
            </a>
          </div>
        </section>
      </main>

      <WaveDivider topColor="#eef4ff" bottomColor="#091344" variant="simple" />
      <BottomNav />
      <Footer />
    </div>
  );
}
