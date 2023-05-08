/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'pink-custom': '#ff66c4',
				'blue-custom': '#007aff',},
			fontFamily: {
				mono: ["IBM Plex Mono", "monospace"],
			},
			backgroundColor: {
				'dark-background': '#000',
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
