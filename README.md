# Azhan Abdullah — Portfolio

Personal portfolio website built with React, TypeScript, and Vite. Features 3D visuals (Three.js / React Three Fiber), smooth scroll animations, and a full project showcase.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 8** for build tooling
- **React Three Fiber** / **Three.js** / **Drei** — 3D hero and effects
- **Framer Motion** — animations
- **GSAP** — timeline/scroll animations
- **Lenis** — smooth scrolling
- **Oxlint** — linting

## Getting Started

### Prerequisites

- Node.js **20.19+** (or newer LTS) and npm

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev
```

### Production Build

```bash
# Type-check + build to /dist
npm run build

# Preview the production build locally
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── layout/     # Navigation, theme provider
│   ├── sections/   # Hero, About, Projects, Skills, Contact, etc.
│   ├── three/      # 3D scene components
│   └── ui/         # Project cards, detail modal, cursor, etc.
├── data/           # site, projects, skills, socials config
├── hooks/          # custom React hooks
├── styles/         # global CSS
└── assets/         # images
```

## Customization

- **Site info** (name, email, links): edit `src/data/site.ts`
- **Projects**: edit `src/data/projects.ts`
- **Skills**: edit `src/data/skills.ts`
- **Social links**: edit `src/data/socials.ts`

## Deploy

Any static host works (Vercel, Netlify, GitHub Pages). The build output is in `dist/` and uses no server-side code.

```bash
npm run build
```

Then deploy the `dist/` folder to your host of choice.