/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        bangers: [`var(--font-bangers)`, "sans-serif"],
        quicksand: [`var(--font-quicksand)`, "sans-serif"],
        robotoCondensed: [`var(--font-robotoCondensed)`, "sans-serif"],
      },
      colors: {
        primary: "#dd211b",
        secondary: "#ffa323",
        tertiary: "#331812",
        black: "#231714",
        orange: "#FF7A30",
      },
      backgroundImage: {
        bgHero: "url('/assets/bg-hero.webp')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
