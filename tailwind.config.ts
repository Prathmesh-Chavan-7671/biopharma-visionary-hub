
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
          'blue': '#0EA5E9',          // Main blue - kept as is
          'light-blue': '#BAE6FD',    // Light blue - kept as is
          'teal': '#0D9488',          // Teal - kept as is
          'navy': '#1E3A8A',          // Darker blue - kept as is
          'very-light-blue': '#E6F2F9', // Very light blue background
          'gray': '#64748B',          // Medium gray for text
          'light-gray': '#F1F5F9',    // Light gray for backgrounds
          'dark-gray': '#334155',     // Darker gray for contrast
          'white': '#FFFFFF',         // White
          'off-white': '#F8FAFC'      // Off-white for subtle backgrounds
        }
      },
      backgroundImage: {
        'soft-blue-gradient': 'linear-gradient(to bottom, #E6F2F9, #BAE6FD)',
        'subtle-teal-gradient': 'linear-gradient(to right, #F0FDFA, #CCFBF1)',
        'blue-teal-gradient': 'linear-gradient(to right, #0EA5E9, #0D9488)'
      },
      backgroundColor: {
        'light-blue-50': '#F0F9FF',
        'teal-50': '#F0FDFA'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
