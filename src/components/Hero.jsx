import { FaWhatsapp } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

const WA_LINK = 'https://wa.me/6285719630624?text=Halo%20Surgency%20Studio%2C%20saya%20ingin%20konsultasi%20layanan.';

const highlights = ['Edu', 'Creative', 'Digital'];

export default function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden bg-white">
      <div className="relative z-10 w-full px-5 sm:px-8 lg:px-12 xl:px-16 pt-24 md:pt-28 pb-12 md:pb-10">
        <div className="grid items-center gap-8 lg:min-h-[490px] lg:grid-cols-[0.98fr_1.02fr]">
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="font-heading text-[3.15rem] font-extrabold leading-[0.9] tracking-normal text-text-heading sm:text-6xl lg:text-[4.6rem] xl:text-[5.05rem]">
              Surgency
              <span className="block">Studio</span>
            </h1>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xl font-extrabold text-primary-deeper sm:text-2xl lg:justify-start">
              {highlights.map((item, index) => (
                <span key={item} className="inline-flex items-center gap-3">
                  {item}
                  {index < highlights.length - 1 && (
                    <span className="h-2 w-2 rounded-full bg-text-heading" />
                  )}
                </span>
              ))}
            </div>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-text-body sm:text-base lg:mx-0">
              Partner terbaik untuk membantu kebutuhan akademik, desain kreatif,
              coding, website, dan branding digital dengan hasil rapi,
              profesional, dan tepat waktu.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-deeper px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:bg-[#0b4ee6] hover:shadow-primary/40"
              >
                <FaWhatsapp className="text-lg" />
                Konsultasi Sekarang
              </a>
              <a
                href="#layanan"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#layanan')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary-deeper bg-white px-6 py-3 text-sm font-bold text-primary-deeper transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Lihat Layanan
                <HiArrowRight className="text-lg" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex min-h-[300px] w-full max-w-lg items-center justify-start lg:min-h-[440px] lg:max-w-none">
            <div
              className="absolute right-[-46%] top-[-8%] h-[350px] w-[350px] bg-[#06185f] sm:right-[-24%] sm:h-[420px] sm:w-[420px] lg:right-[-18%] lg:top-[-8%] lg:h-[520px] lg:w-[520px] xl:right-[-12%] xl:h-[590px] xl:w-[590px]"
              style={{
                borderRadius: '50% 50% 0 50%',
                clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 38% 100%, 0 62%, 0 31%)',
              }}
            />
            <div className="absolute right-[14%] top-[58%] h-16 w-16 rounded-full bg-[#0b55f5] shadow-2xl shadow-primary/30 sm:h-20 sm:w-20 lg:right-[22%] lg:top-[55%] lg:h-24 lg:w-24" />

            <div className="relative -ml-8 w-[82%] rounded-r-[1.6rem] bg-white px-8 py-10 shadow-[0_18px_50px_rgba(15,23,42,0.16)] ring-1 ring-blue-100 sm:-ml-10 sm:w-[72%] sm:px-10 sm:py-13 lg:-ml-8 lg:w-[62%] lg:px-12 lg:py-14 xl:-ml-4 xl:w-[58%]">
              <img
                src="/surgency-01.png"
                alt="Logo Surgency Studio"
                className="h-24 w-auto object-contain sm:h-28 lg:h-32 xl:h-36"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
