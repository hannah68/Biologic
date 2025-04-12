// tailwind.config.js
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#264d00", // Dark Green
				secondary: "#4d9900", // Medium Green
				tertiary: "#66cc00", // Light Green
				black: "#000000", // Black
				white: "#ffffff", // White
			},
		},
	},
	plugins: [],
};
