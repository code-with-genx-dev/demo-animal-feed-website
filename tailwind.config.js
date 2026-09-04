/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary, #1b4332)",
          hover: "var(--color-primary-hover, #143527)",
          light: "var(--color-primary-light, #e8f5e9)",
          dark: "var(--color-primary-dark, #0d281e)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary, #2d6a4f)",
          hover: "var(--color-secondary-hover, #245841)",
          light: "var(--color-secondary-light, #d8f3dc)",
        },
        accent: {
          DEFAULT: "var(--color-accent, #d97706)",
          hover: "var(--color-accent-hover, #b45309)",
          light: "var(--color-accent-light, #fef3c7)",
        },
        surface: {
          DEFAULT: "var(--color-surface, #ffffff)",
          muted: "var(--color-surface-muted, #f9fafb)",
          dark: "var(--color-surface-dark, #111827)",
        },
        neutral: {
          earth: "var(--color-neutral-earth, #f5f3ef)",
          sand: "var(--color-neutral-sand, #eae6df)",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 12px 24px -4px rgba(0, 0, 0, 0.08), 0 4px 8px -2px rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        'card': '1rem',
      }
    },
  },
  plugins: [],
}
