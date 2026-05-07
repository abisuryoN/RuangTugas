import { HiHome, HiBriefcase, HiSparkles, HiPaperAirplane } from 'react-icons/hi';

const bottomLinks = [
  { label: 'Home', href: '#home', icon: HiHome },
  { label: 'Layanan', href: '#layanan', icon: HiBriefcase },
  { label: 'Keunggulan', href: '#keunggulan', icon: HiSparkles },
  { label: 'Pesan', href: '#pesan', icon: HiPaperAirplane },
];

export default function BottomNav() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="md:hidden fixed bottom-6 left-6 right-6 z-50">
      <div className="bg-white/80 backdrop-blur-xl border border-blue-100/50 shadow-[0_8px_32px_rgba(37,99,235,0.15)] rounded-2xl px-4 py-3">
        <div className="flex items-center justify-around">
          {bottomLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="flex flex-col items-center gap-1 group"
            >
              <div className="p-2 rounded-xl group-hover:bg-blue-50 transition-colors duration-300">
                <link.icon className="text-xl text-text-body group-hover:text-primary transition-colors duration-300" />
              </div>
              <span className="text-[10px] font-bold text-text-body/60 group-hover:text-primary transition-colors duration-300 uppercase tracking-tighter">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
