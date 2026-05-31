import { HiHome, HiBriefcase, HiStar, HiQuestionMarkCircle } from 'react-icons/hi';

const bottomLinks = [
  { label: 'Beranda', href: '#beranda', icon: HiHome },
  { label: 'Layanan', href: '#layanan', icon: HiBriefcase },
  { label: 'Paket', href: '#paket', icon: HiStar },
  { label: 'Portofolio', href: '#portofolio', icon: HiBriefcase },
  { label: 'FAQ', href: '#faq', icon: HiQuestionMarkCircle },
];

export default function BottomNav() {
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
              className="flex flex-col items-center gap-0.5 group min-w-[50px] py-1"
            >
              <div className="p-1 rounded-xl group-hover:bg-blue-50 transition-colors duration-300">
                <link.icon className="text-lg text-text-body group-hover:text-primary transition-colors duration-300" />
              </div>
              <span className="text-[9px] font-bold text-text-body/60 group-hover:text-primary transition-colors duration-300 uppercase tracking-tighter text-center">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}