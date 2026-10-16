/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          // Preserved from the original Chakra theme (src/styles/theme.js)
          blue: "#0000cc",
          yellow: "#ffdd11",
        },
      },
      fontFamily: {
        sans: ["Raleway", "Montserrat", "system-ui", "sans-serif"],
        heading: ["Montserrat", "Raleway", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1700px",
        carousel: "1750px",
      },
    },
  },
  plugins: [],
};
