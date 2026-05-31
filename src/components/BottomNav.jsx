import { HiHome, HiBriefcase, HiStar, HiQuestionMarkCircle } from 'react-icons/hi';
import useActiveSection from '../hooks/useActiveSection';

const bottomLinks = [
  { label: 'Beranda', href: '#beranda', icon: HiHome },
  { label: 'Paket', href: '#paket', icon: HiStar },
  { label: 'Layanan', href: '#layanan', icon: HiBriefcase },
  { label: 'Portofolio', href: '#portofolio', icon: HiBriefcase },
  { label: 'FAQ', href: '#faq', icon: HiQuestionMarkCircle },
];
const bottomSectionIds = bottomLinks.map((link) => link.href.slice(1));

export default function BottomNav() {
  const activeSection = useActiveSection(bottomSectionIds);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="md:hidden fixed bottom-6 left-4 right-4 z-50">
      <div className="bg-white/80 backdrop-blur-xl border border-blue-100/50 shadow-[0_8px_32px_rgba(37,99,235,0.15)] rounded-2xl px-2 py-2.5">
        <div className="flex items-center justify-around">
          {bottomLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`flex min-w-[50px] flex-col items-center gap-0.5 rounded-xl py-1 transition-colors duration-300 ${
                activeSection === link.href.slice(1)
                  ? 'bg-primary-dark'
                  : 'group'
              }`}
            >
              <div className="rounded-xl p-1 transition-colors duration-300 group-hover:bg-blue-50">
                <link.icon className={`text-lg transition-colors duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-white'
                    : 'text-text-body group-hover:text-primary'
                }`} />
              </div>
              <span className={`text-center text-[9px] font-bold uppercase tracking-tighter transition-colors duration-300 ${
                activeSection === link.href.slice(1)
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
