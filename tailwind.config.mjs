/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			screens:{
				'minmax': '550px',
				'mobilel': '450px',
				'xlg': '1170px',
				'3xl':'1720px'
			},

			keyframes:{
				fadein:{
					'0%':{opacity: 0},
					'100%':{opacity: 1},
				},
				fadeIn: {
				"0%": { opacity: "0", transform: "translateY(20px)" },
				"100%": { opacity: "1", transform: "translateY(0)" },
				},
				'gradient-border': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				},
				'cloud1-entry': {
					'0%': { transform: 'scaleX(-1) translateX(-60%)', opacity: '0' },
					'100%': { transform: 'scaleX(-1) translateX(-15%)', opacity: '1' },
				},
				'cloud2-entry': {
					'0%': { transform: 'translateX(-80%)', opacity: '0' },
					'100%': { transform: 'translateX(-15%)', opacity: '1' },
				},
				'cloud1-exit': {
					'0%': { transform: 'scaleX(-1) translateX(-15%)', opacity: '1' },
					'100%': { transform: 'scaleX(-1) translateX(60%)', opacity: '0' },
				},
				'cloud2-exit': {
					'0%': { transform: 'translateX(-15%)', opacity: '1' },
					'100%': { transform: 'translateX(60%)', opacity: '0' },
				},
				'cloud1-reverse': {
					'0%': { transform: 'scaleX(-1) translateX(60%)', opacity: '0' },
					'100%': { transform: 'scaleX(-1) translateX(-15%)', opacity: '1' },
				},
				'cloud2-reverse': {
					'0%': { transform: 'translateX(60%)', opacity: '0' },
					'100%': { transform: 'translateX(-15%)', opacity: '1' },
				},				
				'fade-zoom-in': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' },
				},
				'cloud-entry-mobile': {
				'0%': { transform: 'translatex(0%)', opacity: '1' },
				'100%': { transform: 'translatex(60%)', opacity: '0' },
				},
				'cloud-entry-mobile2': {
				'0%': { transform: 'scaleX(-1) translatex(0%)', opacity: '1' },
				'100%': { transform: 'scaleX(-1) translatex(60%)', opacity: '0' },
				},
				'cloud-entry-mobile-reverse': {
				'0%': { transform: 'translatex(60%)', opacity: '0' },
				'100%': { transform: 'translatex(0%)', opacity: '1' },
				},
				'cloud-entry-mobile2-reverse': {
				'0%': { transform: 'scaleX(-1) translatex(60%)', opacity: '0' },
				'100%': { transform: 'scaleX(-1) translatex(0%)', opacity: '1' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				float2: {
					'0%, 100%': { transform: 'translateY(-10px)' },
					'50%': { transform: 'translateY(0)' },
				},
				slideFadeIn: {
					'0%': {
						opacity: '0',
						transform: 'translateX(-50px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)',
					},
				},
				slideFadeOut: {
					'0%': {
						opacity: '1',
						transform: 'translateX(0)',
					},
					'100%': {
						opacity: '0',
						transform: 'translateX(50px)',
					},
				},
				slideFadeInReverse: {
					'0%': {
						opacity: '0',
						transform: 'translateX(50px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)',
					},
				},
				slideFadeOutReverse: {
					'0%': {
						opacity: '1',
						transform: 'translateX(0)',
					},
					'100%': {
						opacity: '0',
						transform: 'translateX(-50px)',
					},
				},				
		},

			animation: {
				'fadein': 'fadein 0.2s ease-in-out',
				'gradient-border': 'gradient-border 3s ease infinite',
				'cloud-entry': 'cloud1-entry 2s ease-out forwards',
				'cloudtwo-entry': 'cloud2-entry 2s ease-out forwards',
				'cloud1-exit': 'cloud1-exit 0.8s ease-in forwards',
				'cloud2-exit': 'cloud2-exit 0.8s ease-in forwards',
				'cloud1-reverse': 'cloud1-reverse 0.8s ease-out forwards',
				'cloud2-reverse': 'cloud2-reverse 0.8s ease-out forwards',
				'fade-zoom-in': 'fade-zoom-in 0.8s ease-out forwards',
				'cloud-entry-mobile': 'cloud-entry-mobile 1.2s ease-out forwards',
				'cloud-entry-mobile2': 'cloud-entry-mobile2 1.2s ease-out forwards',
				'cloud-entry-mobile-reverse': 'cloud-entry-mobile-reverse 1.2s ease-in forwards',
				'cloud-entry-mobile2-reverse': 'cloud-entry-mobile2-reverse 1.2s ease-in forwards',
				'float': 'float 4s ease-in-out infinite',
				'float-slow': 'float 3s ease-in-out infinite',
  				'float-slow2': 'float2 4s ease-in-out infinite',
				'slide-fade-in': 'slideFadeIn 0.5s ease-out forwards',
    			'slide-fade-out': 'slideFadeOut 0.4s ease-in forwards',
				'slide-fade-in-reverse': 'slideFadeInReverse 0.5s ease-out forwards',
				'slide-fade-out-reverse': 'slideFadeOutReverse 0.4s ease-in forwards',
				fadeIn: "fadeIn 0.8s ease-out forwards",
			},
						
			colors:{
				redWeb: {
					100: '#FCFCFC',
					200: '#E8E8E8',
					300: '#13131A',
					400: '#E22323',
					500: '#990100',
				},
				SpacePalette:{
					100: '#FBFCFF',
					200: '#E9F5FF',
					300: '#3981BF',
					400: '#245680',
					500: '#0C1C3F',
					600: '#FC3C23',
					700: '#FFE600',
					800: '#33b652',
					900: '#474056'
				}
			},
			
			dropShadow: {
				'custom-dark': [
					'0 0px 40px rgba(226, 35, 35, 0.3)', 
					'0 45px 65px rgba(153, 1, 0, 0.15)',
				],
				'custom-light': [
				  '0 0px 40px rgba(226, 35, 35, 0.3)', 
				  '0 45px 65px rgba(153, 1, 0, 0.2)',
				],
				'custom-white':[
					 
					'0px 3px 2px rgba(233, 245, 255, 1)'
				],
				'custom-black':[
					 
					'0px 3px 2px rgba(12, 28, 63, 1)'
				],
				'custom-prueba':[
					'0px 2px 3px rgba(185, 45, 0, 0.3)',
					'0px 10px 20px rgba(231, 45, 0, 0.5)',
				],
				'custom-blue':[
					'0px 2px 3px rgba(233, 245, 255, 0.3)',
					'0px 10px 20px rgba(57, 129, 191, 0.5)',
				]

				

			},
			
			
		},
	},
	plugins: [],
}
