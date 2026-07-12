(function () {
  async function renderReelRails() {
    const comments = document.querySelector("#reels-comments-section");
    const suggested = document.querySelector("#reels-suggested-section");
    if (comments) {
      comments.innerHTML = `<div class="rail-heading"><h2>Comments (1,234)</h2><button id="reels-sort-comments-btn" class="icon-btn" type="button">Sort</button></div>
        ${["This place is heaven", "Dream location", "Need to visit here"].map((text, index) => `<article class="comment-row"><span class="avatar avatar-sm">${index + 1}</span><div><strong>User ${index + 1}</strong><p>${text}</p></div></article>`).join("")}
        <form id="reels-comment-form" class="chat-composer"><div class="field"><label class="sr-only" for="reels-comment-input">Comment</label><input id="reels-comment-input" name="comment" type="text" placeholder="Add a comment"></div><button id="reels-post-comment-btn" class="btn btn-primary" type="submit">Post</button></form>`;
    }
    if (suggested) {
      const response = await window.TryixaAPI.get("/reels/suggested");
      suggested.innerHTML = `<div class="rail-heading"><h2>Suggested Reels</h2><a href="explore.html">View all</a></div>` + response.data.map((reel) => `<article class="entity-row"><div class="entity-main"><span class="avatar avatar-sm">Play</span><div><strong>${reel.title}</strong><p>${reel.handle} - ${reel.views}</p></div></div><button id="${reel.id}-open-btn" class="icon-btn" type="button">...</button></article>`).join("");
    }
  }
  window.TryixaReels = { renderReelRails };
})();
