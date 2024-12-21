/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'float-1': 'float-1 3s ease-in-out infinite',
        'float-2': 'float-2 3s ease-in-out infinite 0.5s',
        'float-3': 'float-3 3s ease-in-out infinite 1s',
        'title': 'title 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'fade-in-up-delay': 'fadeInUp 1s ease-out 0.3s forwards',
        'fade-in-up-delay-2': 'fadeInUp 1s ease-out 0.6s forwards',
      },
    },
  },
  safelist: [
    {
      pattern: /(bg|text|from|to|via)-(violet|purple|indigo|rose|pink|orange|cyan|blue|teal|emerald|green|slate|gray|zinc)-(50|100|200|300|400|500|600|700|800|900)/,
    },
  ],
  plugins: [],
};