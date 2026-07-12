# Tryixa Backend Contract

This backend folder is reserved for Phase 4. Frontend files already include endpoint placeholders and stable IDs/classes so backend integration can happen without changing HTML architecture.

## Authentication

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `POST /api/auth/refresh`
- `GET /api/auth/me`

Auth model: JWT access token, refresh token, user roles, verified status, admin claims.

## Core APIs

- `GET /api/feed/home`
- `GET /api/stories`
- `POST /api/stories`
- `GET /api/posts`
- `POST /api/posts`
- `POST /api/posts/:id/like`
- `POST /api/posts/:id/comments`
- `GET /api/reels`
- `GET /api/videos`
- `GET /api/search`
- `GET /api/users/:username`
- `PATCH /api/users/me`

## Chat And Realtime

- `GET /api/chats`
- `GET /api/chats/:id/messages`
- `POST /api/chats/:id/messages`
- Realtime events: `message:new`, `typing:start`, `typing:stop`, `notification:new`, `presence:update`.

## Uploads

- `POST /api/uploads/profile`
- `POST /api/uploads/posts`
- `POST /api/uploads/stories`
- `POST /api/uploads/reels`
- `POST /api/uploads/videos`

Expected upload response:

```json
{
  "id": "media_id",
  "url": "https://cdn.tryixa.com/media/file",
  "type": "image|video|audio",
  "status": "uploaded|processing|ready"
}
```

## AI Engine

- `POST /api/ai/generate`
- `GET /api/ai/history`
- `POST /api/ai/moderate`

AI use cases: caption generation, hashtags, reply assistant, reel scripts, safety moderation.

## Admin

- `GET /api/admin/metrics`
- `GET /api/admin/reports`
- `PATCH /api/admin/reports/:id`
- `GET /api/admin/users`
- `PATCH /api/admin/users/:id`
- `GET /api/admin/audit`

Admin routes require `role=admin`.
