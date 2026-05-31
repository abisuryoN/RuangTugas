import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Wave Divider Component
 * @param {string} topColor - CSS color for the top section
 * @param {string} bottomColor - CSS color for the bottom section
 * @param {boolean} flip - flip the wave vertically
 * @param {string} variant - 'default' | 'layered' | 'simple'
 * @param {string} mobileHeight - custom mobile height override (e.g. 'h-[56px]')
 */
export default function WaveDivider({
  topColor = '#FFFFFF',
  bottomColor = '#F0F7FF',
  flip = false,
  variant = 'default',
  mobileHeight = '',
}) {
  const waveRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on wave
      gsap.to(waveRef.current, {
        y: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: waveRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      // Subtle floating animation on wave paths
      const paths = waveRef.current.querySelectorAll('.wave-path');
      paths.forEach((path, i) => {
        gsap.to(path, {
          x: i % 2 === 0 ? 8 : -8,
          duration: 4 + i,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });
      });
    }, waveRef);

    return () => ctx.revert();
  }, []);

  const renderWave = () => {
    switch (variant) {
      case 'layered':
        return (
          <svg
            viewBox="0 0 1440 180"
            preserveAspectRatio="none"
            className={`w-full h-[56px] md:h-[100px] lg:h-[180px] ${mobileHeight || ''}`}
            style={{ transform: flip ? 'scaleY(-1)' : 'none' }}
          >
            <path
              className="wave-path"
              d="M0,80 C240,140 480,20 720,80 C960,140 1200,40 1440,80 L1440,180 L0,180 Z"
              fill={bottomColor}
              opacity="0.3"
            />
            <path
              className="wave-path"
              d="M0,100 C360,160 600,40 900,100 C1080,140 1320,60 1440,100 L1440,180 L0,180 Z"
              fill={bottomColor}
              opacity="0.5"
            />
            <path
              className="wave-path"
              d="M0,120 C320,170 560,70 800,120 C1040,170 1280,80 1440,120 L1440,180 L0,180 Z"
              fill={bottomColor}
              opacity="0.7"
            />
            <path
              className="wave-path"
              d="M0,140 C280,180 520,100 760,140 C1000,180 1240,100 1440,140 L1440,180 L0,180 Z"
              fill={bottomColor}
            />
          </svg>
        );

      case 'simple':
        return (
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className={`w-full h-[36px] md:h-[72px] lg:h-[120px] ${mobileHeight || ''}`}
            style={{ transform: flip ? 'scaleY(-1)' : 'none' }}
          >
            <path
              className="wave-path"
              d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,40 1440,60 L1440,120 L0,120 Z"
              fill={bottomColor}
              opacity="0.5"
            />
            <path
              className="wave-path"
              d="M0,80 C320,110 640,30 960,80 C1200,110 1380,50 1440,80 L1440,120 L0,120 Z"
              fill={bottomColor}
            />
          </svg>
        );

      default:
        return (
          <svg
            viewBox="0 0 1440 160"
            preserveAspectRatio="none"
            className={`w-full h-[44px] md:h-[96px] lg:h-[160px] ${mobileHeight || ''}`}
            style={{ transform: flip ? 'scaleY(-1)' : 'none' }}
          >
            <path
              className="wave-path"
              d="M0,64 C288,128 576,0 864,64 C1152,128 1296,32 1440,64 L1440,160 L0,160 Z"
              fill={bottomColor}
              opacity="0.35"
            />
            <path
              className="wave-path"
              d="M0,96 C360,144 720,48 1080,96 C1260,120 1380,64 1440,96 L1440,160 L0,160 Z"
              fill={bottomColor}
              opacity="0.6"
            />
            <path
              className="wave-path"
              d="M0,120 C288,160 576,80 864,120 C1152,160 1296,88 1440,120 L1440,160 L0,160 Z"
              fill={bottomColor}
            />
          </svg>
        );
    }
  };

  return (
    <div
      ref={waveRef}
      className="wave-container"
      style={{ backgroundColor: topColor, marginTop: '-1px' }}
    >
      {renderWave()}
    </div>
  );
}
