# Build notes

Sources and build decisions for each page on the site. These notes are for the team maintaining the site and are not linked from the pages themselves.

## Performance dashboard (`dashboard/index.html`)

Placeholder page, added 2 Nov 2026. No data is shown; every value is "—".

### Sources

- 사업수행계획서 (기술협상 3차 수정본, 2026.09.03; file `1. 제안서I_기술협상_수정본_20260830_260903_KOICA 3차 검토_SNU_하이라이트제거.pdf`)
  - Section III, 실시간 환류체계: 성과관리 대시보드 (pp. 77–79): two-track design, comparison table, implementation, maintenance, handover and running-cost text
  - Section 2-4, survey quality control: Track 1 quality indicators (completion rate, back-check agreement, GPS flags, attrition) and protocol compliance indicators (third-party presence, audio audit pass rate, back-check agreement)
- 착수보고 slides (`파푸아_심층성과관리_착수보고_영향평가_v2.pptx`, slide 5): mapping of survey modules to PDM indicators used in the Track 2 grid
- DiD sample allocation, OHCC budget draft of 30 Oct 2026 (`파푸아_착수출장_현장메모_박성호_20261101_v2.docx`): per-regency targets in the Track 1 progress table

### Decisions

- Track 1 start is given as the baseline survey, May 2027, following the inception-trip decision (survey rounds May–July 2027/2028/2029). The 사업수행계획서 originally placed the baseline in 2026.
- "Three months of project start" is used for the Track 2 review deadline, as in the plan (착수 후 3개월 이내); no calendar date is given on the page.
- Track 2 indicators (provisional, to be confirmed with UNICEF):

  | Indicator on page | PDM reference |
  |---|---|
  | Facility-based deliveries | Outcome 2 |
  | ANC (6 contacts) | Output 2.3 |
  | BEmONC readiness in project Puskesmas | Outcome 1 |
  | Obstetric and neonatal referrals | Outcome 2 |
  | Communities with improved MNCH knowledge and practice | Outcome 3 |
  | Villages running birth preparedness (BPCR) | Output 3.2 |

- The sample targets (920 per round) predate the finding that the 55 project Puskesmas sit in 48 sub-districts; update the table if the allocation changes.
- The site is public. Per the plan, the live dashboards need access rights by user group and an agreed hosting location, so live data should not be published on this site without that decision.

## Study-site map (`maps/study-sites.html`)

Added 2 Nov 2026 (zoom and pan added the same day).

### Sources

- Facility list: `Intervention_Sites_KOICA.xlsx` (UNICEF Indonesia), sheet *Puskesmas* (55 Puskesmas with province, district, sub-district and function) and sheet *Hospital* (9 CEmONC hospitals)
- Sub-district boundaries: Kemendagri kecamatan layer (2018 semester 1), from the `Alf-Anas/batas-administrasi-indonesia` GitHub repository (`2020/Batas Kecamatan SHP.zip`)
- Comparison regencies and per-regency survey allocation: 착수 현장메모 (2026.11.01) and 착수보고 slides
- Province assignment: the 2022 split of Papua and Papua Barat into six provinces

### Decisions

- Sub-districts are those listed in the UNICEF file. Several hold more than one Puskesmas (Biak Numfor's 9 Puskesmas fall in 3 sub-districts; Mamberamo Tengah holds 2), giving 48 project sub-districts. A sub-district is coloured BEmONC if any of its Puskesmas is BEmONC.
- Name matches between the UNICEF file and the 2018 boundaries: Mamberamo Hilir → Mamberamo Ilir; Warwabomi → Warwarbomi; Atsj → Atsy; Derkomor → Der Koumur; Citak Mitak, Tizain and Sawaerma matched ignoring spaces.
- "Kepulauan Numfor" does not exist in the 2018 layer; it is drawn as the five Numfor island distrik combined (Numfor Barat, Numfor Timur, Bruyadori, Orkeri, Poiru).
- Puskesmas markers are placed at a point inside their sub-district, not at facility coordinates (none were provided). Several Puskesmas in one sub-district are fanned around that point.
- Hospitals are placed at their town: Jayapura (2), Biak, Agats (Asmat), Kepi (Mappi), Merauke, Fakfak, Manokwari, Waisai (Raja Ampat).
- Geometry was simplified for file size (about 250 m tolerance for sub-districts in the study regencies).
- Distrik created after 2018 are not shown separately.

### Rebuilding

The page was generated outside this repository: a Python script (geopandas) reads the boundary shapefile and the UNICEF workbook, simplifies and projects the geometry, and writes the map data into the page as embedded JSON. To change facilities, edit `DATA.sites` in the page or regenerate the page from an updated workbook.
