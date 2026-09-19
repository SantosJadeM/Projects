# Kotobe — Local VS Code Setup

## Requirements

- Node.js 20 or newer
- pnpm 10 or newer
- VS Code

The required Node.js and pnpm versions are also enforced in `package.json`, and
`.nvmrc` records the minimum Node.js major version for version managers. On
Windows, install the current Node.js LTS release from
https://nodejs.org/en/download, then enable pnpm with Corepack:

```powershell
corepack enable
corepack prepare pnpm@10 --activate
node --version
pnpm --version
```

Both version commands should report Node.js 20 or newer and pnpm 10 or newer.

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
