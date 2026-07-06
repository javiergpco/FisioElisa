/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./services/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#9FAD8A',   // Verde salvia (Nuevo primario)
          secondary: '#1B365D', // Azul marino
          accent: '#BAC8A5',    // Verde salvia claro (Acento)
          bg: '#F4F7F6',        // Gris clínico suave
          text: '#334155',      // Gris pizarra
          beige: '#F9F6F0',     // Beige cálido
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}