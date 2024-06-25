import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                bgApp: "#FEFDFC",
                bgSub: "#FCF9F6",
                bgItem: "#F6EEE7",
                hoverItem: "#F0E4D9",
                activeItem: "#EBDACA",
                border: "#E4CDB7",
                outline: "#DCBC9F",
                hoverBorder: "#CEA37E",
                bgBtn: "#AD7F58",
                hoverBtn: "#A07553",
                text: "#815E46",
                title: "#3E332E"
            },
            fontFamily: {
                titleFont: ["Roboto", "sans-serif"],
                bodyFont: ["Lato", "sans-serif"],
                quoteFont: ["EB Garamond", "serif"]
            }
        },
    },
    plugins: [],
};
export default config;
