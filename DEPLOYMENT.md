# AR Blog

The source lives at `/home/ar/Personal Blogs/my-blog` in WSL.

## Write

Add a Markdown or MDX file in `src/content/blog/` with `title`, `description`, `pubDate`, and `category` in YAML frontmatter. Optional fields: `updatedDate`, `heroImage` (relative source asset), `cover` (public asset path).

The three Chinese starter articles are editable examples. Existing starter articles are retained in the default category. Navigation, category counts, archive, search, table of contents and RSS are generated from the content collection.

## Run

```sh
npm ci
npm run dev -- --host 0.0.0.0 --background
npm run astro -- dev status
npm run astro -- dev stop
npm run build
```

The configured base path is `/ARTEAAA.github.io/`. The local preview is normally `http://localhost:4321/ARTEAAA.github.io/` (see server output for the chosen port).

## Publish

The existing GitHub Actions workflow publishes `dist` to GitHub Pages when `main` is pushed. The configured public URL is `https://ARTEAAAA.github.io/ARTEAAA.github.io/`.

## Image Credit

Mountain photograph source: https://images.unsplash.com/photo-1464822759023-fed622ff2c3b. The image is stored locally at `public/mountains.jpg`; rendering does not depend on an external image host.
