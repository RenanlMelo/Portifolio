/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        title:
          "0vw 1vh 10px #00000050, .5vw 0 10px #00000050, .5vw 1vh 10px #00000050",
      },
    },
  },
  plugins: [],
};
