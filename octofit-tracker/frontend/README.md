# OctoFit Tracker Frontend

React 19 presentation tier for the OctoFit Tracker multi-tier application.

## Environment

When running in GitHub Codespaces, define `VITE_CODESPACE_NAME` in `.env.local` so the frontend can call the backend API on port `8000`:

```bash
VITE_CODESPACE_NAME=your-codespace-name
```

With that value set, the app builds API URLs like:

```text
https://$VITE_CODESPACE_NAME-8000.app.github.dev/api/users/
```

If `VITE_CODESPACE_NAME` is unset, the app safely falls back to `http://localhost:8000`.

## Scripts

```bash
npm run dev
npm run build
npm run lint
```
