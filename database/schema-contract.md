# Tryixa Database Contract

Use relational tables or document collections with these stable domains.

- `users`: auth identity, username, email, display name, avatar, bio, role, verified status.
- `posts`: text/photo carousel posts, visibility, author, counters, moderation state.
- `stories`: short-lived media, author, expiry, view count.
- `reels`: short videos, audio, caption, author, counters.
- `videos`: long-form videos, title, description, duration, processing status.
- `comments`: parent entity, author, body, counters.
- `likes`: user/entity reactions with unique constraints.
- `followers`: follower/following relationships.
- `chats`: direct and group conversation metadata.
- `messages`: chat messages, delivery state, attachments.
- `notifications`: actor, receiver, type, read state.
- `saved`: saved posts, reels, videos.
- `reports`: user reports and moderation queue.
- `ai_history`: prompt, response metadata, user, provider, safety result.
