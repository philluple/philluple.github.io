# Phase 1 Updates

## 1. Remove `ts-loader`
- **File:** `package.json`
- **Why:** Webpack-specific TypeScript loader, never used by Vite. Dead dependency.
- **How:** Delete `"ts-loader"` from `devDependencies`, then run `npm install`.

## 2. Remove duplicate Bootstrap CDN link
- **File:** `index.html`
- **Why:** Bootstrap is loaded twice — CDN (v5.0.2) in `index.html` and via npm import (v5.3.x) in `App.tsx`. They conflict and add unnecessary page weight. The npm import is the correct one to keep.
- **How:** Delete the `<link>` tag pointing to the Bootstrap CDN on line 6.

## 3. Bump Bootstrap and react-bootstrap
- **File:** `package.json`
- **Why:** Minor/patch updates available with no breaking changes.
  - `bootstrap`: 5.3.3 → 5.3.8
  - `react-bootstrap`: 2.10.3 → 2.10.10
- **How:** Update version strings in `package.json`, then run `npm install`.

## 4. Fix `eslint.config.js`
- **File:** `eslint.config.js`
- **Why:** `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh` are installed as devDependencies but never registered in the config. Hooks rules (e.g. missing `useEffect` deps) are silently not enforced.
- **How:** Import both plugins and add them with their recommended rule sets.

## 5. Add `@/` path alias
- **Files:** `vite.config.ts`, `tsconfig.app.json`
- **Why:** Long relative imports like `../../interface/App.types` break when files move. An `@/` alias pointing to `src/` makes all imports refactor-safe.
- **How:**
  - Add `resolve.alias: { '@': '/src' }` to `vite.config.ts`
  - Add `"paths": { "@/*": ["./src/*"] }` under `compilerOptions` in `tsconfig.app.json`

## 6. Rename `App.types.tsx` → `App.types.ts`
- **File:** `src/interface/App.types.tsx`
- **Why:** The file contains only interfaces and an enum — no JSX. The `.tsx` extension enables JSX transforms unnecessarily.
- **How:** `git mv src/interface/App.types.tsx src/interface/App.types.ts`, then update the import path in `src/utils/common.ts` and any other files referencing it.

## 7. Remove `console.log` calls
- **Files:** `src/App.tsx` (line 49), `src/utils/common.ts` (lines 71, 74), `src/components/ProjectDetails.tsx` (lines 16, 19)
- **Why:** Debug artifacts that log fetch URLs and project paths on every page load in production.
- **How:** Delete those lines.

## 8. Fix silent error rendering in `useEffect` async callbacks
- **Files:** `src/components/ExperienceDetails.tsx`, `src/components/ProjectDetails.tsx`
- **Why:** Both components return JSX (`<h1>There was an error</h1>`) from inside an async function inside `useEffect`. That return value is silently discarded — the error never renders to the user.
- **How:** Add an `error` state variable, set it in the catch/else branch, and conditionally render the error message in the component's JSX return.

## 9. Remove empty `useEffect` in `ExperienceDetails`
- **File:** `src/components/ExperienceDetails.tsx` (lines 30–32)
- **Why:** An empty `useEffect` with no dependency array fires on every render for no reason.
- **How:** Delete the hook entirely.

## 10. Replace index keys with stable identifiers
- **Files:** `src/App.tsx` (lines 44, 51), `src/components/Experience.tsx` (lines 38, 48), `src/components/Projects.tsx` (lines 37–38, 48)
- **Why:** Using array index as React `key` causes incorrect diffing when list order changes.
- **How:** Use the available unique string values — `experience` and `project` in `App.tsx`, `experience.short` (or equivalent) in the list components.

## 11. Fix `useEffect` dependency violation in `Logo`
- **File:** `src/components/Logo.tsx` (lines 10–18)
- **Why:** The hook reads `location.pathname` but the dependency array is empty, so the hook won't re-run when the pathname changes. This will also become a lint error once `eslint-plugin-react-hooks` is wired up (item 4).
- **How:** Add `location.pathname` to the dependency array.

## 12. Replace loose `==` with strict `===`
- **Files:** `src/components/Logo.tsx` (line 11), `src/utils/common.ts` (line 69)
- **Why:** Inconsistent equality operators; `==` allows type coercion and is a lint error under most rule sets.
- **How:** Change both occurrences to `===`.

## 13. Add GitHub Actions deployment workflow
- **Files:** `.github/workflows/deploy.yml` (new), `package.json`, repo Settings
- **Why:** Currently deployment is manual — you must have Node locally and run `npm run deploy` yourself. GitHub Actions automates this: every push to `main` triggers a cloud build and deploy. No local build environment needed, and you get a deployment history in the Actions tab.
- **How:**
  1. Create `.github/workflows/deploy.yml` with a workflow that:
     - Triggers on push to `main`
     - Runs `npm ci` and `npm run build`
     - Uploads `dist/` and deploys to GitHub Pages via the official `actions/deploy-pages` action
  2. Remove `predeploy` and `deploy` scripts from `package.json` (no longer needed)
  3. Remove `gh-pages` from `devDependencies` in `package.json`, then run `npm install`
  4. In the repo on GitHub: go to **Settings → Pages → Source** and switch from "Deploy from a branch" to **"GitHub Actions"**
