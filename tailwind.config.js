// tailwind.config.js
module.exports = {
  future: {},
  purge: [],
  theme: {
    extend: {
      colors: {
        'background-home': '#E5E5E5',
        'color-text-card': '#092A5E'       
      },
      width: {
        'width-default': '1000px',
      }
    },
  },
  variants: {},
  content: [
    "./node_modules/flowbite/**/*.js"
  ],
  plugins: [
    require('flowbite/plugin')
  ],
}