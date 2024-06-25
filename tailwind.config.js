/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: 'var(--primary-text-color)',
      },
      backgroundColor: {
        toggle: 'var(--toggle-bg)',
      },
      placeholderColor: {
        primary: 'var(--primary-text-color)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.placeholder-primary::placeholder': {
          color: 'var(--primary-text-color)',
          opacity: '1',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
