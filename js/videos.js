(function () {
  async function renderVideos() {
    const grid = document.querySelector("#video-grid-section");
    const playlists = document.querySelector("#video-playlists-section");
    const history = document.querySelector("#video-history-section");
    if (!grid) return;
    const response = await window.TryixaAPI.get("/videos");
    grid.innerHTML = response.data.map((video) => `<article class="card media-card"><figure class="media-scene"></figure><div class="panel"><h2>${video.title}</h2><p>${video.meta}</p><button id="${video.id}-watch-btn" class="btn btn-primary" type="button">Watch</button></div></article>`).join("");
    if (playlists) playlists.innerHTML = `<h2>Playlists</h2><p>Saved series and creator channels will sync from backend.</p>`;
    if (history) history.innerHTML = `<h2>Watch History</h2><p>Recent video progress appears here after authentication.</p>`;
  }
  window.TryixaVideos = { renderVideos };
})();
