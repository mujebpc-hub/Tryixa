(function () {
  async function renderNotifications() {
    const list = document.querySelector("#notifications-list-section");
    const settings = document.querySelector("#notification-settings-card");
    if (!list) return;
    const response = await window.TryixaAPI.get("/notifications");
    list.innerHTML = response.data.map((item) => `<article class="panel entity-row"><div class="entity-main"><span class="avatar avatar-sm">!</span><div><strong>${item.title}</strong><p>${item.meta}</p></div></div><button id="${item.id}-read-btn" class="btn btn-secondary" type="button">Read</button></article>`).join("");
    if (settings) settings.innerHTML = `<h2>Notification Settings</h2><p>Push, email, chat, creator, and safety notifications.</p>`;
  }
  window.TryixaNotifications = { renderNotifications };
})();
