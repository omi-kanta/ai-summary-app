/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ← これが必要！
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

