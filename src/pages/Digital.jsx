import { Children, cloneElement, useEffect, useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import {
  HiArrowLeft,
  HiCheck,
  HiChevronLeft,
  HiChevronRight,
  HiOutlineClipboardCheck,
  HiOutlineClipboardList,
  HiOutlineCode,
  HiOutlineLightningBolt,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import BottomNav from '../components/BottomNav';
import Footer from '../components/Footer';
import WaveDivider from '../components/WaveDivider';

const CONSULTATION_LINK = 'https://wa.me/6285719630624?text=Halo%20Surgency%20Studio,%20saya%20mau%20konsultasi%20layanan%20Surgency%20Digital.';
const PRICE_LINK = 'https://wa.me/6285719630624?text=Halo%20Surgency%20Studio,%20saya%20mau%20konsultasi%20harga%20layanan%20Surgency%20Digital.';

const serviceGroups = [
  { title: 'Website & Landing Page', items: ['Landing page', 'Website company profile', 'Website UMKM', 'Personal branding site', 'Portfolio online', 'Website event', 'Website organisasi', 'Website sekolah atau lembaga', 'CTA WhatsApp', 'Responsive mobile'] },
  { title: 'Web App & Sistem', items: ['Aplikasi berbasis web', 'Sistem admin sederhana', 'Dashboard data', 'Sistem informasi internal', 'Sistem stok sederhana', 'Sistem booking sederhana', 'Sistem katalog', 'Sistem manajemen data', 'Login dan role dasar', 'CRUD data'] },
  { title: 'UI, Frontend & Integration', items: ['UI website', 'Frontend slicing', 'Responsive layout', 'Integrasi form', 'Integrasi WhatsApp', 'Integrasi Google Maps', 'Basic SEO', 'Optimasi struktur halaman', 'Animasi ringan', 'Component-based layout'] },
  { title: 'Maintenance & Support', items: ['Maintenance website', 'Update konten website', 'Perbaikan bug ringan', 'Backup file dasar', 'Deployment basic', 'Setting domain dan hosting', 'Perapihan tampilan', 'Optimasi mobile', 'Konsultasi pengembangan fitur', 'Dokumentasi sederhana'] },
];

const prices = [
  { title: 'Digital Landing', price: 'Mulai Rp750.000', description: 'Untuk landing page, halaman promosi, portfolio online, atau website satu halaman yang rapi dan responsive.', items: ['1 halaman landing page', 'Struktur section basic', 'Responsive mobile', 'CTA WhatsApp', 'Copywriting singkat', '1x revisi ringan'] },
  { title: 'Web App / Sistem', price: 'Mulai Rp1.500.000', description: 'Untuk dashboard, manajemen data, sistem stok, katalog, booking, atau sistem internal basic.', items: ['Fitur CRUD dasar', 'Halaman admin sederhana', 'Login basic jika dibutuhkan', 'Database sederhana', 'Responsive layout', 'Dokumentasi sederhana', '2x revisi sesuai scope'] },
  { title: 'Custom Digital Project', price: 'By Request', description: 'Untuk sistem kompleks, fitur custom, integrasi khusus, dashboard lanjutan, role user, atau pengembangan bertahap.', items: ['Fitur sesuai kebutuhan', 'Struktur sistem sesuai brief', 'Integrasi sesuai project', 'Timeline berdasarkan scope', 'Revisi sesuai kesepakatan'] },
];

const portfolio = [
  { title: 'Website Raya Abadi Saudara', image: '/web-raya-abadi-saudara.png' },
  { title: 'Website Comproras', image: '/web-comproras.png' },
];
const audiences = ['UMKM', 'Bisnis kecil', 'Personal brand', 'Sekolah atau lembaga', 'Organisasi', 'Komunitas', 'Event', 'Agency kecil', 'Project kuliah', 'Startup awal', 'Sistem internal sederhana', 'Brand yang butuh landing page'];
const benefits = ['Dikerjakan oleh web developer berpengalaman 10 tahun', 'Konsultasi brief sebelum pengerjaan', 'Struktur website disusun rapi', 'Responsive di mobile dan desktop', 'CTA WhatsApp jelas', 'Bisa request referensi desain', 'Basic SEO untuk website', 'Deployment basic', 'Revisi aman sesuai kesepakatan', 'Alur penggunaan mudah dipahami', 'Cocok untuk website bisnis dan sistem internal', 'Timeline menyesuaikan tingkat kesulitan'];
const technologies = [
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'Responsive layout', 'UI component'] },
  { title: 'Backend & Database', items: ['PHP', 'Laravel', 'CodeIgniter', 'Node.js', 'Python', 'PostgreSQL', 'MySQL', 'MariaDB', 'API sederhana', 'Sistem login basic', 'CRUD data'] },
  { title: 'Final Output', items: ['File project', 'Website siap deploy', 'Basic documentation', 'Panduan penggunaan sederhana', 'Deployment basic', 'Revisi sesuai scope'] },
];
const steps = [
  { title: 'Konsultasi Kebutuhan Website / Sistem', text: 'Ceritakan jenis website atau sistem, tujuan penggunaan, fitur utama, deadline, dan referensi tampilan.' },
  { title: 'Kirim Brief & Referensi', text: 'Kirim materi brand, konten, logo, contoh website, alur sistem, data awal, atau dokumen pendukung.' },
  { title: 'Penyusunan Struktur', text: 'Tim Surgency menyusun struktur halaman, fitur, alur pengguna, dan kebutuhan teknis sesuai brief.' },
  { title: 'Development', text: 'Website atau sistem dikembangkan berdasarkan struktur, desain, fitur, dan scope yang disepakati.' },
  { title: 'Testing, Revisi & Deploy', text: 'Project dicek, direvisi jika diperlukan, lalu dibantu sampai deploy basic atau pengiriman file final.' },
];

function Heading({ label, title, description }) {
  return <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{label}</p><h2 className="mt-3 text-2xl font-extrabold tracking-tight text-primary-dark sm:text-3xl">{title}</h2>{description && <p className="mt-4 text-sm leading-7 text-text-body/70 sm:text-base">{description}</p>}</div>;
}
function CheckItem({ children }) {
  return <li className="flex items-start gap-2 text-sm leading-6 text-text-body/80"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white"><HiCheck /></span><span>{children}</span></li>;
}
function Slider({ children, label, showDesktopArrows = false, infinite = false, initialIndex = 0 }) {
  const ref = useRef(null);
  const cards = Children.toArray(children);
  const cardCount = cards.length;
  const activeMobileSlideRef = useRef(cardCount * 2 + initialIndex);
  const activeDesktopSlideRef = useRef(cardCount);
  const mobileSlides = Array.from({ length: 5 }, (_, groupIndex) =>
    cards.map((card, index) => cloneElement(card, {
      key: `mobile-${groupIndex}-${card.key ?? index}`,
      className: `${card.props.className} md:!hidden`,
    })),
  ).flat();
  const desktopSlides = Array.from({ length: infinite ? 3 : 1 }, (_, groupIndex) =>
    cards.map((card, index) => cloneElement(card, {
      key: `desktop-${groupIndex}-${card.key ?? index}`,
      className: `${card.props.className} !hidden md:!flex`,
      'data-desktop-slide': true,
    })),
  ).flat();

  const jumpToMobileSlide = (index) => {
    const carousel = ref.current;
    const slide = carousel?.children[index];
    if (!carousel || !slide) return;
    carousel.style.scrollBehavior = 'auto';
    carousel.style.scrollSnapType = 'none';
    carousel.scrollLeft = slide.offsetLeft - (carousel.clientWidth - slide.clientWidth) / 2;
    activeMobileSlideRef.current = index;
    requestAnimationFrame(() => {
      carousel.style.scrollBehavior = '';
      carousel.style.scrollSnapType = '';
    });
  };

  const moveMobile = (direction) => {
    const carousel = ref.current;
    if (!carousel) return;
    let currentIndex = activeMobileSlideRef.current;
    if (currentIndex <= cardCount) {
      currentIndex += cardCount * 2;
      jumpToMobileSlide(currentIndex);
    } else if (currentIndex >= mobileSlides.length - cardCount - 1) {
      currentIndex -= cardCount * 2;
      jumpToMobileSlide(currentIndex);
    }
    const targetIndex = currentIndex + direction;
    const slide = carousel.children[targetIndex];
    if (!slide) return;
    carousel.scrollTo({
      left: slide.offsetLeft - (carousel.clientWidth - slide.clientWidth) / 2,
      behavior: 'smooth',
    });
    activeMobileSlideRef.current = targetIndex;
  };

  const moveDesktop = (direction) => {
    const carousel = ref.current;
    const slides = carousel?.querySelectorAll('[data-desktop-slide]');
    if (!carousel || !slides?.length) return;
    if (!infinite) {
      carousel.scrollBy({ left: direction * Math.max(carousel.clientWidth * 0.78, 280), behavior: 'smooth' });
      return;
    }
    let currentIndex = activeDesktopSlideRef.current;
    if (currentIndex <= 0) {
      currentIndex += cardCount;
      carousel.scrollLeft = slides[currentIndex].offsetLeft;
    } else if (currentIndex >= slides.length - 1) {
      currentIndex -= cardCount;
      carousel.scrollLeft = slides[currentIndex].offsetLeft;
    }
    const targetIndex = currentIndex + direction;
    const slide = slides[targetIndex];
    if (!slide) return;
    carousel.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' });
    activeDesktopSlideRef.current = targetIndex;
  };

  const move = (direction) => {
    if (window.innerWidth < 768) {
      moveMobile(direction);
    } else {
      moveDesktop(direction);
    }
  };

  useEffect(() => {
    const setInitialPosition = () => {
      const carousel = ref.current;
      if (!carousel) return;
      if (window.innerWidth < 768) {
        jumpToMobileSlide(cardCount * 2 + initialIndex);
      } else if (infinite) {
        const slides = carousel.querySelectorAll('[data-desktop-slide]');
        const slide = slides[cardCount];
        if (!slide) return;
        carousel.scrollLeft = slide.offsetLeft;
        activeDesktopSlideRef.current = cardCount;
      }
    };
    requestAnimationFrame(setInitialPosition);
    const initialPositionTimer = window.setTimeout(setInitialPosition, 120);
    window.addEventListener('resize', setInitialPosition);
    return () => {
      window.clearTimeout(initialPositionTimer);
      window.removeEventListener('resize', setInitialPosition);
    };
  }, [cardCount, infinite, initialIndex]);

  return <div className="relative mt-7 min-w-0"><div ref={ref} aria-label={label} className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-7 pb-5 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-4 md:px-1">{mobileSlides}{desktopSlides}</div><button type="button" onClick={() => move(-1)} aria-label="Geser ke kiri" className={`absolute -left-3 top-1/2 h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-primary-dark text-xl text-white shadow-lg hover:bg-primary ${showDesktopArrows ? 'flex' : 'flex md:hidden'}`}><HiChevronLeft /></button><button type="button" onClick={() => move(1)} aria-label="Geser ke kanan" className={`absolute -right-3 top-1/2 h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-primary-dark text-xl text-white shadow-lg hover:bg-primary ${showDesktopArrows ? 'flex' : 'flex md:hidden'}`}><HiChevronRight /></button></div>;
}

export default function Digital() {
  return <div className="min-h-screen bg-white">
    <SEO title="Surgency Digital | Surgency Studio" description="Solusi website, aplikasi berbasis web, dan sistem digital yang rapi, responsif, dan siap digunakan." path="digital" />
    <Navbar />
    <main>
      <section className="relative overflow-hidden bg-white">
        <div className="relative z-10 w-full px-5 pb-12 pt-24 sm:px-8 md:pt-28 lg:px-12 xl:px-16"><div className="grid items-center gap-8 lg:min-h-[490px] lg:grid-cols-[0.98fr_1.02fr]">
          <div className="max-w-xl text-center lg:text-left"><div className="mb-5 inline-flex rounded-full border border-primary/15 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-dark shadow-sm">Detail Layanan</div><h1 className="font-heading text-[3.15rem] font-extrabold leading-[1.02] text-text-heading sm:text-6xl lg:text-[4.6rem] lg:leading-[0.9]">Surgency<span className="mt-3 block text-primary sm:mt-2 lg:mt-3">Digital</span></h1><p className="mx-auto mt-5 max-w-lg text-lg font-bold leading-7 text-primary-dark lg:mx-0">Solusi website, aplikasi berbasis web, dan sistem digital yang rapi, responsif, dan siap digunakan.</p><p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-text-body/75 sm:text-base lg:mx-0">Surgency Digital membantu kebutuhan website, landing page, company profile, aplikasi berbasis web, sistem internal, dashboard, toko online sederhana, frontend slicing, deployment, dan maintenance website.</p><p className="mt-4 text-sm font-extrabold text-primary">Web App & Sistem mulai Rp1.500.000</p><p className="mt-2 text-xs font-bold text-primary-dark/70">Dikerjakan oleh web developer berpengalaman 10 tahun.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"><a href={CONSULTATION_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-dark px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-primary"><FaWhatsapp />Konsultasi Surgency Digital</a><a href="/" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary px-6 py-3 text-sm font-bold text-primary hover:bg-secondary"><HiArrowLeft />Kembali ke Beranda</a></div></div>
          <div className="relative mx-auto flex min-h-[300px] w-full max-w-lg items-center justify-start lg:min-h-[440px] lg:max-w-none"><div className="absolute right-[-46%] top-[-8%] h-[350px] w-[350px] bg-primary-dark sm:right-[-24%] sm:h-[420px] sm:w-[420px] lg:right-[-18%] lg:h-[520px] lg:w-[520px]" style={{ borderRadius: '50% 50% 0 50%', clipPath: 'polygon(18% 0,100% 0,100% 100%,38% 100%,0 62%,0 31%)' }} /><div className="relative -ml-5 w-[78%] sm:-ml-8 sm:w-[70%] lg:-ml-4 lg:w-[62%]"><div className="flex h-[145px] items-center overflow-hidden rounded-[1.55rem] bg-white px-8 shadow-xl ring-1 ring-blue-100 sm:h-[165px] sm:px-10 lg:h-[185px] lg:px-12"><div className="relative h-24 w-full overflow-hidden sm:h-28 lg:h-32"><img src="/surgency-01.png" alt="Logo Surgency Studio" className="absolute left-1/2 top-1/2 h-full w-auto max-w-none -translate-x-1/2 -translate-y-1/2 scale-[2.15] object-contain" /></div></div><div className="absolute -right-8 top-[60%] h-16 w-16 -translate-y-1/2 rounded-full bg-primary shadow-2xl lg:h-24 lg:w-24" /></div></div>
        </div></div><WaveDivider topColor="#ffffff" bottomColor="#eef4ff" variant="simple" />
      </section>

      <section className="bg-secondary px-6 py-14 sm:px-10 md:py-20 lg:px-16"><div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-[1.4fr_0.8fr]"><div><Heading label="Overview" title="Website dan sistem yang rapi bikin bisnis lebih mudah dipercaya" /><p className="mt-4 text-sm leading-7 text-text-body/70 sm:text-base">Surgency Digital membantu brand, bisnis, organisasi, dan project digital membangun website atau sistem berbasis web yang profesional, terstruktur, dan mudah digunakan. Kami membantu menyusun struktur halaman, alur pengguna, fitur utama, CTA, dan kebutuhan teknis berdasarkan brief serta target pengguna.</p></div><aside className="rounded-[24px] bg-primary-dark p-6 text-white shadow-lg"><HiOutlineClipboardList className="text-3xl text-[#b8cbff]" /><h3 className="mt-4 text-lg font-bold text-white">Konsultasikan dulu, kami bantu susun kebutuhan digitalnya</h3><p className="mt-2 text-sm leading-6 text-white/70">Ceritakan jenis project, fitur, target pengguna, deadline, referensi desain, alur sistem, dan output akhir yang kamu butuhkan.</p><a href={CONSULTATION_LINK} className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-white">Mulai Konsultasi <HiChevronRight /></a></aside></div></section>
      <WaveDivider topColor="#eef4ff" bottomColor="#ffffff" variant="simple" />

      <section className="bg-white px-6 py-14 sm:px-10 md:py-20 lg:px-16"><div className="mx-auto max-w-6xl"><Heading label="Layanan detail" title="Yang Bisa Kami Bantu" description="Pembuatan website, aplikasi berbasis web, sistem sederhana, dan kebutuhan digital lainnya untuk bisnis, brand, lembaga, maupun project personal." /><Slider label="Layanan Digital">{serviceGroups.map((group) => <article key={group.title} className="flex min-h-[445px] basis-[90%] shrink-0 snap-center flex-col rounded-[24px] border border-primary-dark/10 bg-white p-5 shadow-sm md:basis-[48%] lg:basis-[calc(25%-0.75rem)]"><HiOutlineCode className="text-3xl text-primary" /><h3 className="mt-4 text-lg font-extrabold text-primary-dark">{group.title}</h3><ul className="mt-4 grid gap-2">{group.items.map((item) => <CheckItem key={item}>{item}</CheckItem>)}</ul></article>)}</Slider></div></section>
      <WaveDivider topColor="#ffffff" bottomColor="#eef4ff" variant="layered" />

      <section className="bg-secondary px-6 py-14 sm:px-10 md:py-20 lg:px-16"><div className="mx-auto max-w-6xl"><Heading label="Harga Layanan Surgency Digital" title="Web App & Sistem mulai Rp1.500.000" description="Harga menyesuaikan jenis project, jumlah halaman, kompleksitas fitur, deadline, integrasi, revisi, dan deployment. Konsultasikan kebutuhanmu agar estimasi harga lebih sesuai." /><p className="mt-3 text-sm font-bold text-primary-dark">Project dikerjakan oleh web developer berpengalaman 10 tahun dengan fokus pada struktur rapi, tampilan responsif, dan alur penggunaan yang jelas.</p><Slider label="Harga Digital" initialIndex={0}>{prices.map((pkg, index) => <article key={pkg.title} className={`flex min-h-[475px] basis-[92%] shrink-0 snap-center flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_14px_34px_rgba(9,19,68,0.07)] md:min-h-[520px] md:basis-[48%] lg:basis-[calc(33.333%-0.7rem)] ${index === 1 ? 'border-2 border-primary' : 'border border-primary-dark/10'}`}><div className={`${index === 1 ? 'bg-primary' : 'bg-primary-dark'} px-4 py-4 text-center sm:px-5 sm:py-5`}><p className="text-lg font-extrabold uppercase tracking-wide text-white sm:text-xl">{pkg.title}</p></div><div className="flex flex-1 flex-col p-4 sm:p-5"><p className="text-center text-[1.35rem] font-extrabold tracking-tight text-primary sm:text-2xl">{pkg.price}</p><p className="mt-3 text-[13px] leading-5 text-text-body/70 sm:text-sm sm:leading-6">{pkg.description}</p><div className="my-3 h-px bg-primary-dark/10 sm:my-4" /><ul className="grid gap-1.5 sm:gap-2">{pkg.items.map((item) => <CheckItem key={item}>{item}</CheckItem>)}</ul><a href={PRICE_LINK} target="_blank" rel="noopener noreferrer" className={`mt-auto inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white transition ${index === 1 ? 'bg-primary hover:bg-primary-dark' : 'bg-primary-dark hover:bg-primary'}`}><FaWhatsapp />Konsultasi Harga Digital</a></div></article>)}</Slider><p className="mt-1 text-center text-xs leading-5 text-text-body/60">Harga dapat berubah sesuai halaman, fitur, deadline, integrasi, revisi, hosting, domain, dan kompleksitas sistem. Domain, hosting, plugin premium, API berbayar, atau layanan pihak ketiga belum termasuk kecuali disepakati di awal.</p></div></section>

      <section className="bg-white px-6 py-14 sm:px-10 md:py-20 lg:px-16"><div className="mx-auto max-w-6xl"><Heading label="Portfolio" title="Beberapa project digital yang bisa ditampilkan" description="Contoh tampilan website yang menjadi gambaran style dan pendekatan pengembangan Surgency Digital." /><Slider label="Portfolio Digital">{portfolio.map((item) => <article key={item.title} className="flex basis-[92%] shrink-0 snap-center flex-col overflow-hidden rounded-[24px] border border-primary-dark/10 bg-white shadow-sm md:basis-[48%]"><div className="aspect-video overflow-hidden bg-secondary"><img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-300 hover:scale-105" /></div><h3 className="p-4 text-sm font-extrabold text-primary-dark">{item.title}</h3></article>)}</Slider></div></section>

      <section className="bg-secondary px-6 py-14 sm:px-10 md:py-20 lg:px-16"><div className="mx-auto max-w-6xl"><Heading label="Cocok untuk siapa" title="Fleksibel untuk berbagai kebutuhan digital" description="Untuk siapa pun yang membutuhkan website, aplikasi berbasis web, atau sistem digital yang rapi, profesional, dan mudah digunakan." /><div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{audiences.map((item) => <div key={item} className="rounded-2xl border border-primary-dark/10 bg-white p-4 shadow-sm"><HiOutlineUserGroup className="text-xl text-primary" /><p className="mt-3 text-sm font-bold text-primary-dark">{item}</p></div>)}</div></div></section>

      <section className="bg-white px-6 py-14 sm:px-10 md:py-20 lg:px-16"><div className="mx-auto max-w-6xl"><Heading label="Kenapa Surgency Digital" title="Dibuat lebih rapi, responsif, dan siap digunakan" description="Website dan sistem disusun berdasarkan kebutuhan nyata agar tampil profesional sekaligus nyaman digunakan." /><div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{benefits.map((item) => <div key={item} className="flex gap-3 rounded-2xl border border-primary-dark/10 bg-white p-4 shadow-sm"><HiCheck className="mt-1 shrink-0 text-primary" /><p className="text-sm font-bold leading-5 text-primary-dark">{item}</p></div>)}</div></div></section>

      <section className="bg-secondary px-6 py-14 sm:px-10 md:py-20 lg:px-16"><div className="mx-auto max-w-6xl"><Heading label="Teknologi & Output" title="Teknologi dan output menyesuaikan kebutuhan project" description="Teknologi disesuaikan dengan tingkat kompleksitas, budget, dan target penggunaan agar project mudah digunakan dan dapat dikembangkan kembali." /><Slider label="Teknologi Digital">{technologies.map((group) => <article key={group.title} className="flex min-h-[270px] basis-[90%] shrink-0 snap-center flex-col rounded-[24px] border border-primary-dark/10 bg-white p-5 shadow-sm md:basis-[48%] lg:basis-[calc(33.333%-0.7rem)]"><h3 className="text-lg font-extrabold text-primary-dark">{group.title}</h3><ul className="mt-4 grid gap-2">{group.items.map((item) => <CheckItem key={item}>{item}</CheckItem>)}</ul></article>)}</Slider><p className="text-xs text-text-body/60">Teknologi final dapat menyesuaikan kebutuhan project dan hasil konsultasi.</p></div></section>

      <section className="bg-surface-alt px-6 py-14 sm:px-10 md:py-20 lg:px-16"><div className="mx-auto max-w-6xl"><Heading label="Alur kerja" title="Proses digital yang ringkas dan terarah" /><Slider label="Alur Digital" showDesktopArrows infinite>{steps.map((step, index) => <article key={step.title} className="flex min-h-[285px] basis-[90%] shrink-0 snap-center flex-col rounded-[22px] border border-primary-dark/10 bg-white p-5 shadow-sm md:basis-[48%] lg:basis-[calc(33.333%-0.7rem)]"><div className="flex items-center justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-xl font-extrabold text-primary">{String(index + 1).padStart(2, '0')}</span><HiOutlineLightningBolt className="text-2xl text-primary/35" /></div><h3 className="mt-6 text-lg font-extrabold text-primary-dark">{step.title}</h3><p className="mt-3 text-sm leading-7 text-text-body/70">{step.text}</p></article>)}</Slider></div></section>

      <section className="bg-surface-alt px-6 pb-14 sm:px-10 md:pb-20 lg:px-16"><div className="mx-auto max-w-6xl rounded-[24px] border border-primary/10 bg-white p-5 shadow-sm"><div className="flex gap-4"><HiOutlineClipboardCheck className="shrink-0 text-3xl text-primary" /><div><h2 className="text-lg font-extrabold text-primary-dark">Catatan Layanan</h2><p className="mt-2 text-sm leading-7 text-text-body/70">Surgency Digital berfokus pada website, aplikasi berbasis web, sistem sederhana, frontend, deployment basic, dan maintenance. Fitur, timeline, revisi, teknologi, serta output final mengikuti kesepakatan saat konsultasi. Domain, hosting, plugin premium, API berbayar, aset berlisensi, dan layanan pihak ketiga belum termasuk kecuali disepakati di awal.</p></div></div></div></section>

      <section className="bg-secondary px-6 py-14 sm:px-10 md:py-20 lg:px-16"><div className="mx-auto max-w-6xl rounded-[28px] bg-primary-dark px-6 py-9 text-white shadow-xl md:flex md:items-center md:justify-between md:gap-8"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b8cbff]">Mulai sekarang</p><h2 className="mt-3 max-w-2xl text-2xl font-extrabold leading-tight text-white sm:text-3xl">Ceritakan kebutuhan websitemu, kami bantu susun solusi digitalnya.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">Butuh website, landing page, aplikasi berbasis web, dashboard, atau sistem sederhana? Konsultasikan dulu kebutuhanmu bersama Surgency Digital.</p></div><a href={CONSULTATION_LINK} className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white hover:bg-white hover:text-primary-dark md:mt-0"><FaWhatsapp />Konsultasi Surgency Digital</a></div></section>
    </main>
    <WaveDivider topColor="#eef4ff" bottomColor="#091344" variant="simple" /><BottomNav /><Footer />
  </div>;
}
