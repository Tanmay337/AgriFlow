# AgriFlow

AgriFlow is a precision irrigation dashboard demo. It models four farm zones and combines soil moisture and weather conditions to estimate irrigation timing and water allocation.

## Run locally

This project uses Vite, React, TypeScript, Tailwind CSS, and a shadcn/ui-compatible component layout.

```bash
npm install
npm run dev
```

Create a production build with `npm run build`, then preview it with `npm run preview`.

## UI structure

- `src/components/ui/` — reusable interface components, including the animated gradient backdrop.
- `src/lib/utils.ts` — shared `cn()` utility for shadcn/ui-style components.
- `src/index.css` — Tailwind CSS and shadcn theme tokens.
- `style.css` — AgriFlow dashboard styling.
- `app.js` — irrigation dashboard logic.

The background uses WebGL2 when available and falls back to a static green gradient.
