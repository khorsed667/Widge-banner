/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'soft-black': '0 10px 20px rgba(255, 255, 255, 0.05), 0 6px 6px rgba(255, 255, 255, 0.1)',
        'deep-black': '0 15px 30px rgba(0, 0, 0, 0.7), 0 10px 20px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}