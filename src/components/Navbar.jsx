import { useCallback, useEffect, useRef, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiChevronDown, HiMenuAlt3, HiX } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';
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
const serviceLinks = [
  { label: 'Surgency Edu', href: '/edu', desc: 'Pendampingan akademik' },
  { label: 'Surgency Creative', href: '/creative', desc: 'Desain dan konten kreatif' },
  { label: 'Surgency Digital', href: '/digital', desc: 'Website dan solusi digital' },
];

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isServicePage = serviceLinks.some((link) => link.href === location.pathname);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuLayerActive, setMobileMenuLayerActive] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimerRef = useRef(null);
  const activeSection = useActiveSection(navSectionIds);

  const openMobileMenu = useCallback(() => {
    clearTimeout(closeTimerRef.current);
    setMobileMenuLayerActive(true);
    requestAnimationFrame(() => setMobileMenuOpen(true));
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
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
    closeMobileMenu();
    if (!isHomePage) return;
    e.preventDefault();
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
            href={isHomePage ? '#beranda' : '/#beranda'}
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
            {navLinks.map((link) => link.href === '#layanan' ? (
              <div key={link.href} className="relative">
                <button
                  type="button"
                  onClick={() => setServicesOpen((open) => !open)}
                  className={`flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isServicePage || (isHomePage && activeSection === 'layanan')
                      ? 'bg-secondary text-primary'
                      : 'text-text-heading hover:text-primary hover:bg-secondary'
                  }`}
                  aria-expanded={servicesOpen}
                >
                  {link.label}
                  <HiChevronDown className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="absolute left-1/2 top-full mt-3 w-64 -translate-x-1/2 rounded-2xl border border-primary-dark/10 bg-white p-2 shadow-[0_18px_45px_rgba(9,19,68,0.14)]">
                    {serviceLinks.map((service) => (
                      <a
                        key={service.href}
                        href={service.href}
                        className={`block rounded-xl px-3 py-2.5 transition-colors ${
                          location.pathname === service.href
                            ? 'bg-primary-dark text-white'
                            : 'text-text-heading hover:bg-secondary hover:text-primary'
                        }`}
                      >
                        <span className="block text-sm font-bold">{service.label}</span>
                        <span className={`mt-0.5 block text-[11px] ${location.pathname === service.href ? 'text-white/65' : 'text-text-muted'}`}>
                          {service.desc}
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.href}
                href={isHomePage ? link.href : `/${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isHomePage && activeSection === link.href.slice(1)
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
          {navLinks.map((link) => link.href === '#layanan' ? (
            <div key={link.href}>
              <button
                type="button"
                onClick={() => setMobileServicesOpen((open) => !open)}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                  isServicePage
                    ? 'bg-primary-dark text-white'
                    : 'text-text-heading hover:bg-secondary hover:text-primary'
                }`}
                aria-expanded={mobileServicesOpen}
              >
                {link.label}
                <HiChevronDown className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="mt-1.5 space-y-1 rounded-2xl bg-secondary/70 p-2">
                  {serviceLinks.map((service) => (
                    <a
                      key={service.href}
                      href={service.href}
                      className={`block rounded-xl px-3 py-2 text-xs font-bold transition-colors ${
                        location.pathname === service.href
                          ? 'bg-primary text-white'
                          : 'text-text-heading hover:bg-white hover:text-primary'
                      }`}
                    >
                      {service.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <a
              key={link.href}
              href={isHomePage ? link.href : `/${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                isHomePage && activeSection === link.href.slice(1)
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
