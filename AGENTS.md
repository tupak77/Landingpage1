# Landingpage1 (Promo El Pescador)

A small static marketing landing page built with **Vite** (vanilla JS + CSS). No backend, database, or external services.

## Commands

- `npm run dev` — start the Vite dev server (http://localhost:5173) with hot reload.
- `npm run build` — production build to `dist/`.
- `npm run preview` — serve the built `dist/` locally.
- `npm run lint` — ESLint (flat config in `eslint.config.js`).
- `npm run test` — Vitest (unit tests in `src/**/*.test.js`), runs in Node env.

## Layout

- `index.html` — page markup (single page).
- `src/main.js` — DOM wiring (stats animation, promo form, footer year).
- `src/promo.js` — pure, testable helpers (email validation, signup message).
- `src/style.css` — styles.

## Cursor Cloud specific instructions

- Node 22 / npm are preinstalled; the update script runs `npm install`.
- Dev server binds `host: true` on port `5173` (see `vite.config.js`) so it is reachable from the Desktop pane browser at `http://localhost:5173/`.
- Tests are pure logic and run under the `node` Vitest environment (no jsdom); keep DOM-dependent code in `src/main.js` out of unit tests, or add `jsdom` if DOM tests become necessary.
