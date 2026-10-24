module.exports = {
  content: ['./code.html', './index.html'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fbfbf9',
          100: '#f5f4ef',
          200: '#ebe9e0',
          300: '#ded9cc',
          DEFAULT: '#f3f2ed',
          dark: '#e8e6dc'
        },
        charcoal: {
          900: '#141417',
          850: '#19191d',
          800: '#1e1e24',
          700: '#2c2c34',
          600: '#464652'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
        mono: ['"Space Grotesk"', 'monospace']
      },
      boxShadow: {
        'custom-card': '0 25px 60px -15px rgba(20, 20, 23, 0.25)',
        'soft-glow': '0 0 40px -10px rgba(255, 255, 255, 0.45)'
      }
    }
  },
  plugins: []
};
