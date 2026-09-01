LOCAL MUSIC ORGANIZER — WEBSITE UPLOAD

IMPORTANT: Do not upload LocalMusicOrganizer_Website_*.zip to GitHub.
GitHub web upload rejects the complete ZIP because it is a single large file.

1. Unpack the ZIP on the Mac.
2. Open the LocalMusicOrganizer_Website folder.
3. Upload the CONTENTS of that folder to the repository root.
4. Keep screenshots/thumbs, licenses and sources as folders.
5. The existing google80d90f444a5e759d.html file does not need replacement.
6. If GitHub cannot commit every file at once, upload in two commits:
   first the main pages and screenshots, then licenses and sources.

Verify these public URLs after upload:
https://local-music-organizer-site.pages.dev/
https://local-music-organizer-site.pages.dev/privacy.html
https://local-music-organizer-site.pages.dev/support.html
https://local-music-organizer-site.pages.dev/open-source.html
https://local-music-organizer-site.pages.dev/LocalMusicOrganizer_UserGuide.pdf

Do not upload the Xcode project, test application ZIP or an old DMG here.
After App Store approval, add the official Mac App Store link to index.html.

2026-08-12 update:
- Replaced gallery screenshots 1–3 and regenerated their optimized thumbnails.
- Kept all gallery images interactive with full-size keyboard-accessible viewing.
- Updated the website and User Guide for the current release.
- Uses the current Library Index terminology and first-run workflow.
- Documented Build / Refresh Library Index, Refresh Music Changes and Index Selected Playlist.
- Added current SQLite, authenticity-analysis, duplicate-cleanup, hidden-tag, comment, Undo and conversion-cancellation improvements.

Release notes:
- Website and User Guide refreshed for the current release.
- Added free 3-day trial and one-time Full Version messaging.
- Clarified support for Music.app libraries and standalone audio files.

Plain-language documentation refresh: clearer task routing, result interpretation, large-library guidance, support logging instructions, and an updated illustrated user guide.

2026-08-15 update:
- Replaced screenshots 2, 3, 10, 11, 12, 19, 20 and 21 plus their optimized thumbnails.
- Preserved the existing interactive full-size screenshot gallery and keyboard navigation.
- Expanded plain-language guidance for Library Dashboard format/sample-rate categories and >16-bit lossless review.
- Documented Batch Normalize and the three original-handling modes: Keep, Trash and dated LMO Backup Folder.
- Corrected support logging guidance: generated logs are collected from the chosen log folder; Export Diagnostics is only used when specifically requested.


2026-08-16 update:
- Added the Music.app info outdated Dashboard category and Refresh Music.app Info workflow.
- Added screenshot 3.1 to the interactive gallery directly after Dashboard results.
- Preserved mouse, Close button, Previous/Next buttons and Left/Right keyboard navigation in the screenshot viewer.
- Optimized screenshots 3.1, 12, 19, 20 and 21 and regenerated their matching thumbnails.
- Updated the website, support page, open-source notices and User Guide.
- Added refresh-history guidance: Music.app rereads the actual file; LMO verifies the result without rewriting audio and checks protected tag/artwork fields.


2026-08-22 update:
- Added Naming & Tag Formatting guidance to the home page and Support page without changing the existing site layout.
- Documented read-only scanning, explicit review/batch fixes and protected physical filename renaming.
- Clarified automatic Music.app file-info refresh after verified file-changing maintenance and per-source handling for multi-file CUE sheets.
- Replaced screenshot 15 (File Maintenance) and its optimized thumbnail while preserving the existing interactive gallery and keyboard navigation.
- Updated the File Maintenance screenshots inside LocalMusicOrganizer_UserGuide.pdf using the original high-quality JPEG without an extra recompression pass; no numeric application version/build is published on the website or in the guide.


2026-08-31 release website update:
- Replaced/regenerated the screenshot gallery from the current 31 screenshots.
- Rebuilt screenshots/thumbs from the matching full-resolution images; full images remain clickable with Previous/Next and keyboard navigation.
- Added the new Health Check result screenshot and File Maintenance result screenshot while keeping the current two-row File Maintenance toolbar screenshot.
- Updated the website to the current Live Spectrum Player: global Playlists/Player buttons, Option-click local playback, queue/playlist navigation, Previous/Next and Auto Next.
- Documented the missing-file Play fix that avoids repeatedly re-triggering Music.app Locate.
- Updated Recent Updates to the current release instead of listing older internal implementation changes.
- Expanded the Comments explanation and corrected Audio Authenticity Analyzer as a mode inside Audio Inspector.
- Corrected Repair / Convert wording to Queue Report (informational; does not convert).
- Removed obsolete marketing wording for an old gain-preview workflow.
- Added clear local/offline scope: LMO does not repair Music.app's database/service files and does not manage subscription, cloud-only or streaming audio.
- Preserved the full Built by a collector, for collectors project-history section.
- Embedded the current illustrated User Guide PDF.

GitHub: upload/replace the CONTENTS of this folder at repository root. Do not upload the ZIP itself.

2026-09-01 Health Check gallery update:
- Added four current Health Check screenshots (8.2–8.5) and matching optimized thumbnails.
- The new images document orphan physical-file actions, multi-playlist import selection, explicit import confirmation and the Trash safety confirmation.
- Preserved the existing full-size modal viewer, Previous/Next buttons, Left/Right keyboard navigation and Escape-to-close behavior.
- The embedded User Guide remains the current 63-page illustrated guide.
- Updated the gallery cache revision so deployed browsers request the current site.js and screenshot assets.
