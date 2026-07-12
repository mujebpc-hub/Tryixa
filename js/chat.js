(function () {
  async function renderChat() {
    const list = document.querySelector("#chat-threads-list");
    const messages = document.querySelector("#chat-message-list");
    const form = document.querySelector("#chat-message-form");
    if (!list || !messages) return;
    const response = await window.TryixaAPI.get("/chats");
    list.innerHTML = response.data.map((chat) => `<article class="entity-row"><div class="entity-main"><span class="avatar avatar-sm">${chat.name[0]}</span><div><strong>${chat.name}</strong><p>${chat.last}</p></div></div><button id="${chat.id}-open-btn" class="icon-btn" type="button">Open</button></article>`).join("");
    messages.innerHTML = `<div class="message-bubble">That mountain reel is ready.</div><div class="message-bubble outgoing">Perfect. Send the final cut.</div>`;
    form?.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = document.querySelector("#chat-message-input");
      if (!input.value.trim()) return;
      messages.insertAdjacentHTML("beforeend", `<div class="message-bubble outgoing">${window.TryixaUtils.escapeHTML(input.value)}</div>`);
      input.value = "";
    });
  }
  window.TryixaChat = { renderChat };
})();

