## Kerala Travel Tracker — AI assistant instructions

This repository is a Vite + React (TypeScript) app with Capacitor mobile packaging and Supabase backend integration. Use these notes to make targeted, low-risk code changes.

Key facts
- Frontend: `src/` (React + TypeScript). Entry: `src/main.tsx`, root component `src/App.tsx`.
- UI: component library lives in `src/components/` (many small components, e.g. `SignIn.tsx`, `AppContent.tsx`).
- State & auth: context providers in `src/contexts/` — especially `AuthContext.tsx` which orchestrates Supabase auth and stores `kerala_travel_access_token` in localStorage.
- Backend & API: wrapper functions under `src/utils/` (look for `utils/api` and `utils/supabase/client`). The app calls `tripAPI`, `authAPI`, `userAPI`.
- Deploy: Vercel recommended (see `src/DEPLOYMENT-GUIDE.md`) and Supabase Edge Functions used (`supabase` CLI). Mobile builds use Capacitor (`android/` folder + scripts in `src/package.json`).

Developer workflows (concrete)
- Install: `npm install` (root or `src/` depending on your workflow). Prefer using `src/package.json` for scripts and Capacitor flows.
- Local dev: `npm run dev` (runs Vite). Entry: `src/main.tsx`.
- Build: `npm run build` or `npm run build:check` (the latter runs `tsc --noEmit` first).
- Preview: `npm run preview`.
- Deploy (examples in `src/package.json`):
  - Vercel: `npm run deploy` (calls `vercel --prod`).
  - Android: `npm run android:run`, `npm run android:build` (requires Android SDK and `npx cap` installed).
- Supabase edge functions: install CLI (`npm i -g supabase`), login (`supabase login`), link project (`supabase link --project-ref YOUR_REF`), deploy functions (`supabase functions deploy server`).

Environment and secrets
- Runtime envs used by the app:
  - `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` (set in Vercel / local `.env` for local dev). Do NOT commit secrets.
- The code stores tokens in `localStorage` under `kerala_travel_access_token` (see `src/contexts/AuthContext.tsx`). When working on auth flows, clear localStorage to reproduce first-time UX.

Patterns & conventions to preserve
- Fallback-first UX: many components and `App.tsx` include graceful fallbacks (sample data if backend fails). Prefer non-breaking changes that keep these fallbacks.
- Error handling: `AuthContext` wraps Supabase errors into user-friendly messages; follow the same pattern when adding authentication logic.
- OAuth flows: `signInWithOAuth` is used with `redirectTo: window.location.origin` (see `AuthContext`). Editing OAuth must respect redirect configuration in Supabase and Vercel domains.
- Capacitor integration: `main.tsx` initializes Capacitor plugins and conditionally runs native code when `Capacitor.isNativePlatform()` is true. Avoid running native-only APIs in pure web contexts.

Key files to inspect when changing behavior
- Auth and session: `src/contexts/AuthContext.tsx` (session checks, signIn, signUp, resetPassword).
- API wrappers: `src/utils/api.ts` (or similar) — central place for trip/user/auth requests.
- Entry and initialization: `src/main.tsx` (Capacitor init, Toaster), `src/App.tsx` (routing between landing/auth/app views).
- Deployment docs & scripts: `src/DEPLOYMENT-GUIDE.md`, `src/package.json`, `build-android.md`, `README-APK-BUILD.md`.

Small contract for changes
- Input: change must compile with `tsc` and `vite build` (use `npm run build:check`).
- Output: UI behavior unchanged for existing flows (auth, add/delete trip, trip listing) unless explicitly changing feature specs.
- Error modes: preserve existing fallback data in `App.tsx` and user-friendly messages from `AuthContext`.

Examples
- To debug trips API: open `src/App.tsx` — `loadUserTrips()` calls `tripAPI.getTrips()`; mock `tripAPI` in `src/utils/api` for local tests.
- To reproduce auth session flow: clear `localStorage.kerala_travel_access_token`, then use `signIn` in `AuthContext`.

Do not assume
- This repo has CI/test harnesses — there are no visible tests. Always run `npm run build:check` before merging changes.

Where to add tests or docs
- Unit tests should target `src/utils/api` and `src/contexts/AuthContext.tsx` (auth edge cases). If adding tests, document commands in `README.md`.

If anything is unclear, open `src/DEPLOYMENT-GUIDE.md` and the `src/package.json` scripts first; then ask for the project owner to provide Supabase project-ref and Vercel env values.

— End of instructions (ask me to iterate on anything missing)
