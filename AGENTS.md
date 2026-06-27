# Agent Notes

- This project is an archive of Dominic Cummings's own output: writings,
  podcast appearances, and video appearances.
- Prefer primary evidence from Cummings himself. Do not add commentary,
  profiles, news articles, or other material merely about him unless the user
  explicitly asks.
- This is a small Astro static site. Main pages live in `src/pages/`.
- Substack article data lives in `src/data/substack_articles.json`; keep it newest-first.
- WordPress article data lives in `src/data/wp_articles2.json`.
- Shared layout and navigation live in `src/layouts/Layout.astro` and `src/components/Nav.astro`.
- Images used by the site live in `src/assets/`; public static files live in `public/`.
- Run `npm run build` before committing content or dependency changes.
