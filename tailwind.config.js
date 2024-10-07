/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme:{
    screens: {
      'xxs': '320px',
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl':'1560px'
    }, 
    extend: 
    {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        'sixcaps': ['Six Caps', 'sans-serif'],
        'jost': ['Jost', 'sans-serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
        'bai': ['Bai Jamjuree', 'sans-serif'],
        'mont':['Montserrat', 'sans-serif'],
        "marker": ['Permanent Marker', 'cursive']
      }
    },
    keyframes: {
      slideIn: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      fadeInUp: {
        '0%': { opacity: 0, transform: 'translateY(20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
      rotateIn: {
        '0%': { opacity: 0, transform: 'rotate(-180deg)' },
        '100%': { opacity: 1, transform: 'rotate(0deg)' },
      },
    },
    animation: {
      slideIn: 'slideIn 1s ease-out forwards',
      fadeInUp: 'fadeInUp 1.5s ease-out forwards',
      rotateIn: 'rotateIn 2s ease-out forwards',
    },

  },
  plugins: [
    require('daisyui'),
  ],
};
