(() => {
  "use strict";
  const screenshots = [{"file":"1-settings.jpg","title":"Setup and permissions"},{"file":"2-library-dashboard.jpg","title":"Library Dashboard"},{"file":"3-library-dashboard-result.jpg","title":"Dashboard results"},{"file":"4-library-map-result.jpg","title":"Library Map"},{"file":"5-playlist-duplicate-result.jpg","title":"Playlist Duplicates"},{"file":"6-playlist-duplicate-edit.jpg","title":"Playlist duplicate cleanup"},{"file":"7-library-duplicates.jpg","title":"Library Duplicates"},{"file":"8-health-check.jpg","title":"Health Check"},{"file":"9-artwork-check.jpg","title":"Artwork Check"},{"file":"10-repair-convert-format.jpg","title":"Repair / Convert queue"},{"file":"11-repair-convert-format.jpg","title":"Built-in conversion engines"},{"file":"12-repair-convert-format.jpg","title":"Conversion progress"},{"file":"13-playlist-compare.jpg","title":"Playlist Compare"},{"file":"14-file-maintenance.jpg","title":"File Maintenance"},{"file":"15-repair-convert-vinyl-decklinker.jpg","title":"Vinyl De-click"},{"file":"16-quality-duplicates.jpg","title":"Quality Duplicates"},{"file":"17-shuffle-builder.jpg","title":"Shuffle Builder"},{"file":"18-audio-inspector-lossless.jpg","title":"Audio Inspector - lossless source"},{"file":"19-audio-inspector-lossy.jpg","title":"Audio Inspector - lossy source"},{"file":"20-file-search-result.jpg","title":"File Search results"},{"file":"21-live-spectrum.jpg","title":"Live Spectrum player and waveform"},{"file":"22-live-spectrum-options.jpg","title":"Live Spectrum appearance and gain controls"}];
  const gallery = document.getElementById("gallery");
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const modalClose = document.getElementById("modalClose");
  if (gallery) {
    const fragment = document.createDocumentFragment();
    screenshots.forEach((item, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "shot";
      button.setAttribute("aria-label", `Open screenshot: ${item.title}`);
      const image = document.createElement("img");
      image.src = `screenshots/thumbs/${item.file}`;
      image.dataset.full = `screenshots/${item.file}`;
      image.alt = item.title;
      image.loading = index < 4 ? "eager" : "lazy";
      image.decoding = "async";
      const caption = document.createElement("span");
      caption.textContent = item.title;
      button.append(image, caption);
      button.addEventListener("click", () => openModal(image.dataset.full, item.title));
      fragment.appendChild(button);
    });
    gallery.replaceChildren(fragment);
  }
  function openModal(src, alt) {
    if (!modal || !modalImage) return;
    modalImage.src = src;
    modalImage.alt = alt;
    modal.classList.add("open");
    document.body.classList.add("modal-open");
    modalClose?.focus();
  }
  function closeModal() {
    if (!modal || !modalImage) return;
    modal.classList.remove("open");
    document.body.classList.remove("modal-open");
    modalImage.removeAttribute("src");
  }
  modalClose?.addEventListener("click", closeModal);
  modal?.addEventListener("click", event => { if (event.target === modal) closeModal(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape") closeModal(); });
})();
