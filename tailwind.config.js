// tailwind.config.js
module.exports = {
  content: [
    
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  class: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
