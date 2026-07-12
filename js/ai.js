(function () {
  function bindAI() {
    const list = document.querySelector("#ai-message-list");
    const form = document.querySelector("#ai-prompt-form");
    const tools = document.querySelector("#ai-tools-section");
    const history = document.querySelector("#ai-history-section");
    if (list) list.innerHTML = `<div class="message-bubble">Hi Alex. I can help with captions, scripts, replies, and content strategy.</div>`;
    form?.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = document.querySelector("#ai-prompt-input");
      if (!input.value.trim()) return;
      list.insertAdjacentHTML("beforeend", `<div class="message-bubble outgoing">${window.TryixaUtils.escapeHTML(input.value)}</div><div class="message-bubble">AI backend placeholder: connect /api/ai/generate to produce the final response.</div>`);
      input.value = "";
    });
    if (tools) tools.innerHTML = ["Caption", "Hashtags", "Reply", "Script"].map((tool, index) => `<button id="ai-tool-${index}-btn" class="btn btn-secondary" type="button">${tool}</button>`).join("");
    if (history) history.innerHTML = `<h2>AI History</h2><p>Saved prompts and generations will load here.</p>`;
  }
  window.TryixaAI = { bindAI };
})();
