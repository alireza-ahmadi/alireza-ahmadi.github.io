# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview production build
```

## Architecture

personal website built with astro 5, tailwind v4, typescript.

### structure
- `src/pages/` - astro pages (file-based routing)
- `src/layouts/container-layout.astro` - main layout wrapper with head/meta/fonts
- `src/components/` - reusable astro components
- `src/content/note/` - markdown blog posts (notes)
- `src/content/config.ts` - content collection schema
- `src/styles/global.css` - tailwind config with custom theme (tundora/crimson colors)

### content collections
notes use frontmatter: `title`, `publishDate`, `isDraft`, `shortDesc` (optional)

### styling
tailwind v4 via vite plugin. custom colors (tundora-*, crimson-*) and squircle border-radius overrides in global.css. all text is lowercase by default.

### routing
- `/` - homepage
- `/notes/[slug]` - individual note pages (dynamic route)
