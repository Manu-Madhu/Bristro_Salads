/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#2F2E2E"
      },
      fontFamily: {
        primaryFont: "Agency FB Bold",
        subFont: "Kaushan Script",
        contentFont: "Inter Regular",
        contentBoldFont: "Inter Bold",
        scrollFont: "Karantina Regular",
      }
    },
  },
  plugins: [],
}