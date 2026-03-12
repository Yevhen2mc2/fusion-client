# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture

- Stack: React 19 + TypeScript + Vite + Ionic Framework v8 + PWA
- Routing: Uses `@ionic/react-router` (wraps React Router v5)
- PWA: Configured via `vite-plugin-pwa` in `vite.config.ts` with `autoUpdate` service worker strategy
- React Compiler: avoid manual `useMemo`/`useCallback` optimizations
- Zustand
- React Hook Form + zod

## App

- This app is similar to TikTok
- Dark/light/system theme
- no IOS/Android. Web and PWA only

## Commands

```bash
npm run build
npm run lint
npm run format
npm run format:check
```
