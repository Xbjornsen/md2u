module.exports = {
  purge: ['./src/**/*.jsx'], // Specify your template paths here
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  colors: {
    primary: '#1fb6ff', // Change default blue color to a custom primary color
    secondary: '#ff49db', // Change default pink color to a custom secondary color
    accent: '#13ce66', // Change default green color to a custom accent color
    graydark: '#273444',
    gray: '#8492a6',
    graylight: '#d3dce6',
    lime: `#00ff00`,
  },
  
  fontFamily: {
    sans: ['Roboto', 'sans-serif'], // Change default font to Roboto
    serif: ['Merriweather', 'serif'],
  },
  extend: {
    spacing: {
      '128': '32rem',
      '144': '36rem',
    },
    borderRadius: {
      '4xl': '2rem',
    },
  },

}