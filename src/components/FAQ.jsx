import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

const faqs = [
  {
    q: 'Apakah Surgency Edu hanya untuk PPT, makalah, dan dokumen?',
    a: 'Tidak. Surgency Edu membantu pendampingan akademik, mulai dari analisis soal, studi kasus, riset referensi, coding akademik, perhitungan, sampai perapihan hasil akhir.',
  },
  {
    q: 'Bagaimana alur pendampingan akademiknya?',
    a: 'Kami membantu menyusun struktur, merapikan hasil, memberi arahan, dan membantu memahami materi sesuai kebutuhan serta brief yang disepakati.',
  },
  {
    q: 'Apakah bisa bantu desain dan konten video?',
    a: 'Bisa. Surgency Creative melayani desain poster, feed Instagram, carousel, CV, portfolio, branding visual, thumbnail, sampai video konten seperti Reels dan TikTok.',
  },
  {
    q: 'Apakah bisa buat website?',
    a: 'Bisa. Surgency Digital membantu pembuatan landing page, website company profile, website UMKM, personal branding site, UI basic, dan kebutuhan coding tertentu.',
  },
  {
    q: 'Bagaimana cara konsultasi?',
    a: 'Klik tombol konsultasi, hubungi WhatsApp 085719630624, kirim kebutuhan dan deadline, lalu tim akan bantu arahkan prosesnya.',
  },
  {
    q: 'Apakah bisa revisi?',
    a: 'Bisa. Revisi dilakukan sesuai brief dan kesepakatan awal agar hasil akhir lebih sesuai kebutuhan.',
  },
  {
    q: 'Berapa lama pengerjaannya?',
    a: 'Waktu pengerjaan menyesuaikan tingkat kesulitan, jenis layanan, dan deadline. Konsultasikan dulu agar estimasinya lebih jelas.',
  },
  {
    q: 'Apakah bisa urgent?',
    a: 'Bisa dikonsultasikan terlebih dahulu. Untuk request urgent, estimasi biaya dan waktu akan menyesuaikan tingkat kesulitan.',
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border border-blue-100 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-semibold text-text-heading group-hover:text-primary-dark transition-colors leading-snug">
          {faq.q}
        </span>
        <HiChevronDown
          size={18}
          className={`text-text-muted flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary-dark' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48' : 'max-h-0'}`}
      >
        <p className="px-5 pb-4 text-xs text-text-body/70 leading-relaxed">
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="relative bg-white">
      <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-16 py-14 md:py-20">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-3">
            <span className="text-[11px] font-semibold text-primary-dark tracking-wide uppercase">FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-extrabold mb-3 tracking-tight text-text-heading">
            Pertanyaan Umum
          </h2>
          <p className="text-text-body/70 text-sm sm:text-base leading-relaxed">
            Pertanyaan yang sering ditanyakan sebelum mulai konsultasi.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-2xl mx-auto space-y-2">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
