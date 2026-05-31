import { useEffect, useMemo, useRef, useState } from 'react';
import { FaExternalLinkAlt, FaWhatsapp } from 'react-icons/fa';
import portfolioItems from '../data/portfolio';
import PortfolioModal from './PortfolioModal';

const WA_LINK = 'https://wa.me/6285719630624';
const filters = ['Semua', 'Design', 'Video', 'Web'];

const categoryLabel = {
  Design: 'Lihat Design',
  Video: 'Lihat Preview',
  Web: 'Lihat Preview',
};

function PortfolioCard({ item, onOpen }) {
  return (
    <article
      data-type={item.type}
      className="portfolio-card group flex h-full min-h-[430px] flex-col overflow-hidden rounded-[22px] bg-white border border-[rgba(9,19,68,0.08)] shadow-[0_14px_35px_rgba(9,19,68,0.06)] hover:shadow-[0_18px_45px_rgba(9,19,68,0.10)] transition-all duration-300"
    >
      <button type="button" onClick={() => onOpen(item)} className="portfolio-media text-left" aria-label={`Buka ${item.title}`}>
        <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-full bg-primary-dark px-3 py-1 text-[10px] font-bold text-white">
          {item.category}
        </span>
      </button>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="min-h-[38px] text-sm font-bold text-text-heading leading-tight">{item.title}</h3>
        <p className="mt-2 min-h-[40px] text-xs leading-5 text-text-body/70 line-clamp-2">{item.description}</p>
        <div className="mt-auto flex min-h-[78px] flex-wrap content-end gap-2 pt-4">
          <button type="button" onClick={() => onOpen(item)} className="inline-flex h-10 flex-1 items-center justify-center rounded-xl bg-primary-dark px-3 text-xs font-bold text-white transition hover:bg-primary">
            {categoryLabel[item.category]}
          </button>
          {item.category === 'Web' && item.demoUrl && (
            <a href={item.demoUrl} target="_blank" rel="noreferrer" className="inline-flex h-10 items-center justify-center gap-1.5 rounded-xl border border-[rgba(5,66,201,0.22)] bg-white px-3 text-xs font-bold text-primary transition hover:bg-secondary">
              <FaExternalLinkAlt className="text-[10px]" />
              Lihat Demo
            </a>
          )}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-full items-center justify-center gap-1.5 rounded-xl bg-secondary px-3 text-xs font-bold text-primary-dark transition hover:bg-primary hover:text-white">
            <FaWhatsapp className="text-sm" />
            Konsultasi Serupa
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Portofolio() {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const transitionTimerRef = useRef(null);
  const isTransitioningRef = useRef(false);
  const activeSlideRef = useRef(0);

  const designItems = useMemo(
    () => portfolioItems.filter((item) => item.category === 'Design'),
    [],
  );
  const webItems = useMemo(
    () => portfolioItems.filter((item) => item.category === 'Web'),
    [],
  );

  const filteredItems = activeFilter === 'Semua'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeFilter);
  const mobileSlides = filteredItems.length > 1
    ? Array.from({ length: 5 }, () => filteredItems).flat()
    : filteredItems;
  const middleSlideIndex = filteredItems.length > 1 ? filteredItems.length * 2 : 0;

  const activeGallery = modalType === 'Design' ? designItems : webItems;
  const modalItem = modalType === 'Video' ? selectedItem : activeGallery[currentIndex];

  function openPortfolio(item) {
    if (item.category === 'Design') {
      const index = designItems.findIndex((project) => project.id === item.id);
      setModalType('Design');
      setCurrentIndex(index);
      setModalOpen(true);
    }

    if (item.category === 'Video') {
      setModalType('Video');
      setSelectedItem(item);
      setModalOpen(true);
    }

    if (item.category === 'Web') {
      const index = webItems.findIndex((project) => project.id === item.id);
      setModalType('Web');
      setCurrentIndex(index);
      setModalOpen(true);
    }
  }

  function closeModal() {
    setModalOpen(false);
    setModalType(null);
    setSelectedItem(null);
    setCurrentIndex(0);
  }

  function nextSlide() {
    const gallery = modalType === 'Design' ? designItems : webItems;
    setCurrentIndex((prev) => (prev + 1) % gallery.length);
  }

  function prevSlide() {
    const gallery = modalType === 'Design' ? designItems : webItems;
    setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  }

  function jumpToPortfolioSlide(index) {
    const carousel = carouselRef.current;
    const slide = carousel?.children[index];
    if (!carousel || !slide) return;

    carousel.style.scrollBehavior = 'auto';
    carousel.style.scrollSnapType = 'none';
    carousel.scrollLeft = slide.offsetLeft - (carousel.clientWidth - slide.clientWidth) / 2;
    activeSlideRef.current = index;
    requestAnimationFrame(() => {
      carousel.style.scrollBehavior = '';
      carousel.style.scrollSnapType = '';
    });
  }

  function movePortfolioCarousel(direction) {
    if (filteredItems.length <= 1 || isTransitioningRef.current) return;

    let currentSlide = activeSlideRef.current;
    if (currentSlide <= filteredItems.length) {
      currentSlide += filteredItems.length * 2;
      jumpToPortfolioSlide(currentSlide);
    } else if (currentSlide >= mobileSlides.length - filteredItems.length - 1) {
      currentSlide -= filteredItems.length * 2;
      jumpToPortfolioSlide(currentSlide);
    }

    const carousel = carouselRef.current;
    const slide = carousel?.children[currentSlide + direction];
    if (!carousel || !slide) return;

    isTransitioningRef.current = true;
    requestAnimationFrame(() => {
      carousel.scrollTo({
        left: slide.offsetLeft - (carousel.clientWidth - slide.clientWidth) / 2,
        behavior: 'smooth',
      });
      activeSlideRef.current = currentSlide + direction;
    });
    window.clearTimeout(transitionTimerRef.current);
    transitionTimerRef.current = window.setTimeout(() => {
      isTransitioningRef.current = false;
    }, 380);
  }

  useEffect(() => {
    activeSlideRef.current = middleSlideIndex;
    const positionCarousel = requestAnimationFrame(() => jumpToPortfolioSlide(middleSlideIndex));
    return () => {
      cancelAnimationFrame(positionCarousel);
      window.clearTimeout(transitionTimerRef.current);
    };
  }, [activeFilter, middleSlideIndex]);

  return (
    <section id="portofolio" className="relative bg-white">
      <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-16 py-14 md:py-20">
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-[rgba(5,66,201,0.15)] mb-3">
            <span className="text-[11px] font-semibold text-primary-dark tracking-wide uppercase">Hasil Kerja</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-extrabold mb-3 tracking-tight text-text-heading">
            Portofolio
          </h2>
          <p className="text-text-body/70 text-sm sm:text-base leading-relaxed">
            Gallery hasil Design, Video, dan Web dari Surgency Studio.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary-dark text-white shadow-md'
                  : 'bg-white border border-[rgba(5,66,201,0.15)] text-text-body hover:bg-secondary'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="hidden grid-cols-1 gap-4 sm:grid sm:grid-cols-2 md:gap-5 lg:grid-cols-3 max-w-6xl mx-auto">
          {filteredItems.map((item) => (
            <PortfolioCard key={item.id} item={item} onOpen={openPortfolio} />
          ))}
        </div>

        <div className="portfolio-carousel-shell sm:hidden">
          <div ref={carouselRef} className="portfolio-carousel" aria-label={`Portofolio kategori ${activeFilter}`}>
            {mobileSlides.map((item, index) => (
              <PortfolioCard key={`${item.id}-${index}`} item={item} onOpen={openPortfolio} />
            ))}
          </div>
          {filteredItems.length > 1 && (
            <>
              <button type="button" className="portfolio-carousel-button portfolio-carousel-prev" onClick={() => movePortfolioCarousel(-1)} aria-label="Lihat portofolio sebelumnya">
                &lt;
              </button>
              <button type="button" className="portfolio-carousel-button portfolio-carousel-next" onClick={() => movePortfolioCarousel(1)} aria-label="Lihat portofolio berikutnya">
                &gt;
              </button>
            </>
          )}
        </div>
      </div>

      <PortfolioModal
        isOpen={modalOpen}
        modalType={modalType}
        item={modalItem}
        onClose={closeModal}
        onNext={nextSlide}
        onPrev={prevSlide}
      />
    </section>
  );
}
