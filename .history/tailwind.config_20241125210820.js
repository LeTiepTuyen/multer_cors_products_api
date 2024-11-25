/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs", // Quét các file .ejs trong thư mục views
    "./public/**/*.js" // Quét các file JS trong thư mục public
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
