const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        facebook: 'hsl(208, 92%, 53%)',
        twitter: 'hsl(203, 89%, 53%)',
        youtube: 'hsl(348, 97%, 39%)',
      },
      backgroundImage: {
        'instagram': 'linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
        'toggle-dark': 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))'
      }
    },
  },
  plugins: [flowbite.plugin()],
}