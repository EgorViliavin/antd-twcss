# Copilot Instructions for mobx React+Vite Project

## Overview
This project is a React application using TypeScript, Vite, MobX for state management, and TailwindCSS for styling. The structure is minimal and modular, designed for rapid development and clear separation of concerns.

## Architecture & Key Patterns
- **Entry Point:** `src/main.tsx` mounts the root `App` component.
- **State Management:** MobX stores are located in `src/store/` (`counter-store.ts`, `todos-store.ts`, `api.ts`). Each store encapsulates its own logic and observable state. Stores are imported directly into components as needed.
- **Styling:** TailwindCSS is used. Styles are applied via class names in JSX. Global styles are in `src/index.css` and `src/App.css`.
- **Component Structure:** All UI logic resides in `src/App.tsx` and its children. Components are functional and use hooks (`useEffect`, etc.) as needed.
- **Assets:** Static assets are in `src/assets/` and `public/`.

## Developer Workflows
- **Start Dev Server:** `npm run dev` (uses Vite)
- **Build:** `npm run build`
- **Lint:** `npm run lint` (ESLint config in `eslint.config.js`)
- **Type Checking:** `tsc --noEmit` (uses `tsconfig.app.json` and `tsconfig.node.json`)
- **Tailwind Setup:** Tailwind config in `tailwind.config.ts`. After install, run `npx tailwindcss init -p` if not present.

## Project-Specific Conventions
- **MobX Usage:** Stores are plain classes with observable properties and actions. No decorators; use `makeAutoObservable`.
- **Direct Store Imports:** Stores are imported directly into components, not via context providers.
- **Minimal Boilerplate:** Avoid unnecessary abstraction; keep logic close to usage.
- **TypeScript Strictness:** Type-aware linting is recommended (see README for ESLint config).

## Integration Points
- **Vite Plugins:** Uses official React plugin (`@vitejs/plugin-react` or `@vitejs/plugin-react-swc`).
- **No Custom Routing:** All navigation is handled in `App.tsx` (no React Router by default).
- **API Layer:** If present, API calls are abstracted in `src/store/api.ts`.

## Examples
- **MobX Store Import:**
  ```ts
  import counterStore from './store/counter-store';
  ```
- **Tailwind Usage:**
  ```jsx
  <button className="bg-blue-500 text-white px-4 py-2">Click</button>
  ```
- **Start Dev Server:**
  ```sh
  npm run dev
  ```

## Key Files & Directories
- `src/App.tsx` — Main UI logic
- `src/store/` — MobX stores
- `src/assets/`, `public/` — Static assets
- `tailwind.config.ts` — TailwindCSS config
- `eslint.config.js` — ESLint config
- `tsconfig*.json` — TypeScript configs

---
_Review and update these instructions as the project evolves. If any section is unclear or missing, please provide feedback to improve agent productivity._
