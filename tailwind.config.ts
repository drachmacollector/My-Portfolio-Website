
import type { Config } from "tailwindcss";
const config = {
		darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'space': ['Space Grotesk', 'sans-serif'],
				'mono': ['JetBrains Mono', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				firebase: {
					orange: '#FF5F1F',
					red: '#FF3131',
					purple: '#BC13FE',
					pink: '#E91E63',
					blue: '#1F51FF',
					cyan: '#2CFF05'
				},
				neon: {
					red: '#FF073A',
					'red-bright': '#FF1744',
					'red-glow': '#FF5722'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(255, 138, 101, 0.5)' 
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(255, 138, 101, 0.8), 0 0 60px rgba(255, 138, 101, 0.3)' 
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'typing': {
					'from': { width: '0' },
					'to': { width: '100%' }
				},
				'blink': {
					'0%, 50%': { borderColor: 'transparent' },
					'51%, 100%': { borderColor: '#FF8A65' }
				},
				'particle-float': {
					'0%': { 
						transform: 'translateY(100vh) translateX(0px)',
						opacity: '0'
					},
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { 
						transform: 'translateY(-100vh) translateX(100px)',
						opacity: '0'
					}
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'slide-up': {
					'0%': { 
						transform: 'translateY(100%)',
						opacity: '0'
					},
					'100%': { 
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'slide-down': {
					'0%': { 
						transform: 'translateY(0)',
						opacity: '1'
					},
					'100%': { 
						transform: 'translateY(-100%)',
						opacity: '0'
					}
				},
				'neon-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(255, 7, 58, 0.5), 0 0 40px rgba(255, 7, 58, 0.2)' 
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(255, 7, 58, 0.8), 0 0 80px rgba(255, 7, 58, 0.4)' 
					}
				},
				'orbit': {
					'0%': { transform: 'rotate(0deg) translateX(50px) rotate(0deg)' },
					'100%': { transform: 'rotate(360deg) translateX(50px) rotate(-360deg)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'typing': 'typing 3.5s steps(40, end), blink 0.75s step-end infinite',
				'particle-float': 'particle-float 15s linear infinite',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'slide-up': 'slide-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'slide-down': 'slide-down 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
				'orbit': 'orbit 8s linear infinite'
			},
			backgroundImage: {
				'grid-pattern': 'linear-gradient(rgba(255, 138, 101, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 138, 101, 0.1) 1px, transparent 1px)',
			},
			backgroundSize: {
				'grid': '50px 50px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};

export default config;