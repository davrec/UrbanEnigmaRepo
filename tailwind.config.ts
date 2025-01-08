import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: "#8B0000", // Rosso scuro
        secondary: "#D3D3D3", // Grigio molto chiaro
        bgScuro: "#1A1A1A",
        bgChiaro: "#4A4A4A",
      },
    },
  },
  plugins: [],
} satisfies Config;
