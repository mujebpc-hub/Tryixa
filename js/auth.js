(function () {
  function bindAuthForms() {
    const login = document.querySelector("#login-form");
    const signup = document.querySelector("#signup-form");
    login?.addEventListener("submit", async (event) => {
      event.preventDefault();
      const button = document.querySelector("#login-submit-btn");
      window.TryixaUtils.setLoading(button, true, "Logging in...");
      const form = Object.fromEntries(new FormData(login));
      try {
        if (!form.identifier || !form.password) throw new Error("Email/username and password are required.");
        window.TryixaStorage.set(window.TryixaConfig.authTokenKey, "frontend-dev-token");
        window.TryixaStorage.set(window.TryixaConfig.userKey, { name: "Alex Creator", username: "alex" });
        window.location.href = "index.html";
      } catch (error) {
        window.TryixaUtils.toast(error.message, "error");
      } finally {
        window.TryixaUtils.setLoading(button, false);
      }
    });
    signup?.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = Object.fromEntries(new FormData(signup));
      if (!form.terms) return window.TryixaUtils.toast("Please accept terms.", "error");
      window.TryixaStorage.set(window.TryixaConfig.userKey, { name: form.name, username: form.username });
      window.location.href = "index.html";
    });
  }
  document.addEventListener("DOMContentLoaded", bindAuthForms);
})();
