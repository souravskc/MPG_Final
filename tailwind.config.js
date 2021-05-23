module.exports = {
    purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.tsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          'resource': '#2E77AE',
          'content-background': '#433B3B',
          'question': '#FCC79A'

        }
      },
    },
    variants: {
      
      extend: {
        animation: ['responsive', 'motion-safe', 'motion-reduce','hover','focus']
      },
    },
    plugins: [],
  }