/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: 'var(--color-bg)',
          surface: 'var(--color-bg-surface)',
          elevated: 'var(--color-bg-elevated)',
          code: 'var(--color-bg-code)',
        },
        fg: {
          DEFAULT: 'var(--color-fg)',
          secondary: 'var(--color-fg-secondary)',
          muted: 'var(--color-fg-muted)',
          inverse: 'var(--color-fg-inverse)',
        },
        border: {
          subtle: 'var(--color-border-subtle)',
          strong: 'var(--color-border-strong)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
          muted: 'var(--color-accent-muted)',
          subtle: 'var(--color-accent-subtle)',
        },
        status: {
          live: '#10b981',
          beta: '#8b5cf6',
          dev: '#3b82f6',
          concept: '#f59e0b',
          archived: '#64748b',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      maxWidth: {
        content: '68rem',
        reading: '52rem',
        wide: '78rem',
      },
      typography: () => ({
        editorial: {
          css: {
            '--tw-prose-body': 'var(--color-fg)',
            '--tw-prose-headings': 'var(--color-fg)',
            '--tw-prose-lead': 'var(--color-fg-secondary)',
            '--tw-prose-links': 'var(--color-accent)',
            '--tw-prose-bold': 'var(--color-fg)',
            '--tw-prose-counters': 'var(--color-fg-muted)',
            '--tw-prose-bullets': 'var(--color-fg-muted)',
            '--tw-prose-hr': 'var(--color-border-subtle)',
            '--tw-prose-quotes': 'var(--color-fg-secondary)',
            '--tw-prose-quote-borders': 'var(--color-accent)',
            '--tw-prose-captions': 'var(--color-fg-muted)',
            '--tw-prose-code': 'var(--color-fg)',
            '--tw-prose-pre-code': '#e2e8f0',
            '--tw-prose-pre-bg': '#0d1117',
            '--tw-prose-th-borders': 'var(--color-border-strong)',
            '--tw-prose-td-borders': 'var(--color-border-subtle)',
            maxWidth: 'none',
            fontSize: '1.0625rem',
            lineHeight: '1.75',
            p: {
              marginBottom: '1.35em',
            },
            h2: {
              fontSize: '1.65rem',
              marginTop: '1.8em',
              marginBottom: '0.6em',
              fontWeight: '700',
              letterSpacing: '-0.02em',
            },
            h3: {
              fontSize: '1.3rem',
              marginTop: '1.5em',
              marginBottom: '0.5em',
              fontWeight: '600',
              letterSpacing: '-0.015em',
            },
            h4: {
              fontSize: '1.1rem',
              fontWeight: '600',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            code: {
              backgroundColor: 'var(--color-bg-code)',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400',
              fontSize: '0.9em',
            },
            pre: {
              borderRadius: '0.5rem',
              padding: '1.25rem 1.5rem',
              border: '1px solid var(--color-border-subtle)',
            },
            blockquote: {
              fontStyle: 'normal',
              borderLeftWidth: '3px',
              paddingLeft: '1.25rem',
              color: 'var(--color-fg-secondary)',
            },
            ul: {
              listStyleType: 'disc',
              paddingLeft: '1.35rem',
            },
            ol: {
              paddingLeft: '1.35rem',
            },
            li: {
              marginTop: '0.35em',
              marginBottom: '0.35em',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
