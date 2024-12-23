import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
		backGround: "#F4F7FE",
      },
	  fontFamily: {
		primary: ["Poppins", "sans-serif"],
		secondary: ["Lexend Deca", "sans-serif"],
	  }
    },
  },
  plugins: [],
} satisfies Config;
