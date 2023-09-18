/** @type {import('tailwindcss').Config} */
import tailwindTypography from '@tailwindcss/typography';
import jumpu from '@jumpu-ui/tailwindcss';
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [tailwindTypography, ...jumpu],
};
