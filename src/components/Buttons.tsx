import { useState } from 'preact/hooks';

interface ButtonsProps {
  onTabChange: (tab: string) => void;
  selectedTab: string;
}

export default function Buttons({ onTabChange, selectedTab }: ButtonsProps) {
  return (
    <div className="flex justify-center items-center mobilel:gap-8 gap-1 mb-8">
      <button
        className={`
          border-black/65
          border rounded-full 
          text-SpacePalette-200 
          transition 
          font-medium text-center
          lg:text-xl md:text-xl text-lg
          md:px-5 md:py-2.5 px-4 py-2 mb-2 
          ${selectedTab === 'webs' ? 'bg-SpacePalette-600/55 shadow-lg shadow-SpacePalette-600' : ''}
        `}
        onClick={() => onTabChange('webs')}
      >
        Webs
      </button>
      <button
        className={`
          border-black/65 
          border rounded-full 
          text-SpacePalette-200 
          transition  
          font-medium text-center
          lg:text-xl md:text-xl text-lg
          md:px-5 md:py-2.5 px-4 py-2 mb-2 
          ${selectedTab === 'videojuegos' ? 'bg-SpacePalette-600/55 shadow-lg shadow-SpacePalette-600' : ''}
        `}
        onClick={() => onTabChange('videojuegos')}
      >
        Videojuegos
      </button>
      <button
        className={`
          border-black/65
          border rounded-full 
          text-SpacePalette-200 
          transition  
          font-medium text-center
          lg:text-xl md:text-xl text-lg
          md:px-5 md:py-2.5 px-4 py-2 mb-2
          ${selectedTab === 'otros' ? 'bg-SpacePalette-600/55 shadow-lg shadow-SpacePalette-600' : ''}
        `}
        onClick={() => onTabChange('otros')}
      >
        Otros
      </button>
    </div>
  );
}


