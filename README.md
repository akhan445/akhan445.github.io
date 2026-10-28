# akhan445.github.io

Personal portfolio of Abdullah Khan, built with Next.js 14 and statically exported to GitHub Pages.

## Editing content

Everything on the page comes from **`content/site.ts`**: the hero text, the KPI strip, experience (with per-role KPIs), main stack, education and projects. Edit that file and push to `master`; the GitHub Actions workflow rebuilds and deploys the site.

- **Dates** use `"YYYY-MM"`. Experience shows them as month and year; leave out `end` for a current role and it shows "Present".
- **Projects** never show dates. Their `date` only sorts the list, newest first.
- **Project screenshots**: put an image in `public/projects/` and set `image: "/projects/<file>.png"` on the project. Without one, a placeholder built from the project's first tech logo is shown.
- **Tech logos** appear automatically for any tag that matches a key in `app/lib/tech-icons.ts` (paths from [Simple Icons](https://simpleicons.org)).
- **Résumé**: replace `public/AbdullahKhan_SE.pdf`.
- **Colors**: schemes are defined in `app/global.css`; the default scheme and theme (Lagoon, dark) are set in `app/lib/schemes.ts`.

## Running locally

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # static export to ./out
```
