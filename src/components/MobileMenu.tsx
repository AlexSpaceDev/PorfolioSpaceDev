import { useState, useEffect } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // 🔒 Bloquea scroll cuando menú está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* ========================= */}
      {/* BOTÓN HAMBURGUESA*/}
      {/* ========================= */}

      <button
        onClick={toggleMenu}
        className="md:hidden relative z-[70] group"
        aria-label="Abrir menú"
      >
        <div
          className={`relative flex items-center justify-center w-10 h-10 
          rounded-full transition-all duration-300
          ${isOpen ? "ring-4 ring-primary/40" : "hover:ring-4 hover:ring-primary/20"}
          `}
        >
          <div
            className={`flex flex-col justify-around items-center w-5 h-5 transform
            transition-all duration-300 origin-center overflow-hidden
            ${isOpen ? "-translate-x-0.5 rotate-180" : ""}
            `}
          >
            {/* Línea 1 */}
            <span
              className={`h-[2px] w-5 bg-white transform transition-all duration-300 origin-left
              ${isOpen ? "rotate-45 w-10/12" : ""}
              `}
            />

            {/* Línea 2 */}
            <span
              className={`h-[2px] w-5 bg-white transform transition-all duration-300
              ${isOpen ? "translate-x-10 opacity-0" : ""}
              `}
            />

            {/* Línea 3 */}
            <span
              className={`h-[2px] w-5 bg-white transform transition-all duration-300 origin-left
              ${isOpen ? "-rotate-45 w-10/12" : ""}
              `}
            />
          </div>
        </div>
      </button>

      {/* ========================= */}
      {/* PORTAL WRAPPER GLOBAL */}
      {/* ========================= */}

      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay blur real */}
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 transition-all duration-300
          ${isOpen
              ? "bg-black/40 backdrop-blur-3xl opacity-100"
              : "opacity-0"
            }`}
        />

        {/* SIDEBAR */}
        <aside
          className={`absolute top-0 right-0 h-screen w-72
          bg-background-dark/95 backdrop-blur-xl
          border-l border-primary/20
          shadow-[0_0_60px_rgba(57,129,191,0.25)]
          transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <nav className="flex flex-col h-full p-10 text-lg font-medium">
            <div className="mt-20 flex flex-col gap-8">

              <a onClick={() => setIsOpen(false)} href="#manifiesto">
                Manifiesto
              </a>

              <a onClick={() => setIsOpen(false)} href="#servicios">
                Servicios
              </a>

              <a onClick={() => setIsOpen(false)} href="#archivos">
                Archivos
              </a>

              <a onClick={() => setIsOpen(false)} href="#tripulacion">
                Tripulación
              </a>

              <a onClick={() => setIsOpen(false)} href="#faq">
                FAQ
              </a>

                {/* CTA justo después de FAQ */}
                <a
                    href="#contacto"
                    onClick={() => setIsOpen(false)}
                    className="bg-primary text-background-dark px-6 py-3 rounded-lg font-bold text-center"
                >
                    Contáctanos
                </a>

            </div>

          </nav>
        </aside>
      </div>
    </>
  );
}
