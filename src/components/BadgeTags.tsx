/*

import type { h, JSX } from 'preact';

interface BadgeTagsProps {
  children: string;
  bgColor?: string;
  icon?: JSX.Element;
}

export default function BadgeTags({ children, bgColor = "bg-blue-100 text-blue-800", icon }: BadgeTagsProps) {
  return (
    <span 
      class={`${bgColor} text-xs font-medium px-4 py-1.5 rounded-br-3xl rounded-tl-2xl flex items-center`}
    >
      {icon && <span class="mr-2">{icon}</span>}
      {children}
    </span>
  );
}
*/