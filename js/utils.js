window.TryixaUtils = {
  qs(selector, root = document) {
    return root.querySelector(selector);
  },
  qsa(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
  },
  escapeHTML(value = "") {
    return String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#039;"
    })[char]);
  },
  setLoading(button, isLoading, label = "Loading...") {
    if (!button) return;
    if (isLoading) {
      button.dataset.originalText = button.textContent;
      button.textContent = label;
      button.disabled = true;
    } else {
      button.textContent = button.dataset.originalText || button.textContent;
      button.disabled = false;
    }
  },
  toast(message, type = "info") {
    const toast = document.createElement("div");
    toast.className = `status-pill toast toast-${type}`;
    toast.textContent = message;
    toast.style.position = "fixed";
    toast.style.right = "18px";
    toast.style.bottom = "88px";
    toast.style.zIndex = "60";
    document.body.appendChild(toast);
    window.setTimeout(() => toast.remove(), 2400);
  },
  currentPage() {
    return document.body.dataset.page || "home";
  }
};

