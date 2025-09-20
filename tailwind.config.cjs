/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        notion: {
          light: '#f5f5f5',
          dark: '#37352f',
          gray: '#e0e0e0',
        }
      }
    },
  },
  plugins: [],
}