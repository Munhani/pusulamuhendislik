'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image: '/images/BakuAirport.jpg',
    title: 'Bakü Havalimanı Projesi',
    description: 'Modern ve etkileyici havalimanı tasarımı',
  },
  {
    id: 2,
    image: '/images/BineKavsagi.jpg',
    title: 'Bine Kavşağı Projesi',
    description: 'Profesyonel mühendislik çözümleri',
  },
  {
    id: 3,
    image: '/images/EdirneSirpsindigiKopru.jpg',
    title: 'Edirne Şirpsindigi Köprüsü',
    description: 'Mühendislik harikası köprü projesi',
  },
  {
    id: 4,
    image: '/images/FatihYayaUstGecidi.jpg',
    title: 'Fatih Yaya Üst Geçidi',
    description: 'Modern şehir ulaşım çözümleri',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            sizes="100vw"
            quality={100}
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl md:text-2xl">{slide.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 