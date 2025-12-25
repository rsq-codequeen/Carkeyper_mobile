/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    './*.html',
  ],

  theme: {
    extend: {
      colors: {
        'primary': '#057B99',  
        'secondary': '#FFC977', 
        'success': '#FFF7D8',  
        'danger': '#CD1010',   
        'neutral-light': '#029A9A1F', 
        'neutral-dark': '#1f2937', 
        'dark-primary':'#029A9A',
      },
      
     boxShadow: {
        'around': '0 0 15px 5px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
      
        sans: ['Inter', 'sans-serif'], 
      },

      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },

    
  },

 plugins: [
    require('@tailwindcss/typography'), 
    require('@tailwindcss/forms'),      
  ],
  
}
