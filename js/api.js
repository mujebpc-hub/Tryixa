window.TryixaAPI = {
  async request(path, options = {}) {
    const config = window.TryixaConfig;
    const token = window.TryixaStorage?.get(config.authTokenKey);
    const headers = {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {})
    };

    if (!window.TryixaAPI.liveBackend) {
      return window.TryixaAPI.mock(path, options);
    }

    const response = await fetch(`${config.apiBaseUrl}${path}`, { ...options, headers });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(payload.message || "Request failed");
    return payload;
  },
  get(path) {
    return this.request(path);
  },
  post(path, body) {
    return this.request(path, { method: "POST", body: JSON.stringify(body) });
  },
  mock(path) {
    const data = window.TryixaMockData;
    if (path.includes("stories")) return Promise.resolve({ data: data.stories });
    if (path.includes("suggestions")) return Promise.resolve({ data: data.users });
    if (path.includes("trends") || path.includes("hashtags")) return Promise.resolve({ data: data.trends });
    if (path.includes("reels")) return Promise.resolve({ data: data.reels });
    if (path.includes("videos")) return Promise.resolve({ data: data.videos });
    if (path.includes("notifications")) return Promise.resolve({ data: data.notifications });
    if (path.includes("chats")) return Promise.resolve({ data: data.chats });
    if (path.includes("admin")) return Promise.resolve({ data: data.admin });
    if (path.includes("search")) return Promise.resolve({ data: [...data.users, ...data.trends] });
    return Promise.resolve({ data: data.posts });
  }
};

window.TryixaMockData = {
  users: [
    { id: "user-sarah", name: "Sarah Johnson", handle: "@sarahj", avatar: "S" },
    { id: "user-robert", name: "Robert Fox", handle: "@robertfox", avatar: "R" },
    { id: "user-ananya", name: "Ananya Sharma", handle: "@ananya.sharma", avatar: "A" },
    { id: "user-michael", name: "Michael Brown", handle: "@michael.brown", avatar: "M" }
  ],
  stories: [
    { id: "story-own", name: "Your Story", avatar: "A" },
    { id: "story-emma", name: "Emma Watson", avatar: "E" },
    { id: "story-mrbeast", name: "MrBeast", avatar: "M" },
    { id: "story-zayn", name: "Zayn Malik", avatar: "Z" },
    { id: "story-kylie", name: "Kylie Jenner", avatar: "K" },
    { id: "story-dua", name: "Dua Lipa", avatar: "D" },
    { id: "story-bts", name: "BTS", avatar: "B" }
  ],
  posts: [
    { id: "post-1", author: "James Wilson", handle: "@jameswilson", avatar: "J", body: "The best view comes after the hardest climb. #TravelPhotography #MountainLife", likes: "12.5K", comments: "256", shares: "1.2K" }
  ],
  trends: [
    { id: "trend-tryixa", title: "#TryixaLaunch", meta: "12.5K posts" },
    { id: "trend-good", title: "#GoodVibesOnly", meta: "8.7K posts" },
    { id: "trend-travel", title: "#TravelPhotography", meta: "6.2K posts" },
    { id: "trend-ai", title: "#AIRevolution", meta: "5.1K posts" }
  ],
  reels: [
    { id: "reel-1", title: "Sunset Drive", handle: "@roadrunner", views: "2.1M" },
    { id: "reel-2", title: "City Lights", handle: "@night.captures", views: "1.8M" },
    { id: "reel-3", title: "Ocean Waves", handle: "@soothing.views", views: "3.2M" }
  ],
  videos: [
    { id: "video-1", title: "Creator Growth Blueprint", meta: "24 min - 450K views" },
    { id: "video-2", title: "Travel Film Masterclass", meta: "42 min - 1.2M views" },
    { id: "video-3", title: "AI Content Workflow", meta: "18 min - 320K views" },
    { id: "video-4", title: "Behind The Reels", meta: "31 min - 780K views" }
  ],
  notifications: [
    { id: "notif-1", title: "Emma liked your post", meta: "2 min ago" },
    { id: "notif-2", title: "MrBeast followed you", meta: "18 min ago" },
    { id: "notif-3", title: "Your reel reached 10K views", meta: "1h ago" }
  ],
  chats: [
    { id: "chat-1", name: "WanderLens", last: "That mountain reel is ready." },
    { id: "chat-2", name: "Emma Watson", last: "Love this story concept." },
    { id: "chat-3", name: "Creator Team", last: "Upload schedule updated." }
  ],
  admin: [
    { id: "metric-users", title: "Users", value: "1.28M" },
    { id: "metric-reports", title: "Open Reports", value: "342" },
    { id: "metric-posts", title: "Posts Today", value: "84K" },
    { id: "metric-health", title: "API Health", value: "99.98%" }
  ]
};
