/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'headning-color': '#161C2D',
        'btn-hover': '#708BF7',
        'bg-color': '#F1F4FF',
      },
    },
  },
  plugins: [require("daisyui")],
}

