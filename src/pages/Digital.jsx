import ServiceDetailPage from '../components/ServiceDetailPage';

export default function Digital() {
  return (
    <ServiceDetailPage
      path="digital"
      title="Surgency Digital"
      subtitle="Solusi digital untuk website, landing page, UI, dan project online yang modern, responsif, serta siap digunakan."
      description="Surgency Digital membantu kebutuhan website, landing page, company profile, web UMKM, personal branding site, UI website, frontend slicing, dan maintenance website. Fokus pada tampilan yang rapi, responsive, mudah digunakan, dan sesuai kebutuhan brand."
      services={['Website', 'Landing Page', 'Company Profile', 'Web UMKM', 'Personal Branding', 'Portfolio Online', 'Toko Online', 'Web Sekolah / Edukasi', 'Web Event', 'UI Website', 'Frontend Slicing', 'Maintenance Website', 'Deployment basic']}
      audiences={['UMKM', 'Bisnis kecil', 'Personal brand', 'Sekolah / lembaga', 'Agency kecil', 'Project digital', 'Organisasi']}
      steps={['Konsultasi kebutuhan website', 'Kirim brief dan referensi', 'Penyusunan struktur halaman', 'Development', 'Revisi dan deploy']}
      cta="Konsultasi Surgency Digital"
      whatsappMessage="Halo Surgency Studio, saya ingin konsultasi layanan Surgency Digital."
    />
  );
}
