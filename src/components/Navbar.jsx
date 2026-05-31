import { useCallback, useEffect, useRef, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import useActiveSection from '../hooks/useActiveSection';

const WA_LINK = 'https://wa.me/6285719630624?text=Halo%20Surgency%20Studio%2C%20saya%20ingin%20konsultasi%20layanan.';

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Paket', href: '#paket' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Portofolio', href: '#portofolio' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontak', href: '#kontak' },
];
const navSectionIds = navLinks.map((link) => link.href.slice(1));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuLayerActive, setMobileMenuLayerActive] = useState(false);
  const closeTimerRef = useRef(null);
  const activeSection = useActiveSection(navSectionIds);

  const openMobileMenu = useCallback(() => {
    clearTimeout(closeTimerRef.current);
    setMobileMenuLayerActive(true);
    requestAnimationFrame(() => setMobileMenuOpen(true));
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
    clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setMobileMenuLayerActive(false);
    }, 350);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuLayerActive) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.body.classList.add('mobile-menu-open');

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeMobileMenu();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.classList.remove('mobile-menu-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeMobileMenu, mobileMenuLayerActive]);

  useEffect(() => () => clearTimeout(closeTimerRef.current), []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    closeMobileMenu();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        mobileMenuLayerActive ? 'z-[1200]' : 'z-50'
      } ${
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
              Surgency <span className="text-primary">Studio</span>
            </span>
          </a>

          <button
            type="button"
            onClick={openMobileMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(9,19,68,0.10)] bg-white text-2xl text-primary-dark shadow-sm transition hover:bg-secondary md:hidden"
            aria-label="Buka menu navigasi"
            aria-expanded={mobileMenuOpen}
          >
            <HiMenuAlt3 />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'bg-secondary text-primary'
                    : 'text-text-heading hover:text-primary hover:bg-secondary'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-primary-dark text-white text-sm font-semibold rounded-xl shadow-[0_12px_28px_rgba(9,19,68,0.18)] hover:bg-primary hover:shadow-[0_14px_32px_rgba(5,66,201,0.22)] hover:scale-105 transition-all duration-300"
          >
            Konsultasi via WhatsApp
          </a>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[1100] bg-primary-dark/30 backdrop-blur-sm transition-opacity duration-[350ms] ease-out md:hidden ${
          mobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      <aside
        className={`fixed right-0 top-0 z-[1110] flex h-dvh w-[82%] max-w-[320px] flex-col bg-white px-5 pb-6 pt-5 shadow-[-18px_0_45px_rgba(9,19,68,0.18)] transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="font-heading text-lg font-bold text-text-heading">
            Menu <span className="text-primary">Navigasi</span>
          </span>
          <button
            type="button"
            onClick={closeMobileMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-2xl text-primary-dark transition hover:bg-primary hover:text-white"
            aria-label="Tutup menu navigasi"
          >
            <HiX />
          </button>
        </div>

        <div className="flex flex-col gap-1.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                activeSection === link.href.slice(1)
                  ? 'bg-primary-dark text-white'
                  : 'text-text-heading hover:bg-secondary hover:text-primary'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-white shadow-[0_12px_28px_rgba(5,66,201,0.20)] transition hover:bg-primary-dark"
        >
          <FaWhatsapp className="text-lg" />
          Konsultasi WhatsApp
        </a>
      </aside>
    </nav>
  );
}
