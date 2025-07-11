import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
	preflight: false,
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				board: {
					DEFAULT: "hsl(var(--board-skeleton))"
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: "0",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			backgroundImage: {
				"home-hero":
					"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/home-hero.jpg')",
				"vcdc-hero":
					"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/vcdc-hero.jpg')",
				"vcdc-past":
					"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/vcdc-past.jpg')",
				"vcdc-join":
					"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/vcdc-join.jpg')",
			},
		},
		fontFamily: {
			titles: ["var(--font-playfair-display)", "serif"],
			"lesser-titles": ["var(--font-lato)", "sans-serif"],
			"board-name": ["var(--font-windsong)", "monospace"],
		},
		screens: {
			sm: {
				max: "640px",
			},
			md: {
				min: "641px",
			},
			lg: {
				min: "1008px",
			},
			xl: {
				min: "1260px",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
	images: {
		loader: "cloudinary",
		path: "https://res.cloudinary.com/rutgers-vsa/",
	},
} satisfies Config;

export default config;
