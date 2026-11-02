# Papua MNCH Evaluation: shared site

Static site for sharing material on the KOICA–UNICEF Papua maternal and newborn health evaluation among KOICA, UNICEF, OHCC (Universitas Cenderawasih) and the SNU expert team. Served with GitHub Pages from the `main` branch root at https://koica-papua.github.io/project_info/.

The site is public to anyone with the link. `robots.txt` and a `noindex` meta tag keep it out of search engines, but they do not restrict access.

## Layout

- `index.html`: landing page listing everything on the site
- `dashboard/index.html`: performance dashboard (placeholder; Track 1 survey quality, Track 2 programme performance)
- `maps/study-sites.html`: study-site map (55 Puskesmas, 18 BEmONC, CEmONC hospitals, comparison regencies)

## Adding material

1. Put the file in a topical folder (`maps/`, `survey/`, `reports/`, ...). Each HTML page should be self-contained.
2. Add an entry to the matching section of `index.html` (copy an existing `<a class="item">` block and update the title, description and date).
3. Commit and push to `main`; the site updates within a minute or two.
