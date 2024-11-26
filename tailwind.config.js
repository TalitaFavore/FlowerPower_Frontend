/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', // Certifique-se de que o arquivo index.html está sendo incluído
    './src/**/*.{js,jsx,ts,tsx}', // Adiciona todos os arquivos da pasta src
  ],
  theme: {
    extend: {
      colors: {
        "primary-avocado": "#065f46",
        "dark-gray": "#4b5563",
        "wisper": "#f8fafc",
      },
    },
  },
  plugins: [],
};
