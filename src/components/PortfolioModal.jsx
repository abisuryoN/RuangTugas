import { useEffect } from 'react';

export default function PortfolioModal({
  isOpen,
  modalType,
  item,
  onClose,
  onNext,
  onPrev,
}) {
  const isGallery = modalType === 'Design' || modalType === 'Web';

  useEffect(() => {
    if (!isOpen) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (isGallery && event.key === 'ArrowRight') onNext();
      if (isGallery && event.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, isGallery, onClose, onNext, onPrev]);

  if (!isOpen || !item) return null;

  return (
    <div
      className="portfolio-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="portfolio-modal" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="portfolio-modal-close"
          onClick={onClose}
          aria-label="Tutup modal"
        >
          &times;
        </button>

        {isGallery && (
          <button
            type="button"
            className="portfolio-nav-button portfolio-nav-prev"
            onClick={onPrev}
            aria-label="Portfolio sebelumnya"
          >
            &#8249;
          </button>
        )}

        <div className="portfolio-modal-media">
          {modalType === 'Video' ? (
            <video key={item.videoUrl} src={item.videoUrl} controls />
          ) : (
            <img src={item.image} alt={item.title} />
          )}
        </div>

        {isGallery && (
          <button
            type="button"
            className="portfolio-nav-button portfolio-nav-next"
            onClick={onNext}
            aria-label="Portfolio berikutnya"
          >
            &#8250;
          </button>
        )}

        {modalType === 'Web' && item.demoUrl && (
          <a
            href={item.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="portfolio-demo-link"
          >
            Lihat Demo
          </a>
        )}
      </div>
    </div>
  );
}
