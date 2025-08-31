import { useState } from 'preact/hooks';
import Sidebar from './Sidebar';

export default function ButtonHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed top-4 left-4`}>
      <button onClick={toggleMenu} className={`relative group ${isOpen ? 'z-[60]' : 'z-10'}`}>
        <div
          className={`relative flex overflow-hidden items-center justify-center rounded-full w-[40px] h-[40px] transform transition-all bg-redWeb-300 ring-0 hover:ring-8 0  ring-redWeb-300 duration-200 shadow-md  ring-opacity-15 ${
            isOpen ? 'ring-4' : ''
          }`}
        >
          <div
            className={`flex flex-col justify-around items-center w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden ${
              isOpen ? '-translate-x-0.5 rotate-180' : ''
            }`}
          >
            {/* Stick 1 */}
            <div
              className={`h-[2px] w-4 transform transition-all duration-300 origin-left bg-redWeb-200 delay-150 ${
                isOpen ? 'rotate-[45deg] w-3/4 ' : ''
              }`}
            ></div>
            {/* Stick 2 */}
            <div
              className={`h-[2px] w-4 rounded transform transition-all duration-300 bg-redWeb-200 ${
                isOpen ? 'translate-x-10 opacity-0' : ''
              }`}
            ></div>
            {/* Stick 3 */}
            <div
              className={`h-[2px] w-4 transform transition-all duration-300 origin-left bg-redWeb-200 delay-150 ${
                isOpen ? '-rotate-[45deg] w-3/4 ' : ''
              }`}
            ></div>
          </div>
        </div>
      </button>

      {/* Render Sidebar and pass isOpen as a prop */}
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}