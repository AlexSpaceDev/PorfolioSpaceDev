import type { JSX } from 'preact';

interface SocialPillProps extends JSX.HTMLAttributes<HTMLAnchorElement> {
  children: preact.ComponentChildren;
}

export default function SocialPill({ children, class: className = '', ...props }: SocialPillProps) {
  return (
    <a
      class={`
        bg-white/10
        
        rounded-full 
        flex justify-center items-center gap-x-2 
        py-1 px-2 md:py-2 md:px-4
        text-xs md:text-base
        text-SpacePalette-200
        transition
        hover:bg-SpacePalette-800/50
        ${className}
      `}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
