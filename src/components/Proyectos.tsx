import { h } from 'preact';
import { useState, useRef } from 'preact/hooks';
import Buttons from '../components/Buttons';
import Cards from './Cards';
import WordPressIcon from './icons/WordPress';
import HTMLIcon from './icons/HTML';
import CSSIcon from './icons/CSS';
import PHPIcon from './icons/PHP';
import MySQLIcon from './icons/MySQL';
import FigmaIcon from './icons/Figma';
import NodejsIcon from './icons/Nodejs';
import AstroIcon from './icons/Astro';
import TailwindCSSIcon from './icons/TailwindCSS';
import JavaScriptIcon from './icons/JavaScript';
import TypeScriptIcon from './icons/TypeScript';
import PreactIcon from './icons/Preact';
import UnrealIconB from './icons/UnrealBlack';
import VRIcon from './icons/VR';
import TwoDIcon from './icons/2D';
import MetaSparkStudioIcon from './icons/MetaSparkStudio';
import ARIcon from './icons/AR';
import UnityIconB from './icons/UnityBlack';
import CsharpIcon from './icons/Csharp';
import LensStudioIcon from './icons/LensStudio';

const TABS = ['webs', 'videojuegos', 'otros'];

export default function Proyectos() {
  const [selectedTab, setSelectedTab] = useState('webs');
  const [prevTab, setPrevTab] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  // --- Swipe logic ---
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: TouchEvent) => {
    if (window.innerWidth >= 1024) return; // Only on mobile/tablet
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (window.innerWidth >= 1024) return;
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(deltaX) < 50) return; // Minimum swipe distance

    const currentIdx = TABS.indexOf(selectedTab);
    if (deltaX < 0 && currentIdx < TABS.length - 1) {
      // Swipe left: next tab
      handleTabChange(TABS[currentIdx + 1]);
    } else if (deltaX > 0 && currentIdx > 0) {
      // Swipe right: previous tab
      handleTabChange(TABS[currentIdx - 1]);
    }
  };

  // Handler for tab change with animation
  const handleTabChange = (tab: string) => {
    if (tab === selectedTab) return;
    const currentIdx = TABS.indexOf(selectedTab);
    const nextIdx = TABS.indexOf(tab);
    setDirection(nextIdx > currentIdx ? 'forward' : 'backward');
    setPrevTab(selectedTab);
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedTab(tab);
      setIsTransitioning(false);
      setPrevTab(null);
    }, 400); // 400ms should match your animate-slide-fade-out duration
  };

  return (
    <div
      class="proyectos-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Buttons onTabChange={handleTabChange} selectedTab={selectedTab}/>

      {/* Exit animation for previous tab */}
      {isTransitioning && prevTab && (
        <div
          key={`out-${prevTab}`}
          class={
            direction === 'forward'
              ? 'animate-slide-fade-out-reverse'
              : 'animate-slide-fade-out'
          }
        >
          {prevTab === 'webs' && (
            <div class="grid gap-12 grid-cols-1 justify-items-center lg:px-16 md:px-16">
              <Cards 
                imgSrc="/projectsWeb/PW_Mibtsar.webp"
                title="Mibtsar.es"
                description="Programador Front-End/Back-End y diseñador de la página web para la empresa Mibtsár. Creando una experiencia funcional y visualmente atractiva acorde a su identidad."
                tags={[
                  {name: "Wordpress", bgColor: "bg-blue-100 text-blue-800", icon: <WordPressIcon class="size-5" />},
                  {name: "HTML", bgColor: "bg-orange-100 text-orange-800", icon: <HTMLIcon class="size-5" />},
                  {name: "CSS", bgColor: "bg-cyan-100 text-cyan-800", icon: <CSSIcon class="size-5" />},
                  {name: "JavaScript", bgColor: "bg-yellow-100 text-yellow-800", icon: <JavaScriptIcon class="size-5" />},
                  {name: "PHP", bgColor: "bg-indigo-100 text-indigo-800", icon: <PHPIcon class="size-5" />},
                  {name: "MySQL", bgColor: "bg-sky-100 text-sky-800", icon: <MySQLIcon class="size-5" />},
                  {name: "Figma", bgColor: "bg-rose-100 text-pink-800", icon: <FigmaIcon class="size-5" />},
                ]}        
              />
              <Cards 
                imgSrc="/projectsWeb/PW_Spacedev.webp"
                title="Spacedev.me"
                description="Programador y diseñador de mi propio porfolio. Presentando las habilidades y experiencias adquiridas con múltiples tecnologías." 
                tags={[
                  {name: "Node.js", bgColor: "bg-lime-200 text-lime-800", icon: <NodejsIcon class="size-5" />},
                  {name: "Astro", bgColor: "bg-amber-200 text-amber-800", icon: <AstroIcon class="size-5" />},
                  {name: "HTML", bgColor: "bg-orange-100 text-orange-800", icon: <HTMLIcon class="size-5" />},
                  {name: "TailwindCSS", bgColor: "bg-cyan-100 text-cyan-800", icon: <TailwindCSSIcon class="size-5" />},
                  {name: "TypeScript", bgColor: "bg-blue-100 text-blue-800", icon: <TypeScriptIcon class="size-5" />},
                  {name: "Preact", bgColor: "bg-purple-100 text-purple-800", icon: <PreactIcon class="size-5" />},
                  {name: "Figma", bgColor: "bg-rose-100 text-pink-800", icon: <FigmaIcon class="size-5" />},  
                ]}
              />
            </div>
          )}

          {prevTab === 'videojuegos' && (
            <div class="grid gap-12 grid-cols-1 justify-items-center lg:px-16 md:px-16">
              <Cards 
                imgSrc="/projectsVideogames/PV_TrazandoPasos.webp"
                title="Trazando Pasos"
                description="Programador del videojuego de realidad virtual Trazando Pasos, una experiencia que explora los desafíos de la migración. Este juego fue galardonado como el ganador del GameJam VRDay Latam 2022."
                tags={[
                  {name: "Unreal Engine", bgColor: "bg-stone-200 text-stone-800", icon: <UnrealIconB class="size-5" />},
                  {name: "Realidad Virtual", bgColor: "bg-orange-200 text-orange-800", icon: <VRIcon class="size-5" />},
                ]}
              />
              <Cards 
                imgSrc="/projectsVideogames/PV_PlantainFeast.webp"
                title="Plantain Feast"
                description="Programador de Platain Feast, un juego de cocina en 2D para móviles que celebra la gastronomía ecuatoriana al presentar recetas tradicionales con el plátano como ingrediente principal."
                tags={[
                  {name: "Unreal Engine", bgColor: "bg-stone-200 text-stone-800", icon: <UnrealIconB class="size-5" />},
                  {name: "2D", bgColor: "bg-yellow-200 text-yellow-800", icon: <TwoDIcon class="size-5" />},
                ]}
              />
            </div>
          )}

          {prevTab === 'otros' && (
            <div class="grid gap-12 grid-cols-1 justify-items-center lg:px-16 md:px-16">
              <Cards
                imgSrc="/projectsOthers/PO_Alerta.webp"
                title="ALERTA!"
                description="Desarrollador de realidad aumentada para Alerta! Reflexiones gráficas en torno a la salud mental, una exposición interactiva que usa códigos QR para explorar señales de alerta sobre salud mental mediante ilustraciones y animaciones."
                tags={[
                  {name: "Meta Spark Studio", bgColor: "bg-fuchsia-200 text-fuchsia-800", icon: <MetaSparkStudioIcon class="size-5" />},
                  {name: "Lens Studio", bgColor: "bg-amber-100 text-amber-800", icon: <LensStudioIcon class="size-5" />},
                  {name: "JavaScript", bgColor: "bg-yellow-100 text-yellow-800", icon: <JavaScriptIcon class="size-5" />},
                  {name: "Realidad Aumentada", bgColor: "bg-red-200 text-red-800", icon: <ARIcon class="size-5" />},

                ]}
              />
            <Cards
                imgSrc="/projectsOthers/PO_SimulacionSoldadura.webp"
                title="Simulación Soldadura"
                description="Programador de un simulador de soldadura en realidad virtual para Meta Quest 2, que guía a los usuarios a través de cada paso del proceso de soldadura, desde la vestimenta adecuada hasta el acabado final."
                tags={[
                  {name: "Unity", bgColor: "bg-gray-200 text-gray-800", icon: <UnityIconB class="size-5" />},
                  {name: "Realidad Virtual", bgColor: "bg-orange-200 text-orange-800", icon: <VRIcon class="size-5" />},
                  {name: "Csharp", bgColor: "bg-violet-200 text-violet-800", icon: <CsharpIcon class="size-5" />},
                ]}
              />
            </div>
              
          )}
        </div>
      )}

      {/* Entrance animation for current tab */}
      {!isTransitioning && (
        <div
          key={`in-${selectedTab}`}
          class={
            direction === 'forward'
              ? 'animate-slide-fade-in-reverse'
              : 'animate-slide-fade-in'
          }
        >
          {selectedTab === 'webs' && (
            <div class="grid gap-12 grid-cols-1 justify-items-center lg:px-16 md:px-16">
              <Cards 
                imgSrc="/projectsWeb/PW_Mibtsar.webp"
                title="Mibtsar.es"
                description="Programador Front-End/Back-End y diseñador de la página web para la empresa Mibtsár. Creando una experiencia funcional y visualmente atractiva acorde a su identidad."
                tags={[
                  {name: "Wordpress", bgColor: "bg-blue-100 text-blue-800", icon: <WordPressIcon class="size-5" />},
                  {name: "HTML", bgColor: "bg-orange-100 text-orange-800", icon: <HTMLIcon class="size-5" />},
                  {name: "CSS", bgColor: "bg-cyan-100 text-cyan-800", icon: <CSSIcon class="size-5" />},
                  {name: "JavaScript", bgColor: "bg-yellow-100 text-yellow-800", icon: <JavaScriptIcon class="size-5" />},
                  {name: "PHP", bgColor: "bg-indigo-100 text-indigo-800", icon: <PHPIcon class="size-5" />},
                  {name: "MySQL", bgColor: "bg-sky-100 text-sky-800", icon: <MySQLIcon class="size-5" />},
                  {name: "Figma", bgColor: "bg-rose-100 text-pink-800", icon: <FigmaIcon class="size-5" />},
                ]}        
              />
              <Cards 
                imgSrc="/projectsWeb/PW_Spacedev.webp"
                title="Spacedev.me"
                description="Programador y diseñador de mi propio porfolio. Presentando las habilidades y experiencias adquiridas con múltiples tecnologías." 
                tags={[
                  {name: "Node.js", bgColor: "bg-lime-200 text-lime-800", icon: <NodejsIcon class="size-5" />},
                  {name: "Astro", bgColor: "bg-amber-200 text-amber-800", icon: <AstroIcon class="size-5" />},
                  {name: "HTML", bgColor: "bg-orange-100 text-orange-800", icon: <HTMLIcon class="size-5" />},
                  {name: "TailwindCSS", bgColor: "bg-cyan-100 text-cyan-800", icon: <TailwindCSSIcon class="size-5" />},
                  {name: "TypeScript", bgColor: "bg-blue-100 text-blue-800", icon: <TypeScriptIcon class="size-5" />},
                  {name: "Preact", bgColor: "bg-purple-100 text-purple-800", icon: <PreactIcon class="size-5" />},
                  {name: "Figma", bgColor: "bg-rose-100 text-pink-800", icon: <FigmaIcon class="size-5" />},  
                ]}
              />
            </div>
          )}

          {selectedTab === 'videojuegos' && (
            <div class="grid gap-12 grid-cols-1 justify-items-center lg:px-16 md:px-16">
              <Cards 
                imgSrc="/projectsVideogames/PV_TrazandoPasos.webp"
                title="Trazando Pasos"
                description="Programador del videojuego de realidad virtual Trazando Pasos, una experiencia que explora los desafíos de la migración. Este juego fue galardonado como el ganador del GameJam VRDay Latam 2022."
                tags={[
                  {name: "Unreal Engine", bgColor: "bg-stone-200 text-stone-800", icon: <UnrealIconB class="size-5" />},
                  {name: "Realidad Virtual", bgColor: "bg-orange-200 text-orange-800", icon: <VRIcon class="size-5" />},
                ]}
              />
              <Cards 
                imgSrc="/projectsVideogames/PV_PlantainFeast.webp"
                title="Plantain Feast"
                description="Programador de Platain Feast, un juego de cocina en 2D para móviles que celebra la gastronomía ecuatoriana al presentar recetas tradicionales con el plátano como ingrediente principal."
                tags={[
                  {name: "Unreal Engine", bgColor: "bg-stone-200 text-stone-800", icon: <UnrealIconB class="size-5" />},
                  {name: "2D", bgColor: "bg-yellow-200 text-yellow-800", icon: <TwoDIcon class="size-5" />},
                ]}
              />
            </div>
          )}

          {selectedTab === 'otros' && (
            <div class="grid gap-12 grid-cols-1 justify-items-center lg:px-16 md:px-16">
              <Cards
                imgSrc="/projectsOthers/PO_Alerta.webp"
                title="ALERTA!"
                description="Desarrollador de realidad aumentada para Alerta! Reflexiones gráficas en torno a la salud mental, una exposición interactiva que usa códigos QR para explorar señales de alerta sobre salud mental mediante ilustraciones y animaciones."
                tags={[
                  {name: "Meta Spark Studio", bgColor: "bg-fuchsia-200 text-fuchsia-800", icon: <MetaSparkStudioIcon class="size-5" />},
                  {name: "Lens Studio", bgColor: "bg-amber-100 text-amber-800", icon: <LensStudioIcon class="size-5" />},
                  {name: "JavaScript", bgColor: "bg-yellow-100 text-yellow-800", icon: <JavaScriptIcon class="size-5" />},
                  {name: "Realidad Aumentada", bgColor: "bg-red-200 text-red-800", icon: <ARIcon class="size-5" />},

                ]}
              />
            <Cards
                imgSrc="/projectsOthers/PO_SimulacionSoldadura.webp"
                title="Simulación Soldadura"
                description="Programador de un simulador de soldadura en realidad virtual para Meta Quest 2, que guía a los usuarios a través de cada paso del proceso de soldadura, desde la vestimenta adecuada hasta el acabado final."
                tags={[
                  {name: "Unity", bgColor: "bg-gray-200 text-gray-800", icon: <UnityIconB class="size-5" />},
                  {name: "Realidad Virtual", bgColor: "bg-orange-200 text-orange-800", icon: <VRIcon class="size-5" />},
                  {name: "Csharp", bgColor: "bg-violet-200 text-violet-800", icon: <CsharpIcon class="size-5" />},
                ]}
              />
            </div>
              
          )}
        </div>
      )}
    </div>
  );
}
