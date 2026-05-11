# AGENTS.md

## Commands

```bash
npm run dev           # Vite dev server
npm run build         # tsc -b && vite build  (project-references mode)
npm run lint          # ESLint (type-checked rules, needs both tsconfigs)
npm run format        # Prettier --write
npm run format:check  # Prettier --check
npm run preview       # Vite preview
```

No test scripts are configured. `npm run build` must be run to verify builds pass.

## Pre-commit

Husky + lint-staged runs only `prettier --write` on staged files. ESLint is **not** run on commit — agents must run `npm run lint` explicitly before committing.

## Stack

React 19 + TypeScript + Vite 7 + Ionic Framework v8 + PWA (vite-plugin-pwa, `autoUpdate`). Zustand with `persist` middleware. React Hook Form + zod. `@tanstack/react-query` (v5) + `axios` for server state.

## Routing — React Router v5 (not v6)

- Uses `@ionic/react-router` wrapping React Router v5.
- Routes use the **v5** children-inside-Route pattern (no `element` prop).
- No `useNavigate` — use `useHistory()` from react-router-dom.
- App wraps routes in `<IonReactRouter>` → `<AuthGuard>` → `<IonRouterOutlet>`.
- Tab routing via `<IonTabs>` with `<IonRouterOutlet>` containing `<Route exact path="/tab">` for each tab.

### Route map

| Path        | Page                               | Auth      |
| ----------- | ---------------------------------- | --------- |
| `/login`    | Login                              | Public    |
| `/feed`     | Feed (default, `/` redirects here) | Protected |
| `/search`   | Search                             | Protected |
| `/create`   | Create                             | Protected |
| `/live`     | Live                               | Protected |
| `/projects` | Projects                           | Protected |
| `/profile`  | Profile                            | Protected |

## TypeScript strictness

- `verbatimModuleSyntax: true` — `import type` is enforced. Cannot use `import { Type }` for a type-only import; must be `import type { Type }` or `import { type Type }`.
- `erasableSyntaxOnly: true` — no enums, no namespaces.
- `noUnusedLocals: true`, `noUnusedParameters: true` — unused code fails build.
- ESLint config requires both `tsconfig.node.json` and `tsconfig.app.json` in `parserOptions.project` for type-checked lint rules.

## Module conventions

- **Pages** (`src/pages/`) → `export default function Login()`. Imported without braces.
- **Components** (`src/components/`) → named exports (`export function AppTabs()`). Imported with braces.
- **Hooks** (`src/hooks/`) → named exports.
- **Stores** (`src/stores/`) → named exports (e.g., `useAppStore`).
- **End paths use**.tsx`.ts extensions** — `import Foo from './foo.tsx'`(Vite requires extensions;`verbatimModuleSyntax` enforces them).

## React Compiler

Enabled via `babel-plugin-react-compiler` in Vite config. Do **not** manually add `useMemo`, `useCallback`, or `React.memo` — the compiler handles this.

## Styling

Prefer Ionic utility classes over custom inline styles: `ion-padding`, `ion-margin-top`, `ion-text-center`, `ion-text-capitalize`, `ion-no-margin`, etc.

## Theme

Dark/light/system via `useAppStore((s) => s.theme)` and `cycleTheme()`. The `ThemeProvider` toggles `.ion-palette-dark` on `<html>`. Theme variables are in `src/theme/variables.css`, with dark overrides under `.ion-palette-dark`.

## Key file locations

- `src/stores/app-store.ts` — global state (auth, user, theme), persisted to localStorage under key `"app"`
- `src/types/projects.ts` — `Project`, `ProjectFilter`, `ProjectStatus`
- `src/types/pixabay.ts` — `PixabayVideo`, `FetchVideosParams`, `FetchVideosResponse`
- `src/utils/format.ts` — `formatCount`, `formatViewers`, `formatWatchTime`
- `src/services/axios.ts` — `apiClient` axios instance with 401 interceptor placeholder
- `src/services/query-client.ts` — `QueryClient` with defaults (staleTime: 5m, retry: 2)
- `src/services/pixabay.ts` — `fetchVideos()` calls Pixabay API
- `src/hooks/use-pixabay-videos.ts` — `useQuery` wrapper for pixabay videos
- `src/hooks/use-search-filters.ts` — search state (query, category, sort) wired to pixabay
- `src/components/providers/auth-guard.tsx` — redirects unauthenticated users to `/login`
- `src/components/providers/theme-provider.tsx` — applies theme class to `<html>`
- `src/components/providers/query-provider.tsx` — `<QueryClientProvider>` wrapper

## Env

`.env` — `VITE_PIXABAY_API_KEY` (required for search page). Vite requires `VITE_` prefix for client-side env vars. Types declared in `src/vite-env.d.ts`.

## PWA / platform

Web + PWA only. No iOS/Android native targets. Ionic's `setupIonicReact()` is called at module level in `App.tsx`.
