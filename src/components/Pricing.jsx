import { FaWhatsapp, FaStar } from 'react-icons/fa';

const pricingPackages = [
  {
    name: 'STARTER',
    oldPrice: 'Rp3.000.000',
    price: 'Rp1.999.000',
    features: [
      '10 Konten',
      '4 Feed Instagram',
      'Landing Page Basic',
      'Copywriting Singkat',
      'CTA WhatsApp',
      'Responsive Mobile',
      '2x Revisi Ringan',
    ],
    recommended: false,
    cta: 'Pilih Starter',
  },
  {
    name: 'GROWTH',
    oldPrice: 'Rp4.000.000',
    price: 'Rp2.999.000',
    features: [
      '15 Konten',
      '8 Feed Instagram',
      'Landing Page Standard',
      'Copywriting Konten',
      'CTA WhatsApp',
      'Responsive Mobile',
      'Basic SEO',
      '2x Revisi',
    ],
    recommended: true,
    cta: 'Pilih Growth',
  },
  {
    name: 'PRO',
    oldPrice: 'Rp5.500.000',
    price: 'Rp3.999.000',
    features: [
      '20 Konten',
      '12 Feed Instagram',
      'Landing Page Premium',
      'Copywriting Konten & Landing Page',
      'CTA WhatsApp',
      'Responsive Mobile',
      'Basic SEO',
      'Animasi Ringan',
      '3x Revisi',
    ],
    recommended: false,
    cta: 'Pilih Pro',
  },
];

function createWhatsAppLink(packageName) {
  const message = `Halo Surgency Studio, saya ingin konsultasi Paket ${packageName}.`;
  return `https://wa.me/6285719630624?text=${encodeURIComponent(message)}`;
}

const bottomMessage = encodeURIComponent('Halo Surgency Studio, saya ingin konsultasi paket layanan.');

export default function Pricing() {
  return (
    <section className="pricing-section-wrapper">
      <div className="pricing-wave-top" aria-hidden="true">
        <svg viewBox="0 0 1440 96" preserveAspectRatio="none">
          <path
            d="M0,42 C220,76 408,50 610,35 C815,20 978,40 1138,55 C1270,68 1358,28 1440,42 L1440,96 L0,96 Z"
            fill="#f6f8fc"
            opacity="0.7"
          />
          <path
            d="M0,62 C250,82 430,64 640,52 C840,40 1000,68 1168,74 C1290,78 1362,54 1440,64 L1440,96 L0,96 Z"
            fill="#f6f8fc"
          />
        </svg>
      </div>

      <section id="paket" className="pricing-section">
        <div className="pricing-shape-top" />
        <div className="pricing-shape-top-blue" />
        <div className="pricing-shape-bottom" />
        <div className="pricing-shape-bottom-blue" />

        <div className="pricing-container">
          <div className="pricing-logo">
            <img src="/surgency-01.png" alt="Surgency Studio" />
          </div>

          <h2 className="pricing-title">
            Paket Surgency <span>Studio</span>
          </h2>
          <p className="pricing-subtitle">
            Solusi konten dan landing page profesional untuk membangun{' '}
            <strong>brand</strong> dan <strong>mengembangkan bisnis</strong> Anda.
          </p>

          <div className="pricing-grid">
            {pricingPackages.map((pkg) => (
              <article
                key={pkg.name}
                className={`pricing-card ${pkg.recommended ? 'recommended' : ''}`}
              >
                {pkg.recommended && (
                  <div className="recommend-badge">
                    <FaStar />
                    REKOMENDASI
                  </div>
                )}

                <div className="pricing-card-header">
                  <h3 className="pricing-package-name">{pkg.name}</h3>
                </div>

                <div className="pricing-card-body">
                  <p className="old-price">{pkg.oldPrice}</p>
                  <p className="new-price">{pkg.price}</p>
                  <div className="package-divider" />

                  <ul className="feature-list">
                    {pkg.features.map((feature) => (
                      <li key={feature}>
                        <span className="check-icon">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={createWhatsAppLink(pkg.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="package-button"
                  >
                    <FaWhatsapp />
                    {pkg.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="pricing-bottom-cta">
            <a
              href={`https://wa.me/6285719630624?text=${bottomMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
              Konsultasi Sekarang
            </a>
            <div>WA: 085719630624</div>
          </div>

          <p className="pricing-note">
            *Belum termasuk domain, hosting berbayar, dan foto/video produk.
          </p>
        </div>
      </section>

      <div className="pricing-wave-bottom" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,48 C180,10 360,100 540,85 C720,70 900,15 1080,30 C1260,45 1350,90 1440,65 L1440,120 L0,120 Z"
            fill="#eef4ff"
          />
        </svg>
      </div>
    </section>
  );
}
