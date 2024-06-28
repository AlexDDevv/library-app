import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "background": "hsl(var(--background))",
                "foreground": "hsl(var(--foreground))",
                "muted": "hsl(var(--muted))",
                "muted-foreground": "hsl(var(--muted-foreground))",
                "popover": "hsl(var(--popover))",
                "popover-foreground": "hsl(var(--popover-foreground))",
                "card": "hsl(var(--card))",
                "card-foreground": "hsl(var(--card-foreground))",
                "border": "hsl(var(--border))",
                "input": "hsl(var(--input))",
                "primary": "hsl(var(--primary))",
                "primary-foreground": "hsl(var(--primary-foreground))",
                "secondary": "hsl(var(--secondary))",
                "secondary-foreground": "hsl(var(--secondary-foreground))",
                "accent": "hsl(var(--accent))",
                "accent-foreground": "hsl(var(--accent-foreground))",
                "destructive": "hsl(var(--destructive))",
                "destructive-foreground": "hsl(var(--destructive-foreground))",
                "ring": "hsl(var(--ring))",
                "radius": "var(--radius)"
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
