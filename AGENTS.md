# AGENTS.md

## Project overview

Nimbus (`landingpage1`) is a single-page marketing landing page built with Vite + React + TypeScript. There is one service (the frontend); there is no backend, database, or external dependency. The signup form is client-side only — it validates the email and shows a success message, but does not send data anywhere.

## Commands

Standard scripts are defined in `package.json`:

- `npm run dev` — start the Vite dev server (http://localhost:5173, bound to all interfaces).
- `npm run build` — type-check (`tsc -b`) then produce a production build in `dist/`.
- `npm run preview` — serve the production build.
- `npm run lint` — ESLint (flat config in `eslint.config.js`).
- `npm run typecheck` — type-check without emitting.
- `npm run test` — run Vitest once (`test:watch` for watch mode). Tests run in jsdom.

## Cursor Cloud specific instructions

- Runtime: Node 22 (already present). Install deps with `npm install` (also the startup update script).
- The dev server binds to `0.0.0.0:5173` (`server.host: true` in `vite.config.ts`); use that port for browser testing.
- Vitest config lives inside `vite.config.ts` (not a separate file) and uses `src/test/setup.ts` for `@testing-library/jest-dom` matchers.
- The signup form has no backend; a successful "hello world" is submitting a valid email and seeing the success message render. No secrets or accounts are required to run or test anything in this repo.
