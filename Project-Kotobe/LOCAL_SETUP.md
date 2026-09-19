# Kotobe — Local VS Code Setup

## Requirements

- Node.js 20 or newer
- pnpm 10 or newer
- VS Code

## Run locally

1. Open this `kotobe` folder in VS Code.
2. Open the integrated terminal.
3. Install dependencies:

```bash
pnpm install
```

4. Start the development server:

```bash
pnpm dev
```

5. Open the local URL shown by Vite, usually `http://localhost:3000`.

## Other commands

```bash
pnpm check   # TypeScript validation
pnpm build   # Production build
pnpm preview # Preview the production build
```

The project is a Vite + React + TypeScript + Tailwind frontend. The current login and signup buttons simulate entering the learning area on the client; real authentication has not been connected yet.
