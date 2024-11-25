/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs", // Quét các file .ejs trong thư mục views
    "./public/**/*.js" // Quét các file HTML (nếu cần)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
