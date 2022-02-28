module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				body: '#17171F',
				'selected-text': '#8c37a1',
				theme: '#66097d',
				nav: '#404053',
				secondary: '#9191A4',
				badge: '#3F3F51',
				'input-border': '#565666',
				input: '#2A2A35',
			},
			fontFamily: {
				poppins: ["'Poppins'", 'sans-serif'],
			},
		},
	},
	plugins: [require('tailwind-scrollbar-hide'), require('@tailwindcss/forms')],
};
