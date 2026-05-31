import { useState } from 'react';
import { HiChevronUp, HiHome, HiBriefcase, HiStar, HiQuestionMarkCircle } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';
import useActiveSection from '../hooks/useActiveSection';

const bottomLinks = [
  { label: 'Beranda', href: '#beranda', icon: HiHome },
  { label: 'Paket', href: '#paket', icon: HiStar },
  { label: 'Layanan', href: '#layanan', icon: HiBriefcase },
  { label: 'Portofolio', href: '#portofolio', icon: HiBriefcase },
  { label: 'FAQ', href: '#faq', icon: HiQuestionMarkCircle },
];
const bottomSectionIds = bottomLinks.map((link) => link.href.slice(1));
const serviceLinks = [
  { label: 'Edu', href: '/edu' },
  { label: 'Creative', href: '/creative' },
  { label: 'Digital', href: '/digital' },
];

export default function BottomNav() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isServicePage = serviceLinks.some((link) => link.href === location.pathname);
  const [servicesOpen, setServicesOpen] = useState(false);
  const activeSection = useActiveSection(bottomSectionIds);

  const handleNavClick = (e, href) => {
    if (!isHomePage) return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="md:hidden fixed bottom-6 left-4 right-4 z-50">
      {servicesOpen && (
        <div className="mb-2 grid grid-cols-3 gap-1.5 rounded-2xl border border-blue-100/70 bg-white/95 p-2 shadow-[0_12px_35px_rgba(9,19,68,0.16)] backdrop-blur-xl">
          {serviceLinks.map((service) => (
            <a
              key={service.href}
              href={service.href}
              className={`rounded-xl px-2 py-2.5 text-center text-[10px] font-extrabold uppercase tracking-tight transition-colors ${
                location.pathname === service.href
                  ? 'bg-primary-dark text-white'
                  : 'bg-secondary text-primary-dark hover:bg-primary hover:text-white'
              }`}
            >
              {service.label}
            </a>
          ))}
        </div>
      )}
      <div className="bg-white/80 backdrop-blur-xl border border-blue-100/50 shadow-[0_8px_32px_rgba(37,99,235,0.15)] rounded-2xl px-2 py-2.5">
        <div className="flex items-center justify-around">
          {bottomLinks.map((link) => link.href === '#layanan' ? (
            <button
              key={link.href}
              type="button"
              onClick={() => setServicesOpen((open) => !open)}
              className={`relative flex min-w-[50px] flex-col items-center gap-0.5 rounded-xl py-1 transition-colors duration-300 ${
                isServicePage || servicesOpen || (isHomePage && activeSection === 'layanan')
                  ? 'bg-primary-dark'
                  : 'group'
              }`}
              aria-expanded={servicesOpen}
            >
              <HiChevronUp
                className={`absolute -right-0.5 -top-1 text-[11px] transition-transform duration-300 ${
                  servicesOpen ? 'rotate-180' : ''
                } ${
                  isServicePage || servicesOpen || (isHomePage && activeSection === 'layanan')
                    ? 'text-white'
                    : 'text-primary-dark'
                }`}
                aria-hidden="true"
              />
              <div className="rounded-xl p-1 transition-colors duration-300 group-hover:bg-blue-50">
                <link.icon className={`text-lg transition-colors duration-300 ${
                  isServicePage || servicesOpen || (isHomePage && activeSection === 'layanan')
                    ? 'text-white'
                    : 'text-text-body group-hover:text-primary'
                }`} />
              </div>
              <span className={`text-center text-[9px] font-bold uppercase tracking-tighter transition-colors duration-300 ${
                isServicePage || servicesOpen || (isHomePage && activeSection === 'layanan')
                  ? 'text-white'
                  : 'text-text-body/60 group-hover:text-primary'
              }`}>
                {link.label}
              </span>
            </button>
          ) : (
            <a
              key={link.href}
              href={isHomePage ? link.href : `/${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`flex min-w-[50px] flex-col items-center gap-0.5 rounded-xl py-1 transition-colors duration-300 ${
                isHomePage && activeSection === link.href.slice(1)
                  ? 'bg-primary-dark'
                  : 'group'
              }`}
            >
              <div className="rounded-xl p-1 transition-colors duration-300 group-hover:bg-blue-50">
                <link.icon className={`text-lg transition-colors duration-300 ${
                  isHomePage && activeSection === link.href.slice(1)
                    ? 'text-white'
                    : 'text-text-body group-hover:text-primary'
                }`} />
              </div>
              <span className={`text-center text-[9px] font-bold uppercase tracking-tighter transition-colors duration-300 ${
                isHomePage && activeSection === link.href.slice(1)
                  ? 'text-white'
                  : 'text-text-body/60 group-hover:text-primary'
              }`}>
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
