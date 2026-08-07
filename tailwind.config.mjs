/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					bg: '#FDFBF7',
					card: '#F6EFE9',
					'card-hover': '#EFE2D6',
					border: '#E3D3C4',
					accent: '#E5D5C6',
					gold: '#B89775',
					'gold-dark': '#9A7B5A',
					brown: '#4A3B32',
					'brown-muted': '#7A6B60',
					'brown-dark': '#2B221C',
					whatsapp: '#25D366',
					'whatsapp-hover': '#1EBE5A',
				}
			},
			fontFamily: {
				script: ['"Alex Brush"', '"Cormorant Garamond"', 'serif', 'cursive'],
				serif: ['"Cormorant Garamond"', '"Cinzel"', 'serif'],
				sans: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
			},
			boxShadow: {
				'warm': '0 10px 30px -10px rgba(74, 59, 50, 0.08)',
				'warm-hover': '0 20px 40px -12px rgba(74, 59, 50, 0.15)',
			},
			animation: {
				'float': 'float 4s ease-in-out infinite',
				'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-8px)' },
				},
				pulseSubtle: {
					'0%, 100%': { opacity: 1, transform: 'scale(1)' },
					'50%': { opacity: 0.92, transform: 'scale(1.03)' },
				},
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(24px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				}
			}
		},
	},
	plugins: [],
}
