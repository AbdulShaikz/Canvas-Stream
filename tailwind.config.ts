import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      background1: 'rgba(250, 249, 255, 0.9)',
      shadow1: '0px 7px 14px rgba(112, 145, 230, .05), 0px 0px 3.12708px rgba(112, 145, 230, .0798), 0px 0px .931014px rgba(112, 145, 230, .1702)',
      shadow2: '0 0 0 1px #4a47b1',
      border1: '#7091e6',
      border2: '#d6d6d6',
      text1: '#3d52a0',
      text2: '#ede8f5',
      text3: '#7091e6',
    }
  },
  plugins: [],
};
export default config;
