/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {			
			'primary-100': '#0AB485',
			'primary-200': '#00966a',
			'primary-300': '#00552f',
			'accent-100': '#F2C94C',
			'accent-200': '#886b00',
			'white': '#FFFFFF',
			'terciary-200': '#e0e0e0',
			'secondary-100': '#05355F',
			'secondary-200': '#204571',
			'secondary-300': '#3e5e8d',
		},		
		backgroundImage:{
			'heroBackground': "linear-gradient(190deg,rgba(255, 255, 255, 0.3), rgba(5, 53, 95, .5)), url('/assets/herophoto.jpg')",			
		},
		fontFamily: {

		},
		extend: {},
	},
	plugins: [],
}
