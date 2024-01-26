/** @type {import('tailwindcss').Config} */
import scrollbarHide from "tailwind-scrollbar-hide"
import scrollbar from "tailwind-scrollbar"
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         backgroundImage: {
            "gradient-to-b":
               "linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.25) 29%,rgba(20,20,20,.35) 44%,rgba(20,20,20,.40) 68%,#141414 100%);",
         },
      },
   },
   plugins: [scrollbarHide, scrollbar({ nocompatible: true })],
}
