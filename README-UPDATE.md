# Weight Wingman site redesign — how to deploy

This folder is a drop-in update for the `AssetZi/wingman-website` repo
(Jekyll / GitHub Pages). It contains ONLY the files that changed or are new —
your blog posts, `_config.yml`, `blog/`, `privacy/`, `404.html`, etc. are
untouched and stay as they are.

## Files in this update

REPLACED (overwrite the existing file):
- `index.html`                  — new landing page structure
- `assets/css/style.css`        — full redesign (design-system tokens, dark theme)
- `assets/js/main.js`           — nav toggle + audience toggle + scroll reveals + hero animation
- `_includes/head.html`         — adds Inter / JetBrains Mono fonts (gtag + SEO kept)
- `_includes/nav.html`          — new nav (Athletes / Coaches / Blog / Download)
- `_includes/hero.html`         — new hero + animated weigh-in card + trust line + toggle
- `_includes/blog-preview.html` — restyled
- `_includes/footer.html`       — restyled
- `_layouts/post.html`          — same structure, updated CTA copy

NEW:
- `_includes/athletes.html`     — athlete section (5 blocks + Free to start + pricing)
- `_includes/coaches.html`      — coach section (5 blocks + team plans)
- `assets/images/screenshots/`  — your 8 app screenshots
- `assets/videos/food-log.mp4`  — block 01 video
- `assets/videos/meal-gen.mp4`  — block 02 video

NO LONGER USED (safe to delete from the repo):
- `_includes/features.html`
- `_includes/pricing.html`

## Deploy

1. Copy everything in this folder into the repo root, replacing existing files.
2. Optionally delete `_includes/features.html` and `_includes/pricing.html`.
3. Commit and push to `main`. GitHub Pages rebuilds automatically (1–2 min).

## Notes

- Blog posts, blog listing, privacy page, and 404 keep working — their pages
  are restyled purely through the new CSS class definitions.
- The Athletes/Coaches toggle defaults to Athletes; linking to `/#coaches`
  opens the Coaches view directly.
- To swap a screenshot later, just replace the file in
  `assets/images/screenshots/` (portrait iPhone screenshots, any size).
- Videos autoplay muted on loop. Keep them short and compressed (they're
  served straight from the repo).
- Scroll animations respect the visitor's "reduce motion" OS setting.
