import { Children, cloneElement, useEffect, useRef, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import {
  HiArrowLeft,
  HiCheck,
  HiChevronLeft,
  HiChevronRight,
  HiOutlineClipboardCheck,
  HiOutlineClipboardList,
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
  'https://wa.me/6285719630624?text=Halo%20Surgency%20Studio,%20saya%20mau%20konsultasi%20layanan%20Surgency%20Creative.';
const PRICE_LINK =
  'https://wa.me/6285719630624?text=Halo%20Surgency%20Studio,%20saya%20mau%20konsultasi%20harga%20layanan%20Surgency%20Creative.';

const serviceGroups = [
  {
    title: 'Social Media Design',
    items: ['Feed Instagram', 'Carousel Instagram', 'Story Instagram', 'Template social media', 'Konten promosi', 'Campaign visual', 'Desain announcement', 'Desain edukasi', 'Desain katalog sederhana'],
  },
  {
    title: 'Branding & Visual Identity',
    items: ['Logo sederhana', 'Brand color', 'Brand style', 'Visual identity', 'Rebranding visual', 'Desain guideline sederhana', 'Moodboard brand', 'Materi promosi brand'],
  },
  {
    title: 'Content & Video Creative',
    items: ['Video pendek', 'Reels', 'TikTok content', 'Video promosi', 'Cover video', 'Thumbnail', 'Script konten singkat', 'Konsep konten', 'Editing ringan'],
  },
  {
    title: 'Personal & Business Needs',
    items: ['CV visual', 'Portfolio', 'Proposal', 'Company profile sederhana', 'Poster event', 'Flyer', 'Banner digital', 'Deck presentasi', 'Materi promosi UMKM'],
  },
];

const prices = [
  {
    title: 'Creative Basic',
    price: 'Mulai Rp350.000',
    description: 'Untuk kebutuhan visual sederhana seperti feed, story, poster digital, thumbnail, dan video content ringan.',
    items: ['3 desain visual', '1 video content', 'Format siap upload', 'Copy singkat untuk desain', '1x revisi ringan'],
  },
  {
    title: 'Creative Growth',
    price: 'Mulai Rp750.000',
    description: 'Untuk kebutuhan konten visual dan video yang lebih aktif seperti feed, carousel, story, dan promosi brand.',
    items: ['7 desain visual', '3 video content', 'Konsep visual sederhana', 'Format siap upload', '2x revisi ringan'],
  },
  {
    title: 'Custom Creative',
    price: 'By Request',
    description: 'Untuk branding visual, campaign, video content, paket bulanan, company profile, atau brief khusus.',
    items: ['Jumlah desain menyesuaikan', 'Jumlah video menyesuaikan', 'Konsep sesuai kebutuhan', 'Format final sesuai permintaan', 'Revisi sesuai kesepakatan'],
  },
];

const creativePortfolio = [
  { title: 'Creative Design 01', image: '/design-1.png' },
  { title: 'Creative Design 02', image: '/design-2.png' },
  { title: 'Creative Design 03', image: '/design-3.png' },
  { title: 'Creative Design 04', image: '/design-4.png' },
  { title: 'Creative Design 05', image: '/design-5.png' },
  { title: 'Creative Design 06', image: '/design-6.png' },
  { title: 'Creative Design 07', image: '/design-7.png' },
  { title: 'Video Content Portfolio', image: '/video-porto.png' },
];

const audiences = ['UMKM', 'Personal brand', 'Content creator', 'Organisasi', 'Komunitas', 'Event', 'Brand promosi', 'Online shop', 'Bisnis jasa', 'Kebutuhan kampus atau sekolah'];
const benefits = ['Konsultasi brief sebelum pengerjaan', 'Desain menyesuaikan kebutuhan brand', 'Bisa request style atau referensi', 'Format file disesuaikan kebutuhan', 'Revisi aman sesuai kesepakatan', 'Visual clean dan modern', 'Cocok untuk kebutuhan digital dan promosi', 'Deadline menyesuaikan tingkat kesulitan'];
const steps = [
  { title: 'Konsultasi Kebutuhan Visual', text: 'Ceritakan jenis desain, tujuan penggunaan, ukuran, platform, deadline, dan style yang kamu inginkan.' },
  { title: 'Kirim Brief & Referensi', text: 'Kirim logo, warna brand, teks, foto, contoh desain, atau referensi visual yang ingin dijadikan acuan.' },
  { title: 'Penyusunan Konsep', text: 'Tim Surgency menyusun arah visual, komposisi, dan gaya desain sesuai kebutuhan.' },
  { title: 'Proses Desain / Editing', text: 'Desain atau konten dikerjakan berdasarkan brief, referensi, dan format final yang dibutuhkan.' },
  { title: 'Revisi & Final File', text: 'Hasil dicek kembali, direvisi jika diperlukan, lalu dikirim dalam format final yang siap digunakan.' },
];

function SectionHeading({ label, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{label}</p>
      <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-primary-dark sm:text-3xl">{title}</h2>
      {description && <p className="mt-4 text-sm leading-7 text-text-body/70 sm:text-base">{description}</p>}
    </div>
  );
}

function HorizontalCards({ children, label, showDesktopArrows = false, desktopAlignStart = false }) {
  const carouselRef = useRef(null);
  const cards = Children.toArray(children);
  const cardCount = cards.length;
  const activeSlideRef = useRef(cardCount * 2);
  const activeDesktopSlideRef = useRef(cardCount);
  const isTransitioningRef = useRef(false);
  const transitionTimerRef = useRef(null);
  const mobileSlides = Array.from({ length: 5 }, (_, groupIndex) =>
    cards.map((card, cardIndex) => cloneElement(card, {
      key: `mobile-${groupIndex}-${card.key ?? cardIndex}`,
      className: `${card.props.className} md:!hidden`,
    })),
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

  const moveDesktop = (direction) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const desktopSlides = carousel.querySelectorAll('[data-desktop-slide]');
    let currentIndex = activeDesktopSlideRef.current;
    if (currentIndex <= 0) {
      currentIndex += cardCount;
      const slide = desktopSlides[currentIndex];
      if (slide) carousel.scrollLeft = desktopAlignStart ? slide.offsetLeft : slide.offsetLeft - (carousel.clientWidth - slide.clientWidth) / 2;
    } else if (currentIndex >= desktopSlides.length - 1) {
      currentIndex -= cardCount;
      const slide = desktopSlides[currentIndex];
      if (slide) carousel.scrollLeft = desktopAlignStart ? slide.offsetLeft : slide.offsetLeft - (carousel.clientWidth - slide.clientWidth) / 2;
    }

    const targetIndex = currentIndex + direction;
    const slide = desktopSlides[targetIndex];
    if (!slide) return;
    carousel.scrollTo({
      left: desktopAlignStart ? slide.offsetLeft : slide.offsetLeft - (carousel.clientWidth - slide.clientWidth) / 2,
      behavior: 'smooth',
    });
    activeDesktopSlideRef.current = targetIndex;
  };

  useEffect(() => {
    const setInitialPosition = () => {
      if (window.innerWidth < 768) {
        jumpToSlide(cardCount * 2);
      } else if (showDesktopArrows) {
        const desktopSlides = carouselRef.current?.querySelectorAll('[data-desktop-slide]');
        const slide = desktopSlides?.[cardCount];
        if (!slide || !carouselRef.current) return;
        carouselRef.current.scrollLeft = desktopAlignStart ? slide.offsetLeft : slide.offsetLeft - (carouselRef.current.clientWidth - slide.clientWidth) / 2;
        activeDesktopSlideRef.current = cardCount;
      }
    };
    requestAnimationFrame(setInitialPosition);
    window.addEventListener('resize', setInitialPosition);
    return () => {
      window.removeEventListener('resize', setInitialPosition);
      window.clearTimeout(transitionTimerRef.current);
    };
  }, [cardCount, desktopAlignStart, showDesktopArrows]);

  return (
    <div className="relative mt-7 min-w-0">
      <div ref={carouselRef} aria-label={label} className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-5 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-4 md:px-1">
        {mobileSlides}
        {Array.from({ length: showDesktopArrows ? 3 : 1 }, (_, groupIndex) =>
          cards.map((card, index) => cloneElement(card, {
            key: `desktop-${groupIndex}-${card.key ?? index}`,
            'data-desktop-slide': showDesktopArrows ? true : undefined,
            className: `${card.props.className} !hidden md:!flex`,
          })),
        ).flat()}
      </div>
      <button type="button" onClick={() => move(-1)} aria-label="Geser ke kiri" className="absolute -left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-primary-dark text-xl text-white shadow-lg transition hover:bg-primary sm:-left-5 md:hidden">
        <HiChevronLeft />
      </button>
      <button type="button" onClick={() => move(1)} aria-label="Geser ke kanan" className="absolute -right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-primary-dark text-xl text-white shadow-lg transition hover:bg-primary sm:-right-5 md:hidden">
        <HiChevronRight />
      </button>
      {showDesktopArrows && (
        <>
          <button type="button" onClick={() => moveDesktop(-1)} aria-label="Lihat portfolio sebelumnya" className="absolute -left-5 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-primary-dark text-2xl text-white shadow-lg transition hover:bg-primary md:flex">
            <HiChevronLeft />
          </button>
          <button type="button" onClick={() => moveDesktop(1)} aria-label="Lihat portfolio berikutnya" className="absolute -right-5 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-primary-dark text-2xl text-white shadow-lg transition hover:bg-primary md:flex">
            <HiChevronRight />
          </button>
        </>
      )}
    </div>
  );
}

function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-2 text-sm leading-6 text-text-body/80">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white"><HiCheck /></span>
      <span>{children}</span>
    </li>
  );
}

export default function Creative() {
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);

  const movePortfolioPreview = (direction) => {
    const currentIndex = creativePortfolio.findIndex(({ image }) => image === selectedPortfolio.image);
    const nextIndex = (currentIndex + direction + creativePortfolio.length) % creativePortfolio.length;
    setSelectedPortfolio(creativePortfolio[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO title="Surgency Creative | Surgency Studio" description="Layanan kreatif untuk visual brand, konten, dan media promosi yang lebih rapi dan profesional." path="creative" />
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-white">
          <div className="relative z-10 w-full px-5 pb-12 pt-24 sm:px-8 md:pb-10 md:pt-28 lg:px-12 xl:px-16">
            <div className="grid items-center gap-8 lg:min-h-[490px] lg:grid-cols-[0.98fr_1.02fr]">
              <div className="max-w-xl text-center lg:text-left">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-dark shadow-sm">Detail Layanan</div>
                <h1 className="font-heading text-[3.15rem] font-extrabold leading-[0.9] tracking-normal text-text-heading sm:text-6xl lg:text-[4.6rem] xl:text-[5.05rem]">
                  Surgency<span className="block text-primary">Creative</span>
                </h1>
                <p className="mx-auto mt-5 max-w-lg text-lg font-bold leading-7 text-primary-dark lg:mx-0">Layanan kreatif untuk visual brand, konten, dan media promosi yang lebih rapi dan profesional.</p>
                <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-text-body/75 sm:text-base lg:mx-0">Surgency Creative membantu kebutuhan desain visual, branding, social media, video content, thumbnail, proposal, CV, portfolio, dan materi promosi digital. Kami membantu membuat tampilan visual yang clean, modern, dan siap digunakan untuk kebutuhan personal, bisnis, organisasi, maupun event.</p>
                <p className="mt-4 text-sm font-extrabold text-primary">Paket Creative mulai Rp350.000</p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                  <a href={CONSULTATION_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-dark px-6 py-3 text-sm font-bold text-white shadow-[0_14px_28px_rgba(9,19,68,0.18)] transition hover:-translate-y-0.5 hover:bg-primary"><FaWhatsapp className="text-lg" />Konsultasi Surgency Creative</a>
                  <a href="/" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary bg-white px-6 py-3 text-sm font-bold text-primary transition hover:-translate-y-0.5 hover:bg-secondary"><HiArrowLeft />Kembali ke Beranda</a>
                </div>
              </div>
              <div className="relative mx-auto flex min-h-[300px] w-full max-w-lg items-center justify-start lg:min-h-[440px] lg:max-w-none">
                <div className="absolute right-[-46%] top-[-8%] h-[350px] w-[350px] bg-primary-dark sm:right-[-24%] sm:h-[420px] sm:w-[420px] lg:right-[-18%] lg:h-[520px] lg:w-[520px] xl:right-[-12%] xl:h-[590px] xl:w-[590px]" style={{ borderRadius: '50% 50% 0 50%', clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 38% 100%, 0 62%, 0 31%)' }} />
                <div className="relative -ml-5 w-[78%] sm:-ml-8 sm:w-[70%] lg:-ml-4 lg:w-[62%] xl:w-[58%]">
                  <div className="flex h-[145px] items-center overflow-hidden rounded-[1.55rem] bg-white px-8 shadow-[0_18px_50px_rgba(15,23,42,0.16)] ring-1 ring-blue-100 sm:h-[165px] sm:px-10 lg:h-[185px] lg:px-12 xl:h-[198px]">
                    <div className="relative h-24 w-full overflow-hidden sm:h-28 lg:h-32 xl:h-36"><img src="/surgency-01.png" alt="Logo Surgency Studio" className="absolute left-1/2 top-1/2 h-full w-auto max-w-none -translate-x-1/2 -translate-y-1/2 scale-[2.15] object-contain" /></div>
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
              <SectionHeading label="Overview" title="Visual yang rapi bikin brand lebih mudah dipercaya" />
              <p className="mt-4 text-sm leading-7 text-text-body/70 sm:text-base">Surgency Creative hadir untuk membantu kamu membangun tampilan visual yang lebih profesional, konsisten, dan sesuai kebutuhan. Mulai dari desain promosi, konten social media, identitas visual, sampai materi presentasi brand, setiap desain dibuat berdasarkan brief, tujuan, dan karakter brand yang ingin ditampilkan.</p>
              <p className="mt-3 text-sm leading-7 text-text-body/70 sm:text-base">Kami tidak hanya membuat desain yang terlihat bagus, tapi juga membantu menyusun visual agar lebih jelas, mudah dipahami, dan siap digunakan di berbagai platform digital.</p>
            </div>
            <aside className="rounded-[24px] bg-primary-dark p-6 text-white shadow-[0_18px_45px_rgba(9,19,68,0.14)]">
              <HiOutlineClipboardList className="text-3xl text-[#b8cbff]" />
              <h3 className="mt-4 text-lg font-bold text-white">Konsultasikan dulu, kami bantu tentukan konsepnya</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">Setiap kebutuhan visual punya tujuan yang berbeda. Konsultasikan jenis desain, referensi, target audiens, format file, ukuran, deadline, dan style visual yang kamu inginkan.</p>
              <a href={CONSULTATION_LINK} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-white hover:text-[#b8cbff]">Mulai Konsultasi <HiChevronRight /></a>
            </aside>
          </div>
        </section>
        <WaveDivider topColor="#eef4ff" bottomColor="#ffffff" variant="simple" />

        <section className="bg-white px-6 py-14 sm:px-10 md:py-20 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <SectionHeading label="Layanan detail" title="Yang Bisa Kami Bantu" description="Surgency Creative menyediakan layanan desain dan konten visual untuk berbagai kebutuhan digital, promosi, personal brand, dan bisnis." />
            <HorizontalCards label="Kategori layanan Surgency Creative">
              {serviceGroups.map(({ title, items }) => (
                <article key={title} className="flex min-h-[430px] basis-[86%] shrink-0 snap-center flex-col rounded-[24px] border border-primary-dark/10 bg-white p-5 shadow-[0_14px_34px_rgba(9,19,68,0.07)] md:basis-[48%] lg:basis-[calc(25%-0.75rem)]">
                  <HiOutlinePresentationChartBar className="text-3xl text-primary" />
                  <h3 className="mt-4 text-lg font-extrabold text-primary-dark">{title}</h3>
                  <ul className="mt-4 grid gap-2.5">{items.map((item) => <CheckItem key={item}>{item}</CheckItem>)}</ul>
                </article>
              ))}
            </HorizontalCards>
          </div>
        </section>
        <WaveDivider topColor="#ffffff" bottomColor="#eef4ff" variant="layered" />

        <section className="bg-secondary px-6 py-14 sm:px-10 md:py-20 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <SectionHeading label="Harga Layanan Surgency Creative" title="Paket Creative mulai Rp350.000" description="Harga layanan Surgency Creative menyesuaikan jumlah desain, tingkat kesulitan, deadline, kebutuhan revisi, dan format final yang dibutuhkan. Konsultasikan kebutuhanmu terlebih dahulu agar tim Surgency bisa memberikan estimasi harga yang paling sesuai." />
            <HorizontalCards label="Pilihan harga Surgency Creative">
              {prices.map(({ title, price, description, items }, index) => (
                <article key={title} className={`flex min-h-[475px] basis-[92%] shrink-0 snap-center flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_14px_34px_rgba(9,19,68,0.07)] md:min-h-[520px] md:basis-[48%] lg:basis-[calc(33.333%-0.7rem)] ${index === 1 ? 'border-2 border-primary' : 'border border-primary-dark/10'}`}>
                  <div className={`${index === 1 ? 'bg-primary' : 'bg-primary-dark'} px-4 py-4 text-center sm:px-5 sm:py-5`}><p className="text-lg font-extrabold uppercase tracking-wide text-white sm:text-xl">{title}</p></div>
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <p className="text-center text-[1.35rem] font-extrabold tracking-tight text-primary sm:text-2xl">{price}</p>
                    <p className="mt-3 text-[13px] leading-5 text-text-body/70 sm:text-sm sm:leading-6">{description}</p>
                    <div className="my-3 h-px bg-primary-dark/10 sm:my-4" />
                    <ul className="grid gap-1.5 sm:gap-2">{items.map((item) => <CheckItem key={item}>{item}</CheckItem>)}</ul>
                    <a href={PRICE_LINK} target="_blank" rel="noopener noreferrer" className={`mt-auto inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white transition ${index === 1 ? 'bg-primary hover:bg-primary-dark' : 'bg-primary-dark hover:bg-primary'}`}><FaWhatsapp />Konsultasi Harga Creative</a>
                  </div>
                </article>
              ))}
            </HorizontalCards>
            <p className="mt-1 text-center text-xs leading-5 text-text-body/60">Harga dapat berubah sesuai detail brief, jumlah desain, deadline, tingkat kesulitan, kebutuhan revisi, dan format final yang diminta.</p>
            <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-primary/15 bg-white p-5 text-center shadow-sm">
              <p className="text-sm leading-6 text-text-body/75">Butuh desain sekaligus landing page? Kamu bisa memilih paket Creative + Digital agar kebutuhan visual dan website dikerjakan dalam satu alur yang lebih hemat dan terarah.</p>
              <a href="/#paket-creative-digital" className="mt-3 inline-flex items-center gap-1 text-sm font-extrabold text-primary hover:text-primary-dark">Lihat Paket Creative + Digital <HiChevronRight /></a>
            </div>
          </div>
        </section>
        <WaveDivider topColor="#eef4ff" bottomColor="#ffffff" variant="simple" />

        <section className="bg-white px-6 py-14 sm:px-10 md:py-20 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <SectionHeading label="Portfolio" title="Beberapa karya visual Surgency Creative" description="Berikut beberapa contoh desain dan visual yang bisa menjadi gambaran style, komposisi, dan pendekatan kreatif Surgency Studio." />
            <HorizontalCards label="Portfolio Surgency Creative" showDesktopArrows>
              {creativePortfolio.map(({ title, image }) => (
                <button type="button" onClick={() => setSelectedPortfolio({ title, image })} key={title} aria-label={`Lihat ukuran asli ${title}`} className="group flex basis-[86%] shrink-0 snap-center flex-col overflow-hidden rounded-[24px] border border-primary-dark/10 bg-white text-left shadow-[0_14px_34px_rgba(9,19,68,0.07)] transition hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(9,19,68,0.12)] md:basis-[48%] lg:basis-[calc(25%-0.75rem)]">
                  <div className="aspect-[4/5] overflow-hidden bg-secondary"><img src={image} alt={title} loading="lazy" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" /></div>
                  <h3 className="p-4 text-sm font-extrabold text-primary-dark">{title}</h3>
                </button>
              ))}
            </HorizontalCards>
          </div>
        </section>
        <WaveDivider topColor="#ffffff" bottomColor="#eef4ff" variant="layered" />

        <section className="bg-secondary px-6 py-14 sm:px-10 md:py-20 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <SectionHeading label="Cocok untuk siapa" title="Fleksibel untuk berbagai kebutuhan visual" description="Surgency Creative cocok untuk siapa pun yang ingin tampil lebih rapi, profesional, dan konsisten secara visual." />
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {audiences.map((audience) => <div key={audience} className="rounded-2xl border border-primary-dark/10 bg-white p-4 shadow-sm"><HiOutlineUserGroup className="text-xl text-primary" /><p className="mt-3 text-sm font-bold leading-5 text-primary-dark">{audience}</p></div>)}
            </div>
          </div>
        </section>
        <WaveDivider topColor="#eef4ff" bottomColor="#ffffff" variant="simple" />

        <section className="bg-white px-6 py-14 sm:px-10 md:py-20 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <SectionHeading label="Kenapa Surgency Creative" title="Desain lebih rapi, konsep lebih jelas" description="Kami membantu menyusun visual berdasarkan kebutuhan, referensi, dan tujuan penggunaan agar hasil akhir tidak hanya terlihat menarik, tapi juga lebih tepat sasaran." />
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => <div key={benefit} className="flex items-center gap-3 rounded-2xl border border-primary-dark/10 bg-white p-4 shadow-sm"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm text-white"><HiCheck /></span><p className="text-sm font-bold leading-5 text-primary-dark">{benefit}</p></div>)}
            </div>
          </div>
        </section>
        <WaveDivider topColor="#ffffff" bottomColor="#f6f8fc" variant="layered" />

        <section className="bg-surface-alt px-6 py-14 sm:px-10 md:py-20 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <SectionHeading label="Alur kerja" title="Proses kreatif yang ringkas dan terarah" />
            <HorizontalCards label="Alur kerja Surgency Creative" showDesktopArrows desktopAlignStart>
              {steps.map(({ title, text }, index) => (
                <article key={title} className="flex min-h-[285px] basis-[86%] shrink-0 snap-center flex-col rounded-[22px] border border-primary-dark/10 bg-white p-5 shadow-[0_12px_28px_rgba(9,19,68,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(9,19,68,0.1)] md:basis-[48%] lg:basis-[calc(33.333%-0.7rem)]">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-xl font-extrabold text-primary">{String(index + 1).padStart(2, '0')}</span>
                    <HiOutlineLightningBolt className="text-2xl text-primary/35" />
                  </div>
                  <h3 className="mt-6 text-lg font-extrabold leading-6 text-primary-dark">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-text-body/70">{text}</p>
                </article>
              ))}
            </HorizontalCards>
          </div>
        </section>

        <section className="bg-surface-alt px-6 pb-14 sm:px-10 md:pb-20 lg:px-16">
          <div className="mx-auto max-w-6xl rounded-[24px] border border-primary/10 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4"><HiOutlineClipboardCheck className="mt-0.5 shrink-0 text-3xl text-primary" /><div><h2 className="text-lg font-extrabold text-primary-dark">Catatan Layanan</h2><p className="mt-2 text-sm leading-7 text-text-body/70">Surgency Creative berfokus pada layanan desain visual, branding sederhana, konten kreatif, editing ringan, dan materi promosi digital. Hasil akhir, jumlah revisi, format file, dan estimasi waktu pengerjaan mengikuti kesepakatan saat konsultasi.</p></div></div>
          </div>
        </section>

        <section className="bg-secondary px-6 py-14 sm:px-10 md:py-20 lg:px-16">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-primary-dark px-6 py-9 text-white shadow-[0_22px_55px_rgba(9,19,68,0.18)] sm:px-9 md:flex md:items-center md:justify-between md:gap-8">
            <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b8cbff]">Mulai sekarang</p><h2 className="mt-3 max-w-2xl text-2xl font-extrabold leading-tight text-white sm:text-3xl">Ceritakan kebutuhan visualmu, kami bantu buat tampil lebih profesional.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">Butuh desain untuk social media, branding, portfolio, proposal, video content, atau promosi bisnis? Konsultasikan dulu kebutuhanmu bersama Surgency Creative.</p></div>
            <a href={CONSULTATION_LINK} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-primary-dark md:mt-0"><FaWhatsapp className="text-lg" />Konsultasi Surgency Creative</a>
          </div>
        </section>
      </main>

      <WaveDivider topColor="#eef4ff" bottomColor="#091344" variant="simple" />
      <BottomNav />
      <Footer />

      {selectedPortfolio && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050816]/90 p-4 sm:p-8" role="dialog" aria-modal="true" aria-label={`Preview ${selectedPortfolio.title}`} onClick={() => setSelectedPortfolio(null)}>
          <div className="relative flex max-h-[92vh] w-full max-w-6xl flex-col items-center justify-center" onClick={(event) => event.stopPropagation()}>
            <button type="button" onClick={() => setSelectedPortfolio(null)} aria-label="Tutup preview" className="absolute right-0 top-0 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-bold text-primary-dark shadow-lg transition hover:bg-primary hover:text-white">
              &times;
            </button>
            <button type="button" onClick={() => movePortfolioPreview(-1)} aria-label="Portfolio sebelumnya" className="absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-primary-dark text-2xl text-white shadow-lg transition hover:bg-primary sm:-left-5">
              <HiChevronLeft />
            </button>
            <img src={selectedPortfolio.image} alt={selectedPortfolio.title} className="max-h-[82vh] max-w-full rounded-2xl object-contain shadow-2xl" />
            <button type="button" onClick={() => movePortfolioPreview(1)} aria-label="Portfolio berikutnya" className="absolute right-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-primary-dark text-2xl text-white shadow-lg transition hover:bg-primary sm:-right-5">
              <HiChevronRight />
            </button>
            <p className="mt-3 rounded-full bg-white px-4 py-2 text-sm font-bold text-primary-dark">{selectedPortfolio.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}
