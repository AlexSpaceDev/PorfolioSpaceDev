
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
import FadeIn from './FadeIn';

{/* 
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
      {/* Contenedor principal
      
      <div class="flex lg:flex-row flex-col items-center xl:gap-x-40 gap-x-10 gap-y-14 max-w-7xl mx-auto">
        {/* Texto y redes 
        <div class="flex flex-col items-center text-center max-w-[600px] w-full">
          <h2 class="lg:text-2xl text-xl text-wrap pb-4 lg:pb-2">
            <span class="text-SpacePalette-200">
              En SpaceDev creamos y obtenemos soluciones de todo tipo, desde sitios webs hasta videojuegos, lo necesario para impulsar tus proyectos al{' '}
              <span class="text-green-400">siguiente nivel.</span>
            </span>
          </h2>
          <nav class="flex flex-wrap justify-center gap-4 lg:mt-4">
            <SocialPill href="mailto:spacedev.me@gmail.com">
              <Mail class="size-4 md:size-5" />
              spacedev.me@gmail.com
            </SocialPill>
            {/*
            <SocialPill href="https://www.linkedin.com/in/alex-enriquez-91409b329/">
              <LinkedIn class="size-4 md:size-4.5" />
              LinkedIn
            </SocialPill> 
          </nav>
        </div>

        {/* Nube única con flechas 
        <div class="flex-1 relative flex justify-center">
          <div class="flex items-center justify-center w-full max-w-[380px] h-[200px] lg:h-[260px] relative">
            {/* Swiper 
            <div
              ref={swiperRef}
              class="swiper default-carousel swiper-container w-[320px] lg:w-[360px] overflow-visible mx-auto relative"
            >
              <div class="swiper-wrapper">
                {/* Web Slide 
                <div class="swiper-slide">
                  <div class="relative w-[320px] lg:w-[360px] h-[180px] lg:h-[220px] flex items-center justify-center overflow-visible">
                    <img src="/pictures/nubeWeb.png" alt="Nube Web"
                        class="w-[290px] h-[150px] lg:w-[340px] lg:h-[180px] animate-float object-contain" />
                    <img src="/pictures/TextWeb.png" alt="Texto Web"
                        class="absolute left-1/2 top-1/2 z-10 w-[190px] lg:w-[200px] drop-shadow-custom-black -translate-x-1/2 -translate-y-1/2 object-contain" />
                  </div>
                </div>
                {/* Games Slide 
                <div class="swiper-slide">
                  <div class="relative w-[320px] lg:w-[360px] h-[180px] lg:h-[220px] flex items-center justify-center overflow-visible">
                    <img src="/pictures/nubeGames.png" alt="Nube Games"
                        class="w-[290px] h-[150px] lg:w-[340px] lg:h-[180px] animate-float-slow object-contain" />
                    <img src="/pictures/TextGames.png" alt="Texto Games"
                        class="absolute left-1/2 top-1/2 z-10 w-[230px] lg:w-[300px] drop-shadow-custom-black -translate-x-1/2 -translate-y-1/2 object-contain" />
                  </div>
                </div>
              </div>

              <div class="swiper-pagination !bottom-2"></div>

              {/* Flechas internas (móvil) 
              <button type="button"
                class="group flex justify-center items-center absolute left-0 top-1/2 -translate-y-1/2 border border-indigo-600 w-9 h-9 transition-all duration-500 rounded-full hover:bg-indigo-600 mx-2 bg-white z-10  lg:hidden"
                aria-label="Anterior" onClick={() => swiperInstance.current?.slidePrev()}>
                <ArrowLeft class="w-5 h-5 text-SpacePalette-300 group-hover:text-white" />
              </button>
              <button type="button"
                class="group flex justify-center items-center absolute right-0 top-1/2 -translate-y-1/2 border border-indigo-600 w-9 h-9 transition-all duration-500 rounded-full hover:bg-indigo-600 mx-2 bg-white z-10  lg:hidden"
                aria-label="Siguiente" onClick={() => swiperInstance.current?.slideNext()}>
                <ArrowRight class="w-5 h-5 text-SpacePalette-300 group-hover:text-white" />
              </button>
            </div>

            {/* Flechas externas (solo desktop) — ahora ancladas al wrapper 
            <button
              type="button"
              class="group hidden lg:flex justify-center items-center absolute left-0 top-1/2 -translate-x-[70%] -translate-y-1/2 border border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600 bg-white z-10"
              aria-label="Anterior"
              onClick={() => swiperInstance.current?.slidePrev()}
            >
              <ArrowLeft class="w-6 h-6 text-SpacePalette-300 group-hover:text-white" />
            </button>

            <button
              type="button"
              class="group hidden lg:flex justify-center items-center absolute right-0 top-1/2 translate-x-[70%] -translate-y-1/2 border border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600 bg-white z-10"
              aria-label="Siguiente"
              onClick={() => swiperInstance.current?.slideNext()}
            >
              <ArrowRight class="w-6 h-6 text-SpacePalette-300 group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>
     

      {/* Íconos dinámicos con animación de entrada/salida 
      <div class="flex items-center justify-center py-10 lg:pt-24 lg:pb-10">
        <div class="w-full max-w-7xl px-6 relative min-h-[250px]">
          {/* Salida 
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

          {/* Entrada 
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

 */}
