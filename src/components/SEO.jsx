import { Helmet } from 'react-helmet-async';

export default function SEO() {
  const title = "Ruang Tugas | Joki Tugas, Joki Canva, Joki IT & Bantuan Tugas Kuliah";
  const description = "Ruang Tugas menyediakan bantuan tugas sekolah dan kuliah, mulai dari IT, coding, Canva, matematika, karya ilmiah, jaringan komputer, hingga berbagai kebutuhan akademik lainnya.";
  const keywords = "joki tugas, joki tugas kuliah, joki tugas sekolah, joki canva, joki IT, joki coding, joki matematika, joki karya ilmiah, joki makalah, joki presentasi, joki jaringan komputer, tugas SMA, tugas SMK";
  const url = "https://ruangtugas.vercel.app/";
  const image = "https://ruangtugas.vercel.app/og-image.png"; // Placeholder for an actual image

  // JSON-LD Structured Data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ruang Tugas",
    "url": url,
    "logo": image,
    "description": description,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-857-1963-0624",
      "contactType": "customer service"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ruang Tugas",
    "url": url,
    "description": description
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
}
