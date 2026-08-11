Version: 1.1.4
Build: 39

LOCAL MUSIC ORGANIZER — WEBSITE UPLOAD

IMPORTANT: Do not upload LocalMusicOrganizer_Website_*.zip to GitHub.
GitHub web upload rejects the complete ZIP because it is a single large file.

1. Unpack the ZIP on the Mac.
2. Open the LocalMusicOrganizer_Website_v1.1.4_Build39_DYNAMIC_LIGHTBOX folder.
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

2026-08-06 update:
- Replaced all gallery thumbnails so every thumbnail matches its current full-size screenshot.
- Replaced the illustrated screenshots in the PDF User Guide and optimized the newest large images.
- Added the first stage of normalized SQLite storage for large Music.app libraries.
- Added paged SQLite results and targeted refresh of only the selected changed playlist.
- Preserved individual playlist occurrences when several entries share one Persistent ID.
- Added fast SQLite checks plus clearly marked full live verification for recent changes.
- Improved CUE source-folder authorization and Live Spectrum seeking after playback ends.

Release notes:
- Website and User Guide updated for Version 1.1.4 (Build 39).
- Added free 3-day trial and one-time Full Version messaging.
- Clarified support for Music.app libraries and standalone audio files.
