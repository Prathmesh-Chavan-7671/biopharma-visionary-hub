
import type { Config } from "tailwindcss";
import { TYPOGRAPHY, SPACING } from '@/constants/styles';

export default {
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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
        bio: {
          'blue': '#0EA5E9',
          'teal': '#0D9488',
          'navy': '#1E3A8A',
          'light-blue': '#BAE6FD',
          'very-light-blue': '#E6F2F9',
          'gray': '#64748B',
          'light-gray': '#F1F5F9'
        }
      },
      backgroundImage: {
        'soft-blue-gradient': 'linear-gradient(to bottom, #E6F2F9, #BAE6FD)',
      },
      backgroundColor: {
        'light-blue-50': '#F0F9FF',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

