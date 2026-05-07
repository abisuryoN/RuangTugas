import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Cara Kerja', href: '#cara-kerja' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Pesan', href: '#pesan' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen && mobileMenuRef.current) {
      gsap.from(mobileMenuRef.current.children, {
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      ref={navRef}
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_2px_30px_rgba(96,165,250,0.1)] border-b border-blue-100/50'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group" onClick={(e) => handleNavClick(e, '#home')}>
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-primary to-primary-deeper flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-shadow duration-300">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="font-heading text-lg md:text-xl font-bold text-text-heading">
              Ruang<span className="text-primary-dark">Tugas</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-text-body hover:text-primary-dark hover:bg-blue-50/60 transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <a
            href="#pesan"
            onClick={(e) => handleNavClick(e, '#pesan')}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-primary-deeper text-white text-sm font-semibold rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
          >
            Pesan Sekarang
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl text-text-heading hover:bg-blue-50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-t border-blue-100/50 shadow-xl">
          <div ref={mobileMenuRef} className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-3 rounded-xl text-sm font-medium text-text-body hover:text-primary-dark hover:bg-blue-50/60 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pesan"
              onClick={(e) => handleNavClick(e, '#pesan')}
              className="block text-center px-4 py-3 mt-2 bg-gradient-to-r from-primary to-primary-deeper text-white font-semibold rounded-xl shadow-lg shadow-primary/30"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
