'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const rooms = [
    { id: 1, name: "La Cripta Dimenticata", subtitle: "Svela i segreti sepolti", image: "/images/cripta.jpg" },
    { id: 2, name: "Il Laboratorio del Pazzo", subtitle: "Sopravvivi agli esperimenti", image: "/images/laboratorio.jpg" },
    { id: 3, name: "La Mansione Infestata", subtitle: "Affronta i fantasmi del passato", image: "/images/indizio.jpg" },
    { id: 4, name: "L'Antico Tempio Maledetto", subtitle: "Sfuggi alla maledizione", image: "/images/tempio.jpg" },
    { id: 5, name: "La Nave Pirata", subtitle: "Trova il tesoro nascosto", image: "/images/pirata.jpg" },
]

export function RoomCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const updateEdgeStatus = () => {
      if (swiperRef.current) {
        setIsBeginning(swiperRef.current.isBeginning);
        setIsEnd(swiperRef.current.isEnd);
      }
    };

    if (swiperRef.current) {
      swiperRef.current.on('slideChange', updateEdgeStatus);
    }

    return () => {
      if (swiperRef.current) {
        swiperRef.current.off('slideChange', updateEdgeStatus);
      }
    };
  }, []);

  return (
    <div className="w-full py-32 bg-[#1a1a1a]">
      <div className="w-[90%] md:w-[60%] mx-auto relative">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold text-white">Rooms</h2>
          <div className="hidden md:flex space-x-4">
            <button 
              onClick={() => swiperRef.current?.slidePrev()} 
              className={`custom-prev-button w-12 h-12 bg-primary flex items-center justify-center hover:bg-primary transition-colors ${isBeginning ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isBeginning}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => swiperRef.current?.slideNext()} 
              className={`custom-next-button w-12 h-12 bg-primary flex items-center justify-center hover:bg-primary transition-colors ${isEnd ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isEnd}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          pagination={{ 
            clickable: true,
            el: '.custom-pagination',
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="w-full"
        >
          {rooms.map((room) => (
            <SwiperSlide key={room.id}>
              <div className="group">
                <div className="relative h-[520px] overflow-hidden">
                  <Image 
                    src={room.image} 
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500 group-hover:bg-opacity-30" />
                  
                  <div className="absolute bottom-6 left-6 right-6 transition-transform duration-500 group-hover:-translate-y-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{room.name}</h3>
                    <p className="text-white text-md">{room.subtitle}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        
        {/* Pagination dots per mobile */}
        <div className="custom-pagination mt-6 flex justify-center md:hidden" />
      </div>

        <div className="w-[80%] h-1 bg-primary mx-auto mt-20"></div>

    </div>
    
  )
}

