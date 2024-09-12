import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkblue: "#465E6C",
      },
      backgroundImage: {
        'purple-liner': 'linear-gradient(180deg, #8B5CF6, #A78BFA)',
        'lowBlue-liner': 'linear-gradient(900deg, #457081, #688087)',
      },
      backgroundFilter: {
        blur: "blur(10px)",
      },
    },
  },
  plugins: [],
};
export default config;
