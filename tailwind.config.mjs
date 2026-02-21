/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			screens:{
			},

			keyframes:{
				'bounce-slow': {
					'0%, 100%': { transform: 'translateY(0)', opacity: '0.6' },
					'50%': { transform: 'translateY(10px)', opacity: '1' },
				},

				scan: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' },
				},

				distort: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-2px)' },
				},

				contact: {
					'0%':   { opacity: '0', transform: 'scale(0.8)' },

					/* aparición */
					'10%':  { opacity: '1', transform: 'scale(1.2)' },
					'20%':  { opacity: '0.6', transform: 'scale(1)' },

					/* destello 2 */
					'30%':  { opacity: '1', transform: 'scale(1.3)' },
					'40%':  { opacity: '0.7', transform: 'scale(1)' },

					/* destello 3 */
					'50%':  { opacity: '1', transform: 'scale(1.4)' },
					'60%':  { opacity: '0.8', transform: 'scale(1)' },

					/* desaparición */
					'75%':  { opacity: '0', transform: 'scale(0.6)' },
					'100%': { opacity: '0', transform: 'scale(0.6)' },
				},

				glitch: {
					'0%':   { transform: 'translateY(0)' },
					'50%':  { transform: 'translateY(-6px)' },
					'100%': { transform: 'translateY(0)' },
				},
			},

			animation: {
				'bounce-slow': 'bounce-slow 3s infinite',
				contact: 'contact 7s ease-in-out infinite',
				glitch: 'glitch 0.35s steps(2) infinite alternate-reverse',
			},
						
			colors:{
				primary: '#00e1ff',
				'cosmic-violet':'#7F00FF',
				"secondary": "#7f00ff",

				background: {
					light: '#f5f8f8',
					dark: '#0a0a10',
				},

				glass: 'rgba(24, 24, 37, 0.6)',

				'deep-navy': '#020205',
			},
			
			fontFamily: {
				sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
				mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
			},

			borderRadius:{
				DEFAULT: '0.5rem',
				lg: '1rem',
				xl: '1.5rem',
				full: '9999px',
			},

			dropShadow: {
			},
			
		},
	},
	plugins: [],
}
