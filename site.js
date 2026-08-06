(() => {
  "use strict";

  const screenshots = [
    ["1-settings.jpg", "Setup and permissions"],
    ["2-library-dashboard.jpg", "Library Dashboard"],
    ["3-library-dashboard-result.jpg", "Dashboard results"],
    ["4-library-map-result.jpg", "Library Map"],
    ["5-playlist-duplicate-result.jpg", "Playlist Duplicates"],
    ["6-playlist-duplicate-edit.jpg", "Playlist duplicate cleanup"],
    ["7-library-duplicates.jpg", "Library Duplicates"],
    ["8-health-check.jpg", "Health Check"],
    ["9-artwork-check.jpg", "Artwork Check"],
    ["10-repair-convert-format.jpg", "Repair / Convert queue"],
    ["11-repair-convert-format.jpg", "Built-in conversion engines"],
    ["12-repair-convert-format.jpg", "Conversion progress"],
    ["13-playlist-compare.jpg", "Playlist Compare"],
    ["14-track-usage.jpg", "Track Usage"],
    ["15-file-maintenance.jpg", "File Maintenance"],
    ["16-repair-convert-vinyl-decklinker.jpg", "Vinyl De-click"],
    ["17-quality-duplicates.jpg", "Quality Duplicates"],
    ["18-shuffle-builder.jpg", "Shuffle Builder"],
    ["19-audio-inspector-lossless.jpg", "Audio Inspector — lossless source"],
    ["20-audio-inspector-lossy.jpg", "Audio Inspector — lossy source"],
    ["21-file-search-result.jpg", "File Search results"],
    ["22-Audio-Authenticity-Analyzer.jpg", "Audio Authenticity Analyzer — scan results"],
    ["23-Audio-Authenticity-Analyzer-Playlist.jpg", "Audio Authenticity Analyzer — library or selected playlist"],
    ["24-live-spectrum-options.jpg", "Live Spectrum appearance and gain controls"],
    ["25-live-spectrum.jpg", "Live Spectrum player and waveform"]
  ].map(([file, title]) => ({ file, title }));

  const revision = "20260806-build30";
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
    currentIndex = (index + screenshots.length) % screenshots.length;
    const item = screenshots[currentIndex];
    modalImage.src = `screenshots/${item.file}?v=${revision}`;
    modalImage.alt = item.title;
    modalCaption.textContent = `${currentIndex + 1} / ${screenshots.length} — ${item.title}`;
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
