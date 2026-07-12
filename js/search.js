(function () {
  function renderExplore() {
    const trending = document.querySelector("#explore-trending-grid");
    const categories = document.querySelector("#explore-category-grid");
    const creators = document.querySelector("#explore-creator-grid");
    if (trending) trending.innerHTML = window.TryixaMockData.trends.map((item) => `<article class="card media-card panel"><h2>${item.title}</h2><p>${item.meta}</p><button id="${item.id}-explore-btn" class="btn btn-primary" type="button">Open</button></article>`).join("");
    if (categories) categories.innerHTML = ["Photography", "Travel", "Music", "Fitness", "Food", "Gaming", "AI", "More"].map((name, index) => `<button id="category-${index}-btn" class="btn btn-secondary" type="button">${name}</button>`).join("");
    if (creators) creators.innerHTML = window.TryixaMockData.users.map((user) => `<article class="card panel"><span class="avatar">${user.avatar}</span><h2>${user.name}</h2><p>${user.handle}</p><button id="${user.id}-follow-btn" class="btn btn-primary" type="button">Follow</button></article>`).join("");
  }

  function bindSearchPage() {
    const form = document.querySelector("#search-page-form");
    const results = document.querySelector("#search-results-section");
    if (!form || !results) return;
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const query = new FormData(form).get("q") || "";
      const response = await window.TryixaAPI.get(`/search?q=${encodeURIComponent(query)}`);
      results.innerHTML = response.data.map((item, index) => `<article class="panel entity-row"><div class="entity-main"><span class="avatar avatar-sm">${item.avatar || "#"}</span><div><strong>${item.name || item.title}</strong><p>${item.handle || item.meta || "Search result"}</p></div></div><button id="search-result-${index}-btn" class="btn btn-secondary" type="button">Open</button></article>`).join("");
    });
  }

  window.TryixaSearch = { renderExplore, bindSearchPage };
})();
