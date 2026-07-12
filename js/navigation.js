(function () {
  const navItems = [
    ["index.html", "Home", "home"],
    ["explore.html", "Explore", "explore"],
    ["reels.html", "Reels", "reels"],
    ["videos.html", "Videos", "videos"],
    ["chat.html", "Chat", "chat", "New"],
    ["notifications.html", "Notifications", "notifications", "8"],
    ["upload.html", "Upload Studio", "upload"],
    ["ai.html", "AI Studio", "ai"],
    ["profile.html", "Profile", "profile"],
    ["settings.html", "Settings", "settings"],
    ["admin.html", "Admin", "admin"]
  ];

  function renderSidebar() {
    const sidebar = document.querySelector(".app-sidebar");
    if (!sidebar) return;
    const page = document.body.dataset.page;
    sidebar.innerHTML = `
      <a class="brand" href="index.html"><span class="brand-mark">T</span><span>Tryixa</span></a>
      <nav class="side-nav" aria-label="Primary navigation">
        ${navItems.map(([href, label, key, badge]) => `
          <a class="nav-link ${page === key ? "active" : ""}" href="${href}">
            <span>${label}</span>${badge ? `<small class="nav-badge">${badge}</small>` : ""}
          </a>`).join("")}
      </nav>
      <section class="panel premium-panel">
        <strong>Tryixa Premium</strong>
        <p>Unlock advanced creator tools, analytics, and ad-free discovery.</p>
        <a id="sidebar-upgrade-link" class="btn btn-primary btn-full" href="settings.html">Upgrade Now</a>
      </section>`;
  }

  function renderTopbar() {
    const topbar = document.querySelector(".app-topbar");
    if (!topbar) return;
    topbar.innerHTML = `
      <button id="topbar-menu-btn" class="icon-btn menu-toggle" type="button" aria-label="Open menu">=</button>
      <form id="global-search-form" class="search-shell" action="search.html">
        <label class="sr-only" for="global-search-input">Search Tryixa</label>
        <input id="global-search-input" name="q" type="search" placeholder="Search for people, posts, reels, videos...">
        <kbd>Ctrl</kbd><kbd>/</kbd>
      </form>
      <div class="topbar-actions">
        <a id="topbar-create-link" class="btn btn-primary" href="upload.html">Create</a>
        <a id="topbar-ai-link" class="btn btn-secondary" href="ai.html">AI</a>
        <button id="topbar-theme-btn" class="icon-btn" type="button" aria-label="Toggle theme">DM</button>
        <a id="topbar-profile-link" class="avatar avatar-sm" href="profile.html">A</a>
      </div>`;
  }

  function renderMobileNav() {
    const mobile = document.querySelector(".mobile-nav");
    if (!mobile) return;
    const page = document.body.dataset.page;
    mobile.innerHTML = navItems.slice(0, 5).map(([href, label, key]) => `<a class="${page === key ? "active" : ""}" href="${href}">${label}</a>`).join("");
  }

  window.TryixaNavigation = { renderSidebar, renderTopbar, renderMobileNav };
})();
