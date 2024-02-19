/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.html"],
  theme: {
    screens: {
      'iphone': {'min': '375px', 'max': '667px'},
      // => @media (min-width: 640px) { ... }

      'ipad':{'min': '763px', 'max': '1024px'},
      // => @media (min-width: 1024px) { ... }

      'desktop': {'min': '1050px', 'max': '1280px'}
      // => @media (min-width: 1280px) { ... }
    },
    
  },
  plugins: [],
}

