/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  themes: [
    {
      mytheme: {
      
"primary": "#3bdba8",
      
"secondary": "#fc76b5",
      
"accent": "#c2ebfc",
      
"neutral": "#252737",
      
"base-100": "#EDEDEE",
      
"info": "#61AFEA",
      
"success": "#69ECC1",
      
"warning": "#B18406",
      
"error": "#F07975",
      },
    },
  ],
  plugins: [require("daisyui")],
}

