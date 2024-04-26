/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'my-sin': {
				'50': '#fffdea',
				'100': '#fff7c5',
				'200': '#ffef85',
				'300': '#ffe146',
				'400': '#ffcf1b',
				'500': '#ffb20e',
				'600': '#e28400',
				'700': '#bb5c02',
				'800': '#984708',
				'900': '#7c3a0b',
				'950': '#481d00',
			},
			'crusta': {
				'50': '#fef6ee',
				'100': '#fdebd7',
				'200': '#fbd4ad',
				'300': '#f8b579',
				'400': '#f48c43',
				'500': '#f17228',
				'600': '#e25214',
				'700': '#bb3d13',
				'800': '#953217',
				'900': '#782b16',
				'950': '#411309',
			},
		}
	},
	plugins: [],
}
