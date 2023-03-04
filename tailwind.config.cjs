/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primarycolor': '#0d1245',
        'textcolor': '#2c2c74',
        'greencolor': '#a4ef7d',
        'redcolor': '#cf1f22',
        'linkColor':'#6d44a2',
        'textColor':'#2c2c74',
        'description':'#14154c'
    
      },
      fontSize: {
        'icon': '20px'
      }, height: {
        'isize': '12px'
      },
      letterSpacing:{
        'wide2':'.30em'
      },
      backgroundSize:{
        '10%':'10%',
        '20%':'20%',
        '30%':'30%',
        '40%':'40%',
        '50%':'50%',
        '60%':'60%',
        '70%':'70%',
        '80%':'80%',
        '90%':'90%',
        '100%':'100%',
      }
    },
  },
  plugins: [],
}