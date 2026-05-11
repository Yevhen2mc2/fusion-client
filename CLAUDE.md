# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture

- Stack: React 19 + TypeScript + Vite + Ionic Framework v8 + PWA
- State: Zustand (`persist`) + React Hook Form + zod + `@tanstack/react-query` (v5) + `axios`
- Routing: Uses `@ionic/react-router` (wraps React Router v5)
- PWA: Configured via `vite-plugin-pwa` in `vite.config.ts` with `autoUpdate` service worker strategy
- React Compiler: avoid manual `useMemo`/`useCallback` optimizations
- Zustand
- React Hook Form + zod

## App

- This app is similar to TikTok
- Dark/light/system theme
- no IOS/Android. Web and PWA only

## Styling

- Use Ionic utility classes instead of custom inline styles wherever possible: `ion-padding`, `ion-padding-horizontal`, `ion-padding-vertical`, `ion-margin`, `ion-margin-top`, `ion-text-center`, `ion-text-capitalize`, etc.

## Types

- `src/types/` — shared domain types
- `src/types/projects.ts` → `ProjectFilter`
- `src/types/pixabay.ts` → `PixabayVideo`, `FetchVideosParams`, `FetchVideosResponse`

## Services

- `src/services/axios.ts` → `apiClient` (axios instance, 401 interceptor placeholder)
- `src/services/query-client.ts` → `QueryClient` (staleTime: 5m, retry: 2)
- `src/services/pixabay.ts` → `fetchVideos()` (calls Pixabay API with `VITE_PIXABAY_API_KEY`)

## Hooks

- `src/hooks/use-pixabay-videos.ts` → `useQuery` wrapper for Pixabay video search
- `src/hooks/use-search-filters.ts` → search state (query, category, sort) wired to Pixabay

## Env

`.env` — `VITE_PIXABAY_API_KEY` (required for search). Types in `src/vite-env.d.ts`.

## Utils

- `src/utils/format.ts` — `formatCount`, `formatViewers`, `formatWatchTime`

## Commands

```bash
npm run build
npm run lint
npm run format
npm run format:check
```
