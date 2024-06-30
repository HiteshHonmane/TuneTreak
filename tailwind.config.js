module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... } 

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      '2lg': '1366px',

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1920px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        'sf-pro-display': ['SF Pro Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}