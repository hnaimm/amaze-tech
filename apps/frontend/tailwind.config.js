/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Scan files in the 'app' directory
    "./pages/**/*.{js,ts,jsx,tsx}", // If you have a 'pages' directory
    "./components/**/*.{js,ts,jsx,tsx}", // If you have a 'components' directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
