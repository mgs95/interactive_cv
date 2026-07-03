# Interactive CV

One-page interactive CV of **Mariano Gonzalez Salazar**, live at
[mgs95.github.io/interactive_cv](https://mgs95.github.io/interactive_cv/).

Built with React 19 + TypeScript + Vite. No state library, no chart library —
just a small, fast, hand-crafted page with:

- Sticky sidebar with scroll-spy navigation
- Dark / light theme (follows system preference, persisted)
- Pointer spotlight and scroll-reveal animations (both respect `prefers-reduced-motion`)
- A dedicated print stylesheet: hit the printer button to get a classic paper CV / PDF

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build locally
```

## Deployment

```bash
npm run deploy   # builds and pushes dist/ to the gh-pages branch
```

## Editing content

All CV content (profile, experience, education, skills, languages) lives in a
single typed file: [`src/data.ts`](src/data.ts). Edit it and redeploy.
