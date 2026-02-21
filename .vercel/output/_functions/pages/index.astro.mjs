/* empty css                                 */
import { e as createComponent, m as maybeRenderHead, k as renderComponent, r as renderTemplate, g as addAttribute, l as renderHead, n as renderSlot, h as createAstro } from '../chunks/astro/server_BZxCqi8R.mjs';
import 'piccolore';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
export { renderers } from '../renderers.mjs';

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(null);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);
  const toggleMenu = () => setIsOpen(!isOpen);
  const links = [
    { id: "manifiesto", label: "Manifiesto" },
    { id: "servicios", label: "Servicios" },
    { id: "archivos", label: "Archivos" },
    { id: "tripulacion", label: "Tripulación" },
    { id: "faq", label: "FAQ" }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: toggleMenu,
        className: "md:hidden relative z-[70] group",
        "aria-label": "Abrir menú",
        children: /* @__PURE__ */ jsx(
          "div",
          {
            className: `relative flex items-center justify-center w-10 h-10 
          rounded-full transition-all duration-300
          ${isOpen ? "ring-4 ring-primary/40" : "hover:ring-4 hover:ring-primary/20"}
          `,
            children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: `flex flex-col justify-around items-center w-5 h-5 transform
            transition-all duration-300 origin-center overflow-hidden
            ${isOpen ? "-translate-x-0.5 rotate-180" : ""}
            `,
                children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `h-[2px] w-5 bg-white transform transition-all duration-300 origin-left
              ${isOpen ? "rotate-45 w-10/12" : ""}
              `
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `h-[2px] w-5 bg-white transform transition-all duration-300
              ${isOpen ? "translate-x-10 opacity-0" : ""}
              `
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `h-[2px] w-5 bg-white transform transition-all duration-300 origin-left
              ${isOpen ? "-rotate-45 w-10/12" : ""}
              `
                    }
                  )
                ]
              }
            )
          }
        )
      }
    ),
    mounted && createPortal(
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: `fixed inset-0 z-[999] transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                onClick: () => setIsOpen(false),
                className: "absolute inset-0 bg-black/40 backdrop-blur-md"
              }
            ),
            /* @__PURE__ */ jsx(
              "aside",
              {
                className: `fixed top-0 right-0 bottom-0 w-64
              bg-background-dark/95
              border-l border-primary/20
              shadow-[0_0_60px_rgba(57,129,191,0.25)]
              transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
              ${isOpen ? "translate-x-0" : "translate-x-full"}
              `,
                children: /* @__PURE__ */ jsx("nav", { className: "flex flex-col h-full p-5 text-lg font-medium", children: /* @__PURE__ */ jsxs("div", { className: "mt-20 flex flex-col gap-3", children: [
                  links.map((link) => /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: `#${link.id}`,
                      onClick: () => {
                        setActive(link.id);
                        setIsOpen(false);
                      },
                      className: `
                        relative px-4 py-3 rounded-lg
                        transition-all duration-300
                        ${active === link.id ? "bg-primary/15 text-primary shadow-[0_0_20px_rgba(0,225,255,0.15)]" : "hover:bg-white/5 hover:text-primary"}
                      `,
                      children: link.label
                    },
                    link.id
                  )),
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "#contacto",
                      onClick: () => {
                        setActive("contacto");
                        setIsOpen(false);
                      },
                      className: "mt-4 bg-primary text-background-dark px-0 py-3 rounded-lg font-bold text-center hover:scale-[1.02] transition-all duration-300",
                      children: "Contáctanos"
                    }
                  )
                ] }) })
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: toggleMenu,
                className: `md:hidden fixed top-6 transition-all duration-300 z-[1000] group
                ${isOpen ? "right-[19rem]" : "right-6"}
                `,
                "aria-label": "Abrir menú",
                children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `relative flex items-center justify-center w-10 h-10 
                rounded-full transition-all duration-300
                ${isOpen ? "ring-4 ring-primary/40" : "hover:ring-4 hover:ring-primary/20"}
                `,
                    children: /* @__PURE__ */ jsxs(
                      "div",
                      {
                        className: `flex flex-col justify-around items-center w-5 h-5 transform
                  transition-all duration-300 origin-center overflow-hidden
                  ${isOpen ? "-translate-x-0.5 rotate-180" : ""}
                  `,
                        children: [
                          /* @__PURE__ */ jsx(
                            "span",
                            {
                              className: `h-[2px] w-5 bg-white transform transition-all duration-300 origin-left
                    ${isOpen ? "rotate-45 w-10/12" : ""}
                    `
                            }
                          ),
                          /* @__PURE__ */ jsx(
                            "span",
                            {
                              className: `h-[2px] w-5 bg-white transform transition-all duration-300
                    ${isOpen ? "translate-x-10 opacity-0" : ""}
                    `
                            }
                          ),
                          /* @__PURE__ */ jsx(
                            "span",
                            {
                              className: `h-[2px] w-5 bg-white transform transition-all duration-300 origin-left
                    ${isOpen ? "-rotate-45 w-10/12" : ""}
                    `
                            }
                          )
                        ]
                      }
                    )
                  }
                )
              }
            )
          ]
        }
      ),
      document.body
    )
  ] });
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50"> <nav class="glass-panel rounded-xl px-8 lg:px-8 md:px-5 py-4 flex items-center justify-between shadow-2xl"> <!-- LOGO --> <a href="#inicio" class="flex items-center gap-3 group cursor-pointer" aria-label="Volver al inicio"> <div class="text-primary transition-transform group-hover:scale-110"> <span class="material-symbols-outlined text-3xl">
rocket_launch
</span> </div> <span class="text-xl font-bold tracking-tighter uppercase whitespace-nowrap group-hover:text-primary transition-colors">
Space DEV
</span> </a> <!-- NAV LINKS --> <div class="hidden md:flex items-center gap-10 lg:gap-10 md:gap-4"> <a href="#manifiesto" class="text-md font-medium hover:text-primary transition-colors">
Manifiesto
</a> <a href="#servicios" class="text-md font-medium hover:text-primary transition-colors">
Servicios
</a> <a href="#archivos" class="text-md font-medium hover:text-primary transition-colors">
Archivos
</a> <a href="#tripulacion" class="text-md font-medium hover:text-primary transition-colors">
Tripulación
</a> <a href="#faq" class="text-md font-medium hover:text-primary transition-colors">
FAQ
</a> </div> <!-- CTA --> <div class="hidden md:flex items-center gap-4"> <a href="#contacto" class="bg-primary hover:bg-white text-background-dark text-md px-6 lg:px-6 md:px-4 py-2.5 rounded-lg font-bold transition-all duration-300 shadow-[0_0_15px_rgba(0,225,255,0.3)]">
Contáctanos
</a> </div> <!-- MOBILE MENU --> ${renderComponent($$result, "MobileMenu", MobileMenu, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Usuario/alexdevspace-me/src/components/MobileMenu.tsx", "client:component-export": "default" })} </nav> </header>`;
}, "C:/Users/Usuario/alexdevspace-me/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="py-12 px-2 border-t border-white/5 text-center"> <div class="size-6 mx-auto mb-6 text-white/50"> <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"> <path clip-rule="evenodd" fill-rule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor"></path> </svg> </div> <p class="text-xs uppercase tracking-[0.4em] text-white/50">
Space DEV © ${year}. La exploración es nuestra esencia.
</p> </footer>`;
}, "C:/Users/Usuario/alexdevspace-me/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { description, title } = Astro2.props;
  return renderTemplate`<html lang="es" class="overflow-x-hidden"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/faviconSD.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="relative min-h-screen overflow-x-hidden bg-background-dark text-white font-sans"> <!-- HEADER --> ${renderComponent($$result, "Header", $$Header, {})} <!-- Fondo nebular --> <div class="fixed inset-0 z-0 nebula-glow"></div> <!-- Campo de estrellas --> ${renderComponent($$result, "Starfield", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/Usuario/alexdevspace-me/src/components/effects/Starfield", "client:component-export": "Starfield" })} <!-- Contenido de la página --> <div class="relative z-10 flex flex-col min-h-screen"> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </div> </body></html>`;
}, "C:/Users/Usuario/alexdevspace-me/src/layouts/Layout.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="inicio" class="relative w-full pt-44 pb-32 px-6"> <div class="flex items-center justify-center"> <div class="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"> <!-- Columna izquierda --> <div class="lg:col-span-8 space-y-"> <!-- Estado --> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[10px] uppercase tracking-[0.2em] font-bold"> <span class="relative flex h-2 w-2"> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span> <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span> </span>
SISTEMA EN LÍNEA: V3.0.0
</div> <!-- Título --> <div class="mt-6"> <h1 class="text-7xl md:text-8xl font-bold leading-[0.9] tracking-tight">
SPACE
<span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cosmic-violet">
DEV
</span> </h1> <!-- Slogan --> <div class="flex flex-row items-center mt-2 gap-4 md:gap-6"> <p class="text-2xl md:text-3xl italic tracking-widest text-primary glow-text align-text">Donde las ideas despegan
</p> <span class="material-symbols-outlined text-primary text-sm">
rocket_launch
</span> </div> </div> <!-- Desarrollo --> <p class="mt-8 mb-8 text-lg md:text-xl text-gray-400 max-w-xl font-light leading-relaxed text-pretty">
Transformamos ideas en productos digitales reales.
          Desde páginas web hasta aplicaciones diseñadas para crecer y evolucionar.
</p> <!-- CTAs --> <div class="flex flex-wrap gap-4 pt-4"> <a href="#archivos" class="group flex items-center gap-2 bg-primary text-background-dark px-8 py-4 rounded-xl text-lg font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,225,255,0.2)]">
Explorar Proyectos
<span class="material-symbols-outlined transition-transform group-hover:translate-x-1">
arrow_forward
</span> </a> <a href="#manifiesto" class="group flex items-center gap-2 border border-white/10 hover:border-primary/50 bg-white/5 px-8 py-4 rounded-xl text-lg font-bold transition-all backdrop-blur-sm">
Ver Manifiesto
<span class="material-symbols-outlined text-primary">
terminal
</span> </a> </div> </div> <!-- Columna derecha --> <div class="lg:col-span-4 hidden lg:flex flex-col gap-6"> <!-- Estado del nodo --> <div class="glass-panel p-6 rounded-xl space-y-4"> <div class="flex justify-between items-center border-b border-white/10 pb-2"> <span class="text-[10px] uppercase tracking-widest text-primary font-bold">
ESTADO DEL NODO
</span> <span class="material-symbols-outlined text-xs text-primary">
sensors
</span> </div> <div class="space-y-3"> <div class="flex justify-between items-center"> <span class="data-stream-text text-gray-500 uppercase">LATENCIA_MS</span> <span class="data-stream-text text-primary">0.0012</span> </div> <div class="flex justify-between items-center"> <span class="data-stream-text text-gray-500 uppercase">SINC_NÚCLEO</span> <span class="data-stream-text text-primary">99.9%</span> </div> <div class="flex justify-between items-center"> <span class="data-stream-text text-gray-500 uppercase">RENDIMIENTO</span> <span class="data-stream-text text-primary">4.2 TB/S</span> </div> </div> </div> <!-- Card proyecto --> <div class="relative aspect-square rounded-xl overflow-visible border border-white/5 bg-gradient-to-br from-white/5 to-transparent group p-4 flex flex-col justify-around"> <!-- Pantalla / Preview --> <div class="relative z-10 w-full aspect-[3/2] rounded-xl overflow-hidden border border-primary/30 bg-black/50"> <!-- Imagen (BASE) --> <div class="absolute inset-0 z-10
                    bg-[url('/projectsApps/PA_Pets.webp')]
                    bg-cover bg-center
                    transition-all duration-700
                    opacity-[0.4] grayscale
                    group-hover:opacity-100
                    group-hover:grayscale-0
                    group-hover:scale-110
                    group-hover:skew-x-[0.5deg]"></div> <!-- Overlay azul / señal --> <div class="absolute inset-0 z-20 bg-primary/15"></div> <!-- Scanlines --> <div class="absolute inset-0 z-30
                        bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
                        bg-[length:100%_4px]
                        opacity-30"></div> <!-- Glitch (interferencia vertical) --> <div class="absolute inset-0 z-40 pointer-events-none
                        bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,225,255,0.2)_50%,transparent_100%)]
                        bg-[length:100%_6px]
                        animate-glitch
                        opacity-60
                        mix-blend-screen"></div> <!-- Glow de pantalla (MARCO FINAL) --> <div class="absolute inset-0 z-60
                        ring-1 ring-primary/40
                        shadow-[0_0_35px_rgba(0,225,255,0.25)]"></div> </div> <!-- Info del proyecto (controles) --> <div class="glass-panel rounded-lg p-4 flex items-center gap-4 z-20"> <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center"> <span class="material-symbols-outlined text-primary text-sm">
phone_iphone
</span> </div> <div> <p class="text-[10px] text-gray-400 uppercase tracking-tighter">
PROYECTO ACTUAL
</p> <p class="text-xs font-bold uppercase tracking-widest">
PROTOCOLO PETS
</p> </div> </div> </div> </div> </div> </div> </section>`;
}, "C:/Users/Usuario/alexdevspace-me/src/components/Hero.astro", void 0);

const $$Manifiesto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="manifiesto" class="relative w-full px-6 py-32"> <div class="max-w-6xl mx-auto"> <!-- Intro --> <div class="text-center mb-24"> <span class="text-primary text-xs font-bold tracking-[0.5em] mb-4 block opacity-80">
ESTABLECIENDO CONEXIÓN
</span> <h2 class="glow-text text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-8">
DISEÑAMOS TECNOLOGÍA<br> <span class="text-primary">SIN LÍMITES.</span> </h2> <div class="hud-line h-px w-32 mx-auto my-12"></div> </div> <!-- Tres pilares --> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32"> <div class="glass-panel glass-panel-hover p-10 rounded-xl group hover:border-primary/50 transition-all duration-500"> <div class="mb-6 text-primary group-hover:scale-110 transition-transform"> <span class="material-symbols-outlined text-4xl">
lightbulb
</span> </div> <h3 class="text-2xl font-bold mb-4 tracking-tight">De la idea a la realidad</h3> <p class="text-white/70 text-lg leading-relaxed">
Partimos de una idea, una necesidad o incluso un problema y
            nosotros nos encargamos de convertirlo en tu solución digital.
</p> </div> <div class="glass-panel glass-panel-hover p-10 rounded-xl group hover:border-primary/50 transition-all duration-500"> <div class="mb-6 text-primary group-hover:scale-110 transition-transform"> <span class="material-symbols-outlined text-4xl">
hub
</span> </div> <h3 class="text-2xl font-bold mb-4 tracking-tight">Tecnología Viva</h3> <p class="text-white/70 text-lg leading-relaxed">
Creamos interfaces claras, experiencias fluidas y sistemas funcionales,
            tanto para tus usuarios, proyectos y/o negocio.
</p> </div> <div class="glass-panel glass-panel-hover p-10 rounded-xl group hover:border-primary/50 transition-all duration-500"> <div class="mb-6 text-primary group-hover:scale-110 transition-transform"> <span class="material-symbols-outlined text-4xl">
trending_up
</span> </div> <h3 class="text-2xl font-bold mb-4 tracking-tight">Pensado para crecer</h3> <p class="text-white/70 text-lg leading-relaxed">
Desarrollamos todo tipo de tecnologías preparadas
            para escalar, evolucionar y adaptarse a las necesidades futuras.
</p> </div> </div> <!-- Manifiesto --> <div class="relative glass-panel rounded-2xl p-12 md:p-20 overflow-hidden group"> <div class="absolute top-0 left-0 w-2 h-full bg-primary/40 group-hover:bg-primary transition-colors"></div> <div class="flex flex-col md:flex-row gap-12 items-start"> <div class="md:w-2/3"> <h3 class="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
EL MANIFIESTO
</h3> <p class="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
En Space DEV somos un estudio creativo de desarrollo.
            Diseñamos y construimos productos digitales:
<span class="text-primary font-medium"> cuidando tanto la tecnología como la experiencia de quien los usa.</span> </p> <p class="mt-8 text-xl md:text-2xl text-white/90 leading-relaxed font-light">
Creemos que la tecnología debe ser clara, útil y memorable.
            Nuestro enfoque combina diseño, código y narrativa para crear
            soluciones que no solo funcionan, sino que conectan.
</p> </div> <div class="md:w-1/3 flex flex-col gap-6 w-full"> <div class="border-l border-primary/20 pl-6 py-2"> <span class="text-[10px] text-primary tracking-widest uppercase block mb-1">
FUERZA DE TRANSMISIÓN
</span> <div class="flex gap-1 items-end h-4"> <div class="w-1 h-1 bg-primary"></div> <div class="w-1 h-2 bg-primary"></div> <div class="w-1 h-4 bg-primary"></div> <div class="w-1 h-3 bg-primary"></div> <div class="w-1 h-4 bg-primary"></div> </div> </div> <div class="border-l border-primary/20 pl-6 py-2"> <span class="text-[10px] text-primary tracking-widest uppercase block mb-1">
COORDENADAS
</span> <span class="text-xs text-white/40 font-mono">
LAT 0°00'00″ // LON 78°27'00″
</span> </div> <a href="#servicios" class="mt-6 flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 py-4 rounded-xl transition-all group/btn w-full"> <span class="text-sm font-bold tracking-[0.2em] uppercase">
Acceder a Matriz
</span> <span class="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
account_tree
</span> </a> </div> </div> </div> </div> </section>`;
}, "C:/Users/Usuario/alexdevspace-me/src/components/Manifiesto.astro", void 0);

const $$Astro = createAstro();
const $$Matriz = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Matriz;
  return renderTemplate`${maybeRenderHead()}<section id="servicios" class="px-4 sm:px-6 flex justify-center py-32"> <div class="layout-content-container flex flex-col max-w-[1200px] w-full"> <!-- Header de sección --> <div class="flex flex-col lg:flex-row flex-wrap justify-between lg:items-end gap-8 p-4 mb-12"> <div class="flex min-w-0 flex-col gap-4 max-w-2xl"> <div class="flex items-center gap-2 text-primary text-xs font-bold tracking-[0.2em] uppercase"> <span class="size-2 rounded-full bg-primary animate-pulse"></span>
Red Neuronal Activa
</div> <h1 class="text-white text-4xl sm:text-5xl lg:text-7xl font-black leading-tight tracking-[-0.04em] font-display uppercase">
LA MATRIZ:<br class="hidden sm:block">SERVICIOS
</h1> <p class="text-primary/70 text-base sm:text-lg font-light leading-relaxed">
La Matriz es la estructura donde toman forma nuestras soluciones.
          Cada servicio es una pieza especializada, pensada para resolver necesidades y crecer junto a tu proyecto.
</p> </div> <div class="flex flex-col items-start lg:items-end gap-4"> <div class="text-left lg:text-right hidden sm:block"> <p class="text-xs text-white/40 uppercase tracking-widest">Carga del Sistema</p> <p class="text-xl font-mono text-primary">0.00042ms</p> </div> <div class="flex w-full sm:w-auto min-w-[160px] items-center justify-center rounded-xl h-12 px-6 bg-white/5 border border-white/10 text-white text-sm font-bold uppercase tracking-wider cursor-default"> <span class="material-symbols-outlined mr-2 text-primary">sensors</span>
Sistema en Línea
</div> </div> </div> <!-- Grid principal de servicios --> <div class="grid grid-cols-1 md:grid-cols-12 gap-4 p-4"> <!-- Web --> <div class="md:col-span-8 group relative overflow-hidden glass-card rounded-xl p-6 sm:p-8 flex flex-col justify-between min-h-[360px] sm:min-h-[400px]"> <div class="absolute -top-5 -right-10 opacity-5 transition-all duration-700 ease-out transform will-change-transform group-hover:scale-110 group-hover:rotate-6 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:opacity-15"> <span class="material-symbols-outlined" style="font-size:180px; line-height:1;">code</span> </div> <div class="relative z-10"> <div class="size-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6 border border-primary/30"> <span class="material-symbols-outlined text-primary">code</span> </div> <h3 class="text-2xl sm:text-3xl font-bold text-white mb-4">Web</h3> <p class="text-white/60 text-base sm:text-lg max-w-md leading-relaxed">
Creamos landing pages, sitios corporativos, tiendas online y aplicaciones web
            que priorizan rendimiento, estructura y una experiencia sólida para tus usuarios.
</p> </div> <div class="flex justify-between items-center mt-8"> <div class="text-[10px] text-white/30 uppercase tracking-[0.2em] font-mono">
Núcleo_Web_Principal
</div> <span class="material-symbols-outlined text-primary/40 text-sm">language</span> </div> </div> <!-- Aplicaciones --> <div class="md:col-span-4 group relative overflow-hidden glass-card rounded-xl p-6 sm:p-8 flex flex-col justify-between min-h-[320px] sm:min-h-[400px]"> <!-- Icono decorativo fondo --> <div class="absolute -top-10 -right-10 opacity-5 transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 group-hover:opacity-10"> <span class="material-symbols-outlined" style="font-size:160px; line-height:1;">phone_iphone</span> </div> <div class="relative z-10"> <div class="size-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6 border border-primary/30 text-primary"> <span class="material-symbols-outlined">phone_iphone</span> </div> <h3 class="text-xl sm:text-2xl font-bold text-white mb-4">Aplicaciones</h3> <p class="text-white/60 text-sm sm:text-base leading-relaxed">
Desarrollamos apps móviles nativas e híbridas, desde MVP hasta productos completos, enfocadas en usabilidad, estabilidad y crecimiento continuo.
</p> </div> <div class="flex justify-between items-center mt-8 relative z-10"> <div class="text-[10px] text-white/30 uppercase tracking-[0.2em] font-mono">
Módulo_Móvil
</div> <span class="material-symbols-outlined text-primary/40 text-sm">mobile_code</span> </div> </div> <!-- AR / VR --> <div class="md:col-span-6 group relative overflow-hidden glass-card rounded-xl p-6 sm:p-8 flex flex-col justify-between min-h-[300px]"> <!-- Icono decorativo fondo --> <div class="absolute -top-10 -right-10 opacity-5 transition-all duration-700 group-hover:scale-110 group-hover:-rotate-6 group-hover:opacity-10"> <span class="material-symbols-outlined" style="font-size:160px; line-height:1;">view_in_ar</span> </div> <div class="relative z-10"> <div class="size-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6 border border-primary/30 text-primary"> <span class="material-symbols-outlined">view_in_ar</span> </div> <h3 class="text-xl sm:text-2xl font-bold text-white mb-3">AR / VR</h3> <p class="text-white/60 text-sm sm:text-base leading-relaxed">
Diseñamos experiencias en realidad aumentada y virtual, demos interactivas, simuladores y entornos inmersivos para educación, marketing o entrenamiento.
</p> </div> <div class="flex justify-between items-center mt-8 relative z-10"> <div class="text-[10px] text-white/30 uppercase tracking-[0.2em] font-mono">
Módulo_Estereoscópico
</div> <span class="material-symbols-outlined text-primary/40 text-sm">head_mounted_device</span> </div> </div> <!-- Videojuegos --> <div class="md:col-span-6 group relative overflow-hidden glass-card rounded-xl p-6 sm:p-8 flex flex-col justify-between min-h-[300px]"> <!-- Icono decorativo fondo --> <div class="absolute -top-10 -right-10 opacity-5 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 group-hover:opacity-10"> <span class="material-symbols-outlined" style="font-size:160px; line-height:1;">sports_esports</span> </div> <div class="relative z-10"> <div class="size-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6 border border-primary/30 text-primary"> <span class="material-symbols-outlined">sports_esports</span> </div> <h3 class="text-xl sm:text-2xl font-bold text-white mb-3">Videojuegos</h3> <p class="text-white/60 text-sm sm:text-base leading-relaxed">
Desarrollamos videojuegos 2D y 3D, prototipos jugables y experiencias interactivas, combinando diseño de mecánicas, narrativa y tecnología.
</p> </div> <div class="flex justify-between items-center mt-8 relative z-10"> <div class="text-[10px] text-white/30 uppercase tracking-[0.2em] font-mono">
Sistema_Interactivo
</div> <span class="material-symbols-outlined text-primary/40 text-sm">gamepad_left</span> </div> </div> </div> </div> </section>`;
}, "C:/Users/Usuario/alexdevspace-me/src/components/Matriz.astro", void 0);

var Category = /* @__PURE__ */ ((Category2) => {
  Category2["WEB"] = "WEB";
  Category2["APPS"] = "APPS";
  Category2["GAMING"] = "GAMING";
  Category2["VR_AR"] = "VR_AR";
  return Category2;
})(Category || {});
const SIGNAL_MAP = {
  TODOS: "00",
  WEB: "01",
  GAMING: "02",
  APPS: "03",
  VR_AR: "04"
};

const PROJECTS = [
  // WEB Projects
  {
    id: "rompamos-el-tabu-web",
    title: "Rompamos el Tabú",
    category: Category.WEB,
    image: "/projectsWeb/PW_Rompamostabu.webp",
    tags: ["Campaña", "Web"],
    description: "Web dedicada a la educación y concienciación sobre la salud y prevención de enfermedades de transmisión sexual (ETS) en jóvenes.",
    status: "En Vivo",
    tech: "Joomla / JS",
    url: "https://rompamoseltabu.com/"
  },
  {
    id: "space-dev",
    title: "Space DEV",
    category: Category.WEB,
    image: "/projectsWeb/PW_Spacedev.webp",
    tags: ["Estudio Creativo", "Web"],
    description: "Creadores de Spacedev.me, presentando nuestra marca/estudio dentro de una experiencia web fluida, accesible y cósmica.",
    status: "En Vivo",
    tech: "Astro / React / TailwindCSS / TS",
    url: "#inicio"
  },
  // GAMING Projects
  {
    id: "trazando-pasos",
    title: "Trazando Pasos",
    category: Category.GAMING,
    image: "/projectsVideogames/PV_TrazandoPasos.webp",
    tags: ["GameJam", "PC", "Gaming"],
    description: "Videojuego en realidad virtual, una experiencia que explora los desafíos de la migración. Juego ganador del GameJam VRDay Latam 2022.",
    status: "Completado",
    tech: "Unreal",
    url: "https://www.behance.net/gallery/166470549/Trazando-Pasos-(videojuego-VR)-(2023)"
  },
  {
    id: "plantain-feast",
    title: "Plantain Feast",
    category: Category.GAMING,
    image: "/projectsVideogames/PV_PlantainFeast.webp",
    tags: ["Cultura", "Móvil", "Gaming"],
    description: "Videojuego de cocina en 2D para móviles sobre gastronomía ecuatoriana, recetas tradicionales con el plátano como ingrediente principal.",
    status: "Completado",
    tech: "Unreal",
    url: "https://www.behance.net/gallery/166470549/Trazando-Pasos-(videojuego-VR)-(2023)"
  },
  // APPS Projects
  {
    id: "pets",
    title: "Pets",
    category: Category.APPS,
    image: "/projectsApps/PA_Pets.webp",
    tags: ["Mascotas", "Apps"],
    description: "Aplicación móvil para el cuidado y seguimiento de mascotas, con recordatorios de vacunas, citas veterinarias y alimentación.",
    status: "Prototipo",
    tech: "Flutter / Supabase",
    url: ""
  },
  // VR_AR Projects
  {
    id: "alerta-ar",
    title: "ALERTA!",
    category: Category.VR_AR,
    image: "/projectsXR/PX_Alerta.webp",
    tags: ["Galería Viva", "AR"],
    description: "Realidad aumentada para Alerta! Reflexiones gráficas en torno a la salud mental, combinando arte, animaciones y tecnología.",
    status: "En Vivo",
    tech: "Lens Studio / JS",
    url: "https://www.expreso.ec/guayaquil/arte-interactivo-busca-sensibilizar-enos-salud-mental-213527.html"
  },
  {
    id: "simulacion-de-soldadura-vr",
    title: "Simulación de Soldadura VR",
    category: Category.VR_AR,
    image: "/projectsXR/PX_SimulacionSoldadura.webp",
    tags: ["Capacitación", "VR"],
    description: "Simulación de soldadura en realidad virtual para Meta Quest 2, que guía a los usuarios a través de cada paso del proceso de soldadura.",
    status: "Completado",
    tech: "Unity / C# / Meta Quest 2",
    url: "https://www.canva.com/design/DAGQfhKZAcg/fuZ0j9mHAswxeGnv_saAdw/edit?utm_content=DAGQfhKZAcg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  }
];

const Archivos = () => {
  const [filter, setFilter] = useState("TODOS");
  const [expanded, setExpanded] = useState(false);
  const displayProjects = useMemo(() => {
    if (filter !== "TODOS") {
      return PROJECTS.filter((p) => p.category === filter);
    }
    if (expanded) {
      return PROJECTS;
    }
    const oneOfEach = [];
    const usedCategories = /* @__PURE__ */ new Set();
    for (const project of PROJECTS) {
      if (!usedCategories.has(project.category)) {
        usedCategories.add(project.category);
        oneOfEach.push(project);
      }
      if (usedCategories.size === Object.values(Category).length) {
        break;
      }
    }
    return oneOfEach;
  }, [filter, expanded]);
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setExpanded(false);
  };
  return /* @__PURE__ */ jsx("section", { id: "archivos", className: "relative w-full py-32", children: /* @__PURE__ */ jsxs("div", { className: "flex-1 w-full max-w-[1200px] mx-auto px-6 md:px-12 relative z-10", children: [
    /* @__PURE__ */ jsx("div", { className: "items-end gap-6 mb-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-primary mb-3", children: [
        /* @__PURE__ */ jsx("span", { className: "h-[1px] w-8 bg-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs font-bold tracking-[0.3em] uppercase", children: "Acceso al archivo concedido" })
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-7xl font-black leading-none tracking-tighter uppercase mb-6", children: [
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-primary to-white", children: "Archivos" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-300 dark:text-slate-400 text-lg leading-relaxed font-light max-w-3xl text-pretty", children: "Registros de proyectos desarrollados por nuestro estudio creativo que documentan nuestro recorrido, transformando ideas en productos digitales funcionales y memorables." })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-3 lg:mb-16 md:mb-16 mb-10 overflow-x-auto pb-4 no-scrollbar", children: [
      /* @__PURE__ */ jsx(
        FilterButton,
        {
          active: filter === "TODOS",
          icon: "grid_view",
          label: "TODOS",
          onClick: () => handleFilterChange("TODOS")
        }
      ),
      /* @__PURE__ */ jsx(
        FilterButton,
        {
          active: filter === Category.WEB,
          icon: "language",
          label: "WEB",
          onClick: () => handleFilterChange(Category.WEB)
        }
      ),
      /* @__PURE__ */ jsx(
        FilterButton,
        {
          active: filter === Category.GAMING,
          icon: "gamepad_left",
          label: "GAMING",
          onClick: () => handleFilterChange(Category.GAMING)
        }
      ),
      /* @__PURE__ */ jsx(
        FilterButton,
        {
          active: filter === Category.APPS,
          icon: "mobile_code",
          label: "APPS",
          onClick: () => handleFilterChange(Category.APPS)
        }
      ),
      /* @__PURE__ */ jsx(
        FilterButton,
        {
          active: filter === Category.VR_AR,
          icon: "head_mounted_device",
          label: "VR/AR",
          onClick: () => handleFilterChange(Category.VR_AR)
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex md:hidden items-center gap-5 mb-8 text-[11px] uppercase tracking-wide opacity-70", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-green-400" }),
        /* @__PURE__ */ jsx("span", { children: "En Vivo" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-blue-400" }),
        /* @__PURE__ */ jsx("span", { children: "Completado" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-amber-400" }),
        /* @__PURE__ */ jsx("span", { children: "Prototipo" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-6 overflow-hidden", children: [
      /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
        motion.span,
        {
          initial: { opacity: 0, y: 6, filter: "blur(4px)" },
          animate: { opacity: 1, y: 0, filter: ["blur(2px)", "blur(0px)", "blur(1px)", "blur(0px)"] },
          exit: { opacity: 0, y: -6, filter: "blur(4px)" },
          transition: { duration: 0.35, ease: "easeOut" },
          className: "text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded",
          children: [
            "SEÑAL ",
            SIGNAL_MAP[filter]
          ]
        },
        filter
      ) }),
      /* @__PURE__ */ jsx(
        motion.span,
        {
          initial: { opacity: 0 },
          animate: { opacity: 0.4 },
          transition: { delay: 0.15, duration: 0.2 },
          className: "text-[10px] font-bold uppercase tracking-widest",
          children: "Recibida"
        },
        `status-${filter}`
      )
    ] }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        layout: true,
        className: "grid grid-cols-1 md:grid-cols-2 gap-8",
        children: /* @__PURE__ */ jsx(AnimatePresence, { children: displayProjects.map((project) => {
          const isPrototype = project.status === "Prototipo" || !project.url;
          const isInternalLink = project.url?.startsWith("#");
          return /* @__PURE__ */ jsx(
            motion.div,
            {
              layout: true,
              initial: { opacity: 0, y: 40 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -40 },
              transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
              className: "flex flex-col gap-4",
              children: /* @__PURE__ */ jsxs("div", { className: "relative group aspect-[16/10] rounded-2xl overflow-hidden glass-card", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110",
                    style: { backgroundImage: `url(${project.image})` }
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "scanline" }),
                /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 mission-overlay flex flex-col justify-end lg:p-8 p-5", children: [
                  /* @__PURE__ */ jsxs("div", { className: "mb-0 sm:mb-0 md:mb-0 lg:mb-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-700", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold uppercase tracking-tight mb-1", children: project.title }),
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "\r\n                          flex gap-2\r\n                          overflow-hidden\r\n\r\n                          /* Transición */\r\n                          transition-[max-height,opacity,margin] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]\r\n\r\n                          /* Estado base móvil */\r\n                          max-h-20 opacity-100 mb-4\r\n\r\n                          /* Hover SOLO móvil */\r\n                          group-hover:max-h-0\r\n                          group-hover:opacity-0\r\n                          group-hover:mb-0\r\n\r\n                          /* Desktop reset completo */\r\n                          md:max-h-none\r\n                          md:opacity-100\r\n                          md:mb-4\r\n                          md:group-hover:max-h-none\r\n                          md:group-hover:opacity-100\r\n                          md:group-hover:mb-4\r\n                        ",
                        children: project.tags.map((tag) => /* @__PURE__ */ jsx(
                          "span",
                          {
                            className: "text-[10px] border border-white/20 px-2 py-0.5 rounded uppercase",
                            children: tag
                          },
                          tag
                        ))
                      }
                    ),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 line-clamp-3 max-w-sm mb-6 text-pretty", children: project.description })
                  ] }),
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "\r\n                        flex items-center justify-between\r\n                        shrink-0\r\n\r\n                        /* Base móvil: colapsado real */\r\n                        max-h-0 opacity-0 translate-y-6 overflow-hidden\r\n\r\n                        /* Animación */\r\n                        transition-[max-height,opacity,transform] duration-500 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)]\r\n\r\n                        /* Hover móvil */\r\n                        group-hover:max-h-48\r\n                        group-hover:opacity-100\r\n                        group-hover:-translate-y-0\r\n\r\n                        /* Desktop reset */\r\n                        md:max-h-none\r\n                        md:opacity-0\r\n                        md:translate-y-6\r\n                        md:overflow-visible\r\n\r\n                        md:group-hover:max-h-none\r\n                        md:group-hover:opacity-100\r\n                        md:group-hover:translate-y-0\r\n                      ",
                      children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
                            /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-tighter opacity-80", children: "Estado" }),
                            /* @__PURE__ */ jsxs("div", { className: "flex items-center lg:mt-0 md:mt-0 mt-1", children: [
                              /* @__PURE__ */ jsx(
                                "span",
                                {
                                  className: `
                                block md:hidden
                                w-2.5 h-2.5 rounded-full
                                ${project.status === "En Vivo" ? "bg-green-400" : project.status === "Completado" ? "bg-blue-400" : "bg-amber-400"}
                              `
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                "span",
                                {
                                  className: `
                                hidden md:block
                                text-xs font-bold uppercase
                                ${project.status === "En Vivo" ? "text-green-400" : project.status === "Completado" ? "text-blue-400" : "text-amber-400"}
                              `,
                                  children: project.status
                                }
                              )
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
                            /* @__PURE__ */ jsx("span", { className: "text-[11px] uppercase tracking-tighter opacity-90", children: "Tecnología" }),
                            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold", children: project.tech })
                          ] })
                        ] }),
                        isPrototype ? /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: "\r\n                            h-12 w-12 rounded-lg\r\n                            flex items-center justify-center\r\n                            bg-white/5 border border-white/10\r\n                            text-white/40\r\n                            cursor-default\r\n                            relative\r\n                          ",
                            title: "Proyecto en fase de prototipo",
                            children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-xl", children: "hourglass_top" })
                          }
                        ) : isInternalLink ? /* @__PURE__ */ jsxs(
                          "button",
                          {
                            onClick: () => {
                              const el = document.querySelector(project.url);
                              el?.scrollIntoView({ behavior: "smooth" });
                            },
                            className: "\r\n                            bg-primary hover:bg-white\r\n                            text-background-dark\r\n                            h-12 w-12 md:w-12\r\n                            rounded-lg\r\n                            flex items-center justify-center\r\n                            transition-all\r\n                            overflow-hidden relative\r\n\r\n                            md:group-hover:w-40\r\n                            active:scale-95 md:active:scale-100\r\n                          ",
                            title: "Volver al inicio",
                            children: [
                              /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-xl md:absolute md:left-3.5", children: "Public" }),
                              /* @__PURE__ */ jsx(
                                "span",
                                {
                                  className: "\r\n                                hidden md:block\r\n                                ml-8 opacity-0\r\n                                md:group-hover:opacity-100\r\n                                transition-opacity\r\n                                font-bold uppercase text-xs whitespace-nowrap\r\n                              ",
                                  children: "Esta Misión"
                                }
                              )
                            ]
                          }
                        ) : /* @__PURE__ */ jsx(
                          "a",
                          {
                            href: project.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "group",
                            children: /* @__PURE__ */ jsxs(
                              "button",
                              {
                                className: "\r\n                                bg-primary hover:bg-white\r\n                                text-background-dark\r\n                                h-12 w-12 md:w-12\r\n                                rounded-lg\r\n                                flex items-center justify-center\r\n                                transition-all\r\n                                overflow-hidden relative\r\n\r\n                                /* Desktop expansión */\r\n                                md:group-hover:w-40\r\n                                active:scale-95 md:active:scale-100\r\n                              ",
                                children: [
                                  /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-xl md:absolute md:left-3.5", children: "travel_explore" }),
                                  /* @__PURE__ */ jsx(
                                    "span",
                                    {
                                      className: "\r\n                                  hidden md:block\r\n                                  ml-8 opacity-0\r\n                                  md:group-hover:opacity-100\r\n                                  transition-opacity\r\n                                  font-bold uppercase text-xs whitespace-nowrap\r\n                                ",
                                      children: "Explorar Archivo"
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        )
                      ]
                    }
                  )
                ] })
              ] })
            },
            project.id
          );
        }) })
      }
    ),
    filter === "TODOS" && /* @__PURE__ */ jsx("div", { className: "flex justify-center pt-12", children: !expanded && PROJECTS.length > displayProjects.length ? /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setExpanded(true),
        className: "\r\n                glow-button glass-card\r\n                group flex items-center gap-4\r\n                px-10 md:px-8 py-4\r\n                rounded-full\r\n                border border-primary/20\r\n                bg-background-dark/40 backdrop-blur-md\r\n                transition-all\r\n                hover:bg-background-dark/60 hover:scale-[1.02]",
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm font-bold uppercase tracking-[0.2em] text-white", children: "Mostrar más archivos" }),
          /* @__PURE__ */ jsx("div", { className: "\r\n                flex items-center justify-center\r\n                w-6 h-6\r\n                rounded-full\r\n                border border-primary/30\r\n                group-hover:border-primary\r\n                transition-colors\r\n              ", children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-lg text-primary animate-bounce pt-1", children: "keyboard_arrow_down" }) })
        ]
      }
    ) : expanded ? /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setExpanded(false),
        className: "\r\n                glow-button glass-card\r\n                group flex items-center gap-4\r\n                px-10 md:px-8 py-4\r\n                rounded-full\r\n                border border-primary/20\r\n                bg-background-dark/40 backdrop-blur-md\r\n                transition-all\r\n                hover:bg-background-dark/60 hover:scale-[1.02]",
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm font-bold uppercase tracking-[0.2em] text-white", children: "Mostrar menos archivos" }),
          /* @__PURE__ */ jsx("div", { className: "\r\n                flex items-center justify-center\r\n                w-6 h-6\r\n                rounded-full\r\n                border border-primary/30\r\n                group-hover:border-primary\r\n                transition-colors\r\n              ", children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-lg text-primary animate-bounce pt-1", children: "keyboard_arrow_up" }) })
        ]
      }
    ) : null })
  ] }) });
};
const FilterButton = ({
  icon,
  label,
  active,
  onClick
}) => /* @__PURE__ */ jsxs(
  "div",
  {
    onClick,
    className: `flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-6 cursor-pointer transition-colors
      ${active ? "bg-primary text-background-dark" : "border border-white/10 hover:border-primary/50"}
    `,
    children: [
      /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-lg", children: icon }),
      /* @__PURE__ */ jsx(
        "p",
        {
          className: `text-sm uppercase tracking-tight ${active ? "font-bold" : "font-medium opacity-70"}`,
          children: label
        }
      )
    ]
  }
);

const $$Tripulacion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="tripulacion" class="flex flex-col items-center px-6 py-32 max-w-7xl mx-auto w-full"> <!-- Header de sección --> <div class="w-full mb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end"> <div> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6"> <span class="relative flex h-2 w-2"> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span> <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span> </span> <span class="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
BASE DE DATOS DE PERSONAL
</span> </div> <h2 class="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none uppercase">
TRIPULA<span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">CIÓN
</span> </h2> </div> <div class="max-w-xl pb-2"> <p class="text-slate-400 text-lg leading-relaxed mb-6">
Un equipo multidisciplinario unido por la curiosidad, el criterio y la obsesión de dar lo mejor.
        Distintas perspectivas y habilidades colaborando para el éxito en cada misión.
</p> <div class="flex gap-4"> <div class="flex flex-col"> <span class="text-primary font-bold text-2xl">10</span> <span class="text-[10px] text-slate-500 tracking-widest uppercase">Misiones</span> </div> <div class="w-px h-10 bg-white/10 mx-2"></div> <div class="flex flex-col"> <span class="text-primary font-bold text-2xl">6</span> <span class="text-[10px] text-slate-500 tracking-widest uppercase">Áreas</span> </div> <div class="w-px h-10 bg-white/10 mx-2"></div> <div class="flex flex-col"> <span class="text-primary font-bold text-2xl">∞</span> <span class="text-[10px] text-slate-500 tracking-widest uppercase">Visión</span> </div> </div> </div> </div> <!-- Grid de miembros --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"> <!-- ALEX DEV --> <div class="lg:col-span-2 glass-card rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center neon-glow group transition-all duration-500 relative"> <!-- Redes --> <div class="absolute top-6 right-8 flex gap-4"> <a class="social-icon-glow text-slate-500 hover:text-primary transition-colors" href="https://github.com/AlexSpaceDev" target="_blank" title="GitHub"> <!-- Github icon --> <svg class="size-4" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path> </svg> </a> </div> <!-- Avatar --> <div class="relative"> <div class="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-all"></div> <div class="relative size-48 rounded-full border-2 border-primary/30 p-2 overflow-hidden bg-background-dark"> <div class="w-full h-full rounded-full bg-cover bg-center portrait-filter group-hover:filter-none transition-all duration-500" style="background-image: url('/perfiles/alexperfil.webp');"></div> <div class="absolute inset-0 cyan-tint mix-blend-overlay opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div> </div> </div> <!-- Info --> <div class="flex-1 space-y-4"> <!-- Meta --> <div class="flex items-center gap-2"> <span class="text-[10px] font-mono text-primary border border-primary/40 px-2 py-0.5 rounded">
CMDR-01
</span> <span class="text-[10px] font-mono text-slate-500 uppercase">
Proyecto · Desarrollo
</span> </div> <!-- Nombre --> <h3 class="text-3xl font-bold tracking-tight">
ALEX DEV
</h3> <!-- Roles --> <div class="flex flex-wrap gap-2"> <span class="bg-primary/10 text-primary text-[10px] font-bold px-3 py-1 rounded-full border border-primary/20 uppercase" title="Rol principal">
Programador Full-Stack
</span> <span class="bg-white/5 text-slate-400 text-[10px] font-bold px-3 py-1 rounded-full border border-white/10 uppercase" title="Especialidad">
Dirección Técnica
</span> </div> <!-- Enfoque --> <p class="text-slate-400 text-sm italic" title="Enfoque profesional">
Toda idea se puede programar. De problemas complejos a soluciones claras a través de código y estructura.
</p> </div> </div> <!-- ESTEBAN --> <div class="glass-card rounded-xl p-6 flex flex-col items-center text-center neon-glow group transition-all duration-500 relative"> <div class="absolute top-6 right-6 flex gap-3"> <!-- INSTAGRAM --> <a class="social-icon-glow text-slate-500" href="https://www.instagram.com/1_tal_esteban/?igsh=MWV1NjdmY2N4anF0NA%3D%3D#" target="_blank" title="Instagram"> <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path> </svg> </a> <!-- WEB PERSONAL --> <a class="social-icon-glow text-slate-500" href="https://sites.google.com/view/estebanortiz/proyectos?authuser=0" target="_blank" title="Sitio web"> <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path fill="currentColor" d="M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.7 15.7 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"></path> </svg> </a> </div> <div class="relative mb-6"> <div class="size-24 rounded-full border border-primary/30 p-1 bg-background-dark overflow-hidden"> <div class="w-full h-full rounded-full bg-cover bg-center portrait-filter
              transition-all duration-500 ease-out
              group-hover:filter-none 
              group-hover:mix-blend-mode-normal" style="background-image: url('/perfiles/estebanperfil.webp');"></div> </div> <div class="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/50 transition-all scale-110 group-hover:scale-125"></div> </div> <h3 class="text-xl font-bold mb-2">ESTEBAN ORTÍZ</h3> <span class="text-primary text-[10px] font-bold px-3 py-1 rounded-full border border-primary/20 uppercase mb-4">
Modelador 3D
</span> <div class="w-full h-px bg-white/5 my-4"></div> <!-- BLOQUE APROVECHADO --> <div class="flex gap-4 w-full text-left"> <div> <p class="text-xs text-primary uppercase tracking-normal">
Especialidad
</p> <p class="text-sm text-white">
Assets y entornos 3D
</p> </div> </div> </div> <!-- DANIELA --> <div class="glass-card rounded-xl p-6 flex flex-col items-center text-center neon-glow group transition-all duration-500 relative"> <div class="absolute top-6 right-6 flex gap-2"> <!-- ART STATION --> <a class="social-icon-glow text-slate-500" href="https://www.artstation.com/colorsbeta" target="_blank" title="Art Station"> <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path fill="currentColor" d="m1.77 16.88l1.73 2.98c.34.68 1.04 1.14 1.83 1.14h11.46l-2.36-4.12zm20.46.02c0-.4-.12-.79-.33-1.12L15.17 4.1A2.04 2.04 0 0 0 13.35 3H9.8l10.38 18l1.64-2.86c.31-.54.41-.78.41-1.24m-9.5-2.96L8.1 5.92l-4.65 8.02z"></path> </svg> </a> <!-- INSTAGRAM --> <a class="social-icon-glow text-slate-500" href="https://www.instagram.com/colorsbeta?igsh=MTM5ZTRsZGR5dzZqaw==" target="_blank" title="Instagram"> <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path> </svg> </a> <!-- BEHANCE --> <a class="social-icon-glow text-slate-500" href="https://www.behance.net/danielajamel" target="_blank" title="Behance"> <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path fill="currentColor" d="M9.456 10.772q-.378.278-.964.278l-2.219.002V8.72h2.051q.286 0 .566.049q.272.048.482.174q.21.125.335.35q.125.223.126.571q0 .628-.377.907m-.224 4.447a3 3 0 0 1-.614.063H6.273v-2.736H8.66q.713 0 1.145.328t.433 1.096q0 .39-.133.642q-.132.25-.356.398a1.5 1.5 0 0 1-.517.21m7.115-4.336q.726 0 1.083.39q.355.392.496 1.145h-3.225q.014-.21.09-.474a1.45 1.45 0 0 1 .768-.9q.313-.16.788-.16"></path> <path fill="currentColor" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11M10.07 7.141a6.2 6.2 0 0 0-1.299-.125h-4.69v9.97h4.831c.44 0 .88-.056 1.305-.168q.635-.167 1.131-.517q.496-.348.79-.9q.292-.552.292-1.306q0-.936-.454-1.599q-.453-.662-1.375-.928q.67-.321 1.012-.824t.342-1.256q0-.699-.23-1.173a1.9 1.9 0 0 0-.65-.762a2.8 2.8 0 0 0-1.005-.412m6.403 8.363q-.838 0-1.285-.433t-.487-1.393h5.208a5.1 5.1 0 0 0-.14-1.606a3.9 3.9 0 0 0-.636-1.368a3.2 3.2 0 0 0-1.123-.957q-.685-.356-1.606-.356q-.825 0-1.502.293t-1.166.802t-.754 1.208a4.2 4.2 0 0 0-.265 1.507q0 .837.258 1.536q.258.697.733 1.2t1.16.775t1.535.272q1.229 0 2.094-.559q.866-.557 1.285-1.856h-1.745q-.098.335-.53.635q-.434.3-1.034.3m1.918-7.982h-4.03v1.117h4.03z"></path> </svg> </a> </div> <div class="relative mb-6"> <div class="size-24 rounded-full border border-primary/30 p-1 bg-background-dark overflow-hidden"> <div class="w-full h-full rounded-full bg-cover bg-center portrait-filter 
              transition-all duration-500 ease-out
              group-hover:filter-none 
              group-hover:mix-blend-mode-normal" style="background-image: url('/perfiles/danielaperfil.webp');"></div> </div> <div class="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/50 transition-all scale-110 group-hover:scale-125"></div> </div> <h3 class="text-xl font-bold mb-2">COLORSBETA</h3> <span class="text-primary text-[10px] font-bold px-3 py-1 rounded-full border border-primary/20 uppercase mb-4">
Ilustradora
</span> <div class="w-full h-px bg-white/5 my-4"></div> <!-- BLOQUE APROVECHADO --> <div class="flex gap-4 w-full text-left"> <div> <p class="text-xs text-primary uppercase tracking-normal">
Especialidad
</p> <p class="text-sm text-white">
Concept Artist de personajes
</p> </div> </div> </div> <!-- AREAS --> <div class="glass-card rounded-xl p-6 flex flex-col justify-center bg-primary/5 border border-primary/20"> <!-- ICONO --> <span class="material-symbols-outlined text-primary text-4xl mb-4">
Atr
</span> <!-- TITULO --> <h4 class="text-sm font-bold tracking-widest uppercase mb-4">
Áreas Exploradas
</h4> <!-- LISTA DE AREAS --> <div class="flex flex-wrap gap-2 text-left"> <span class="text-xs px-2 py-1 rounded-full border border-primary/20 text-primary uppercase">
Arquitectura & Programación
</span> <span class="text-xs px-2 py-1 rounded-full border border-primary/20 text-primary uppercase">
Diseño UI/UX
</span> <span class="text-xs px-2 py-1 rounded-full border border-primary/20 text-primary uppercase">
Dirección Creativa
</span> <span class="text-xs px-2 py-1 rounded-full border border-primary/20 text-primary uppercase">
Arte & Visuales
</span> <span class="text-xs px-2 py-1 rounded-full border border-primary/20 text-primary uppercase">
Narrativa
</span> <span class="text-xs px-2 py-1 rounded-full border border-primary/20 text-primary uppercase">
Optimización & Escalabilidad
</span> </div> </div> <!-- JUANITO --> <div class="glass-card rounded-xl p-6 flex flex-col items-center text-center neon-glow group transition-all duration-500 relative"> <!-- SOCIALS --> <div class="absolute top-6 right-6 flex gap-3"> <!-- ART STATION --> <a class="social-icon-glow text-slate-500" href="https://www.artstation.com/jbetancourt" target="_blank" title="Art Station"> <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path fill="currentColor" d="m1.77 16.88l1.73 2.98c.34.68 1.04 1.14 1.83 1.14h11.46l-2.36-4.12zm20.46.02c0-.4-.12-.79-.33-1.12L15.17 4.1A2.04 2.04 0 0 0 13.35 3H9.8l10.38 18l1.64-2.86c.31-.54.41-.78.41-1.24m-9.5-2.96L8.1 5.92l-4.65 8.02z"></path> </svg> </a> <!-- BEHANCE --> <a class="social-icon-glow text-slate-500" href="https://www.behance.net/juanb11953633" target="_blank" title="Behance"> <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path fill="currentColor" d="M9.456 10.772q-.378.278-.964.278l-2.219.002V8.72h2.051q.286 0 .566.049q.272.048.482.174q.21.125.335.35q.125.223.126.571q0 .628-.377.907m-.224 4.447a3 3 0 0 1-.614.063H6.273v-2.736H8.66q.713 0 1.145.328t.433 1.096q0 .39-.133.642q-.132.25-.356.398a1.5 1.5 0 0 1-.517.21m7.115-4.336q.726 0 1.083.39q.355.392.496 1.145h-3.225q.014-.21.09-.474a1.45 1.45 0 0 1 .768-.9q.313-.16.788-.16"></path> <path fill="currentColor" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11M10.07 7.141a6.2 6.2 0 0 0-1.299-.125h-4.69v9.97h4.831c.44 0 .88-.056 1.305-.168q.635-.167 1.131-.517q.496-.348.79-.9q.292-.552.292-1.306q0-.936-.454-1.599q-.453-.662-1.375-.928q.67-.321 1.012-.824t.342-1.256q0-.699-.23-1.173a1.9 1.9 0 0 0-.65-.762a2.8 2.8 0 0 0-1.005-.412m6.403 8.363q-.838 0-1.285-.433t-.487-1.393h5.208a5.1 5.1 0 0 0-.14-1.606a3.9 3.9 0 0 0-.636-1.368a3.2 3.2 0 0 0-1.123-.957q-.685-.356-1.606-.356q-.825 0-1.502.293t-1.166.802t-.754 1.208a4.2 4.2 0 0 0-.265 1.507q0 .837.258 1.536q.258.697.733 1.2t1.16.775t1.535.272q1.229 0 2.094-.559q.866-.557 1.285-1.856h-1.745q-.098.335-.53.635q-.434.3-1.034.3m1.918-7.982h-4.03v1.117h4.03z"></path> </svg> </a> </div> <!-- AVATAR --> <div class="relative mb-6"> <div class="size-24 rounded-full border border-primary/30 p-1 bg-background-dark overflow-hidden"> <div class="w-full h-full rounded-full bg-cover bg-center portrait-filter 
         transition-all duration-500 ease-out
         group-hover:filter-none 
         group-hover:mix-blend-mode-normal" style="background-image: url('https://preview.redd.it/7mbn7uzoejsc1.jpg?auto=webp&s=bc17e36b89eaaaa4e75f0e65bbbeb09f9f71be1d');"></div> </div> <div class="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/50 transition-all scale-110 group-hover:scale-125"></div> </div> <!-- NOMBRE --> <h3 class="text-xl font-bold mb-2">J. BETANCOURT</h3> <!-- ROL --> <span class="text-primary text-[10px] font-bold px-3 py-1 rounded-full border border-primary/20 uppercase mb-4">
Modelador 3D
</span> <div class="w-full h-px bg-white/5 my-4"></div> <!-- BLOQUE DE PERFIL --> <div class="flex gap-4 w-full text-left"> <div> <p class="text-xs text-primary uppercase tracking-normal">
Especialidad
</p> <p class="text-sm text-white">
Personajes y criaturas 3D
</p> </div> </div> </div> <!-- RÁBANO --> <div class="lg:col-span-2 glass-card rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center neon-glow group transition-all duration-500 relative"> <!-- Redes 
      <div class="absolute top-6 right-8 flex gap-4">
        <a class="social-icon-glow text-slate-500 hover:text-primary transition-colors"
          href="#"
          title="LinkedIn">
          <svg class="size-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
          </svg>
        </a>

        <a class="social-icon-glow text-slate-500 hover:text-primary transition-colors"
          href="#"
          title="GitHub">
          <svg class="size-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
          </svg>
        </a>
      </div> --> <!-- Avatar cuadrado --> <div class="relative"> <!-- Halo --> <div class="absolute inset-0 bg-primary/20 rounded-xl blur-xl group-hover:bg-primary/40 transition-all"></div> <!-- Marco --> <div class="relative size-44 rounded-xl border-2 border-primary/30 p-2 overflow-hidden bg-background-dark
                rotate-[-6deg] group-hover:rotate-[-3deg] transition-transform duration-500"> <div class="w-full h-full rounded-lg bg-cover bg-center portrait-filter group-hover:filter-none transition-all duration-500" style="background-image: url('/perfiles/rabanoperfil.webp');"></div> <div class="absolute inset-0 cyan-tint mix-blend-overlay rounded-xl opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div> </div> </div> <!-- Info --> <div class="flex-1 space-y-4"> <!-- Meta --> <div class="flex items-center gap-2"> <span class="text-[10px] font-mono text-primary border border-primary/40 px-2 py-0.5 rounded">
CMDR-02
</span> <span class="text-[10px] font-mono text-slate-500 uppercase">
Diseño · Experiencia
</span> </div> <!-- Nombre --> <h3 class="text-3xl font-bold tracking-tight">
ALEJO RÁBANO
</h3> <!-- Roles --> <div class="flex flex-wrap gap-2"> <span class="bg-primary/10 text-primary text-[10px] font-bold px-3 py-1 rounded-full border border-primary/20 uppercase">
Solo un diseñador
</span> <span class="bg-white/5 text-slate-400 text-[10px] font-bold px-3 py-1 rounded-full border border-white/10 uppercase">
Dirección Visual
</span> </div> <!-- Enfoque --> <p class="text-slate-400 text-sm italic">
Diseño experiencias claras y coherentes donde la estética y la usabilidad trabajan juntas.
</p> </div> </div> </div> </section>`;
}, "C:/Users/Usuario/alexdevspace-me/src/components/Tripulacion.astro", void 0);

const EMAIL = "spacedev.me@gmail.com";
function DirectLink() {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2e3);
    } catch (error) {
      console.error("No se pudo copiar el email", error);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "glass-panel p-6 rounded-xl border border-white/5", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
      /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-primary text-sm", children: "sensors" }),
      /* @__PURE__ */ jsx("h5", { className: "text-[10px] font-bold text-primary uppercase tracking-[0.2em]", children: "Enlace Directo" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-light text-white/70 mb-1", children: EMAIL }),
        /* @__PURE__ */ jsx("p", { className: "text-[9px] uppercase tracking-widest text-white/30", children: "Canal de transmisión principal" })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: handleCopy,
          "aria-label": "Copiar email",
          className: "group size-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 transition-all",
          children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-sm text-white/60 group-hover:text-primary transition-colors", children: "content_copy" })
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "p",
      {
        className: `mt-3 text-[9px] uppercase tracking-widest text-primary transition-opacity ${copied ? "opacity-100" : "opacity-0"}`,
        children: "Transmisión copiada"
      }
    )
  ] });
}

function ContactForm() {
  const [missionType, setMissionType] = useState("web");
  const [status, setStatus] = useState("idle");
  const [showForm, setShowForm] = useState(true);
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (status !== "sent") return;
    const timer = setTimeout(() => {
      setShowForm(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [status]);
  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const newErrors = {};
    if (name.length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres";
    }
    if (!email.includes("@")) {
      newErrors.email = "Frecuencia inválida. Revisa el email";
    }
    if (message.length < 10) {
      newErrors.message = "Describe la misión con al menos 10 caracteres";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch("/_actions/submitContact", {
        method: "POST",
        body: formData
      });
      if (!res.ok) throw new Error("Error en envío");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    showForm && /* @__PURE__ */ jsx(
      "form",
      {
        onSubmit: handleSubmit,
        className: `
            transition-all duration-500 ease-out
            ${status === "sent" ? "opacity-0 scale-[0.98] blur-sm pointer-events-none" : "opacity-100 scale-100 blur-0"}
          `,
        children: /* @__PURE__ */ jsxs("div", { className: "glass-panel rounded-2xl relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "scanline" }),
          /* @__PURE__ */ jsxs("div", { className: "p-8 md:p-10 space-y-16", children: [
            /* @__PURE__ */ jsxs("section", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                /* @__PURE__ */ jsx("span", { className: "size-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-[9px] opacity-40 border border-primary/20", children: "01" }),
                /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold uppercase tracking-[0.25em] text-white/70", children: "Identidad del Nuevo Comandante" }),
                /* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-white/10" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "group relative", children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-xs uppercase tracking-widest text-white/60 mb-4 group-focus-within:text-primary transition-colors", children: "Nombre del Explorador" }),
                  /* @__PURE__ */ jsxs("div", { className: "glow-input bg-white/5 rounded-lg flex items-center px-4", children: [
                    /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-white/20 text-xs mr-3", children: "person" }),
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "text",
                        name: "name",
                        required: true,
                        placeholder: "Nombre completo",
                        className: "w-full bg-transparent border-none py-3 px-0 text-white font-light placeholder:text-white/30 focus:outline-none focus-visible:outline-none\r\n                        outline-none ring-0 focus:ring-0"
                      }
                    )
                  ] }),
                  errors.name && /* @__PURE__ */ jsxs("p", { className: "mt-2 text-[10px] uppercase tracking-widest text-red-400 flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-xs", children: "error" }),
                    errors.name
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "group relative", children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-xs uppercase tracking-widest text-white/60 mb-4 group-focus-within:text-primary transition-colors", children: "Frecuencia de Enlace (Email)" }),
                  /* @__PURE__ */ jsxs("div", { className: "glow-input bg-white/5 rounded-lg flex items-center px-4", children: [
                    /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-white/20 text-xs mr-3", children: "alternate_email" }),
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "email",
                        name: "email",
                        required: true,
                        placeholder: "comandante@nave.space",
                        className: "w-full bg-transparent border-none py-3 px-0 text-white font-light placeholder:text-white/30 focus:outline-none focus-visible:outline-none\r\n                        outline-none ring-0 focus:ring-0",
                        onChange: () => errors.email && setErrors((e) => ({ ...e, email: void 0 }))
                      }
                    )
                  ] }),
                  errors.email && /* @__PURE__ */ jsxs("p", { className: "mt-2 text-[10px] uppercase tracking-widest text-red-400 flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-xs", children: "error" }),
                    errors.email
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("section", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                /* @__PURE__ */ jsx("span", { className: "size-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-[9px] opacity-40 border border-primary/20", children: "02" }),
                /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold uppercase tracking-[0.25em] text-white/70", children: "Selección de Tipo de Misión" }),
                /* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-white/10" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-4", children: [
                { id: "web", label: "Desarrollo Web", icon: "language" },
                { id: "gaming", label: "Gaming", icon: "videogame_asset" },
                { id: "apps", label: "Mobile Apps", icon: "vibration" },
                { id: "arvr", label: "AR / VR", icon: "view_in_ar" },
                { id: "other", label: "Otros", icon: "settings_suggest" }
              ].map((mission) => /* @__PURE__ */ jsxs("label", { className: "cursor-pointer group", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "radio",
                    name: "mission_type",
                    value: mission.id,
                    checked: missionType === mission.id,
                    onChange: () => setMissionType(mission.id),
                    required: true,
                    className: "hidden"
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: `mission-type-card flex flex-col items-center justify-center gap-3 p-4 rounded-xl border transition-all text-center h-full ${missionType === mission.id ? "border-primary bg-primary/10" : "border-white/10 bg-white/5 hover:border-primary/50"}`,
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-3xl text-white/40 group-hover:text-primary", children: mission.icon }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-widest text-white/80", children: mission.label })
                    ]
                  }
                )
              ] }, mission.id)) })
            ] }),
            /* @__PURE__ */ jsxs("section", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                /* @__PURE__ */ jsx("span", { className: "size-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-[9px] opacity-40 border border-primary/20", children: "03" }),
                /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold uppercase tracking-[0.25em] text-white/70", children: "Objetivos de la Misión" }),
                /* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-white/10" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    name: "message",
                    required: true,
                    placeholder: "Describe tu proyecto, objetivos y cualquier detalle",
                    className: "w-full bg-white/5 glow-border-primary rounded-xl p-5 text-white font-light leading-relaxed placeholder:text-white/30 text-base h-32",
                    onChange: () => errors.message && setErrors((e) => ({ ...e, message: void 0 }))
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "absolute -top-3 right-6 bg-background-dark border border-primary/50 px-3 py-1 rounded-full flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "size-1.5 bg-primary animate-pulse rounded-full" }),
                  /* @__PURE__ */ jsx("span", { className: "text-[9px] uppercase tracking-widest text-primary font-bold", children: "Terminal de Entrada de Datos" })
                ] }),
                errors.message && /* @__PURE__ */ jsxs("p", { className: "mt-3 text-[11px] uppercase tracking-widest text-red-400 flex items-center gap-2 animate-fade-in", children: [
                  /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-sm", children: "report" }),
                  errors.message
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center", children: /* @__PURE__ */ jsxs(
              "button",
              {
                type: "submit",
                disabled: status === "sending",
                className: `
                  group relative flex flex-col items-center gap-3
                  transition-transform
                  ${status === "sending" ? "opacity-70 animate-pulse" : "hover:scale-105"}
                `,
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "relative h-14 flex items-center justify-center overflow-hidden rounded-xl bg-primary text-background-dark font-black uppercase tracking-[0.4em] glow-cyan px-10", children: [
                    /* @__PURE__ */ jsxs("span", { className: "relative z-10 flex items-center gap-1", children: [
                      status === "sending" ? "Transmitiendo…" : "Lanzar Misión",
                      /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "rocket_launch" })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary via-[#a5f3fc] to-primary opacity-0 group-hover:opacity-100 transition-opacity" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-[0.3em] text-white/50", children: "Confirmar secuencia de transmisión" })
                ]
              }
            ) })
          ] })
        ] })
      }
    ),
    status === "sent" && /* @__PURE__ */ jsx(
      "div",
      {
        className: `
            flex justify-center mt-16
            transition-all duration-500 ease-out
            ${status === "sent" ? "opacity-100 scale-100 translate-y-0 delay-150" : "opacity-0 scale-[0.95] translate-y-4 pointer-events-none"}
          `,
        children: /* @__PURE__ */ jsxs("div", { className: "glass-panel rounded-2xl relative overflow-hidden w-full", children: [
          /* @__PURE__ */ jsx("div", { className: "scanline opacity-60" }),
          /* @__PURE__ */ jsxs("div", { className: "p-16 text-center space-y-4", children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: `
                  material-symbols-outlined text-primary
                  drop-shadow-[0_0_25px_rgba(56,189,248,0.6)]
                  transition-all duration-700 ease-out
                  ${status === "sent" ? "scale-100 opacity-100 animate-[pulse_3s_ease-in-out_infinite]" : "scale-0 opacity-0"}
                `,
                style: { fontSize: "4.5rem" },
                children: "check_circle"
              }
            ),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold uppercase tracking-[0.3em] text-primary transition-opacity duration-500 delay-200", children: "Misión recibida" }),
            /* @__PURE__ */ jsx("p", { className: "text-base uppercase tracking-widest text-white/60 transition-opacity duration-500 delay-300", children: "La transmisión fue exitosa. Pronto nos pondremos en contacto." })
          ] })
        ] })
      }
    )
  ] });
}

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contacto" class="py-32 px-6 max-w-6xl mx-auto relative"> <!-- Background blobs --> <div class="fixed top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10"></div> <div class="fixed bottom-1/4 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] -z-10"></div> <!-- Header --> <div class="mb-12 text-center"> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4"> <span class="relative flex h-2 w-2"> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span> <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span> </span>
Conexión Establecida
</div> <h1 class="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase mb-4 leading-tight">
Contácta<span class="text-primary">nos</span> </h1> <p class="text-white/60 max-w-xl mx-auto text-lg font-light leading-relaxed">
¡Envíanos tu señal para iniciar tu odisea digital ahora!
</p> </div> <!-- Formulario --> ${renderComponent($$result, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Usuario/alexdevspace-me/src/components/ContactForm.tsx", "client:component-export": "default" })} <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"> <!-- Cuartel General --> <div class="glass-panel p-6 rounded-xl border border-white/5"> <div class="flex items-center gap-3 mb-4"> <span class="material-symbols-outlined text-primary text-sm">location_on</span> <h5 class="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
Cuartel General
</h5> </div> <p class="text-sm font-light text-white/60">
Sector 7G, Base Lunar Uno
</p> <div class="aspect-video bg-white/5 rounded-lg mt-4 overflow-hidden border border-white/10 opacity-40 group relative"> <!-- Imagen --> <div class="absolute inset-0 bg-cover bg-center grayscale transition-all duration-700 group-hover:grayscale-0 scale-110" style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuD_upYGIXVGrJ1eFy8WuvZItYeP8xKOJtNrXQnXY3aOr4rGxOeW257YitlPwGqVcstcV5lEXMyIYwHOz73ceKoADTAJ0YaeSpDNhlsAhZBZSgMsA0H6lS1i42rvR1XwWIEfWo8aY27BMduSYN7a8XRLlhzF5RTda0dCGECVRBHnQQ-kwf7NyS1Gi_rx2HATFzG31esLfSxsYazC3N5T3QTcJOLkpzP8NJFHb2yRRhVnBeBY8X6DVNcqb0TREy_LY_sJmicvMfUXJxQ&quot;);"></div> <!-- Capa energética --> <div class="
            absolute inset-0
            opacity-0
            group-hover:opacity-100
            transition-opacity duration-700
            bg-gradient-to-r
            from-transparent
            via-primary/20
            to-transparent
            animate-[scan_3s_linear_infinite]
            mix-blend-screen
          "></div> <!-- Distorsión --> <div class="
            absolute inset-0
            opacity-0
            group-hover:opacity-100
            transition-opacity duration-500
            pointer-events-none
            backdrop-blur-[1.5px]
            bg-white/5
            animate-[distort_4s_ease-in-out_infinite]
          "></div> <!-- Contacto detectado --> <span class="
            absolute
            w-2.5 h-2.5
            rounded-full
            bg-yellow-200 mix-blend-screen
            opacity-0
            blur-[0.6px]
            shadow-[0_0_8px_rgba(253,224,71,1),0_0_20px_rgba(253,224,71,0.8)]
            group-hover:animate-contact
            group-hover:opacity-100
          " style="top: 32%; left: 64%;"></span> </div> </div> <!-- Enlace Directo --> ${renderComponent($$result, "DirectLink", DirectLink, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/Usuario/alexdevspace-me/src/components/DirectLink.tsx", "client:component-export": "default" })} <!-- Disponibilidad --> <div class="glass-panel p-6 rounded-xl border border-white/5 flex flex-col justify-between"> <div> <div class="flex items-center gap-3 mb-4"> <span class="material-symbols-outlined text-primary text-sm">schedule</span> <h5 class="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
Disponibilidad
</h5> </div> <div class="flex items-center gap-2 mb-1"> <span class="size-2 rounded-full bg-green-500 animate-pulse"></span> <span class="text-sm font-light text-white/70">
Ventanas de Lanzamiento Abiertas
</span> </div> <p class="text-[9px] uppercase tracking-widest text-white/30 ml-4">
Aceptando nuevas misiones
</p> </div> </div> </div> </section>`;
}, "C:/Users/Usuario/alexdevspace-me/src/components/Contacto.astro", void 0);

const faqs = [
  {
    id: "faq-1",
    question: "¿Cómo iniciamos un proyecto en Space DEV?",
    answer: "El proceso comienza con una reunión inicial donde analizamos tus objetivos, necesidades y alcance del proyecto. A partir de ahí definimos una propuesta clara y, una vez aprobada, iniciamos el desarrollo con un primer entregable funcional en poco tiempo."
  },
  {
    id: "faq-2",
    question: "¿Qué tecnologías utilizan para desarrollar los proyectos?",
    answer: "Trabajamos con tecnologías modernas y estables como Unity, React, Flutter, Astro, Wordpress, etc. Elegimos cada herramienta según lo que tu proyecto realmente necesita, priorizando rendimiento, escalabilidad y facilidad de mantenimiento."
  },
  {
    id: "faq-3",
    question: "¿Cuánto tiempo toma desarrollar un proyecto?",
    answer: "El tiempo depende de la complejidad y el alcance. Proyectos pequeños pueden completarse en pocas semanas, mientras que desarrollos más grandes se organizan por fases con entregas progresivas y tiempos definidos desde el inicio."
  },
  {
    id: "faq-4",
    question: "¿Ofrecen soporte después de lanzar el proyecto?",
    answer: "Sí. Incluimos un periodo de soporte posterior al lanzamiento para asegurar que todo funcione correctamente. También ofrecemos planes de mantenimiento y evolución para acompañar el crecimiento de tu proyecto."
  },
  {
    id: "faq-5",
    question: "¿Cómo se define el costo de un proyecto?",
    answer: "El presupuesto se calcula según el alcance, la complejidad y el tiempo estimado de desarrollo. Trabajamos con propuestas claras y modulares para que tengas control total sobre la inversión y puedas escalar el proyecto cuando lo necesites."
  }
];
const FAQ = () => {
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };
  return /* @__PURE__ */ jsx("section", { id: "faq", className: "relative py-32 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto space-y-14", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("span", { className: "text-primary text-xs font-bold tracking-[0.4em] opacity-80 block mb-6", children: "CENTRO DE COMANDO" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6", children: [
        "CONSULTAS DE ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "SOPORTE" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hud-line h-px w-32 mx-auto my-5" }),
      /* @__PURE__ */ jsx("p", { className: "text-white/60 text-lg max-w-xl mx-auto", children: "Resolviendo las incógnitas más frecuentes antes del despegue." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-6", children: faqs.map((faq, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: `glass-panel rounded-2xl overflow-hidden transition-all duration-500
                    group
                    ${openId === faq.id ? "border-primary/50 shadow-[0_0_30px_rgba(0,225,255,0.15)]" : "border-white/10 hover:border-primary/30 hover:-translate-y-[2px]"}`,
        children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => toggle(faq.id),
              className: "w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors duration-300 group-hover:bg-white/[0.02]",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
                  /* @__PURE__ */ jsxs(
                    "span",
                    {
                      className: `text-primary text-xs font-mono transition-all duration-300
                            ${openId === faq.id ? "opacity-100" : "opacity-50 group-hover:opacity-80"}`,
                      children: [
                        "SYS-",
                        String(index + 1).padStart(2, "0")
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl font-bold tracking-tight", children: faq.question })
                ] }),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: `material-symbols-outlined
                    transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                    ${openId === faq.id ? "rotate-180 text-primary" : "text-white/40 group-hover:text-primary/70"}`,
                    children: "expand_more"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `transition-all duration-500 ${openId === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`,
              children: /* @__PURE__ */ jsxs("div", { className: "px-6 md:px-8 pb-8 flex gap-6", children: [
                /* @__PURE__ */ jsx("div", { className: "w-px bg-gradient-to-b from-primary/80 to-transparent shrink-0" }),
                /* @__PURE__ */ jsx("p", { className: "text-white/80 text-base leading-relaxed font-light", children: faq.answer })
              ] })
            }
          )
        ]
      },
      faq.id
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "pt-12 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[11px] text-white/60 tracking-[0.3em] uppercase mb-3", children: "¿Listo para dar el siguiente paso?" }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "#contacto",
          className: "inline-flex items-center gap-3 text-primary text-sm font-bold tracking-[0.2em] uppercase group transition-all\r\n",
          children: [
            /* @__PURE__ */ jsx("span", { className: "transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white\r\n", children: "Establecer conexión" }),
            /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined transition-transform duration-300 group-hover:translate-x-2", children: "arrow_forward" })
          ]
        }
      )
    ] })
  ] }) });
};

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "SPACE DEV - Sitio Oficial", "description": "Recurre a SPACE DEV para crear tu aplicaci\xF3n, p\xE1gina web, videojuego o cualquier experiencia interactiva que requira tu proyecto. Somos un equipo de desarrolladores apasionados por la innovaci\xF3n y la creaci\xF3n, listos para llevar tus ideas al siguiente nivel." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="z-10"> <!-- Hero / Top --> ${renderComponent($$result2, "Hero", $$Hero, {})} <!-- Manifiesto --> ${renderComponent($$result2, "Manifiesto", $$Manifiesto, {})} <!-- Matriz --> ${renderComponent($$result2, "Matriz", $$Matriz, {})} <!-- Archivos --> ${renderComponent($$result2, "Archivos", Archivos, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Usuario/alexdevspace-me/src/components/Archivos.tsx", "client:component-export": "default" })} <!-- Equipo --> ${renderComponent($$result2, "Tripulacion", $$Tripulacion, {})} <!-- FAQ --> ${renderComponent($$result2, "FAQ", FAQ, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Usuario/alexdevspace-me/src/components/FAQ.tsx", "client:component-export": "FAQ" })} <!-- Contacto --> ${renderComponent($$result2, "Contacto", $$Contacto, {})} </main> ` })}`;
}, "C:/Users/Usuario/alexdevspace-me/src/pages/index.astro", void 0);

const $$file = "C:/Users/Usuario/alexdevspace-me/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
