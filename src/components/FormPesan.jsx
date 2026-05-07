import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiUser, HiPhone, HiBookOpen, HiDocumentText, HiCalendar, HiPaperAirplane } from 'react-icons/hi';

gsap.registerPlugin(ScrollTrigger);

const jenisOptions = [
  'IT / Pemrograman',
  'Matematika',
  'Proposal / Laporan',
  'Design / Canva / PPT',
  'Network / Jaringan',
  'Tugas SMA',
  'Tugas SMK',
  'Tugas Kuliah',
  'Lainnya',
];

const adminNumbers = [
  '120363427032916015@g.us',
];

export default function FormPesan() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({
    nama: '',
    whatsapp: '',
    jenis: '',
    deskripsi: '',
    deadline: '',
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success' | 'error', message: '' }

  useEffect(() => {
    // Entrance animations removed so content appears immediately
  }, []);

  // Auto-dismiss toast
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!form.nama || !form.whatsapp || !form.jenis || !form.deskripsi || !form.deadline) {
      setToast({ type: 'error', message: 'Harap isi semua field yang diperlukan.' });
      return;
    }

    setLoading(true);

    const message = `Halo admin Ruang Tugas 👋\n\n📋 *Pesanan Baru*\n\n👤 Nama Pemesan: ${form.nama}\n📱 Nomor WhatsApp: ${form.whatsapp}\n📚 Jenis Tugas: ${form.jenis}\n📝 Deskripsi Tugas: ${form.deskripsi}\n📅 Deadline: ${form.deadline}`;

    const token = import.meta.env.VITE_FONNTE_TOKEN;

    if (!token) {
      setToast({ type: 'error', message: 'Token API belum dikonfigurasi. Hubungi admin.' });
      setLoading(false);
      return;
    }

    try {
      // Send to all admins/groups simultaneously
      const promises = adminNumbers.map((number) =>
        fetch('https://api.fonnte.com/send', {
          method: 'POST',
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            target: number,
            message: message,
          }),
        })
      );

      const results = await Promise.allSettled(promises);
      const anySuccess = results.some((r) => r.status === 'fulfilled' && r.value.ok);

      if (anySuccess) {
        setToast({ type: 'success', message: 'Pesanan berhasil dikirim! Admin akan segera menghubungi kamu. 🎉' });
        setForm({ nama: '', whatsapp: '', jenis: '', deskripsi: '', deadline: '' });
      } else {
        setToast({ type: 'error', message: 'Gagal mengirim pesanan. Silakan coba lagi.' });
      }
    } catch (err) {
      setToast({ type: 'error', message: 'Terjadi kesalahan jaringan. Silakan coba lagi.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="pesan" ref={sectionRef} className="relative bg-white">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-20 md:py-28">
        {/* Section Header */}
        <div className="form-title text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <span className="text-xs font-semibold text-primary-dark tracking-wide uppercase">Pesan Sekarang</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
            <span className="text-text-heading">Siap Pesan </span><span className="text-gradient">Tugas?</span>
          </h2>
          <p className="text-text-body/70 text-base sm:text-lg leading-relaxed">
            Isi form di bawah dan pesananmu akan langsung diterima oleh tim kami secara otomatis.
          </p>
        </div>

        {/* Form */}
        <div className="form-container max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white border border-blue-100 shadow-xl shadow-primary/5"
          >
            <div className="space-y-5">
              {/* Nama */}
              <div className="relative">
                <label htmlFor="nama" className="block text-sm font-semibold text-text-heading mb-2">
                  Nama Pemesan
                </label>
                <div className="relative">
                  <HiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    value={form.nama}
                    onChange={handleChange}
                    placeholder="Masukkan nama lengkap"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-blue-50/50 border border-blue-100 text-sm text-text-heading placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-300"
                  />
                </div>
              </div>

              {/* WhatsApp */}
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-semibold text-text-heading mb-2">
                  Nomor WhatsApp
                </label>
                <div className="relative">
                  <HiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={form.whatsapp}
                    onChange={handleChange}
                    placeholder="Contoh: 6281234567890"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-blue-50/50 border border-blue-100 text-sm text-text-heading placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-300"
                  />
                </div>
              </div>

              {/* Jenis Tugas */}
              <div>
                <label htmlFor="jenis" className="block text-sm font-semibold text-text-heading mb-2">
                  Jenis Tugas
                </label>
                <div className="relative">
                  <HiBookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                  <select
                    id="jenis"
                    name="jenis"
                    value={form.jenis}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-blue-50/50 border border-blue-100 text-sm text-text-heading focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="">Pilih jenis tugas</option>
                    {jenisOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Deskripsi */}
              <div>
                <label htmlFor="deskripsi" className="block text-sm font-semibold text-text-heading mb-2">
                  Deskripsi Tugas
                </label>
                <div className="relative">
                  <HiDocumentText className="absolute left-4 top-4 text-text-muted" />
                  <textarea
                    id="deskripsi"
                    name="deskripsi"
                    value={form.deskripsi}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Jelaskan detail tugas yang ingin dikerjakan..."
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-blue-50/50 border border-blue-100 text-sm text-text-heading placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-300 resize-none"
                  />
                </div>
              </div>

              {/* Deadline */}
              <div>
                <label htmlFor="deadline" className="block text-sm font-semibold text-text-heading mb-2">
                  Deadline
                </label>
                <div className="relative">
                  <HiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                  <input
                    type="date"
                    id="deadline"
                    name="deadline"
                    value={form.deadline}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-blue-50/50 border border-blue-100 text-sm text-text-heading focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-300 cursor-pointer"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-primary to-primary-deeper text-white font-bold text-base rounded-2xl shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Mengirim...
                  </>
                ) : (
                  <>
                    <HiPaperAirplane className="text-lg" />
                    Kirim Pesanan
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 toast-enter`}>
          <div
            className={`px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 ${
              toast.type === 'success'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                : 'bg-gradient-to-r from-red-500 to-rose-500 text-white'
            }`}
          >
            <span className="text-lg">{toast.type === 'success' ? '✅' : '❌'}</span>
            <span className="text-sm font-medium">{toast.message}</span>
          </div>
        </div>
      )}
    </section>
  );
}
