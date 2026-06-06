import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
    theme: {
    extend: {
            colors: {
            gh: {
                bg:        "#0d1117",   // page background
                surface:   "#161b22",   // cards, navbar
                border:    "#21262d",   // borders, dividers
                muted:     "#7d8590",   // secondary text, labels
                text:      "#e6edf3",   // primary text
                accent:    "#3fb950",   // green accent (CTAs, highlights)
                "accent-2":"#26a641",   // darker green (hover states)
                "accent-3":"#0e4429",   // darkest green (subtle fills)
            }
            }
        }

    },
  plugins: [],
}

export default config