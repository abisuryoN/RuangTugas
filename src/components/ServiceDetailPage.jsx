import { FaWhatsapp } from 'react-icons/fa';
import {
  HiArrowLeft,
  HiCheck,
  HiChevronRight,
  HiOutlineClipboardList,
  HiOutlineLightningBolt,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import SEO from './SEO';
import Navbar from './Navbar';
import BottomNav from './BottomNav';
import Footer from './Footer';
import WaveDivider from './WaveDivider';
import { createWhatsAppLink } from '../utils/whatsapp';

export default function ServiceDetailPage({
  title,
  subtitle,
  description,
  services,
  audiences,
  steps,
  cta,
  whatsappMessage,
  path,
}) {
  const whatsappLink = createWhatsAppLink(whatsappMessage);
  const serviceName = title.replace('Surgency ', '');

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${title} | Surgency Studio`}
        description={subtitle}
        path={path}
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
                <span className="block text-primary">{serviceName}</span>
              </h1>
              <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-text-body sm:text-base lg:mx-0">
                {subtitle}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-dark px-6 py-3 text-sm font-bold text-white shadow-[0_14px_28px_rgba(9,19,68,0.18)] transition hover:-translate-y-0.5 hover:bg-primary hover:shadow-[0_16px_32px_rgba(5,66,201,0.22)]"
                >
                  <FaWhatsapp className="text-lg" />
                  {cta}
                </a>
                <a
                  href="/#layanan"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary bg-white px-6 py-3 text-sm font-bold text-primary transition hover:-translate-y-0.5 hover:bg-secondary"
                >
                  <HiArrowLeft />
                  Kembali ke Home
                </a>
              </div>
            </div>
            <div className="relative mx-auto flex min-h-[300px] w-full max-w-lg items-center justify-start lg:min-h-[440px] lg:max-w-none">
              <div
                className="absolute right-[-46%] top-[-8%] h-[350px] w-[350px] bg-primary-dark sm:right-[-24%] sm:h-[420px] sm:w-[420px] lg:right-[-18%] lg:top-[-8%] lg:h-[520px] lg:w-[520px] xl:right-[-12%] xl:h-[590px] xl:w-[590px]"
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
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Overview</p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-primary-dark sm:text-3xl">
                Pendampingan yang rapi sesuai kebutuhanmu
              </h2>
              <p className="mt-4 text-sm leading-7 text-text-body/70 sm:text-base">{description}</p>
            </div>
            <aside className="rounded-[24px] bg-primary-dark p-6 text-white shadow-[0_18px_45px_rgba(9,19,68,0.14)]">
              <HiOutlineClipboardList className="text-3xl text-[#b8cbff]" />
              <h3 className="mt-4 text-lg font-bold text-white">Ringkasan layanan</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Konsultasikan kebutuhanmu lebih dulu. Tim Surgency akan membantu menentukan proses yang paling sesuai.
              </p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-white hover:text-[#b8cbff]">
                Mulai konsultasi <HiChevronRight />
              </a>
            </aside>
          </div>
        </section>
        <WaveDivider topColor="#eef4ff" bottomColor="#ffffff" variant="simple" />

        <section className="bg-white px-6 py-14 sm:px-10 md:py-20 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Layanan detail</p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-primary-dark sm:text-3xl">
              Yang bisa kami bantu
            </h2>
            <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-3">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-2 rounded-2xl border border-primary-dark/5 bg-white px-3 py-3 text-xs font-semibold leading-5 text-primary-dark shadow-sm sm:px-4 sm:text-sm">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white">
                    <HiCheck />
                  </span>
                  {service}
                </div>
              ))}
            </div>
          </div>
        </section>
        <WaveDivider topColor="#ffffff" bottomColor="#eef4ff" variant="layered" />

        <section className="bg-secondary px-6 py-14 sm:px-10 md:py-20 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Cocok untuk siapa</p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-primary-dark sm:text-3xl">
              Fleksibel untuk berbagai kebutuhan
            </h2>
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {audiences.map((audience) => (
                <div key={audience} className="rounded-2xl border border-primary-dark/10 bg-white p-4 shadow-[0_10px_24px_rgba(9,19,68,0.05)]">
                  <HiOutlineUserGroup className="text-xl text-primary" />
                  <p className="mt-3 text-sm font-bold text-primary-dark">{audience}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <WaveDivider topColor="#eef4ff" bottomColor="#f6f8fc" variant="simple" />

        <section className="bg-surface-alt px-6 py-14 sm:px-10 md:py-20 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Alur kerja</p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-primary-dark sm:text-3xl">
              Proses ringkas dan terarah
            </h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((step, index) => (
                <div key={step} className="rounded-2xl border border-primary-dark/5 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold text-primary">{String(index + 1).padStart(2, '0')}</span>
                    <HiOutlineLightningBolt className="text-lg text-primary-dark/30" />
                  </div>
                  <p className="mt-4 text-sm font-bold leading-5 text-primary-dark">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary px-6 py-14 sm:px-10 md:py-20 lg:px-16">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-primary-dark px-6 py-9 text-white shadow-[0_22px_55px_rgba(9,19,68,0.18)] sm:px-9 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b8cbff]">Mulai sekarang</p>
              <h2 className="mt-3 max-w-xl text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                Ceritakan kebutuhanmu, kami bantu susun langkah berikutnya.
              </h2>
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-primary-dark md:mt-0">
              <FaWhatsapp className="text-lg" />
              {cta}
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
