# Papua MNCH Evaluation: shared site

Static site for sharing material on the KOICA–UNICEF Papua maternal and newborn health evaluation among KOICA, UNICEF, OHCC (Universitas Cenderawasih) and the SNU expert team. Served with GitHub Pages from the `main` branch root at https://koica-papua.github.io/project_info/.

The site is public to anyone with the link. `robots.txt` and a `noindex` meta tag keep it out of search engines, but they do not restrict access.

## Layout

- `index.html`: landing page listing everything on the site
- `pdm/index.html`: Project Design Matrix (impact, outcomes, outputs, indicators, yearly targets, activities, assumptions)
- `dashboard/index.html`: performance dashboard (placeholder; Track 1 programme performance, Track 2 survey quality)
- `maps/study-sites.html`: study-site map (55 Puskesmas, 18 BEmONC, CEmONC hospitals, comparison regencies)
- `assets/lang.js`, `assets/lang.css`: English / Korean language switch shared by all pages

Sources and build decisions for each page are kept in `BUILD_NOTES.md`, not on the pages.

## Languages

Every page is bilingual (English and Korean). Wrap each piece of visible text as a pair: `<span class="l-en">…</span><span class="l-ko">…</span>`. Include `assets/lang.js` and `assets/lang.css` in the page head and the `.lang-switch` buttons in its header. Text generated in a script uses `L(en, ko)` and re-renders on the `langchange` event. The chosen language is remembered per browser; `?lang=ko` or `?lang=en` in a link sets it.

## Adding material

1. Put the file in a topical folder (`maps/`, `survey/`, `reports/`, ...). Each HTML page should be self-contained.
2. Add an entry to the matching section of `index.html` (copy an existing `<a class="item">` block and update the title, description and date).
3. Provide both English and Korean text (see Languages).
4. Record the page's sources and any build decisions in `BUILD_NOTES.md`.
5. Commit and push to `main`; the site updates within a minute or two.
