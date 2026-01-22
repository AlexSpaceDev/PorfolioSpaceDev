
import ArrowDown from './icons/ArrowDown';
{/*
export default function SectionTop() {
  const [cloudState, setCloudState] = useState<'idle' | 'entry' | 'exit' | 'reverse'>('idle');
  const [animationKey, setAnimationKey] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);
  const [observerActive, setObserverActive] = useState(false);
  const [hasScrolledDown, setHasScrolledDown] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detectar si estamos en escritorio (>=1720px)
  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  // Primera entrada
  useEffect(() => {
    if (!hasEntered) {
      setCloudState('entry');
      setHasEntered(true);
      setTimeout(() => {
        setObserverActive(true);
      }, 1000);
    }
  }, [hasEntered]);

  // Observador para cambiar a exit/reverse
  useEffect(() => {
    if (!observerActive) return;

    const topEl = document.getElementById('top');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (hasScrolledDown) setCloudState('reverse');
        } else {
          setCloudState('exit');
          setHasScrolledDown(true);
        }
      },
      { root: null, threshold: 0.7 }
    );

    if (topEl) observer.observe(topEl);
    return () => topEl && observer.unobserve(topEl);
  }, [observerActive, hasScrolledDown]);

  // Reiniciar animación solo en escritorio
  useEffect(() => {
    if (cloudState === 'exit' || (cloudState === 'reverse' && isDesktop)) {
      setAnimationKey((prevKey) => prevKey + 1);
    }
  }, [cloudState, isDesktop]);

  const handleStartClick = () => {
    setCloudState('exit');
    setTimeout(() => {
      const el = document.getElementById('inicio');
      if (!el) return;

      if (window.innerWidth >= 1024) {
        // Desktop real desde 1024px
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      } else {
        // Móvil / tablets / pseudo-desktop
        el.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }, 500);
  };

  return (
    <>
      {/* Nube izquierda 
      <img
        key={isDesktop ? `cloud1-${animationKey}` : 'cloud1'}
        src="/pictures/cloud2.png"
        alt="Nube decorativa izquierda"
        class={`absolute left-[100px] scale-x-[-1] 3xl:top-52 2xl:top-48 xl:top-44 xlg:top-48 top-52 3xl:w-auto 2xl:w-[480px] xl:w-[400px] xlg:w-[350px] lg:w-[300px] w-auto opacity-0 z-10 pointer-events-none pt-20
          ${
            cloudState === 'exit'
              ? 'lg:animate-cloud1-exit animate-cloud-entry-mobile-reverse'
              : cloudState === 'reverse'
              ? 'lg:animate-cloud1-reverse animate-cloud-entry-mobile'
              : cloudState === 'entry'
              ? 'lg:animate-cloud-entry animate-cloud-entry-mobile'
              : ''
          }`}
      />

      {/* Nube derecha 
      <img
        key={isDesktop ? `cloud2-${animationKey}` : 'cloud2'}
        src="/pictures/cloud2.png"
        alt="Nube decorativa derecha"
        class={`absolute right-[100px] 3xl:top-52 2xl:top-48 xl:top-44 xlg:top-48 top-52 3xl:w-auto 2xl:w-[480px] xl:w-[400px] xlg:w-[350px] lg:w-[300px] w-auto opacity-0 z-10 pointer-events-none pt-20
          ${
            cloudState === 'exit'
              ? 'lg:animate-cloud2-exit animate-cloud-entry-mobile2-reverse'
              : cloudState === 'reverse'
              ? 'lg:animate-cloud2-reverse animate-cloud-entry-mobile2'
              : cloudState === 'entry'
              ? 'lg:animate-cloudtwo-entry animate-cloud-entry-mobile2'
              : ''
          }`}
      />

      {/* Logo *
      <img
        class={`mx-auto w-80 md:w-96 3xl:w-3/6 2xl:w-2/5 drop-shadow-custom-white transition-all duration-1000 ease-out delay-200 ${
          hasEntered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        src="/logo/SpaceDevLogo.png"
        alt="Logo de SpaceDEV"
      />

      {/* Slogan 
      <h1
        class={`text-xl lg:text-lg text-SpacePalette-100 text-center transition-all duration-1000 ease-out delay-500 ${
          hasEntered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        LO IMAGINAS, SE CREA
      </h1>

      {/* Botón 
      <button
        onClick={handleStartClick}
        class={`flex flex-col items-center lg:mt-10 mt-28 group gap-5 transition-opacity duration-700 ease-out delay-700 ${
          hasEntered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span class="text-SpacePalette-200 text-lg">Comenzar exploración</span>
        <ArrowDown class="w-10 h-10 animate-bounce group-hover:scale-110 transition-transform duration-300" />
        <span class="sr-only">Ir a la sección de inicio</span>
      </button>
    </>
  );
}
*/}


