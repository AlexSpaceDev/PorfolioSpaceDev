import type { JSX } from 'preact';

export default function TwoIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      stroke-width="1.5" 
      fill="#F2C335" 
      stroke="#000" 
      stroke-miterlimit="10"
    >
      <path d="M22.5,2.45v19.1A31,31,0,0,0,12,19.64,31,31,0,0,0,1.5,21.55V2.45A31,31,0,0,0,12,4.36,31,31,0,0,0,22.5,2.45Z" />
      <path d="M6.27,10.09V10a1.8,1.8,0,0,1,1.8-1.8h0a2,2,0,0,1,2,2h0a2,2,0,0,1-.59,1.43L6.27,14.86v1h4.78" />
      <path d="M13.91,8.18h1.91a1.91,1.91,0,0,1,1.91,1.91v3.82a1.91,1.91,0,0,1-1.91,1.91H13.91V8.18Z" />
    </svg>
  );
}
