import { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const WA_LINK = 'https://wa.me/6285719630624';
const WA_NUMBER = '085719630624';

const contactCards = [
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: WA_NUMBER,
    cta: 'Chat WhatsApp',
    href: WA_LINK,
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'halo@surgencystudio.com',
    cta: 'Kirim Email',
    href: 'mailto:halo@surgencystudio.com',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Lokasi',
    value: 'Indonesia',
    cta: 'Konsultasi Online',
    href: WA_LINK,
    gradient: 'from-pink-500 to-rose-600',
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
    <section id="kontak" className="relative bg-secondary/50">
      <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-16 py-14 md:py-20">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 mb-3">
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
                className="p-5 rounded-2xl bg-white border border-blue-50 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-center"
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-md`}>
                  <Icon className="text-white text-lg" />
                </div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-text-muted mb-1">{card.label}</p>
                <p className="text-sm font-bold text-text-heading mb-3 leading-tight">{card.value}</p>
                <a
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 w-full py-2 rounded-xl text-xs font-semibold bg-gradient-to-r ${card.gradient} text-white shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300`}
                >
                  {card.cta}
                </a>
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-xl mx-auto">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-blue-100 shadow-md">
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
                className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <FaPaperPlane className="text-base" />
                Kirim via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}