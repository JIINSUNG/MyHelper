import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/_pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/features/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/entities/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/shared/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			keyframes: {
				slideUp: {
					'0%': { transform: 'translateY(40px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
			animation: {
				slideUp: 'slideUp 0.5s ease-out forwards',
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				darkPurple: '#242038',
				slateBlue: '#725AC1',
				indigo: '#8D86C9',
				frenchGray: '#CAC4CE',
				linen: '#F7ECE1',
			},
			rotate: {
				'180': '180deg',
			},
			perspective: {
				'1000': '1000px',
			},
			appear: {},
		},
	},
	plugins: [],
};
export default config;
