import { useEffect, useRef, useState } from 'preact/hooks';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import WebSkills from './WebSkills';
import GameSkills from './GameSkills';
import SocialPill from './SocialPill';
import LinkedIn from './icons/LinkedIn';
import Mail from './icons/Mail';
import ArrowLeft from './icons/ArrowLeft';
import ArrowRight from './icons/ArrowRight';

export default function InicioSection() {
  const swiperRef = useRef<HTMLDivElement>(null);
  const swiperInstance = useRef<Swiper | null>(null); // <-- Add this line
  const [activeSection, setActiveSection] = useState<'web' | 'games'>('web');
  const [prevSection, setPrevSection] = useState<'web' | 'games' | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Sync skills with Swiper slide
  useEffect(() => {
    if (swiperRef.current) {
      let lastRealIndex = 0;
      swiperInstance.current = new Swiper(swiperRef.current, {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        on: {
          slideChangeTransitionStart: function (this: Swiper) {
            // Use lastRealIndex to get the section that's leaving
            setPrevSection(lastRealIndex === 0 ? 'web' : 'games');
            setIsTransitioning(true);
          },
          slideChangeTransitionEnd: function (this: Swiper) {
            // Now update to the new section and finish transition
            const realIndex = this.realIndex % 2;
            setActiveSection(realIndex === 0 ? 'web' : 'games');
            setIsTransitioning(false);
            lastRealIndex = realIndex;
          },
        },
      });
      setActiveSection('web');
    }
  }, []);

  const handleSectionChange = (section: 'web' | 'games') => {
    if (section !== activeSection && !isTransitioning) {
      setPrevSection(activeSection);
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveSection(section);
        setIsTransitioning(false);
      }, 50);
    }
  };

  return (
    <>
      {/* Contenedor principal */}
      <div class="flex lg:flex-row flex-col items-center gap-x-14 gap-y-14 max-w-7xl mx-auto">
        {/* Texto y redes */}
        <div class="flex flex-col items-center text-center max-w-[600px] w-full">
          <h2 class="lg:text-2xl text-xl text-wrap pb-4 lg:pb-2">
            <span class="text-SpacePalette-200">
              Desarrollador apasionado por la tecnología. Creando soluciones de todo tipo, desde webs hasta videojuegos, para{' '}
              <span class="text-green-400">impulsar tus proyectos al siguiente nivel.</span>
            </span>
          </h2>
          <nav class="flex flex-wrap justify-center gap-4 lg:mt-4">
            <SocialPill href="mailto:spacedev.me@gmail.com">
              <Mail class="size-4 md:size-5" />
              spacedev.me@gmail.com
            </SocialPill>
            <SocialPill href="https://www.linkedin.com/in/alex-enriquez-91409b329/">
              <LinkedIn class="size-4 md:size-4.5" />
              LinkedIn
            </SocialPill>
          </nav>
        </div>

        {/* Nubes clickeables - escritorio */}
        <div class="hidden lg:grid grid-cols-[minmax(240px,1fr)_minmax(240px,1fr)] grid-rows-[auto_auto] gap-y-24 gap-x-10 w-full">
          <div class="relative flex justify-center cursor-pointer" onClick={() => handleSectionChange('web')}>
            <div class="absolute top-1/2 left-1/2 w-[260px] -translate-x-1/2 -translate-y-1/2 z-0">
              <img src="/pictures/nubeWeb.png" alt="Nube decorativa" class="w-60 animate-float" />
            </div>
            <img src="/pictures/TextWeb.png" alt="Texto Web" class={`relative z-10 w-[180px] h-full hover:hue-rotate-[-94deg] hover:brightness-125 transition duration-300 drop-shadow-custom-black ${activeSection === 'web' ? 'brightness-[1000%] saturation-0 hover:brightness-[1000%] drop-shadow-custom-prueba' : ''}`} />
          </div>

          <div class="relative flex justify-center">
            <div class="absolute top-1/2 left-1/2 w-[260px] -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
              <img src="/pictures/nubeApps.png" alt="Nube decorativa" class="w-auto animate-float-slow2" />
            </div>
            <img src="/pictures/TextSoon.png" alt="Texto Apps" class="relative z-10 w-[220px] drop-shadow-custom-black" />
          </div>

          <div class="relative lg:col-span-2 flex justify-center cursor-pointer" onClick={() => handleSectionChange('games')}>
            <div class="absolute top-1/2 left-1/2 w-[260px] -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
              <img src="/pictures/nubeGames.png" alt="Nube decorativa" class="w-auto animate-float-slow" />
            </div>
            <img src="/pictures/TextGames.png" alt="Texto Games" class={`relative z-10 w-72 transition duration-300 drop-shadow-custom-black hover:hue-rotate-[-94deg] hover:brightness-125 ${activeSection === 'games' ? 'brightness-[1000%] hover:brightness-[1000%] saturation-0 drop-shadow-custom-prueba' : ''}`} />
          </div>
        </div>

        {/* Nube única con flechas - móviles */}
        <div class="lg:hidden w-full relative">
          <div class="flex items-center justify-between w-full h-[180px]">
            {/* Left Arrow */}
            <button
              type="button"
              class="group flex justify-center items-center absolute left-0 top-1/2 -translate-y-1/2 border border-solid border-indigo-600 w-9 h-9 transition-all duration-500 rounded-full hover:bg-indigo-600 mx-2 bg-white z-10"
              aria-label="Anterior"
              tabIndex={0}
              onClick={() => swiperInstance.current?.slidePrev()}
            >
              <ArrowLeft class="w-5 h-5 text-SpacePalette-300 group-hover:text-white" />
            </button>

            {/* Swiper */}
            <div ref={swiperRef} class="swiper default-carousel swiper-container w-[320px] overflow-visible mx-auto">
              <div class="swiper-wrapper">
                {/* Web Slide */}
                <div class="swiper-slide">
                  <div class="relative w-[320px] h-[180px] flex items-center justify-center overflow-visible">
                    <img
                      src="/pictures/nubeWeb.png"
                      alt="Nube Web"
                      class="w-[290px] h-[150px] animate-float"
                      style={{ objectFit: 'contain' }}
                    />
                    <img
                      src="/pictures/TextWeb.png"
                      alt="Texto Web"
                      class="absolute left-1/2 top-1/2 z-10 w-[190px] h-[55px] drop-shadow-custom-black -translate-x-1/2 -translate-y-1/2"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
                {/* Games Slide */}
                <div class="swiper-slide">
                  <div class="relative w-[320px] h-[180px] flex items-center justify-center overflow-visible">
                    <img
                      src="/pictures/nubeGames.png"
                      alt="Nube Games"
                      class="w-[290px] h-[150px] animate-float-slow"
                      style={{ objectFit: 'contain' }}
                    />
                    <img
                      src="/pictures/TextGames.png"
                      alt="Texto Games"
                      class="absolute left-1/2 top-1/2 z-10 w-[230px] h-[70px] drop-shadow-custom-black -translate-x-1/2 -translate-y-1/2"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
              </div>
              <div class="swiper-pagination !bottom-2"></div>
            </div>

            {/* Right Arrow */}
            <button
              type="button"
              class="group flex justify-center items-center absolute right-0 top-1/2 -translate-y-1/2 border border-solid border-indigo-600 w-9 h-9 transition-all duration-500 rounded-full hover:bg-indigo-600 mx-2 bg-white z-10"
              aria-label="Siguiente"
              tabIndex={0}
              onClick={() => swiperInstance.current?.slideNext()}
            >
              <ArrowRight class="w-5 h-5 text-SpacePalette-300 group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Título de habilidades */}
      <div class="flex justify-center pt-20 lg:pt-40">
        <h2 class="text-SpacePalette-200 lg:text-5xl text-4xl">
          Habilidades
        </h2>
      </div>

      {/* Íconos dinámicos con animación de entrada/salida */}
      <div class="flex items-center justify-center pt-10">
        <div class="w-full max-w-7xl px-6 relative min-h-[250px] overflow-hidden">
          {/* Salida */}
          {isTransitioning && prevSection && (
            <div
              key={`out-${prevSection}`}
              class={`absolute inset-0 animate-slide-fade-out ${
                prevSection === 'games' ? 'lg:pt-16 pt-8' : ''
              }`}
            >
              {prevSection === 'web' ? <WebSkills /> : <GameSkills />}
            </div>
          )}

          {/* Entrada */}
          {!isTransitioning && (
            <div
              key={`in-${activeSection}`}
              class={`absolute inset-0 animate-slide-fade-in ${
                activeSection === 'games' ? 'lg:pt-16 pt-8' : ''
              }`}
            >
              {activeSection === 'web' ? <WebSkills /> : <GameSkills />}
            </div>
          )}
        </div>
      </div>

    </>
  );
}
