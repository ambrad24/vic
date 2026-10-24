# Rovic Portfolio

A responsive, static HTML portfolio. The Tailwind classes are compiled into
`styles.css`; there is no application server, API, or client-side router.

## Build

Requires Node.js 18 or newer.

```sh
npm ci
npm run build
```

The build writes the minified `styles.css` in the project root. Commit that
generated stylesheet so the site also works on hosts that serve static files
without running a build. The homepage redirects from `index.html` to
`code.html`.

## Deploy

- **GitHub Pages:** Build locally, commit `styles.css`, then select the
  repository branch and root (`/`) in **Settings → Pages**.
- **Vercel:** Import the repository as **Other**; use `npm run build` as the
  build command and `.` as the output directory.
- **Render:** Create a **Static Site** with `npm ci && npm run build` as the
  build command and `.` as the publish directory.

No routing rewrites or environment variables are needed. Update the contact
email if needed and add verified project URLs when available. Fonts, icons,
and the portrait are loaded from external HTTPS hosts. The contact form opens
the visitor's email application; it does not send messages to a backend.

## Git

```sh
git init
git add .
git commit -m "Prepare portfolio for deployment"
git branch -M main
git remote add origin <repository-url>
git push -u origin main
```
