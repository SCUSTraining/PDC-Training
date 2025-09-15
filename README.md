# Fault-Response Game Hub (GitHub Pages)

A tiny static site that hosts the Fault-Response games. Works offline after first load (PWA).
not valid
## Deploy (60 seconds)
1. Create a new repo on GitHub (public or private).
2. Upload the files in this folder (keep structure).
3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
4. Select **Branch: main** and **/ (root)**, then **Save**.
5. Wait for Pages to deploy. Your site URL will appear at the top of the Pages settings.
6. Open the URL on your phone → **Add to Home Screen** for an app-like shortcut.

## Files
- `index.html` – landing page with links to the 3 games
- `games/…html` – the standalone games
- `manifest.webmanifest`, `service-worker.js` – enable offline support
- `icons/` – app icons

## Notes
- GitHub Pages serves over HTTPS, which is required for the service worker.
- If you rename files, update paths in `index.html` and `service-worker.js`.
- To invalidate the cache after updates, bump the `CACHE_NAME` in `service-worker.js`.
