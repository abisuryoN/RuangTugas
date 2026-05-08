import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import WaveDivider from './WaveDivider';

gsap.registerPlugin(ScrollTrigger);

const socials = [
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaTiktok, href: '#', label: 'TikTok' },
  { icon: FaWhatsapp, href: 'https://wa.me/6285719630624', label: 'WhatsApp' },
];

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    // Entrance animations removed so content appears immediately
  }, []);

  return (
    <>
      {/* Wave before footer */}
      <WaveDivider topColor="#FFFFFF" bottomColor="#1E3A8A" variant="simple" />

      <footer ref={footerRef} className="bg-[#1E3A8A] text-white">
        <div className="footer-content w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.jpg" alt="Logo Ruang Tugas" className="w-10 h-10 rounded-xl object-cover shadow-sm" />
                <span className="text-xl font-bold">
                  Ruang<span className="text-primary">Tugas</span>
                </span>
              </div>
              <p className="text-blue-200/70 text-sm leading-relaxed max-w-xs">
                Solusi terpercaya untuk tugas sekolah dan kuliah. Dikerjakan profesional, tepat waktu, dan berkualitas tinggi.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-blue-200 mb-4">
                Navigasi
              </h4>
              <ul className="space-y-3">
                {[
                  { label: 'Home', href: '#home' },
                  { label: 'Brosur', href: '#brosur' },
                  { label: 'Layanan', href: '#layanan' },
                  { label: 'Cara Kerja', href: '#cara-kerja' },
                  { label: 'Keunggulan', href: '#keunggulan' },
                  { label: 'Pesan', href: '#pesan' }
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-sm text-blue-200/60 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-blue-200 mb-4">
                Ikuti Kami
              </h4>
              <div className="flex gap-3">
                {socials.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-xl bg-white/10 hover:bg-primary flex items-center justify-center text-blue-200 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
              <p className="mt-6 text-sm text-blue-200/60">
                Hubungi kami untuk konsultasi gratis.
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-blue-200/50">
              © {new Date().getFullYear()} Ruang Tugas. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
