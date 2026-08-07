import React, { useRef, useState, useEffect } from 'react';

interface ImageCarouselProps {
  images: string[];
  alt: string;
  className?: string;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, alt, className = '' }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Update dot on scroll
  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const scrollLeft = track.scrollLeft;
    const width = track.clientWidth;
    const idx = Math.round(scrollLeft / width);
    setActiveIndex(idx);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => track.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: idx * track.clientWidth, behavior: 'smooth' });
  };

  if (images.length === 1) {
    return (
      <div className={`carousel-single ${className}`}>
        <img src={images[0]} alt={alt} className="carousel-img" />
      </div>
    );
  }

  return (
    <div className={`carousel-root ${className}`}>
      <div className="carousel-track" ref={trackRef}>
        {images.map((src, i) => (
          <div className="carousel-slide" key={i}>
            <img src={src} alt={`${alt} ${i + 1}`} className="carousel-img" />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <div className="carousel-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === activeIndex ? 'active' : ''}`}
              onClick={() => scrollTo(i)}
              aria-label={`Imagen ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
