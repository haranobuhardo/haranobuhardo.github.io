import type { Config } from 'tailwindcss'

import typography from '@tailwindcss/typography'
import daisyui from 'daisyui'

import { theme } from './src/lib/config/general'

export default {
  content: ['./src/**/*.{html,md,js,svelte,ts}'],
  daisyui: { themes: theme.map(({ name }) => name) },
  plugins: [typography, daisyui],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1024px',
      '2xl': '1536px',
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'ul > li:has(input[type="checkbox"])': {
              listStyle: 'none',
            },
            'ul > li:has(input[type="checkbox"]) ul li': {
              paddingLeft: 30,
            },
            'ul:has(li):has(input[type="checkbox"])': {
              padding: 0,
            },
          },
        },
      },
    },
  },
} satisfies Config
