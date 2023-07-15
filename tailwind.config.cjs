/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#007AFF",
					50: "#FCFEFF",
					100: "#E0EFFF",
					200: "#A8D2FF",
					300: "#70B5FF",
					400: "#3897FF",
					500: "#007AFF",
					600: "#0064D1",
					700: "#004EA3",
					800: "#003875",
					900: "#002247",
					950: "#001730",
				},
				secondary: {
					DEFAULT: "#FF66C4",
					50: "#FFF0F9",
					100: "#FFE0F3",
					200: "#FFC2E7",
					300: "#FFA3DC",
					400: "#FF85D0",
					500: "#FF66C4",
					600: "#FF24AA",
					700: "#E0008A",
					800: "#9E0061",
					900: "#5C0038",
					950: "#3B0024",
				},
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				Chalkduster: ["Chalkduster", "sans-serif"],
				Papyrus: ["papyrus", "cursive"],
				Copperplate: ["Copperplate", "fantasy"],
				RubikGlitch: ["Rubik Glitch", "sans-serif"],
				cynatar: ["cynatar", "sans-serif"],
				abang: ["abang", "sans-serif"],
				anka: ["anka", "sans-serif"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("daisyui")],
};
