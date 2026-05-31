import ServiceDetailPage from '../components/ServiceDetailPage';

export default function Edu() {
  return (
    <ServiceDetailPage
      path="edu"
      title="Surgency Edu"
      subtitle="Pendampingan akademik untuk semua mata kuliah dan berbagai jenis tugas agar proses belajar lebih terarah, rapi, dan mudah dipahami."
      description="Surgency Edu hadir sebagai teman bantu akademik untuk mendampingi proses pengerjaan tugas, analisis soal, studi kasus, riset referensi, coding akademik, data, perhitungan, dan project kuliah. Fokusnya bukan hanya hasil akhir, tetapi juga membantu pengguna memahami alur, struktur, dan konsep yang dikerjakan."
      services={['Pendampingan semua mata kuliah', 'Bantuan semua jenis tugas', 'Analisis soal', 'Studi kasus', 'Riset referensi', 'Penyusunan struktur jawaban', 'Data & perhitungan', 'Coding akademik', 'Project kuliah', 'Revisi tugas', 'Penjelasan konsep', 'Persiapan presentasi']}
      audiences={['Pelajar', 'Mahasiswa', 'Tugas individu', 'Tugas kelompok', 'Project kuliah', 'Presentasi akademik']}
      steps={['Konsultasi kebutuhan', 'Kirim brief dan file tugas', 'Analisis materi', 'Proses pendampingan', 'Revisi dan finalisasi']}
      cta="Konsultasi Surgency Edu"
      whatsappMessage="Halo Surgency Studio, saya ingin konsultasi layanan Surgency Edu."
    />
  );
}
