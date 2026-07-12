(function () {
  async function renderSharedRails() {
    const suggestions = document.querySelector("#suggestions-section, #explore-suggestions-section");
    const trends = document.querySelector("#trending-section, #explore-hashtags-section, #search-trends-section");
    if (suggestions) {
      const response = await window.TryixaAPI.get("/users/suggestions");
      suggestions.innerHTML = `<div class="rail-heading"><h2>Suggested for you</h2><a href="explore.html">See all</a></div>` + response.data.map((user) => `<article class="entity-row"><div class="entity-main"><span class="avatar avatar-sm">${user.avatar}</span><div><strong>${user.name}</strong><p>${user.handle}</p></div></div><button id="${user.id}-suggest-follow-btn" class="btn btn-primary" type="button">Follow</button></article>`).join("");
    }
    if (trends) {
      const response = await window.TryixaAPI.get("/trends");
      trends.innerHTML = `<div class="rail-heading"><h2>Trending Now</h2><a href="explore.html">See all</a></div>` + response.data.map((trend) => `<a class="trend-link" href="search.html?q=${encodeURIComponent(trend.title)}"><strong>${trend.title}</strong><span>${trend.meta}</span></a>`).join("");
    }
  }

  function renderAdmin() {
    const metrics = document.querySelector("#admin-metrics-section");
    if (!metrics) return;
    metrics.innerHTML = window.TryixaMockData.admin.map((metric) => `<article class="admin-card"><span class="muted">${metric.title}</span><div class="metric-value">${metric.value}</div><button id="${metric.id}-btn" class="btn btn-secondary" type="button">Inspect</button></article>`).join("");
    document.querySelector("#admin-reports-list").innerHTML = `<article class="entity-row"><div><strong>Reported reel</strong><p>Spam review pending</p></div><button id="admin-report-review-btn" class="btn btn-primary" type="button">Review</button></article>`;
    document.querySelector("#admin-users-list").innerHTML = `<article class="entity-row"><div><strong>@unsafe_account</strong><p>3 active flags</p></div><button id="admin-user-action-btn" class="btn btn-danger" type="button">Restrict</button></article>`;
    document.querySelector("#admin-audit-list").innerHTML = `<article class="entity-row"><div><strong>System</strong><p>Admin dashboard loaded</p></div><span class="status-pill">OK</span></article>`;
  }

  async function boot() {
    window.TryixaTheme?.applyTheme();
    window.TryixaNavigation?.renderSidebar();
    window.TryixaNavigation?.renderTopbar();
    window.TryixaNavigation?.renderMobileNav();
    window.TryixaTheme?.bindThemeToggle();

    window.addEventListener("keydown", (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "/") {
        event.preventDefault();
        document.querySelector("#global-search-input, #search-query-input")?.focus();
      }
    });

    const page = window.TryixaUtils.currentPage();
    if (page === "home") {
      await window.TryixaStories?.renderStories();
      await window.TryixaFeed?.renderHomeFeed();
    }
    if (page === "explore") window.TryixaSearch?.renderExplore();
    if (page === "search") window.TryixaSearch?.bindSearchPage();
    if (page === "reels") await window.TryixaReels?.renderReelRails();
    if (page === "videos") await window.TryixaVideos?.renderVideos();
    if (page === "chat") await window.TryixaChat?.renderChat();
    if (page === "profile") window.TryixaProfile?.renderProfile();
    if (page === "upload") window.TryixaUpload?.bindUpload();
    if (page === "notifications") await window.TryixaNotifications?.renderNotifications();
    if (page === "ai") window.TryixaAI?.bindAI();
    if (page === "admin") renderAdmin();
    await renderSharedRails();
  }

  document.addEventListener("DOMContentLoaded", boot);
})();
