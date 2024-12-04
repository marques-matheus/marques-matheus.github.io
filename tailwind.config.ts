import type { Config } from "tailwindcss";

export default {
  content: [
      './src/**/*.{tsx,css}'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        custom:{
        '50': '#f9fafb',  // Cinza claro
  '100': '#f3f4f6', // Cinza suave
  '200': '#e5e7eb', // Cinza neutro
  '300': '#d1d5db', // Cinza para componentes
  '400': '#0077b6', // Cinza médio
  '500': '#6b7280', // Cinza escuro
  '600': '#4b5563', // Cinza mais escuro
  '700': '#374151', // Cinza bem escuro
  '800': '#1f2937', // Fundo escuro
  '900': '#111827', // Texto escuro

        }
      },
    },
  },
  plugins: [],
} satisfies Config;
