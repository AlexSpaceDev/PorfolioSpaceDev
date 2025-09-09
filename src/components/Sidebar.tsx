import type { FunctionalComponent } from 'preact';
import { useState, useEffect } from 'preact/hooks';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void; // <-- nueva prop
}

const Sidebar: FunctionalComponent<SidebarProps> = ({ isOpen, onClose }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setIsDarkMode(theme === 'dark');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Fondo oscuro - cierra al hacer clic */}
      <div
        className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
        onClick={onClose} // <-- cierre al hacer clic fuera
      />

      {/* Sidebar */}
      <div
        className={`absolute top-0 right-0  bg-SpacePalette-500/90 text-SpacePalette-200 w-64 h-full transition-transform transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()} // <-- evita que se cierre al hacer clic dentro del sidebar
      >
        <div className="p-4">
          <ul className="mt-24 space-y-6">
            {[['#inicio', 'Inicio'], ['#proyectos', 'Proyectos'], ['#nuestro-equipo', 'Nuestro Equipo'], ['#contacto', 'Contacto']].map(
              ([href, label]) => (
                <li key={label} className="border-b-2 pb-2 border-redWeb-400">
                  <a href={href} className="block hover:text-redWeb-400">{label}</a>
                </li>
              )
            )}
             {/* <li className="border-b-2 pb-2 mt-4 dark:border-redWeb-500 border-redWeb-400">
              <button onClick={toggleTheme} className="block hover:text-redWeb-400">
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </li > */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

