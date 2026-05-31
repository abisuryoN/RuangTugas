import ServiceDetailPage from '../components/ServiceDetailPage';

export default function Creative() {
  return (
    <ServiceDetailPage
      path="creative"
      title="Surgency Creative"
      subtitle="Layanan kreatif untuk desain visual, branding, social media, dan video content yang clean, modern, dan siap digunakan."
      description="Surgency Creative membantu kebutuhan visual brand, konten promosi, desain social media, video pendek, branding, thumbnail, proposal, dan berbagai kebutuhan kreatif digital. Layanan ini cocok untuk UMKM, personal brand, organisasi, event, dan content creator yang ingin tampil lebih profesional."
      services={['Desain poster', 'Feed Instagram', 'Carousel', 'CV & portfolio', 'Branding visual', 'Desain proposal', 'Thumbnail', 'Video konten', 'Reels', 'TikTok content', 'Konten promosi', 'Social media campaign', 'Template social media']}
      audiences={['UMKM', 'Personal brand', 'Organisasi', 'Event', 'Content creator', 'Brand promosi', 'Komunitas']}
      steps={['Konsultasi kebutuhan visual', 'Kirim referensi dan brief', 'Penyusunan konsep', 'Proses desain / editing', 'Revisi dan final file']}
      cta="Konsultasi Surgency Creative"
      whatsappMessage="Halo Surgency Studio, saya ingin konsultasi layanan Surgency Creative."
    />
  );
}
