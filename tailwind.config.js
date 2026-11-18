/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FCFCF9',
          100: '#F8F7F2', // Warm Ivory (Default Background)
          200: '#EEECE3', // Soft Beige
          300: '#E4E3DA', // Borders
          400: '#D2D0C4',
          500: '#B0ADA0',
        },
        sage: {
          50: '#F3F6F4',
          100: '#E4EBE5',
          200: '#C7D7C9',
          300: '#A4BFAC',
          400: '#78977A', // Primary Accent Sage Green
          500: '#5F7C61',
          600: '#48614A',
          700: '#355243',
          800: '#263D32', // Dark Green
          900: '#182820',
          950: '#0F1A14',
        },
        charcoal: {
          50: '#F6F6F5',
          100: '#EAEBE9',
          200: '#D5D7D3',
          300: '#A6ABA2',
          400: '#74786F', // Text Secondary
          500: '#555850',
          600: '#3D413B',
          700: '#2D312B',
          800: '#252923', // Text Primary
          900: '#1A1C18',
          950: '#111310',
        },
        darkbg: {
          base: '#141715',
          card: '#1D221E',
          surface: '#242B25',
          border: '#2E3830',
          muted: '#8D968B',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(38, 61, 50, 0.05)',
        'soft-md': '0 8px 24px -4px rgba(38, 61, 50, 0.08)',
        'soft-lg': '0 16px 36px -6px rgba(38, 61, 50, 0.12)',
        'dark-card': '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
