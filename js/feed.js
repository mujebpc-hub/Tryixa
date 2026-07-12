(function () {
  const { escapeHTML } = window.TryixaUtils || {};

  function postTemplate(post) {
    return `
      <article class="post-card" data-post-id="${post.id}">
        <header class="post-header">
          <span class="avatar">${escapeHTML(post.avatar)}</span>
          <div><h2>${escapeHTML(post.author)} <span class="status-pill">Verified</span></h2><p>${escapeHTML(post.handle)} - 2h - Public</p></div>
          <button id="${post.id}-more-btn" class="icon-btn" type="button" aria-label="Post options">...</button>
        </header>
        <p class="post-copy">${escapeHTML(post.body)}</p>
        <figure class="media-scene"><span class="media-label">1/4</span></figure>
        <div class="post-dots"><span class="active"></span><span></span><span></span><span></span></div>
        <footer class="post-actions">
          <button id="${post.id}-like-btn" type="button">Like ${post.likes}</button>
          <button id="${post.id}-comment-btn" type="button">Comment ${post.comments}</button>
          <button id="${post.id}-share-btn" type="button">Share ${post.shares}</button>
          <button id="${post.id}-save-btn" type="button">Save</button>
        </footer>
      </article>`;
  }

  async function renderHomeFeed() {
    const container = document.querySelector("#feed-posts-section");
    if (!container) return;
    const response = await window.TryixaAPI.get("/posts");
    container.innerHTML = response.data.map(postTemplate).join("");
  }

  window.TryixaFeed = { renderHomeFeed };
})();
