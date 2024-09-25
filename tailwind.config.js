/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/routes/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			animation: {
				fade: 'fadeIn .7s ease-in-out',
			},
			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
			},
		},
  },
  plugins: [],
}

