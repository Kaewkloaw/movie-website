# Movie Website

[![Build Status](https://img.shields.io/github/actions/workflow/status/Kaewkloaw/movie_website/ci.yml?branch=main&label=build&logo=github)](https://github.com/Kaewkloaw/movie_website/actions) [![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE) [![Vite](https://img.shields.io/badge/bundler-Vite-orange.svg)](https://vitejs.dev) [![React](https://img.shields.io/badge/framework-React-61DAFB.svg)](https://reactjs.org)

A lightweight Vite + React application to browse and search movies using The Movie Database (TMDB) API. This project is intended as a clean, easy-to-read starter with sensible defaults for development and deployment.

---

**Contents**
- Features
- Demo
- Tech stack
- Quick start
- Environment
- Development & scripts
- Deployment
- Contributing

## Features
- Fast search with debounce to reduce API calls
- Responsive movie cards with loading and empty states
- Minimal dependencies and straightforward codebase for easy customization
- Ready for common static deployments (Vercel, Netlify, GitHub Pages)
<img width="2845" height="1495" alt="image" src="https://github.com/user-attachments/assets/6cc8fdf2-25cd-4a69-83d6-5781709e3786" />
<img width="2839" height="1493" alt="image" src="https://github.com/user-attachments/assets/5f0d519e-b0b3-4a5b-907f-de2e92aecfd2" />


## Tech stack
- Vite
- React (hooks, functional components)
- Fetch API (for TMDB requests)
- Optional: Appwrite for lightweight analytics

## Quick start
Prerequisites
- Node.js 18+ and npm

Clone and run locally
```powershell
git clone https://github.com/Kaewkloaw/movie_website.git
cd movie_website
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Environment
This project uses a Vite environment variable for the TMDB API key. Create a `.env` file at the project root with:
```
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```
Get a key: https://www.themoviedb.org/settings/api

## Development & scripts
- `npm run dev` — start the dev server
- `npm run build` — build for production
- `npm run preview` — preview the production build
- `npm test` — run tests (if configured)

## Deployment
- Deploy by connecting this repo to Vercel or Netlify and add the `VITE_TMDB_API_KEY` secret.
- For GitHub Pages, build to `dist/` and serve the static files.

## Contributing
- Use feature branches `feat/<name>` or `fix/<name>`.
- Follow Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`.
- Open PRs against `main` with a clear description and screenshots if applicable.

If you want, I can add a `CONTRIBUTING.md`, PR template, and Issue templates.
