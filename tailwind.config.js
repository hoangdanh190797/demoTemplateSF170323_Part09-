/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      screens:{
        'laptop':{'min':'1439px'},
        'mobile':{'max':'375px'},
      },
      colors:{
        'cyan':'hsl(180, 66%, 49%)',
        'darkviolet':'hsl(257, 27%, 26%)',
        'red':'hsl(0, 87%, 67%)',
        'gray':'hsl(0, 0%, 75%)',
        'grayishviolet':'hsl(257, 7%, 63%)',
        'verydarkblue':'hsl(255, 11%, 22%)',
        'verydarkviolet':'hsl(260, 8%, 14%)',
      },
      backgroundImage:{
        'input-laptop-bg':'url("/src/assets/images/bg-shorten-desktop.svg")',
        'input-bg': 'url("/src/assets/images/bg-shorten-mobile.svg")',
        'icoin-brand-one':'url("/src/assets/images/icon-brand-recognition.svg")',
        'icoin-brand-two':'url("/src/assets/images/icon-detailed-records.svg")',
        'icoin-brand-three':'url("/src/assets/images/icon-fully-customizable.svg")',
        'boost-bg-mobile':'url("/src/assets/images/bg-boost-mobile.svg")',
        'boost-bg-laptop':'url("/src/assets/images/bg-boost-desktop.svg")'
      }
    },
  },
  plugins: [],
}
