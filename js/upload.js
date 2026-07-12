(function () {
  function bindUpload() {
    const input = document.querySelector("#upload-file-input");
    const pick = document.querySelector("#upload-pick-btn");
    const form = document.querySelector("#upload-form");
    const checklist = document.querySelector("#upload-checklist-section");
    const drafts = document.querySelector("#upload-drafts-section");
    pick?.addEventListener("click", () => input?.click());
    input?.addEventListener("change", () => window.TryixaUtils.toast(`${input.files.length} file(s) selected`, "success"));
    form?.addEventListener("submit", async (event) => {
      event.preventDefault();
      window.TryixaUtils.toast("Upload reserved. Connect /api/uploads for production.", "info");
    });
    if (checklist) checklist.innerHTML = `<h2>Publish Checklist</h2><p>Media, caption, visibility, safety scan, and monetization settings.</p>`;
    if (drafts) drafts.innerHTML = `<h2>Drafts</h2><p>Draft API will load unpublished creator content here.</p>`;
  }
  window.TryixaUpload = { bindUpload };
})();
