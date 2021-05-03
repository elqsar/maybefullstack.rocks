const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/components/**/*.tsx', './src/pages/**/*.tsx', './src/pages/**/*.mdx', './src/jobs/**/*.md'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  // plugins: [require('@tailwindcss/ui')],
}
