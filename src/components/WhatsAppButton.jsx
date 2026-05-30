import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const phoneNumber = '6285719630624';
  const message = 'Halo Surgency Studio, saya ingin konsultasi layanan. Bisa dibantu?';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-32 right-5 z-[60] md:bottom-8 md:right-8 group"
      aria-label="Chat Surgency Studio di WhatsApp"
    >
      <div className="absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-lg border border-blue-100 bg-white px-3 py-1.5 text-sm font-semibold text-text-heading opacity-0 shadow-xl transition-opacity duration-300 pointer-events-none group-hover:opacity-100 md:block">
        Konsultasi Sekarang
      </div>

      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-primary opacity-30 blur-lg transition-opacity group-hover:opacity-45" />
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary-dark text-white shadow-xl shadow-[rgba(9,19,68,0.24)] transition-all duration-300 hover:scale-110 hover:bg-primary hover:shadow-[rgba(5,66,201,0.28)] active:scale-95 md:h-16 md:w-16">
          <FaWhatsapp className="text-3xl md:text-4xl" />
          <span className="absolute right-0 top-0 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-red-500" />
          </span>
        </div>
      </div>
    </a>
  );
}
