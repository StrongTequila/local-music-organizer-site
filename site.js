(() => {
  "use strict";

  const screenshots = [
    ["1-settings.jpg", "Setup — permissions, saved Library Index, logs and application preferences"],
    ["2-library-dashboard.jpg", "Library Dashboard — scan depth, Library Index and technical categories"],
    ["3-library-dashboard-result.jpg", "Library Dashboard — overview results and category filters"],
    ["3.1-library-dashboard-result.jpg", "Library Dashboard — review a filtered result"],
    ["3.2-library-dashboard-result.jpg", "Library Dashboard — Cloud / no local path result"],
    ["3.3-library-dashboard-result.jpg", "Library Dashboard — Music.app info outdated and targeted refresh"],
    ["3.4-library-dashboard-result.jpg", "Library Dashboard — Comments review and Clear Comments"],
    ["4-library-map-result.jpg", "Library Map — repeated tracks and playlist relationships"],
    ["5-playlist-duplicate-result.jpg", "Playlist Duplicates — repeated entries inside one playlist"],
    ["6-playlist-duplicate-edit.jpg", "Playlist Duplicates — explicit cleanup confirmation"],
    ["7-library-duplicates.jpg", "Library Duplicates — multiple Music.app records for the same file"],
    ["8-health-check.jpg", "Health Check — scopes and read-only scan options"],
    ["8.1-health-check.jpg", "Health Check — real missing-file results and repair/review actions"],
    ["8.2-health-check.jpg", "Health Check — orphan physical file actions, including import and Trash"],
    ["8.3-health-check.jpg", "Health Check — choose one or more destination playlists for orphan import"],
    ["8.4-health-check.jpg", "Health Check — explicit new Music.app record import confirmation"],
    ["8.5-health-check.jpg", "Health Check — orphan physical file Trash confirmation and live-path safety check"],
    ["9-artwork-check.jpg", "Artwork Check — missing-cover workflow"],
    ["10-repair-convert-format.jpg", "Repair / Convert — source and output options"],
    ["11-repair-convert-format.jpg", "Repair / Convert — profiles, normalization and original handling"],
    ["12-repair-convert-format.jpg", "Repair / Convert — queue and conversion status"],
    ["13-playlist-compare.jpg", "Playlist Compare — compare two playlists"],
    ["14-track-usage.jpg", "Track Usage — where a track is used"],
    ["15-file-maintenance.jpg", "File Maintenance — current two-row toolbar and scan controls"],
    ["15.1-file-maintenance-result.jpg", "File Maintenance — real detected metadata issue and review actions"],
    ["16-repair-convert-vinyl-decklinker.jpg", "Repair / Convert — Vinyl De-click controls"],
    ["17-quality-duplicates.jpg", "Quality Duplicates — compare different physical versions"],
    ["18-shuffle-builder.jpg", "Shuffle Builder — anti-repeat playlist rules"],
    ["19-audio-inspector-lossless.jpg", "Audio Inspector — Single File lossless analysis"],
    ["20-audio-inspector-lossy.jpg", "Audio Inspector — Single File lossy analysis"],
    ["21-file-search-result.jpg", "File Search — physical file results"],
    ["22-Audio-Authenticity-Analyzer.jpg", "Audio Inspector — Audio Authenticity Analyzer results"],
    ["23-Audio-Authenticity-Analyzer-Playlist.jpg", "Audio Inspector — Audio Authenticity Analyzer playlist/library mode"],
    ["24-live-spectrum-options.jpg", "Live Spectrum Player — appearance, queue and playback controls"],
    ["25-live-spectrum.jpg", "Live Spectrum Player — spectrum and full-track waveform"]
  ].map(([file, title]) => ({ file, title }));

  const revision = "20260901a";
  const gallery = document.getElementById("gallery");
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modalCaption");
  const modalClose = document.getElementById("modalClose");
  const modalPrevious = document.getElementById("modalPrevious");
  const modalNext = document.getElementById("modalNext");
  let currentIndex = 0;
  let lastFocusedElement = null;

  if (gallery) {
    const fragment = document.createDocumentFragment();

    screenshots.forEach((item, index) => {
      const figure = document.createElement("figure");
      figure.className = "shot";

      const button = document.createElement("button");
      button.type = "button";
      button.className = "shot-button";
      button.setAttribute("aria-label", `Enlarge screenshot: ${item.title}`);

      const image = document.createElement("img");
      image.src = `screenshots/thumbs/${item.file}?v=${revision}`;
      image.alt = item.title;
      image.loading = index < 4 ? "eager" : "lazy";
      image.decoding = "async";
      image.addEventListener("error", () => {
        image.src = `screenshots/${item.file}?v=${revision}`;
      }, { once: true });

      const zoomHint = document.createElement("span");
      zoomHint.className = "zoom-hint";
      zoomHint.setAttribute("aria-hidden", "true");
      zoomHint.textContent = "Enlarge";

      button.append(image, zoomHint);
      button.addEventListener("click", () => openModal(index, button));

      const caption = document.createElement("figcaption");
      const title = document.createElement("strong");
      title.textContent = item.title;
      const note = document.createElement("span");
      note.textContent = "Click to view full size";
      caption.append(title, note);

      figure.append(button, caption);
      fragment.appendChild(figure);
    });

    gallery.replaceChildren(fragment);
  }

  function showImage(index) {
    if (!modalImage || !modalCaption) return;
    currentIndex = Math.max(0, Math.min(index, screenshots.length - 1));
    const item = screenshots[currentIndex];
    modalImage.src = `screenshots/${item.file}?v=${revision}`;
    modalImage.alt = item.title;
    modalCaption.textContent = `${currentIndex + 1} / ${screenshots.length} — ${item.title}`;
    if (modalPrevious) modalPrevious.disabled = currentIndex === 0;
    if (modalNext) modalNext.disabled = currentIndex === screenshots.length - 1;
  }

  function openModal(index, trigger) {
    if (!modal || !modalImage) return;
    lastFocusedElement = trigger || document.activeElement;
    showImage(index);
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    modalClose?.focus();
  }

  function closeModal() {
    if (!modal || !modalImage) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    modalImage.removeAttribute("src");
    if (lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
  }

  modalClose?.addEventListener("click", closeModal);
  modalPrevious?.addEventListener("click", () => showImage(currentIndex - 1));
  modalNext?.addEventListener("click", () => showImage(currentIndex + 1));
  modal?.addEventListener("click", event => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener("keydown", event => {
    if (!modal?.classList.contains("open")) return;
    if (event.key === "Escape") closeModal();
    if (event.key === "ArrowLeft") showImage(currentIndex - 1);
    if (event.key === "ArrowRight") showImage(currentIndex + 1);
  });
})();
