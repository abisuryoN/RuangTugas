import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Portofolio', href: '#portofolio' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontak', href: '#kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/92 backdrop-blur-xl shadow-[0_2px_30px_rgba(9,19,68,0.08)] border-b border-[rgba(9,19,68,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#beranda"
            className="flex items-center gap-2 group"
            onClick={(e) => handleNavClick(e, '#beranda')}
          >
            <div className="bg-white rounded-2xl p-1.5 shadow-sm ring-1 ring-[rgba(9,19,68,0.08)]">
              <img
                src="/surgency-01.png"
                alt="Surgency Studio"
                className="h-9 md:h-10 w-auto object-contain block"
              />
            </div>
            <span className="font-heading text-lg md:text-xl font-bold text-text-heading">
              Surgency <span className="text-primary-dark">Studio</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-text-heading hover:text-primary hover:bg-secondary transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <a
            href="https://wa.me/6285719630624?text=Halo%20Surgency%20Studio%2C%20saya%20ingin%20konsultasi%20layanan."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-primary-dark text-white text-sm font-semibold rounded-xl shadow-[0_12px_28px_rgba(9,19,68,0.18)] hover:bg-primary hover:shadow-[0_14px_32px_rgba(5,66,201,0.22)] hover:scale-105 transition-all duration-300"
          >
            Konsultasi via WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
