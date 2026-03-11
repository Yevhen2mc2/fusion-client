# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## App

- This app is similar to TikTok.
- Dark/light/system theme

## Commands

```bash
npm run build
npm run lint
npm run format
npm run format:check
```

## Architecture

**Stack:** React 19 + TypeScript + Vite + Ionic Framework + PWA

**Routing:** Uses `@ionic/react-router` (wraps React Router v5). Routes are declared in `src/App.tsx` inside `<IonRouterOutlet>`. New pages go in `src/pages/` and must be wrapped in `<IonPage>`.

**PWA:** Configured via `vite-plugin-pwa` in `vite.config.ts` with `autoUpdate` service worker strategy. Icons expected at `public/icons/icon-{size}x{size}.png`.

**React Compiler:** Enabled via `babel-plugin-react-compiler` — avoid manual `useMemo`/`useCallback` optimizations.

**Pre-commit hook:** Husky runs `lint-staged`, which formats all staged `js/jsx/ts/tsx/css/json/md` files with Prettier.
