import { useEffect, useRef } from 'preact/hooks';
/*import ThemeIcon from './icons/ThemeIcon';*/ // Asegúrate que esté en formato TSX o exportado correctamente
import BotonHeader from './BotonHeader';

export default function Header() {
  const headerBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headerBg = headerBgRef.current;
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href')?.substring(1);
        if (!targetId) return;

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          const isMediumOrLarger = window.innerWidth >= 768;

          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: isMediumOrLarger ? 'center' : 'start',
          });
        }
      });
    });

    const handleScroll = () => {
      if (!headerBg) return;
      const isAtTop = window.scrollY === 0;
      if (isAtTop) {
        headerBg.classList.remove('opacity-100', 'animate-fadein');
        headerBg.classList.add('opacity-0');
      } else {
        headerBg.classList.remove('opacity-0');
        headerBg.classList.add('opacity-100', 'animate-fadein');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header class="fixed top-10 z-20 w-full">
      <div class="max-w-screen-xl mx-auto flex justify-center items-center">
        {/* Menú para pantallas grandes */}
        <nav class="hidden lg:flex sm:flex md:flex relative flex-row items-center lg:gap-x-10 md:gap-x-10 gap-x-5 text-SpacePalette-200">
          {/* Fondo ajustado con z-index */}
          <div
            ref={headerBgRef}
            class="absolute -inset-x-4 z-0 rounded-full bg-slate-900/80 opacity-0 transition-opacity duration-300 py-5"
          ></div>

          {/* Enlaces y ThemeIcon con z-index más alto */}
          <a class="relative z-10 transition hover:text-SpacePalette-600" href="#inicio">Inicio</a>
          <a class="relative z-10 transition hover:text-SpacePalette-600" href="#proyectos">Proyectos</a>
          <a class="relative z-10 transition hover:text-SpacePalette-600" href="#sobre-mi">Sobre mí</a>
          <a class="relative z-10 transition hover:text-SpacePalette-600" href="#contacto">Contacto</a>
        </nav>

        {/* Botón para móvil */}
        <div class="block lg:hidden">
          <BotonHeader />
        </div>
      </div>
    </header>
  );
}




