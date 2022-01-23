module.exports = {
     purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     darkMode: false, // or 'media' or 'class'
     theme: {
          extend: {
               colors: {
                    'main-blue': '#4f46e5',
                    'main-blue-second': '#3631a4',
                    'regal-blue': '#243c5a',
               },
          },
     },
     variants: {
          extend: {},
     },
     plugins: [],
};
