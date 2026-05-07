import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const phoneNumber = '6285719630624';
  const message = 'Halo admin Ruang Tugas 👋\n\nSaya ingin bertanya mengenai layanan bantuan tugas. Bisa dibantu?';
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-32 right-6 md:bottom-8 md:right-8 z-[60] group"
      aria-label="Chat with us on WhatsApp"
    >
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-white border border-blue-100 shadow-xl rounded-lg text-sm font-semibold text-text-heading opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Tanya Admin 👋
      </div>

      {/* Button */}
      <div className="relative">
        <div className="absolute inset-0 bg-emerald-500 rounded-full blur-lg opacity-40 animate-pulse group-hover:opacity-60 transition-opacity" />
        <div className="relative w-14 h-14 md:w-16 md:h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all duration-300">
          <FaWhatsapp className="text-3xl md:text-4xl" />
          
          {/* Notification Badge */}
          <span className="absolute top-0 right-0 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
          </span>
        </div>
      </div>
    </a>
  );
}
