import { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import WaveDivider from './WaveDivider';

const WA_LINK = 'https://wa.me/6285719630624';
const WA_NUMBER = '085719630624';

const contactCards = [
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: WA_NUMBER,
    cta: 'Chat WhatsApp',
    href: WA_LINK,
    tone: 'bg-primary-dark',
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'halo@surgencystudio.com',
    cta: 'Kirim Email',
    href: 'mailto:halo@surgencystudio.com',
    tone: 'bg-primary',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Lokasi',
    value: 'Indonesia',
    cta: 'Konsultasi Online',
    href: WA_LINK,
    tone: 'bg-[#123a92]',
  },
];

const serviceOptions = [
  'Surgency Edu',
  'Surgency Creative',
  'Surgency Digital',
  'Lainnya',
];

export default function Kontak() {
  const [form, setForm] = useState({
    nama: '',
    layanan: '',
    deadline: '',
    kebutuhan: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Halo Surgency Studio, saya ingin konsultasi.

Nama: ${form.nama}
Layanan: ${form.layanan}
Deadline: ${form.deadline}
Kebutuhan: ${form.kebutuhan}`;
    window.open(`${WA_LINK}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="kontak" className="relative bg-secondary">
      <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-16 py-14 md:py-20">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[rgba(5,66,201,0.15)] mb-3">
            <span className="text-[11px] font-semibold text-primary-dark tracking-wide uppercase">Hubungi Kami</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-extrabold mb-3 tracking-tight text-text-heading">
            Hubungi Surgency Studio
          </h2>
          <p className="text-text-body/70 text-sm sm:text-base leading-relaxed">
            Punya tugas, ide, desain, konten, atau project digital yang butuh dibantu? Konsultasikan dulu kebutuhanmu.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
          {contactCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="p-5 rounded-[22px] bg-white border border-[rgba(9,19,68,0.08)] shadow-[0_14px_35px_rgba(9,19,68,0.06)] hover:shadow-[0_18px_45px_rgba(9,19,68,0.10)] hover:-translate-y-0.5 transition-all duration-300 text-center"
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-xl ${card.tone} flex items-center justify-center shadow-md`}>
                  <Icon className="text-white text-lg" />
                </div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-text-muted mb-1">{card.label}</p>
                <p className="text-sm font-bold text-text-heading mb-3 leading-tight">{card.value}</p>
                <a
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2 rounded-xl text-xs font-semibold bg-primary-dark text-white shadow-[0_10px_22px_rgba(9,19,68,0.16)] hover:bg-primary hover:shadow-[0_12px_26px_rgba(5,66,201,0.20)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  {card.cta}
                </a>
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-xl mx-auto">
          <div className="p-6 sm:p-8 rounded-[24px] bg-white border border-[rgba(9,19,68,0.08)] shadow-[0_18px_45px_rgba(9,19,68,0.08)]">
            <h3 className="text-lg font-bold text-text-heading mb-1 text-center">Kirim Pesan via WhatsApp</h3>
            <p className="text-xs text-text-muted text-center mb-6">Isi form di bawah dan akan terbuka otomatis di WhatsApp</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-text-heading mb-1.5">Nama</label>
                <input
                  type="text"
                  name="nama"
                  value={form.nama}
                  onChange={handleChange}
                  required
                  placeholder="Nama lengkap"
                  className="w-full px-4 py-3 rounded-xl bg-blue-50/50 border border-blue-100 text-sm text-text-heading placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-heading mb-1.5">Jenis Layanan</label>
                <select
                  name="layanan"
                  value={form.layanan}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-blue-50/50 border border-blue-100 text-sm text-text-heading focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-300 appearance-none cursor-pointer"
                >
                  <option value="">Pilih layanan</option>
                  {serviceOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-heading mb-1.5">Deadline</label>
                <input
                  type="date"
                  name="deadline"
                  value={form.deadline}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-blue-50/50 border border-blue-100 text-sm text-text-heading focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-300 cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-heading mb-1.5">Pesan / Kebutuhan</label>
                <textarea
                  name="kebutuhan"
                  value={form.kebutuhan}
                  onChange={handleChange}
                  required
                  rows="3"
                  placeholder="Jelaskan kebutuhan Anda..."
                  className="w-full px-4 py-3 rounded-xl bg-blue-50/50 border border-blue-100 text-sm text-text-heading placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 bg-primary-dark text-white font-bold text-sm rounded-xl shadow-[0_14px_28px_rgba(9,19,68,0.18)] hover:bg-primary hover:shadow-[0_16px_32px_rgba(5,66,201,0.22)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <FaPaperPlane className="text-base" />
                Kirim via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
      <WaveDivider topColor="#eef4ff" bottomColor="#091344" variant="simple" />
    </section>
  );
}
