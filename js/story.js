(function () {
  async function renderStories() {
    const container = document.querySelector("#stories-section");
    if (!container) return;
    const response = await window.TryixaAPI.get("/stories");
    container.innerHTML = response.data.map((story) => `
      <article class="story-card" data-story-id="${story.id}">
        <button id="${story.id}-open-btn" class="avatar story-ring" type="button">${story.avatar}</button>
        <strong>${story.name}</strong>
      </article>`).join("");
  }

  window.TryixaStories = { renderStories };
})();
