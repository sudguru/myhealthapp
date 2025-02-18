import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "",
  content: {
    files: [
      './app/**/*.{vue,js,ts}',
    ],
    extract
  },
  theme: {
    screens,
    fontSize,
    
  },
  plugins: [ fluid],
}