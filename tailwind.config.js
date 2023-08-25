/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      pacifico: ["Pacifico", "sans-serif"],
      lora: ["Lora", "sans-serif"]
    },
    // screens: {
    //   // 'screen': '500px',
    //   // => @media (min-width: 450px) { ... }

    //   // 'laptop': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   // 'desktop': '1280px',
    //   // => @media (min-width: 1280px) { ... }
    // },
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(30deg)' },
        }
      }
    },
  },
  plugins: [],
}

