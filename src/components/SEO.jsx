import { Helmet } from 'react-helmet-async';

export default function SEO({
  title = "Surgency Studio | Edu, Creative, Digital",
  description = "Surgency Studio adalah partner edukasi, kreatif, dan digital untuk kebutuhan akademik, desain, coding, website, dan branding dengan hasil profesional.",
  path = "",
}) {
  const keywords = "Surgency Studio, layanan akademik, desain kreatif, website, coding, branding digital, desain poster, feed Instagram, UI UX";
  const url = `https://surgencystudio.com/${path}`;
  const image = "https://surgencystudio.com/surgency-01.png";

  // JSON-LD Structured Data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Surgency Studio",
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
    "name": "Surgency Studio",
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
